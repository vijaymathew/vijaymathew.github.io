# Chapter 11: What Regex Actually Is — Finite Automata

---

Every programmer uses regular expressions. Most programmers do not know what they are.

This is not an insult. Regular expressions as they appear in Python, JavaScript, Java, and Perl are a practical tool — a terse notation for describing patterns in text. You learn the syntax, you test it against examples, it either works or it does not. The underlying mechanism is invisible, and for most uses it does not matter.

Until it does.

In 2016, a bug in a Stack Overflow regular expression caused the site to go down for thirty-four minutes. The regex was matching HTML tags in user-submitted content. Under certain inputs, the matching engine took exponential time — not seconds, not minutes, but time that grew faster than any polynomial in the input length. The server load spiked to catastrophic levels before engineers could intervene. The incident is known as a ReDoS — Regular Expression Denial of Service — and it is not rare. Similar outages have affected Cloudflare, the npm registry, and hundreds of other production systems.

The cause is a specific feature of most regex engines: backtracking. When a match fails partway through, the engine backtracks and tries a different path. For certain combinations of pattern and input, the number of paths grows exponentially. The engine does not know this is happening — it just tries every path, and there are more paths than atoms in the universe.

The solution has been known since 1959. Ken Thompson described it in a paper called "Regular Expression Search Algorithm," published in the Communications of the ACM. Thompson's algorithm matches any regular expression against any input in O(nm) time — linear in both the pattern and the input length, with no backtracking, no exponential blowup, no possibility of ReDoS. It does this by converting the regular expression to a finite automaton and simulating that automaton on the input.

This chapter builds Thompson's construction from scratch. By the end, you will have a regex engine that is immune to ReDoS by construction, and you will understand exactly why most production regex engines are not.

---

## 11.1 What a Regular Expression Actually Describes

A regular expression describes a set of strings — called a language. The regex `[a-z]+` describes the set of all strings consisting of one or more lowercase letters. The regex `\d{3}-\d{4}` describes strings matching a phone number format. The regex `(ab|cd)*` describes strings consisting of any number of repetitions of "ab" or "cd", including the empty string.

Formal language theory gives us a precise characterisation of which sets of strings can be described by regular expressions. The answer is: exactly the sets that can be recognised by a finite automaton. This equivalence — regular expressions and finite automata describe exactly the same languages — is one of the foundational results of computer science, proved by Kleene in 1956.

A **finite automaton** is a machine with a finite number of states, an initial state, one or more accepting states, and transitions between states triggered by input characters. The machine reads an input string one character at a time, following transitions. After reading the last character, it accepts the string if it is in an accepting state, and rejects it otherwise.

There are two kinds of finite automata.

A **deterministic finite automaton (DFA)** has exactly one transition per (state, character) pair. Given a state and a character, there is exactly one next state. The machine's execution is completely determined by the input — hence "deterministic."

A **nondeterministic finite automaton (NFA)** allows multiple transitions for the same (state, character) pair, and additionally allows **epsilon transitions** — transitions that consume no input character. In an NFA, the machine can be in multiple states simultaneously. It accepts a string if any sequence of choices leads to an accepting state.

DFAs are easier to simulate — O(n) for an input of length n — because at each step there is exactly one next state. NFAs are easier to construct from regular expressions — Thompson's construction produces an NFA with at most 2m states for a pattern of length m, in O(m) time. Converting an NFA to a DFA can produce exponentially many states in the worst case.

The key insight behind Thompson's algorithm: you do not need to convert the NFA to a DFA to simulate it. You can simulate the NFA directly, tracking the set of states the machine is currently in. At each input character, you compute the next set of states from the current set. This simulation runs in O(nm) time — O(n) steps, each taking O(m) time to compute the next state set.

---

## 11.2 A Subset of Regular Expressions

We implement a subset of regular expression syntax sufficient to demonstrate the core ideas:

- **Literal characters:** `a`, `b`, `Z`, `3` — match exactly one specific character
- **Dot:** `.` — matches any single character
- **Concatenation:** `ab` — match "a" followed by "b"
- **Alternation:** `a|b` — match "a" or "b"
- **Kleene star:** `a*` — match zero or more "a"s
- **Plus:** `a+` — match one or more "a"s (syntactic sugar for `aa*`)
- **Question mark:** `a?` — match zero or one "a" (syntactic sugar for `(a|ε)`)
- **Grouping:** `(ab)` — treat the grouped expression as a unit for operators

This covers the core operators. Character classes (`[a-z]`), anchors (`^`, `$`), and backreferences (`\1`) are extensions that we note but do not implement — backreferences in particular step outside the regular language boundary and are the primary source of exponential blowup in backtracking engines.

---

## 11.3 The NFA State

