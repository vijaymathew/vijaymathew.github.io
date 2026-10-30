---
title: When Code Is Cheap, Promises Are the Product
tags: [software-design, contracts, ai]
summary: AI has made code cheap to write but no cheaper to trust. That changes what a specification is for, and it makes tracking how a program's promises change over time a core part of the job.
draft: true
---

Generating code is no longer the expensive part of building software. Describe a routine to a model and you get a plausible implementation in seconds. Ask for a change and you get that too. What hasn't become cheaper is knowing whether the code does what it should, and whether it still does after the tenth change made by something that doesn't remember the first nine.

The [essay on why Nex is designed for correctness](../designed-for-correctness.html) argues that contracts are the verification layer generated code most lacks. This post follows that argument in two directions. The first is what happens to specification and documentation when the implementation becomes the cheap part. The second is why tracking how software *evolves* becomes more important, and a practical way to do it.

## The specification becomes the source

Here is a specification of the kind that gets written in tickets, design docs and prompts every day:

> An account holds a balance. Withdrawing takes money out of it. You can't withdraw more than the balance.

A person reading this fills in the gaps from experience. A model fills them in too, with whatever is most plausible. And there are a lot of gaps. Is a withdrawal of zero allowed? A negative one? What happens when the amount is too large: an exception, a `false` result, or a partial withdrawal? Each of these implementations satisfies the sentence:

```nex
withdraw(amount: Integer) do
  balance := balance - amount.min(balance)   -- take what's there
end
```

It never overdraws, so "you can't withdraw more than the balance" holds. It also lets a caller ask for 100, receive 30 and carry on as if it got 100. Nothing about the prose rules it out.

Now the same specification as a contract:

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

Every question above now has an answer. Zero and negative amounts are the caller's bug (`positive`). Asking for too much is the caller's bug as well (`enough`), not something the account quietly absorbs. A successful withdrawal takes out exactly `amount`, no more and no less (`decreased`). The clamping version fails the first time a caller asks for more than is there, with an error that names the clause.

This changes the role of the specification. When code was expensive, the specification was a step on the way to the code, and once the code existed it became the reference. When code is cheap, the relationship turns around. The implementation can be regenerated, rewritten by a different model, or replaced in an afternoon. The specification is what stays. It is the target a generator aims at and the test that tells you whether it hit it.

For that to work, the specification has to be precise enough to check. Prose specifications were always ambiguous. The ambiguity used to be resolved by the person writing the code, who could ask what was meant. A model resolves it by guessing, and it never says that it guessed.

## Two kinds of documentation

If the contract states *what* the code does, what is left for documentation?

Much of what we have written as documentation is restatement: a comment above `withdraw` saying it withdraws, a Javadoc block listing the parameters, a wiki page describing the API. That kind of writing was useful when reading code was slow. A model can now produce it on demand, and in a Nex program most of it is already in the contract. `nex doc` extracts the contract view of a class, with signatures, notes and assertions and no implementation:

```text
### withdraw(`amount: Integer`)
Take `amount` out of the account.

**Pre-conditions:**
- **positive**: `amount > 0`
- **enough**: `amount <= balance`

**Post-conditions:**
- **decreased**: `balance = old balance - amount`
```

That view is generated from the code, so it can't drift away from it. If it's wrong, the code is wrong.

What the contract can't hold is *why*. Why are overdrafts forbidden instead of capped at a limit? Why is a withdrawal of zero a bug and not a harmless no-op? Which alternatives were tried and dropped, and what constraint ruled them out? A model can't regenerate those answers, because they aren't in the code. They live in someone's head, in a meeting that wasn't written up, or in a regulation the code has to satisfy.

So documentation splits in two:

1. **What the code promises.** It belongs in the code as contracts, where it is executed and checked. Writing it in prose elsewhere is a liability, because the prose will go out of date and nothing will notice.
2. **Why it promises that.** It belongs in prose, because it can't be checked. That also means it decays unless someone keeps it up on purpose.

The first kind gets easier with AI, since a model is good at drafting contracts for a human to review. The second kind gets more valuable. When anyone can produce an implementation, the reasoning behind the design is the part that is hard to replace.

## Why tracking evolution matters more

A codebase has always been a history of changes, and keeping track of that history has always been hard. AI makes it harder in three ways.

**Volume.** A team that used to merge ten changes a day can now merge a hundred. Review capacity didn't grow at the same rate. Reading every line of every diff with care was never fully realistic, and now it isn't close.

**No memory.** A developer who changed `withdraw` last month remembers why. An agent starting a new session doesn't. It sees the code as it is now, not the decisions that shaped it, so it can undo a deliberate choice that looks like an accident from the outside.

**Agents fix the check instead of the code.** When a change makes a test or an assertion fail, the quickest way to make the failure go away is to change the check. People do this too, but an agent told to "make the build pass" does it readily and without saying so.

Here is what that looks like. Someone asks for a flat fee of 1 on every withdrawal. The agent changes the body:

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

That's the contract doing its job: the routine no longer keeps the promise it made. The right response is a decision. Either the promise changes, so callers learn that a withdrawal costs `amount + 1`, or the fee goes somewhere else. The quick response is to loosen the postcondition until it passes:

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

Nex checks the rule automatically across inheritance. Nothing checks it between releases, so the job falls to the review process. The good news is that contracts make that job small, because the parts that need checking are exactly the contracts.

## A practical workflow

The idea is to make the change to the promises its own reviewable artifact, separate from the change to the code.

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
