---
title: When Code Is Cheap, Design the Promises
tags: [software-design, contracts, ai]
summary: AI has made code cheap to write but no cheaper to trust. Here we examine how that affects two aspects of software engineering — specification and keeping track of program evolution.
---

Generating code is no longer the expensive part of building software. Describe a routine to a model and you get an apparently correct implementation in seconds. Ask for a change and it's done just as fast. What hasn't become cheaper is knowing whether the code does what it should, and whether it still does after the tenth change made by something that need not remember the first two.

The [essay on why Nex is designed for correctness](../designed-for-correctness.html) attempts to show why design by contract is important in the age of LLM-generated code. This post follows that argument in two directions. The first is what happens to specification and documentation when the implementation becomes the cheap part. The second is why tracking how software *evolves* becomes more important, and a practical way to do it.

## The specification becomes the source

Here is a typical specification that gets written in tickets, design docs and prompts every day:

> Wrap the text so that no line is longer than the given width.

A person reading this fills in the gaps from experience and imagination. A model fills them in too, with whatever is most plausible. And believe me, there are plenty of gaps. What happens to a word longer than the width: is it split, left sticking out past the edge, or rejected? Are runs of spaces kept? How full should each line be? An implementation that puts every word on a line of its own obeys the sentence exactly, but as you can imagine, no one will accept it.

Now the same specification as a contract. It is written as a deferred (or abstract) class, which states what `wrap` must do and says nothing about how:

```nex
deferred class Wrapper
feature
  wrap(text: String, width: Integer): Array[String]
    note "Break `text` into lines of at most `width` characters."
  require
    positive_width: width > 0
    words_fit: words(text).all(fn (w) => w.length <= width)
  deferred
  ensure
    lines_fit: result.all(fn (line) => line.length <= width)
    same_words: " ".join(result) = " ".join(words(text))
    filled: is_filled(result, width)
  end

  words(text: String): Array[String]
    note "The words of `text`, without the spaces around them."
  do
    result := text.split(" ").filter(fn (w) => w.length > 0)
  end

  is_filled(lines: Array[String], width: Integer): Boolean
    note "No line has room for the first word of the line after it."
  do
    result := true
    from let i := 0 until result = false or i >= lines.length - 1 do
      let next_word := words(lines.get(i + 1)).get(0)
      if lines.get(i).length + 1 + next_word.length <= width then
        result := false
      end
      i := i + 1
    end
  end
end
```

Each clause answers one of the questions the prose left open:

- `words_fit` makes a word longer than the line the caller's problem. The wrapper never has to split or hyphenate anything.
- `same_words` says the lines hold exactly the words of the text, in order, with single spaces between them. Nothing is lost, added or reordered, and runs of spaces aren't kept.
- `lines_fit` is the width rule from the prose.
- `filled` rules out the one-word-per-line answer: no line may have room left for the first word of the line after it.

`words` and `is_filled` have bodies, but they aren't the implementation. They are the vocabulary the contract is written in, and they are small enough to check by reading them.

Together, the clauses pin down the output. For a given width and any text with at least one word, exactly one list of lines satisfies them all. (For an empty text, both `[]` and `[""]` pass, a gap small enough to leave open.) What the clauses don't pin down is how to compute the answer.

### What's left for the model

The algorithm is what's left. A model writes it in a class that inherits the specification:

```nex
class Greedy_Wrapper
inherit Wrapper
feature
  wrap(text: String, width: Integer): Array[String] do
    result := []
    let line := ""
    across words(text) as w do
      if line.length = 0 then
        line := w
      elseif line.length + 1 + w.length <= width then
        line := line + " " + w
      else
        result.add(line)
        line := w
      end
    end
    if line.length > 0 then
      result.add(line)
    end
  end
end
```

The class doesn't repeat a single clause. Nex attaches the inherited contract to the redefined `wrap`, so every call is checked against `Wrapper`:

```nex
let w: Wrapper := create Greedy_Wrapper
print(w.wrap("the quick brown fox jumps over the lazy dog", 10))
-- ["the quick", "brown fox", "jumps over", "the lazy", "dog"]
print(w.wrap("  lots   of   space  ", 10))
-- ["lots of", "space"]
```

The algorithm is short, but it is easy to get slightly wrong. Here is the same loop with the space between two words left out of the length check:

```nex
      elseif line.length + w.length <= width then   -- forgot the space
```

Nothing about this version looks wrong, and it wraps the sentence above correctly. But when two words plus their space come to one more than the width, it puts them on one line anyway. `"hello world"` is 11 characters, so `w.wrap("hello world", 10)` fails:

```text
Error: Postcondition violation: lines_fit
```

The one-word-per-line implementation is even shorter:

```nex
  wrap(text: String, width: Integer): Array[String] do
    result := words(text)
  end
```

It fails with `Postcondition violation: filled`. Without the `filled` clause, though, it would pass. Every line fits, and every word is there in order. The prose never said lines should be full, so the contract has to say it, or the model is free not to. A contract decides which gaps matter, and anything it leaves open is the implementer's choice. Leaving something open should be a decision too.