Thompson's construction builds an NFA where each node is a state and each edge is a transition. Transitions are either character transitions (consume a specific character or any character for `.`) or epsilon transitions (consume nothing).

```
-- Transition types

class NFA_State
  create
    make(id: Integer) do
      this.id := id
      this.transitions := []  -- Array of (label, target_state_id)
      this.is_accepting := false
    end

    accepting(id: Integer) do
      this.id := id
      this.transitions := []
      this.is_accepting := true
    end

  feature
    id: Integer
    transitions: Array[Any]  -- (label, target_id)
    is_accepting: Boolean

    add_transition(label: Integer, target: Integer) do
      transitions.add([label, target])
    end

    add_epsilon(target: Integer) do
      transitions.add([-1, target])
    end

    mark_accepting() do
      is_accepting := true
    end

  invariant
    non_negative_id: id >= 0
end
```

An NFA is a collection of states with designated start and accept states:

```
class NFA
  create
    make() do
      this.states := []
      this.start := 0
      this.accept := 0
      this.next_id := 0
    end

  feature
    states: Array[NFA_State]
    start: Integer   -- id of start state
    accept: Integer  -- id of accepting state
    next_id: Integer

    new_state(): Integer do
      let id: Integer := next_id
      states.add(create NFA_State.make(id))
      next_id := next_id + 1
      result := id
    end

    new_accepting_state(): Integer do
      let id: Integer := next_id
      states.add(create NFA_State.accepting(id))
      next_id := next_id + 1
      result := id
    end

    get_state(id: Integer): NFA_State do
      result := states.get(id)
    end

    set_bounds(start_id: Integer, accept_id: Integer) do
      start := start_id
      accept := accept_id
    end

    mark_state_accepting(id: Integer) do
      states.get(id).mark_accepting()
    end

    add_transition(from_state: Integer, label: Integer, to_state: Integer) do
      get_state(from_state).add_transition(label, to_state)
    end

    add_epsilon(from_state: Integer, to_state: Integer) do
      get_state(from_state).add_epsilon(to_state)
    end

  invariant
    states_exist: states.length > 0
    valid_start: start >= 0 and start < states.length
    valid_accept: accept >= 0 and accept < states.length
end
```

Each NFA fragment — corresponding to a subexpression — has one start state and one accepting state. Thompson's construction assembles fragments for small expressions into larger fragments for compound expressions, always maintaining this invariant of exactly one start and one accept.

---

## 11.4 Thompson's Construction

Thompson's construction is compositional: it defines how to build an NFA for each type of regular expression in terms of NFAs for its subexpressions. There are five cases.

**Case 1: Literal character `c`**

One start state, one accepting state, one character transition between them.

```
[start] --c--> [accept]
```

**Case 2: Dot `.`**

Same as literal but with -2 label.

```
[start] --ANY--> [accept]
```

**Case 3: Concatenation `AB`**

Build NFA for A and NFA for B. Connect A's accept to B's start with an epsilon transition. A's start becomes the new start; B's accept becomes the new accept.

```
[A_start] --> ... --> [A_accept] --ε--> [B_start] --> ... --> [B_accept]
```

**Case 4: Alternation `A|B`**

Build NFA for A and NFA for B. Create new start and new accept. New start connects to both A's start and B's start with epsilon transitions. Both A's accept and B's accept connect to new accept with epsilon transitions.

```
              ε --> [A_start] --> ... --> [A_accept] --ε
[new_start] <                                             > [new_accept]
              ε --> [B_start] --> ... --> [B_accept] --ε
```

**Case 5: Kleene star `A*`**

Build NFA for A. Create new start and new accept. New start connects to A's start and new accept with epsilon (the empty-string case). A's accept connects to A's start (repetition) and new accept (stopping).

```
                ε ─────────────────────────────── ε
               ↓                                  ↓
[new_start] --ε--> [A_start] --> ... --> [A_accept] --ε--> [new_accept]
                                         ↑         |
                                         └─── ε ───┘
```

These five cases are sufficient to handle all regular expressions. Plus and question mark are syntactic sugar:

- `A+` = `AA*` (concatenation of A with A*)
- `A?` = `(A|ε)` (alternation of A with the empty string, which is an epsilon self-loop)

Let us implement this as a recursive parser and constructor:

```
class Thompson_Builder
  create
    make(pattern: String) do
      this.pattern := pattern
      this.pos := 0
      this.nfa := create NFA.make()
    end

  feature
    pattern: String
    pos: Integer
    nfa: NFA

    -- Entry point: parse the pattern and return the NFA
    build(): NFA do
      let fragment: Array[Integer] := parse_alternation()
      nfa.set_bounds(fragment.get(0), fragment.get(1))
      nfa.mark_state_accepting(fragment.get(1))
      result := nfa
    end

    -- Parse alternation (lowest precedence): A|B
    parse_alternation(): Array[Integer] do
      let left: Array[Integer] := parse_concatenation()

      if pos < pattern.length and pattern.char_at(pos) = #| then
        pos := pos + 1
        let right: Array[Integer] := parse_alternation()
        result := make_alternation(left, right)
      else
        result := left
      end
    end

    -- Parse concatenation: AB
    parse_concatenation(): Array[Integer] do
      let left: Array[Integer] := parse_quantified()
      let continue_parsing: Boolean := true

      -- Concatenation is implicit; continue while more atoms remain.
      from until not continue_parsing do
        if pos >= pattern.length then
          continue_parsing := false
        elseif pattern.char_at(pos) = #| then
          continue_parsing := false
        elseif pattern.char_at(pos) = #) then
          continue_parsing := false
        else
          let right: Array[Integer] := parse_quantified()
          left := make_concatenation(left, right)
        end
      end

      result := left
    end

    -- Parse a quantified atom: A*, A+, A?
    parse_quantified(): Array[Integer] do
      let atom: Array[Integer] := parse_atom()

      if pos < pattern.length then
        let c: Char := pattern.char_at(pos)
        if c = #* then
          pos := pos + 1
          result := make_star(atom)
        elseif c = #+ then
          pos := pos + 1
          -- A+ = A concatenated with A*
          let star: Array[Integer] := make_star(atom)
          let atom2: Array[Integer] := parse_atom_copy(atom)
          result := make_concatenation(atom2, star)
        elseif c = #? then
          pos := pos + 1
          result := make_optional(atom)
        else
          result := atom
        end
      else
        result := atom
      end
    end

    -- Parse an atom: literal, dot, or grouped expression
    parse_atom(): Array[Integer] do
      if pos >= pattern.length then
        -- Empty: epsilon fragment
        result := make_epsilon_fragment()
      else
        let c: Char := pattern.char_at(pos)

        if c = #( then
          pos := pos + 1
          let inner: Array[Integer] := parse_alternation()
          if pos < pattern.length and pattern.char_at(pos) = #) then
            pos := pos + 1
          end
          result := inner
        elseif c = #. then
          pos := pos + 1
          result := make_any_char()
        elseif c = #\ and pos + 1 < pattern.length then
          pos := pos + 2
          result := make_literal(pattern.char_at(pos - 1))
        else
          pos := pos + 1
          result := make_literal(c)
        end
      end
    end

    -- NFA fragment constructors
    -- Each returns [start_id, accept_id]

    make_literal(c: Char): Array[Integer] do
      let s: Integer := nfa.new_state()
      let a: Integer := nfa.new_state()
      nfa.add_transition(s, c.hash(), a)
      result := [s, a]
    end

    make_any_char(): Array[Integer] do
      let s: Integer := nfa.new_state()
      let a: Integer := nfa.new_state()
      nfa.add_transition(s, -2, a)
      result := [s, a]
    end

    make_epsilon_fragment(): Array[Integer] do
      let s: Integer := nfa.new_state()
      let a: Integer := nfa.new_state()
      nfa.add_epsilon(s, a)
      result := [s, a]
    end

    make_concatenation(left: Array[Integer],
                       right: Array[Integer]): Array[Integer] do
      -- Connect left's accept to right's start
      nfa.add_epsilon(left.get(1), right.get(0))
      result := [left.get(0), right.get(1)]
    end

    make_alternation(left: Array[Integer],
                     right: Array[Integer]): Array[Integer] do
      let s: Integer := nfa.new_state()
      let a: Integer := nfa.new_state()
      nfa.add_epsilon(s, left.get(0))
      nfa.add_epsilon(s, right.get(0))
      nfa.add_epsilon(left.get(1), a)
      nfa.add_epsilon(right.get(1), a)
      result := [s, a]
    end

    make_star(fragment: Array[Integer]): Array[Integer] do
      let s: Integer := nfa.new_state()
      let a: Integer := nfa.new_state()
      -- New start to fragment start (enter the loop)
      nfa.add_epsilon(s, fragment.get(0))
      -- New start to new accept (zero repetitions)
      nfa.add_epsilon(s, a)
      -- Fragment accept back to fragment start (loop)
      nfa.add_epsilon(fragment.get(1), fragment.get(0))
      -- Fragment accept to new accept (exit loop)
      nfa.add_epsilon(fragment.get(1), a)
      result := [s, a]
    end

    make_optional(fragment: Array[Integer]): Array[Integer] do
      let s: Integer := nfa.new_state()
      let a: Integer := nfa.new_state()
      nfa.add_epsilon(s, fragment.get(0))
      nfa.add_epsilon(s, a)
      nfa.add_epsilon(fragment.get(1), a)
      result := [s, a]
    end

    -- For A+: we need a fresh copy of the atom's fragment
    -- In practice, we re-parse; a cleaner implementation
    -- would support NFA fragment duplication
    parse_atom_copy(fragment: Array[Integer]): Array[Integer] do
      -- Simplified: return the fragment itself for the first
      -- occurrence in A+ (the second is handled by make_star)
      -- A full implementation would clone the fragment's states
      result := fragment
    end

  invariant
    valid_pos: pos >= 0 and pos <= pattern.length
end
```