`filled` is itself a decision. It asks for greedy filling, one line at a time. A wrapper that balances line lengths, the way typesetting systems do, leaves room on some lines on purpose, and it would break `filled`. If that is what you want, the promise has to change, not just the code.

This changes the role of the specification. When code was expensive, the specification was a step on the way to the code, and once the code existed it became the reference. When code is cheap, the relationship turns around. `Greedy_Wrapper` can be regenerated, rewritten by a different model, or replaced in an afternoon with a faster version. `Wrapper` is what stays. It is the target a generator aims at and the test that tells you whether it hit it.

For that to work, the specification has to be precise enough to check. Prose specifications were always ambiguous. The ambiguity used to be resolved by the person writing the code, who could ask what was meant. A model resolves it by guessing, and it often won't say that it guessed.

## Two kinds of documentation

If the contract states *what* the code does, what is left for documentation?

Much of what we have written in the past as documentation were simple restatements of what was already there in the code: a comment above `wrap` saying it wraps text, or a Javadoc block listing the parameters. That kind of writing was useful when reading code was slow. A model can now produce it on demand, and in a Nex program most of it is already in the contract. `nex doc` extracts the contract view of a class, with signatures, notes and assertions and no implementation. Here is the entry for `wrap`:

```text
### wrap(`text: String`, `width: Integer`): `Array[String]` *(deferred)*
🌐 Public
Break `text` into lines of at most `width` characters.

**Parameters:**
- `text`: `String`
- `width`: `Integer`

**Returns:** `Array[String]`

**Pre-conditions:**
- **positive_width**: `width > 0`
- **words_fit**: `words(text).all(fn (w) => w.length <= width)`

**Post-conditions:**
- **lines_fit**: `result.all(fn (line) => line.length <= width)`
- **same_words**: `" ".join(result) = " ".join(words(text))`
- **filled**: `is_filled(result, width)`
```

That view is generated from the code, so it can't drift away from it. If it's wrong, the code is wrong.

What the contract can't hold is *why*. Why is a word longer than the line the caller's problem, instead of something the wrapper hyphenates? Why fill lines greedily instead of balancing them? Which alternatives were tried and dropped, and what ruled them out? A model can't regenerate those answers, because they aren't in the code. They live in someone's head, in a meeting that wasn't written up, or in the requirements of whatever displays the text.

So documentation splits in two:

1. **What the code promises.** It belongs in the code as contracts, where it is executed and checked. Writing it in prose elsewhere is a liability, because the prose will go out of date and nothing will notice.
2. **Why it promises that.** It belongs in prose, because it can't be checked. That also means it decays unless someone keeps it up on purpose.

The first kind gets easier with AI, since a model is good at drafting contracts for a human to review. The second kind gets more valuable. When anyone can produce an implementation, the reasoning behind the design is the part that is hard to replace.

## Why tracking evolution matters more

A codebase is a history of changes, and keeping track of that history has always been hard. AI makes it harder in three ways.

**Volume.** A team that used to merge ten changes a day can now merge a hundred. Review capacity didn't grow at the same rate. Reading every line of every diff with care was never fully realistic, and now it isn't close.

**Short or no memory.** A developer who changed a routine last month remembers why. An agent starting a new session doesn't. It sees the code as it is now, not the decisions that shaped it, so it can undo a deliberate choice that looks like an accident from the outside.

**Agents fix the check instead of the code.** When a change makes a test or an assertion fail, the quickest way to make the failure go away is to change the check. People do this too, but an agent told to "make the build pass" may do it without hesitation, and without saying so.

Here is what that looks like. Take a small account class whose contract has been in use for a while:

```nex
class Account
  note "A bank account that never goes overdrawn."
feature
  balance: Integer

  deposit(amount: Integer)
    note "Add `amount` to the balance."
  require
    positive: amount > 0
  do
    balance := balance + amount
  ensure
    increased: balance = old balance + amount
  end

  withdraw(amount: Integer)
    note "Take `amount` out of the account."
  require
    positive: amount > 0
    enough: amount <= balance
  do
    balance := balance - amount
  ensure
    decreased: balance = old balance - amount
  end

invariant
  never_overdrawn: balance >= 0
end
```

Someone asks for a flat fee of 1 on every withdrawal. The agent changes the body:

```nex
  withdraw(amount: Integer)
  require
    positive: amount > 0
    enough: amount <= balance
  do
    balance := balance - amount - 1   -- new: a flat fee
  ensure
    decreased: balance = old balance - amount
  end
```

The contract catches the change immediately:

```text
Error: Postcondition violation: decreased
```

That's what contracts are for: to catch routines that no longer keep their promises. The right response requires a decision. Either the promise changes, so callers learn that a withdrawal costs `amount + 1`, or the fee goes somewhere else. The quick response is to loosen the postcondition until it passes:

```nex
  ensure
    decreased: balance < old balance
```

The program runs again. Every check passes. And a promise callers depended on, that a withdrawal takes out exactly what was asked for, is gone. Any caller that computed the expected balance is now wrong, and nothing reports it.