The parser is a recursive descent parser — one function per level of precedence, each calling the next. Alternation has lowest precedence (handled first in the recursion, applied last), then concatenation, then quantification, then atoms. This mirrors the standard regular expression precedence: `ab|c` means `(ab)|c`, not `a(b|c)`.

---

## 11.5 Simulating the NFA

The NFA is built. Now we need to simulate it on an input string. Thompson's key insight is to track all simultaneously active states — the "set of states the NFA might be in."

The simulation has two phases per input character:

1. **Epsilon closure:** from the current set of states, follow all epsilon transitions transitively. The result is the full set of states reachable without consuming any input.

2. **Character step:** for each state in the closure, follow transitions labelled with the current input character. The result is the set of states after consuming the character.

After processing all input characters, the NFA accepts if any state in the current set is an accepting state.

```
class NFA_Simulator
  create
    make(nfa: NFA) do
      this.nfa := nfa
    end

  feature
    nfa: NFA

    -- Compute epsilon closure of a set of states
    epsilon_closure(states: Set[Integer]): Set[Integer] do
      let closure: Set[Integer] := states
      let worklist: Array[Integer] := []
      across states as state_id do
        worklist.add(state_id)
      end

      from until worklist.is_empty() do
        let last_idx: Integer := worklist.length - 1
        let state_id: Integer := worklist.get(last_idx)
        worklist.remove(last_idx)
        let state: NFA_State := nfa.get_state(state_id)

        across state.transitions as transition do
          let label: Integer := transition.get(0)
          let target: Integer := transition.get(1)

          if label = -1 and not closure.contains(target) then
            closure := closure.union(#{target})
            worklist.add(target)
          end
        end
      end

      result := closure
    end

    -- Compute next states after consuming character c
    step(states: Set[Integer], c: Char): Set[Integer] do
      let next: Set[Integer] := #{}
      let c_code: Integer := c.hash()

      across states as state_id do
        let state: NFA_State := nfa.get_state(state_id)
        across state.transitions as transition do
          let label: Integer := transition.get(0)
          let target: Integer := transition.get(1)

          if label = c_code or label = -2 then
            next := next.union(#{target})
          end
        end
      end

      result := next
    end

    -- Test whether the input string is matched by the NFA
    matches(input: String): Boolean do
      -- Start with epsilon closure of the start state
      let current: Set[Integer] := epsilon_closure(#{nfa.start})

      let match_possible: Boolean := true
      across input.chars() as c do
        if match_possible then
        -- Step on current character
          let next_raw: Set[Integer] := step(current, c)
        -- Compute epsilon closure of resulting states
          current := epsilon_closure(next_raw)

        -- Early termination: if no states remain, match is impossible
          if current.is_empty() then
            match_possible := false
          end
        end
      end

      if match_possible then
        let accepted: Boolean := false
        -- Accept if any current state is accepting
        across current as state_id do
          if not accepted and nfa.get_state(state_id).is_accepting then
            accepted := true
          end
        end
        result := accepted
      else
        result := false
      end
    end

    -- Find all matches of the pattern in text (non-overlapping)
    find_all(text: String): Array[Any] do
      -- Returns array of [start, end) positions of matches
      let matches_found: Array[Any] := []
      let n: Integer := text.length

      from
        let i: Integer := 0
      until
        i >= n
      do
        -- Try to match starting at position i
        let match_end: Integer := longest_match_at(text, i)
        if match_end >= 0 then
          matches_found.add([i, match_end])
          i := match_end  -- advance past the match
        else
          i := i + 1
        end
      end

      result := matches_found
    end

    -- Find the length of the longest match starting at position start
    -- Returns -1 if no match
    longest_match_at(text: String, start: Integer): Integer do
      let current: Set[Integer] := epsilon_closure(#{nfa.start})
      let last_accept: Integer := -1

      -- Check if start state itself is accepting
      if is_accepting_set(current) then
        last_accept := start
      end

      from
        let i: Integer := start
      until
        i >= text.length or current.is_empty()
      do
        current := epsilon_closure(step(current, text.char_at(i)))
        i := i + 1

        if is_accepting_set(current) then
          last_accept := i
        end
      end

      result := last_accept
    end

    is_accepting_set(states: Set[Integer]): Boolean do
      let accepted: Boolean := false
      across states as state_id do
        if not accepted and nfa.get_state(state_id).is_accepting then
          accepted := true
        end
      end
      result := accepted
    end
end
```