In a diff of a few hundred lines, that one-line change is easy to miss. It is also the most important line in the change.

## Each version is a subclass of the last one

Nex already has rules for changing a contract safely. They apply to inheritance. A redefinition in a subclass may **weaken** a precondition, because it must accept every call the parent accepted. It may **strengthen** a postcondition, because it must keep every promise the parent made. It is bound by every inherited invariant. Nex enforces this by combining contracts down the hierarchy: preconditions with `or`, postconditions and invariants with `and`. (The post on [classes and their contracts](design-by-contract.html) works through this in detail.)

The reason for those rules is substitutability. A client written against the parent must still work when it receives a child object.

A new version of a module has the same problem in time instead of space. Every client written against version 1 should still work against version 2. So the same rules apply:

- Version 2 may accept **more** than version 1 (a weaker or removed `require` clause).
- Version 2 may promise **more** than version 1 (a new or stronger `ensure` or `invariant` clause).
- Anything else, such as accepting less, promising less, or removing a public feature, is a breaking change and should be announced as one.

This is what semantic versioning is trying to capture, stated in terms that can be checked. "Is this change backwards compatible?" becomes "Is version 2 a valid subcontract of version 1?"

The word-wrap specification is already set up this way. `Wrapper` is the parent, and every implementation, generated or not, is a subclass bound by its contract. Between releases there is no such parent. Version 1 isn't a class that version 2 inherits from, it's just an older commit. Nex checks the rule automatically across inheritance. Nothing checks it between releases, so the job falls to the review process. The good news is that contracts make that job small, because the parts that need checking are exactly the contracts.

## A practical workflow

The idea is to make the change to the contracts its own reviewable artifact, separate from the change to the code.

**1. Keep the contract view in the repository.** Generate it with `nex doc` and commit the output next to the code, for example under `docs/contracts/`. In CI, regenerate it and fail if it differs from what was committed:

```sh
$ nex doc src docs/contracts
$ git diff --exit-code docs/contracts
```

Any change that touches a contract now has to change a file in `docs/contracts/`, and that file shows up in the pull request on its own.

**2. Read the contract diff first.** Here is the agent's "fix" from the previous section, as it appears in the contract view:

```diff
 **Post-conditions:**
-- **decreased**: `balance = old balance - amount`
+- **decreased**: `balance < old balance`
```

A postcondition got weaker, so this is a breaking change. It doesn't matter how many lines of implementation came with it. Compare a change that adds a withdrawal counter:

```diff
 - **balance**: `Integer` 🌐 Public
+- **withdrawals**: `Integer` 🌐 Public
 ...
 **Post-conditions:**
 - **decreased**: `balance = old balance - amount`
+- **counted**: `withdrawals = old withdrawals + 1`
```

A new feature and a new promise, with nothing taken away: compatible. And a daily limit:

```diff
 **Pre-conditions:**
 - **positive**: `amount > 0`
 - **enough**: `amount <= balance`
+- **within_daily_limit**: `amount <= 500`
```

The precondition got stronger. A call that worked in version 1, `withdraw(600)` on a balance of 1000, now fails with `Precondition violation: within_daily_limit`. That's breaking, even though the code change is a single line.

Reading the diff takes judgement. When a clause is edited instead of added or removed, someone has to decide whether the new one is weaker or stronger. But the diff shows where to look, and it is usually a few lines, however large the change to the code.

**3. Diffs that change only the body are refactorings.** If the contract view didn't change, the change claims to keep every promise, and the contracts check that claim each time the code runs. Those changes still deserve review, but a different kind: tests, performance and readability, not "did the meaning change?"

**4. Require a human to approve contract changes.** On GitHub, a `CODEOWNERS` entry for `docs/contracts/` makes approval from a named person mandatory for any change to that directory. An agent can propose a new promise. A person decides whether to make it.

**5. Write down the why, close to the change.** When a contract changes on purpose, record the reason in a short decision record: one file per decision, such as `docs/decisions/0007-withdrawal-fee.md`, saying what changed, why, and what was considered instead. When an agent made the change, include the request it was given. A year later, the contract diff tells you *what* changed, and the decision record tells you *why*. With both, a new team member or a new agent session can reconstruct how the module got to its current state.

None of this needs new tools. It needs contracts in the code, a generated view of them, and a rule that changes to that view are reviewed as changes in meaning.

## Limits

Runtime contracts aren't proofs. A contract catches a violation when the code path that breaks it runs. A path that no test or user exercises can still break a promise without anyone noticing. The contract view only tracks promises that were written down, so behaviour nobody specified can change without leaving a trace in `docs/contracts/`. That is one more reason to write the contract in the first place.

The *why* still depends on people. Nothing checks a decision record, and an unmaintained one is as misleading as a stale comment.

## The history of the promises

For most of the history of software, writing the code was the hard part, and the specification was something we wrote to help us write it. That is no longer true. Code can be produced, thrown away and produced again. What a program promises, and how those promises changed and why, is the part that has to be kept.

In a language where promises are written in the code and checked, that history is something you can read and review.