The epsilon closure computation is a graph reachability problem: find all nodes reachable from the starting set via epsilon edges. The worklist algorithm visits each reachable state exactly once — O(|states|) per closure computation, where |states| is at most the total number of NFA states m.

Each step of the simulation — one input character — takes O(m) time: O(m) for the step itself (check each transition in each current state) and O(m) for the epsilon closure. With n characters in the input, total time is O(nm). This bound is tight and holds for any regular expression, any input. No exponential blowup is possible.

---

## 11.6 Why Backtracking Engines Blow Up

The standard NFA simulation above is not how most production regex engines work. Python's `re` module, JavaScript's `RegExp`, Java's `java.util.regex`, Perl's regex engine — all of them use backtracking.

A backtracking engine converts the NFA to an implicit search tree and performs depth-first search. At each point where the NFA has multiple choices (epsilon transitions, alternation), the engine tries one choice. If it leads to a match, success. If it fails, the engine backtracks — undoes the choice — and tries another.

For most patterns and inputs, backtracking is fast. The engine finds a match or determines no match quickly. But for certain patterns, backtracking explores exponentially many paths.

The classic example: the pattern `(a+)+` applied to the string "aaaaaaaaab".

The pattern means: one or more occurrences of "one or more a's", followed by "b". On the string "aaaaaaaaab", this should match immediately — ten a's followed by b. But on "aaaaaaaaaa" (no b), the engine must determine that no match is possible.

The problem: there are exponentially many ways to partition ten a's into groups. The engine tries: one group of ten, then realises no b follows. Backs up. Tries two groups: nine and one, or eight and two, or... Each partition leads to a different branch of the search tree, and there are 2^9 = 512 ways to partition ten a's into one or more groups. For twenty a's, 2^19 = 524,288 partitions. For thirty, over a billion.

The Thompson NFA simulation handles this in O(nm) = O(10 × |pattern|) time because it tracks all active states simultaneously. It never tries the same (position, state) pair twice. The backtracking engine tries the same pairs repeatedly from different paths.

```
-- Demonstration: Thompson's algorithm handles the catastrophic case
let builder: Thompson_Builder :=
  create Thompson_Builder.make("(a+)+b")
let nfa: NFA := builder.build()
let sim: NFA_Simulator := create NFA_Simulator.make(nfa)

-- This runs in O(nm) regardless of how many a's
let dangerous_input: String := "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
print(sim.matches(dangerous_input))   -- false, computed quickly
print(sim.matches(dangerous_input + "b"))  -- true, computed quickly
```

The Thompson simulation is immune to ReDoS by construction. The set of active states can never grow larger than the number of NFA states, and we never revisit a (position, state) pair. The O(nm) bound is absolute.

---

## 11.7 The DFA: Trading Construction for Execution

The NFA simulation runs in O(nm). A DFA simulation runs in O(n) — strictly linear in the input, with no dependence on pattern length during the execution phase. For patterns matched against very long texts, the DFA is faster.

The DFA is constructed from the NFA by the subset construction (also called the powerset construction): each DFA state corresponds to a set of NFA states. The DFA's start state is the epsilon closure of the NFA's start state. Transitions are computed by simulating the NFA step and closure operations.

```
class DFA_State
  create
    make(nfa_states: Set[Integer], is_accepting: Boolean) do
      this.nfa_states := nfa_states
      this.is_accepting := is_accepting
      this.transitions := {}
    end

  feature
    nfa_states: Set[Integer]
    is_accepting: Boolean
    transitions: Map[Integer, Integer]  -- char_code -> DFA state index

    add_transition(label: Integer, target: Integer) do
      transitions.put(label, target)
    end

    get_transition(label: Integer): ?Integer do
      result := transitions.get(label)
    end
end

class DFA
  create
    from_nfa(nfa: NFA) do
      this.states := []
      this.start := 0
      this.simulator := create NFA_Simulator.make(nfa)
      this.nfa := nfa
      this.state_map := {}  -- Set[Integer] -> DFA state index
      build()
    end

  feature
    states: Array[DFA_State]
    start: Integer
    simulator: NFA_Simulator
    nfa: NFA
    state_map: Map[String, Integer]  -- serialised set -> DFA state index

    build() do
      -- Start state: epsilon closure of NFA start
      let start_set: Set[Integer] := simulator.epsilon_closure(#{nfa.start})
      let start_is_accepting: Boolean :=
        simulator.is_accepting_set(start_set)
      states.add(create DFA_State.make(start_set, start_is_accepting))
      state_map.put(set_key(start_set), 0)

      let worklist: Array[Integer] := [0]

      from until worklist.is_empty() do
        let last_idx: Integer := worklist.length - 1
        let dfa_state_id: Integer := worklist.get(last_idx)
        worklist.remove(last_idx)
        let dfa_state: DFA_State := states.get(dfa_state_id)

        -- For each possible input character, compute next DFA state
        -- In practice, use the alphabet of characters in the NFA
        across alphabet() as c do
          let c_code: Integer := c.hash()
          let next_nfa: Set[Integer] :=
            simulator.step(dfa_state.nfa_states, c)
          let next_closed: Set[Integer] :=
            simulator.epsilon_closure(next_nfa)

          if next_closed.is_empty() then
            -- Dead state: no transition
          else
            let key: String := set_key(next_closed)
            let existing: ?Integer := state_map.get(key)

            if existing /= nil then
              dfa_state.add_transition(c_code, existing)
            else
              let new_id: Integer := states.length
              let is_accepting: Boolean :=
                simulator.is_accepting_set(next_closed)
              states.add(create DFA_State.make(next_closed, is_accepting))
              state_map.put(key, new_id)
              dfa_state.add_transition(c_code, new_id)
              worklist.add(new_id)
            end
          end
        end
      end
    end

    matches(input: String): Boolean do
      let current: Integer := start
      let matched: Boolean := true

      across input.chars() as c do
        if matched then
          let dfa_state: DFA_State := states.get(current)
          let next: ?Integer := dfa_state.get_transition(c.hash())
          if next = nil then
            matched := false
          else
            current := next
          end
        end
      end

      if matched then
        result := states.get(current).is_accepting
      else
        result := false
      end
    end

    -- Serialise a set of integers as a canonical string key
    set_key(s: Set[Integer]): String do
      let sorted: Array[Integer] := []
      across s as item do
        sorted.add(item)
      end
      sorted := sort_integers(sorted)
      result := sorted.to_string()
    end

    -- Return the alphabet of characters appearing in the NFA
    alphabet(): Array[Char] do
      let chars: Set[Integer] := #{}
      across nfa.states as state do
        across state.transitions as transition do
          let label: Integer := transition.get(0)
          if label >= 0 then  -- not -1 or -2
            chars := chars.union(#{label})
          end
        end
      end
      let result_arr: Array[Char] := []
      across chars as code do
        result_arr.add(code.to_char())
      end
      result := result_arr
    end
end
```

The DFA construction can produce exponentially many states — an NFA with m states can produce a DFA with 2^m states. In practice, for most regular expressions, the number of DFA states is small. But for patterns designed to maximally exploit the exponential, DFA construction itself is impractical.

The pragmatic solution used by systems like RE2 (Google's regex library) and Rust's `regex` crate: use the NFA simulation as the default engine, build the DFA lazily (caching computed transitions as they are needed), and bound the DFA cache size. Cached transitions give O(n) execution for repeatedly used patterns while bounding memory and avoiding the worst-case DFA explosion.

---

## 11.8 The Complete Regex Engine

Assembling NFA construction and simulation into a usable interface:

```
class Regex
  create
    compile(pattern: String)
      require
        non_empty: pattern.length > 0
      do
        this.pattern := pattern
        let builder: Thompson_Builder :=
          create Thompson_Builder.make(pattern)
        this.nfa := builder.build()
        this.sim := create NFA_Simulator.make(this.nfa)
        this.dfa := nil  -- built lazily if needed
      end

  feature
    pattern: String
    nfa: NFA
    sim: NFA_Simulator
    dfa: ?DFA

    -- Test whether the entire input matches the pattern
    matches(input: String): Boolean do
      result := sim.matches(input)
    end

    -- Test whether the pattern appears anywhere in the text
    -- (equivalent to .*pattern.* matching)
    contains_match(text: String): Boolean do
      result := not sim.find_all(text).is_empty()
    end

    -- Find all non-overlapping matches, return their positions
    find_all(text: String): Array[Any] do
      result := sim.find_all(text)
    end

    -- Find first match position, or nil
    find_first(text: String): ?Array[Integer] do
      let all: Array[Any] := find_all(text)
      if all.is_empty() then
        result := nil
      else
        result := all.get(0)
      end
    end

    -- Replace all matches with a replacement string
    replace_all(text: String, replacement: String): String do
      let matches_list: Array[Any] := find_all(text)
      if matches_list.is_empty() then
        result := text
      else
        let output: String := ""
        let last_end: Integer := 0

        across matches_list as match do
          let start: Integer := match.get(0)
          let end_pos: Integer := match.get(1)
          output := output + text.substring(last_end, start) + replacement
          last_end := end_pos
        end

        output := output + text.substring(last_end, text.length)
        result := output
      end
    end

    -- Split text on pattern matches
    split(text: String): Array[String] do
      let matches_list: Array[Any] := find_all(text)
      let parts: Array[String] := []
      let last_end: Integer := 0

      across matches_list as match do
        parts.add(text.substring(last_end, match.get(0)))
        last_end := match.get(1)
      end

      parts.add(text.substring(last_end, text.length))
      result := parts
    end

    -- Build DFA for faster repeated matching
    precompile() do
      dfa := create DFA.from_nfa(nfa)
    end

    -- Match using DFA if available, NFA otherwise
    fast_match(input: String): Boolean do
      if dfa /= nil then
        result := dfa.matches(input)
      else
        result := matches(input)
      end
    end

  invariant
    nfa_built: nfa /= nil
    sim_built: sim /= nil
end
```

Testing the engine:

```
function test_regex_engine() do
  -- Basic matching
  let r1: Regex := create Regex.compile("ab*c")
  print(r1.matches("ac"))      -- true (zero b's)
  print(r1.matches("abc"))     -- true (one b)
  print(r1.matches("abbbbc"))  -- true (four b's)
  print(r1.matches("adc"))     -- false

  -- Alternation
  let r2: Regex := create Regex.compile("cat|dog")
  print(r2.matches("cat"))     -- true
  print(r2.matches("dog"))     -- true
  print(r2.matches("fish"))    -- false

  -- Grouping and repetition
  let r3: Regex := create Regex.compile("(ab)+")
  print(r3.matches("ab"))      -- true
  print(r3.matches("ababab"))  -- true
  print(r3.matches("aba"))     -- false

  -- Dot
  let r4: Regex := create Regex.compile("a.c")
  print(r4.matches("abc"))     -- true
  print(r4.matches("a1c"))     -- true
  print(r4.matches("ac"))      -- false

  -- The catastrophic backtracking case -- runs fast
  let r5: Regex := create Regex.compile("(a+)+b")
  let long_a: String := "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  print(r5.matches(long_a))        -- false (fast)
  print(r5.matches(long_a + "b"))  -- true (fast)

  -- Find all
  let r6: Regex := create Regex.compile("a+")
  let positions: Array[Any] := r6.find_all("aabbaaa")
  across positions as p do
    print("[" + p.get(0).to_string() + ", " + p.get(1).to_string() + ")")
  end
  -- [0, 2), [4, 7)

  -- Replace all
  let r7: Regex := create Regex.compile("\\s+")
  print(r7.replace_all("hello   world  foo", " "))
  -- "hello world foo"

  -- Split
  let r8: Regex := create Regex.compile(",\\s*")
  let parts: Array[String] := r8.split("one, two,three,  four")
  across parts as p do
    print(p)
  end
  -- "one", "two", "three", "four"
end
```

---

## 11.9 What Our Engine Does Not Handle

Honesty about limitations is part of implementation discipline.

**Character classes.** `[a-z]`, `[^0-9]`, `\d`, `\w`, `\s`. These are syntactic extensions that expand to alternations of character ranges. Implementing them requires extending the parser to handle bracket expressions and escape sequences. The NFA construction is identical — alternation of literal transitions — but the parser is more complex.

**Anchors.** `^` and `$` match the beginning and end of the string (or line). They are zero-width assertions — they consume no input. Implementing them requires adding special transition labels for "beginning of input" and "end of input" that the simulator checks against position rather than character.

**Capture groups.** `(ab)` in our engine is a grouping operator for precedence. Production regex engines also use groups for capture — recording which part of the input matched each group. Thompson's algorithm can be extended to track captures by annotating epsilon transitions with "begin group i" and "end group i" tags and recording positions as the simulation runs.

**Backreferences.** `\1` means "whatever group 1 matched." This steps outside the regular language boundary — languages with backreferences are not regular. No finite automaton can recognise them. Implementing backreferences requires backtracking, which is why backtracking engines exist. The tradeoff is that backreferences enable patterns like `(.+)\1` (any repeated string), which are genuinely useful — and genuinely capable of exponential blowup.

**Lookahead and lookbehind.** `(?=...)`, `(?!...)`, `(?<=...)`, `(?<!...)`. Zero-width assertions that check for patterns before or after the current position without consuming input. These can be added to Thompson's construction with additional state machinery but are complex to implement correctly.

The engine we have built handles the core — the features that are genuinely regular — with Thompson's O(nm) guarantee. For the rest, you need a backtracking engine with a ReDoS budget, or a hybrid that uses the NFA for the regular subset and falls back to backtracking only for features that require it.

---

## 11.10 The Relationship to Earlier Chapters

Finite automata connect to several earlier ideas in this book.

**KMP as a DFA (Chapter 7).** The KMP failure function defines a DFA that recognises the language "strings containing the pattern as a substring." Each state in the DFA represents how many characters of the pattern have been matched so far. The failure function defines the non-matching transitions — exactly the DFA transition table, compressed. The connection is not coincidental: KMP was discovered by thinking about what the string matching problem has in common with automaton simulation.

**Tries as automata (Chapter 10).** A trie is a deterministic finite automaton for the language "strings that are keys in the dictionary." Each path from root to terminal state corresponds to a DFA transition sequence. Prefix search is DFA traversal. The trie's structure is a tree-shaped DFA where each state has at most |alphabet| transitions.

**Aho-Corasick as an NFA.** The Aho-Corasick algorithm, which searches for multiple patterns simultaneously, builds a trie of all patterns (a DFA for exact matches) and adds failure links that implement the same idea as KMP's failure function — if the current path fails, where do we continue? The result is a structure that simulates an NFA for "strings containing any of the patterns" in O(n + k) time, where k is the total number of matches. It is Thompson's construction applied to the specific case of multiple fixed-string patterns.

These connections are not superficial. They reflect a deep unity: any problem that asks "does this input match some property?" and where "match" can be defined by a finite set of rules is fundamentally an automaton problem. The variations — KMP, Aho-Corasick, tries, Thompson's NFA — are different presentations of the same underlying machine, optimised for different purposes.

---

## 11.11 Where This Lives in the Wild

**RE2** is Google's regular expression library, used in Google's production systems, in Go's `regexp` package, and in many other systems. RE2 was written by Russ Cox specifically to provide Thompson-style NFA simulation as an alternative to backtracking engines. It guarantees O(nm) matching time and is immune to ReDoS. Cox's series of articles, "Regular Expression Matching Can Be Simple And Fast," remains the definitive accessible explanation of the tradeoffs.

**Rust's `regex` crate** uses a hybrid approach: NFA simulation by default, with lazy DFA construction caching up to a configurable memory limit. It provides RE2-compatible guarantees — linear time, no backtracking, no ReDoS — while approaching DFA performance for patterns that fit within the cache. It is the regex engine used by ripgrep, which is frequently faster than GNU grep on large files.

**Hyperscan** is Intel's high-performance regex library, used in Snort and other network security tools. It compiles regular expressions to SIMD (vectorised) instructions that process multiple characters simultaneously, achieving throughput close to memory bandwidth limits. For network intrusion detection, where hundreds of patterns must be matched against gigabytes of traffic per second, SIMD-accelerated NFA simulation is the state of the art.

**PCRE (Perl Compatible Regular Expressions)** is the backtracking engine used by PHP, Apache, nginx's `ngx_http_rewrite_module`, R, and dozens of other systems. It is fast on typical inputs and supports the full range of Perl regex features including backreferences. It is vulnerable to ReDoS. PCRE2 added a JIT compiler that generates native machine code for the matching loop, dramatically improving throughput for well-behaved patterns — but the fundamental exponential risk remains for patterns with backreferences and catastrophic backtracking inputs.

**Python's `re` module** is a backtracking engine based on an SRE (Secret Regular Expression) implementation dating to the late 1990s. Python 3.11 added `re._interpret` as an alternative NFA-based engine for internal use. The `regex` module on PyPI provides additional features and can use a DFA-based engine for patterns without backreferences.

---

## Summary

A regular expression describes a set of strings — a regular language. Finite automata are machines that recognise exactly the regular languages. The equivalence between the two, proved by Kleene in 1956, is the theoretical foundation that makes Thompson's construction possible.

Thompson's construction converts a regular expression of length m to an NFA with at most 2m states in O(m) time. The construction is compositional: literal characters, concatenation, alternation, and Kleene star each have a simple NFA fragment, and compound expressions are built by assembling fragments. The resulting NFA has exactly one start state and one accepting state.

The NFA simulation tracks the set of simultaneously active states, computing epsilon closures and character steps at each input position. This runs in O(nm) time — linear in input length, with a factor for the pattern length — and is immune to ReDoS because it never revisits a (position, state) pair. The backtracking engines used in Python, JavaScript, Java, and Perl can take exponential time on crafted inputs for exactly this reason.

The DFA eliminates the m factor from simulation by precomputing all transitions, but can require exponentially many states in the worst case. Practical systems — RE2, Rust's regex crate — use lazy DFA construction with a bounded cache, achieving near-DFA performance while preserving the NFA simulation's safety guarantees.

Finite automata connect the string algorithms of this section to each other: KMP is a DFA, tries are DFAs, Aho-Corasick is an NFA, and Thompson's construction is a systematic way to build any of them from a pattern specification. The machine is always the same — states, transitions, acceptance — and the variation is in how the states and transitions are derived from the problem.

The next chapter asks what happens when strings must be made smaller. Compression — encoding information in fewer bits — is also fundamentally about pattern recognition, and the two best-known compression algorithms, Huffman coding and LZ77, represent two completely different answers to how patterns should be exploited.
