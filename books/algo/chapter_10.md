# Chapter 10: Autocomplete — Tries

---

Every time you type a few letters into a search box and a dropdown list of completions appears within milliseconds, something has to search a dictionary of millions of possibilities and return every word that starts with what you have typed. The response must arrive before you finish your next keystroke — typically within 50 milliseconds. The dictionary might contain every URL you have ever visited, every contact in your address book, every product in a catalogue of ten million items.

A hash table cannot do this. Hash tables support exact lookup — you give them a complete key and they return a value. They have no concept of prefix. To find all keys starting with "micro" in a hash table of a million keys, you must scan every key and check each one. O(n) per query, where n is the dictionary size. For a dictionary of ten million entries, that is ten million string comparisons per keystroke. Unacceptable.

A sorted array does better. Binary search finds the position where "micro" would be in O(log n), and then you scan forward collecting all words that start with "micro." The scan takes O(k) where k is the number of results. Total: O(log n + k). For ten million entries and log₂(10,000,000) ≈ 23 comparisons, this is fast — but each comparison compares full strings, and the constant factor is larger than it appears.

A trie does better still: O(m + k), where m is the length of the prefix and k is the number of results. No dependence on n — the dictionary size — at all. A trie with a billion entries returns all words starting with "micro" in the same time as a trie with a thousand entries. The search time depends only on what you are looking for, not how much is stored.

This chapter builds a trie from scratch, extends it to a compressed radix tree for memory efficiency, and implements an autocomplete engine that handles a million-word dictionary within the latency budget of a single keystroke.

---

## 10.1 The Structure of a Trie

A trie (the name comes from "retrieval," and is pronounced either "try" or "tree" depending on who you ask, with both camps holding firm) is a tree where each node represents a prefix of some key, and the path from the root to any node spells out that prefix one character at a time.

The root represents the empty prefix. Each of its children represents a single-character prefix. Each of their children represents a two-character prefix. A node is marked as terminal if the path from the root to that node spells out a complete key in the dictionary.

Example: insert "cat", "car", "card", "care", "bat", "ball".

```
root
├── c
│   └── a
│       ├── t  [terminal: "cat"]
│       └── r  [terminal: "car"]
│           ├── d  [terminal: "card"]
│           └── e  [terminal: "care"]
└── b
    └── a
        ├── t  [terminal: "bat"]
        └── l
            └── l  [terminal: "ball"]
```

Every prefix query becomes: start at the root, follow the characters of the prefix one at a time, and collect all terminal nodes in the subtree rooted at the endpoint.

"car" → follow c → a → r. We are now at the node for "car," which is terminal (it is a word). Collect all terminals in its subtree: "car", "card", "care".

"ba" → follow b → a. Collect all terminals: "bat", "ball".

"xyz" → try to follow x from the root. No such child. Return empty list immediately.

The trie is a concrete implementation of the abstract principle that prefix search can be done by following characters rather than comparing strings. Each character comparison moves us one level deeper in the tree. After m comparisons (for a prefix of length m), we have located the subtree containing all matches. The time is O(m) to locate the subtree, O(k) to collect k results.

---

## 10.2 Implementing a Trie

Each node needs: a map from characters to child nodes, a boolean indicating whether this node is terminal, and optionally a value (if the trie stores key-value pairs rather than just keys).

```
class Trie_Node [V]
  create
    make() do
      this.children := {}
      this.is_terminal := false
      this.value := nil
      this.count := 0  -- number of words in subtree, for ranked autocomplete
    end

  feature
    children: Map[Char, Trie_Node[V]]
    is_terminal: Boolean
    value: ?V
    count: Integer  -- words in this subtree (including this node if terminal)

    has_child(c: Char): Boolean do
      result := children.get(c) /= nil
    end

    get_child(c: Char): ?Trie_Node[V] do
      result := children.get(c)
    end

    set_child(c: Char, node: Trie_Node[V]) do
      children.put(c, node)
    end

    child_count(): Integer do
      result := children.size()
    end

    is_leaf(): Boolean do
      result := children.is_empty()
    end

  invariant
    non_negative_count: count >= 0
    count_consistent: count >= (when is_terminal 1 else 0 end)
end
```

The `count` field stores how many complete words exist in the subtree rooted at this node. This enables ranked autocomplete — returning the k most frequent completions rather than all completions — without scanning the entire subtree.

The full trie:

```
class Trie [V]
  create
    empty() do
      this.root := create Trie_Node[V].make()
      this.size := 0
    end

  feature
    root: Trie_Node[V]
    size: Integer

    -- Insert a key with an associated value
    put(key: String, value: V)
      require
        non_empty_key: key.length > 0
      do
        let node: Trie_Node[V] := root
        node.count := node.count + 1

        across key.chars() as c do
          if not node.has_child(c) then
            node.set_child(c, create Trie_Node[V].make())
          end
          node := node.get_child(c)
          node.count := node.count + 1
        end

        if not node.is_terminal then
          size := size + 1
        end
        node.is_terminal := true
        node.value := value
      ensure
        contains_key: contains(key)
        size_nondecreasing: size >= old size
      end

    -- Look up an exact key
    get(key: String): ?V do
      let node: ?Trie_Node[V] := find_node(key)
      if node /= nil and node.is_terminal then
        result := node.value
      else
        result := nil
      end
    end

    -- Test exact membership
    contains(key: String): Boolean do
      result := get(key) /= nil
    end

    -- Test prefix membership (does any key start with this prefix?)
    has_prefix(prefix: String): Boolean do
      result := find_node(prefix) /= nil
    end

    -- Return all keys with the given prefix
    keys_with_prefix(prefix: String): Array[String] do
      let results: Array[String] := []
      let node: ?Trie_Node[V] := find_node(prefix)
      if node /= nil then
        collect_keys(node, prefix, results)
      end
      result := results
    end

    -- Return all key-value pairs with the given prefix
    entries_with_prefix(prefix: String): Array[Any] do
      let results: Array[Any] := []
      let node: ?Trie_Node[V] := find_node(prefix)
      if node /= nil then
        collect_entries(node, prefix, results)
      end
      result := results
    end

    -- Delete a key
    remove(key: String): Boolean
      do
        result := delete(root, key, 0)
        if result then
          size := size - 1
          -- Decrement counts along the path
          decrement_counts(key)
        end
      ensure
        not_contains: not contains(key)
      end

    -- Find the node representing a prefix (nil if prefix not in trie)
    find_node(prefix: String): ?Trie_Node[V] do
      let node: Trie_Node[V] := root
      across prefix.chars() as c do
        let child: ?Trie_Node[V] := node.get_child(c)
        if child = nil then
          result := nil
          return
        end
        node := child
      end
      result := node
    end

    -- Collect all keys in subtree rooted at node, prepending prefix
    collect_keys(node: Trie_Node[V],
                 prefix: String,
                 results: Array[String]) do
      if node.is_terminal then
        results.add(prefix)
      end
      across node.children as entry do
        let c: Char := entry.get(0)
        let child: Trie_Node[Integer] := entry.get(1)
        
        collect_keys(child, prefix + c.to_string(), results)
      end
    end

    collect_entries(node: Trie_Node[V],
                    prefix: String,
                    results: Array[Any]) do
      if node.is_terminal then
        results.add([prefix, node.value])
      end
      across node.children as entry do
        let c: Char := entry.get(0)
        let child: Trie_Node[Integer] := entry.get(1)
        
        collect_entries(child, prefix + c.to_string(), results)
      end
    end

    -- Recursive delete: returns true if the node should be removed
    delete(node: ?Trie_Node[V], key: String, depth: Integer): Boolean do
      if node = nil then
        result := false
        return
      end

      if depth = key.length then
        if node.is_terminal then
          node.is_terminal := false
          node.value := nil
          result := node.is_leaf()
        else
          result := false
        end
        return
      end

      let c: Char := key.char_at(depth)
      let child: ?Trie_Node[V] := node.get_child(c)

      if delete(child, key, depth + 1) then
        node.children.remove(c)
        result := not node.is_terminal and node.is_leaf()
      else
        result := false
      end
    end

    decrement_counts(key: String) do
      let node: Trie_Node[V] := root
      root.count := root.count - 1
      across key.chars() as c do
        node := node.get_child(c)
        node.count := node.count - 1
      end
    end

  invariant
    non_negative_size: size >= 0
    root_exists: root /= nil
end
```

The delete operation is subtly recursive. After deleting the terminal flag from the target node, it unwinds back up the tree, removing nodes that are no longer needed — nodes that are neither terminal nor ancestors of any terminal. This is important for memory reclamation: without it, deleted keys leave ghost paths through the trie. A node can be removed only if it is a leaf (no children) and not terminal. The recursion returns a boolean indicating whether the caller's child pointer should be nulled.

---

## 10.3 The Autocomplete Engine

Autocomplete adds two requirements beyond basic prefix search: ranked results and a top-k interface. You do not want all 50,000 words starting with "com" — you want the 10 most likely completions, ordered by some relevance score.

The count field in each node enables this. When a key is inserted with a frequency score — how often a user has selected this completion, or how common this word is in a corpus — that score is stored at the terminal node and the counts along the path reflect the total weight of all words in each subtree. Finding the top-k completions then becomes a best-first search from the prefix node, using a priority queue.

```
class Autocomplete_Engine
  create
    empty() do
      this.trie := create Trie[Integer].empty()  -- value = frequency score
      this.total_entries := 0
    end

    from_wordlist(words: Array[String]) do
      this.trie := create Trie[Integer].empty()
      this.total_entries := 0
      across words as word do
        let lower: String := word.trim().to_lower()
        if lower.length > 0 then
          this.add(lower, 1)
        end
      end
    end

    from_frequency_list(entries: Array[Any]) do
      this.trie := create Trie[Integer].empty()
      this.total_entries := 0
      across entries as entry do
        this.add(entry.get(0).to_lower(), entry.get(1))
      end
    end

  feature
    trie: Trie[Integer]
    total_entries: Integer

    -- Add a word with a frequency score
    add(word: String, score: Integer)
      require
        non_empty: word.length > 0
        positive_score: score > 0
      do
        let existing: ?Integer := trie.get(word)
        let new_score: Integer :=
          when existing /= nil existing + score else score end
        trie.put(word, new_score)
        if existing = nil then
          total_entries := total_entries + 1
        end
      end

    -- Record a user selection (boost that word's score)
    record_selection(word: String) do
      add(word, 10)  -- selections weight more than passive observations
    end

    -- Return top-k completions for prefix, by score
    complete(prefix: String, k: Integer): Array[Any]
      require
        non_empty_prefix: prefix.length > 0
        positive_k: k > 0
      do
        let lower: String := prefix.to_lower()
        let node: ?Trie_Node[Integer] := trie.find_node(lower)

        if node = nil then
          result := []
          return
        end

        -- Best-first search from prefix node
        result := best_first_search(node, lower, k)
      end

    -- Return all completions for a prefix (no limit)
    complete_all(prefix: String): Array[String] do
      result := trie.keys_with_prefix(prefix.to_lower())
    end

    -- Check if any word starts with this prefix
    has_completions(prefix: String): Boolean do
      result := trie.has_prefix(prefix.to_lower())
    end

    -- Best-first search: find k highest-scoring completions
    best_first_search(start: Trie_Node[Integer],
                       prefix: String,
                       k: Integer): Array[Any] do
      -- Priority queue: (score, word_so_far, node)
      -- We want maximum score, so negate for min-heap or use max-heap
      let pq: Max_Priority_Queue[Integer, String, Trie_Node[Integer]] :=
        create Max_Priority_Queue.empty()
      let results: Array[Any] := []

      -- Seed with the start node
      pq.insert([start.count, prefix, start])

      from until pq.is_empty() or results.length >= k do
        let top: Array := pq.extract_max()
        let node: Trie_Node[Integer] := top.get(2)
        let current_prefix: String := top.get(1)

        if node.is_terminal then
          results.add([current_prefix, node.value])
          if results.length >= k then
            return
          end
        end

        -- Enqueue children, ordered by their subtree count
        across node.children as entry do
        let c: Char := entry.get(0)
        let child: Trie_Node[Integer] := entry.get(1)
        
          pq.insert([child.count, current_prefix + c.to_string(), child])
        end
      end

      result := results
    end

    -- Prefix search with fuzzy tolerance (edit distance ≤ max_errors)
    fuzzy_complete(prefix: String,
                   k: Integer,
                   max_errors: Integer): Array[Any] do
      let lower: String := prefix.to_lower()
      let candidates: Array[Any] := []
      fuzzy_search(trie.root, lower, 0, "", 0, max_errors, candidates)
      candidates := sort_by_score(candidates)
      if candidates.length > k then
        result := candidates.slice(0, k)
      else
        result := candidates
      end
    end

    -- DFS with edit distance tracking for fuzzy completion
    fuzzy_search(node: Trie_Node[Integer],
                 prefix: String,
                 prefix_pos: Integer,
                 current_word: String,
                 errors: Integer,
                 max_errors: Integer,
                 results: Array[Any]) do
      -- Prune: if errors already exceed max, stop
      if errors > max_errors then
        return
      end

      -- If we have consumed the prefix, collect all words below
      if prefix_pos >= prefix.length then
        if node.is_terminal then
          results.add([current_word, node.value])
        end
        across node.children as entry do
        let c: Char := entry.get(0)
        let child: Trie_Node[Integer] := entry.get(1)
        
          fuzzy_search(child, prefix, prefix_pos,
                       current_word + c.to_string(),
                       errors, max_errors, results)
        end
        return
      end

      let target_char: Char := prefix.char_at(prefix_pos)

      -- Try each child
      across node.children as entry do
        let c: Char := entry.get(0)
        let child: Trie_Node[Integer] := entry.get(1)
        
        let new_errors: Integer :=
          when c = target_char errors else errors + 1 end
        fuzzy_search(child, prefix, prefix_pos + 1,
                     current_word + c.to_string(),
                     new_errors, max_errors, results)
      end

      -- Try skipping a character in the prefix (deletion in query)
      fuzzy_search(node, prefix, prefix_pos + 1,
                   current_word, errors + 1, max_errors, results)
    end

  invariant
    non_negative_entries: total_entries >= 0
end
```

The best-first search uses the subtree count to guide exploration. A node with count = 500 has 500 complete words beneath it. Expanding it before a node with count = 10 ensures we find high-frequency completions quickly, without exploring the entire subtree.

The fuzzy completion adds edit-distance tolerance: if you type "micosoft" instead of "microsoft", the engine can still return "microsoft" by allowing one error. The trie DFS carries an error count, incrementing it when a character does not match the prefix and pruning when errors exceed the budget. This is less efficient than the DP-table approach of Chapter 9 — it is O(|alphabet|^m × n) in the worst case — but for short prefixes (m ≤ 10) and small error budgets (max_errors ≤ 2), it is fast enough in practice.

---

## 10.4 Memory: The Trie's Weakness

Try building a trie of 100,000 English words. Each node contains a map from characters to children. For an English alphabet of 26 characters, many nodes have only one or two children — but the map structure still has overhead. For a Nex `Map[Char, Trie_Node]`, each node might consume 100-200 bytes of memory. With 100,000 words averaging 7 characters, the trie has roughly 500,000 nodes (many words share prefixes, so the node count is less than 700,000). Total: 50-100MB for 100,000 words.

For comparison: the words themselves, as raw strings, total about 700,000 bytes. The trie uses 100x more memory than the data it indexes. This is the trie's fundamental weakness: memory overhead from sparsely populated nodes, especially at deeper levels where prefixes diverge.

Two strategies address this.

**Fixed-size child arrays.** Replace `Map[Char, Trie_Node]` with `Array[?Trie_Node]` of fixed size 26 (for lowercase ASCII) or 128 (for full ASCII). Lookup becomes O(1) array indexing instead of O(1) hash lookup, with no hash collision overhead. But the array is always allocated at full size, so a node with one child wastes 25 null pointers. For dense tries (where most nodes have many children), this is better. For sparse tries (most nodes have one or two children), it is worse.

**Compressed tries (radix trees).** The more interesting solution, covered next.

---

## 10.5 Compressed Tries: Radix Trees

Look at the path "c → a → r → d" in the earlier example. The nodes for 'c', 'a', and 'r' each have exactly one child along this path (until 'r', which has two children: 'd' and 'e'). The intermediate nodes add no structural information — they are just passthrough nodes that spell out part of a string.

A Patricia trie (Practical Algorithm to Retrieve Information Coded in Alphanumeric, a recursive acronym coined by Donald Morrison in 1968) — more commonly called a radix tree — collapses chains of single-child nodes into single edges, labelling each edge with the string it represents rather than a single character.

```
root
├── "ca"
│   ├── "t"  [terminal: "cat"]
│   └── "r"  [terminal: "car"]
│       ├── "d"  [terminal: "card"]
│       └── "e"  [terminal: "care"]
└── "ba"
    ├── "t"  [terminal: "bat"]
    └── "ll"  [terminal: "ball"]
```

The "ca" edge collapses what were two nodes (c and a) into one edge labelled "ca". The "ba" edge similarly collapses two nodes. Edge "ll" collapses the "l → l" chain.

A radix tree has at most n nodes for n words — actually at most 2n - 1 nodes, since every internal node has at least two children. For 100,000 words, a radix tree has at most 200,000 nodes — 2-3x fewer than the naive trie. Each node is also smaller: it stores an edge label (a string) rather than a character, and a children map that is typically very small (since branching only happens at genuine branch points).

```
class Radix_Node [V]
  create
    make(label: String) do
      this.label := label
      this.children := {}
      this.is_terminal := false
      this.value := nil
    end

  feature
    label: String          -- edge label from parent to this node
    children: Map[Char, Radix_Node[V]]  -- keyed by first char of child label
    is_terminal: Boolean
    value: ?V

    is_leaf(): Boolean do
      result := children.is_empty()
    end

  invariant
    non_empty_label: label.length > 0
end

class Radix_Tree [V]
  create
    empty() do
      this.root := create Radix_Node[V].make("")
      -- Root has empty label as a special case
      this.size := 0
    end

  feature
    root: Radix_Node[V]
    size: Integer

    put(key: String, value: V)
      require
        non_empty_key: key.length > 0
      do
        insert(root, key, value)
        size := size + 1
      end

    insert(node: Radix_Node[V], key: String, value: V) do
      -- Find the child whose label shares a prefix with key
      let first: Char := key.char_at(0)
      let child: ?Radix_Node[V] := node.children.get(first)

      if child = nil then
        -- No matching child: create a new leaf
        let new_node: Radix_Node[V] := create Radix_Node[V].make(key)
        new_node.is_terminal := true
        new_node.value := value
        node.children.put(first, new_node)
        return
      end

      -- Find common prefix length between key and child.label
      let common: Integer := common_prefix_length(key, child.label)

      if common = child.label.length then
        -- child.label is a full prefix of key
        if common = key.length then
          -- Exact match: update value
          child.is_terminal := true
          child.value := value
          size := size - 1  -- undo the increment from put()
        else
          -- key extends beyond child.label: recurse
          insert(child, key.substring(common, key.length), value)
        end
      else
        -- Split child at the common prefix
        -- Create a new internal node with the common prefix as label
        let split_node: Radix_Node[V] := create Radix_Node[V].make(
          child.label.substring(0, common))

        -- Reassign child with its remaining label
        let old_first: Char := child.label.char_at(common)
        child.label := child.label.substring(common, child.label.length)
        split_node.children.put(old_first, child)

        -- Replace child in parent with split_node
        node.children.put(first, split_node)

        if common = key.length then
          -- key ends exactly at split point
          split_node.is_terminal := true
          split_node.value := value
        else
          -- key continues past split point: add as new child
          let new_first: Char := key.char_at(common)
          let new_node: Radix_Node[V] := create Radix_Node[V].make(
            key.substring(common, key.length))
          new_node.is_terminal := true
          new_node.value := value
          split_node.children.put(new_first, new_node)
        end
      end
    end

    get(key: String): ?V do
      result := search(root, key)
    end

    search(node: Radix_Node[V], key: String): ?V do
      if key.length = 0 then
        if node.is_terminal then
          result := node.value
        else
          result := nil
        end
        return
      end

      let first: Char := key.char_at(0)
      let child: ?Radix_Node[V] := node.children.get(first)

      if child = nil then
        result := nil
        return
      end

      let common: Integer := common_prefix_length(key, child.label)

      if common < child.label.length then
        -- key diverges before consuming the full edge label
        result := nil
      else
        result := search(child, key.substring(common, key.length))
      end
    end

    contains(key: String): Boolean do
      result := get(key) /= nil
    end

    keys_with_prefix(prefix: String): Array[String] do
      let results: Array[String] := []
      collect_with_prefix(root, prefix, "", results)
      result := results
    end

    collect_with_prefix(node: Radix_Node[V],
                         remaining_prefix: String,
                         accumulated: String,
                         results: Array[String]) do
      if remaining_prefix.length = 0 then
        -- Prefix exhausted: collect all terminals in subtree
        if node.is_terminal then
          results.add(accumulated)
        end
        across node.children as entry do
        let c: Char := entry.get(0)
        let child: Trie_Node[Integer] := entry.get(1)
        
          collect_with_prefix(child, "", accumulated + child.label, results)
        end
        return
      end

      let first: Char := remaining_prefix.char_at(0)
      let child: ?Radix_Node[V] := node.children.get(first)

      if child = nil then
        return  -- no matches
      end

      let common: Integer := common_prefix_length(
        remaining_prefix, child.label)

      if common < remaining_prefix.length and common < child.label.length then
        -- Prefix and label diverge: no matches
        return
      elseif common = child.label.length then
        -- Consumed full label: recurse with remaining prefix
        collect_with_prefix(child,
          remaining_prefix.substring(common, remaining_prefix.length),
          accumulated + child.label, results)
      else
        -- Consumed full prefix within label: collect subtree
        if node.is_terminal then
          results.add(accumulated)
        end
        collect_with_prefix(child, "",
          accumulated + child.label, results)
      end
    end

  invariant
    non_negative_size: size >= 0
end

function common_prefix_length(a: String, b: String): Integer do
  let max_len: Integer := a.length.min(b.length)
  from
    let i: Integer := 0
  until
    i >= max_len
  do
    if a.char_at(i) /= b.char_at(i) then
      result := i
      return
    end
    i := i + 1
  end
  result := max_len
end
```

The split operation is the heart of radix tree insertion. When a new key diverges from an existing edge in the middle, we split that edge by inserting a new internal node at the divergence point. The original child becomes a child of the new node (with its label shortened), and the new key becomes another child.

Inserting "card" into a tree that already has "care":
- The tree has an edge "care" from the root (or from some ancestor).
- Common prefix of "card" and "care" is "car" — length 3.
- Split at "car": new internal node with label "car".
- Old "care" node becomes child with label "e" (the remainder).
- New "card" node becomes child with label "d".

After insertion:
```
"car" [internal]
├── "d"  [terminal: "card"]
└── "e"  [terminal: "care"]
```

The split operation always involves at most two new nodes and three pointer updates. Radix tree insertion is O(m) where m is the key length — the same as a trie, but with better memory characteristics.

---

## 10.6 When to Use Which

The choice between a trie, a radix tree, and a sorted array depends on the workload:

**Use a plain trie when:**
- The alphabet is small (26 English letters, 4 DNA bases)
- Insertions are frequent and must be fast
- Memory is not a primary concern
- You need simple, correct implementation quickly

**Use a radix tree when:**
- Memory is constrained
- Keys share long common prefixes (URLs, file paths, IP addresses)
- The key set is large and relatively static
- You need to store long strings efficiently

**Use a sorted array (with binary search) when:**
- The key set is fully static — built once, never modified
- Memory is extremely constrained
- You are comfortable with O(log n) search rather than O(m)
- Cache efficiency matters more than asymptotic complexity

**Use a hash map when:**
- You need exact lookup, not prefix search
- Key ordering does not matter
- O(1) average case is more important than prefix queries

Real autocomplete systems often combine approaches: a trie or radix tree for the prefix index, a hash map for exact-match lookup, and a heap for the top-k results. The structures are complementary, not competing.

---

## 10.7 Putting It Together: A Complete Autocomplete System

A production autocomplete system adds several things beyond the basic trie: persistence (the dictionary survives process restarts), learning (selections boost scores), and multiple suggestion strategies (exact prefix, fuzzy, phonetic).

```
intern io/Path
intern io/Text_File

class Autocomplete_System
  create
    open(directory: String) do
      this.engine := create Autocomplete_Engine.empty()
      this.dir := directory
      this.selection_log_path := directory + "/selections.log"
      this.dictionary_path := directory + "/dictionary.txt"
      this.load()
    end

  feature
    engine: Autocomplete_Engine
    dir: String
    selection_log_path: String
    dictionary_path: String

    -- Query: returns top-5 completions
    query(prefix: String): Array[String] do
      let completions: Array[Any] :=
        engine.complete(prefix, 5)
      let words: Array[String] := []
      across completions as c do
        words.add(c.get(0))
      end
      result := words
    end

    -- Query with custom k
    query_top(prefix: String, k: Integer): Array[Any] do
      result := engine.complete(prefix, k)
    end

    -- Query with fuzzy tolerance
    fuzzy_query(prefix: String, k: Integer): Array[String] do
      let completions: Array[Any] :=
        engine.fuzzy_complete(prefix, k, 1)
      let words: Array[String] := []
      across completions as c do
        words.add(c.get(0))
      end
      result := words
    end

    -- Record that user selected this word
    record_selection(word: String) do
      engine.record_selection(word)
      log_selection(word)
    end

    -- Persist state
    save() do
            let path: Path := create Path.make(dictionary_path)
      let writer: Text_File := create Text_File.open_write(path)

      -- Write all entries with their scores
      let all_entries: Array[Any] :=
        engine.trie.entries_with_prefix("")
      across all_entries as entry do
        writer.write_line(entry.get(0) + "\t" + entry.get(1).to_string())
      end

      writer.close()
    end

    load() do
            let path: Path := create Path.make(dictionary_path)
      if not path.exists() then
        return
      end

      let reader: Text_File := create Text_File.open_read(path)
      from until true do
        let line: ?String := reader.read_line()
        if line = nil then
          reader.close()
          return
        end
        let parts: Array[String] := line.split("\t")
        if parts.length = 2 then
          let word: String := parts.get(0)
          if parts.get(1).trim() /= "" then
            let score: Integer := parts.get(1).to_integer()
            engine.add(word, score)
          end
        end
      end
      reader.close()
    end

    log_selection(word: String) do
      let path: Path := create Path.make(selection_log_path)
      let writer: Text_File := create Text_File.open_append(path)
      writer.write_line(word)
      writer.close()
    end

  invariant
    engine_exists: engine /= nil
end
```

Using the system:

```
let system: Autocomplete_System :=
  create Autocomplete_System.open("./autocomplete_data")

-- Add initial dictionary
let words: Array[String] := ["microsoft", "microphone", "microwave",
  "microscope", "microchip", "microbiology", "microeconomics",
  "microsecond", "micromanage", "microcosm"]

across words as word do
  system.engine.add(word, 100)
end

-- Query
let results: Array[String] := system.query("micro")
across results as r do
  print(r)
end
-- microsoft (or whichever has highest score)
-- microphone
-- microwave
-- ...

-- User selects "microphone"
system.record_selection("microphone")

-- Now "microphone" has a boosted score and will rank higher
let results2: Array[String] := system.query("micro")
print(results2.get(0))  -- "microphone"

-- Fuzzy query: "micorphone" (transposition error)
let fuzzy: Array[String] := system.fuzzy_query("micor", 3)
across fuzzy as r do
  print(r)  -- still finds "microphone", "microsoft", etc.
end

system.save()
```

---

## 10.8 Tries for Non-String Keys

The trie structure generalises to any sequence type, not just strings. The "characters" at each level can be any discrete values.

**IP routing tables** use binary tries — one level per bit of the IP address. A 32-bit IPv4 address has a 32-level trie; a 128-bit IPv6 address has a 128-level trie. Longest-prefix matching (finding the most specific routing rule that matches a destination address) is a natural trie operation: descend the trie following the bits of the address, and return the deepest terminal node encountered. Hardware routers implement this in silicon using a specialised trie structure called a TCAM (Ternary Content-Addressable Memory).

**Integer tries (van Emde Boas trees)** use the bits of integer keys to navigate a trie, enabling O(log log U) operations where U is the universe size — faster than O(log n) for large integer ranges. These appear in priority queues for algorithms like Dijkstra's shortest path when the key space is bounded integers.

**Merkle tries** use cryptographic hashes as keys and store the hash of child nodes in each node, enabling efficient verification that a key-value mapping has not been tampered with. Ethereum's world state is a Merkle Patricia Trie — a radix tree whose node hashes form a Merkle tree — allowing any piece of blockchain state to be verified with a logarithmic proof.

---

## 10.9 Where This Lives in the Wild

**Browser address bars** use a trie or similar prefix index over your browsing history, bookmarks, and search suggestions. When you type "git" in Chrome's address bar and it instantly suggests "github.com", "git documentation", and "git checkout command", a local trie index built from your history is answering that query. The index is rebuilt periodically and cached; the lookup happens in microseconds.

**IDE code completion** is trie-based in most implementations. When you type `str.` in a Python IDE and see a dropdown of all string methods, the IDE has a trie of all known symbols in scope, queried by whatever you have typed since the last separator character. JetBrains IDEs, VS Code, and Neovim's completion plugins all maintain such indices.

**Search engine query suggestions** — the dropdown that appears as you type into Google or Bing — are served from tries. At Google's scale, the trie is distributed across thousands of servers, sharded by prefix, and updated every few minutes with trending queries. The top-k extraction uses the count-based priority queue approach described in this chapter.

**DNS lookup** in operating systems uses a form of trie for the suffix tree of domain names (domain names are matched right-to-left: "com", then "example", then "www"). The DNS hierarchy is itself a trie of domain name components.

**Spell checkers in operating systems** — macOS, iOS, Android — use compressed tries (radix trees) for their dictionaries. The dictionary for English has about 200,000 words; as a radix tree it fits in a few megabytes of memory and supports prefix search and edit-distance lookup within the autocorrect latency budget.

**Apache's HTTP routing** and nginx's server_name matching use radix trees. When a request arrives for "api.example.com", the server's routing configuration is stored in a radix tree of domain names, and the matching rule is found by prefix traversal. Nginx's radix tree implementation, in `src/core/ngx_radix_tree.c`, has been handling millions of requests per second on production servers for over a decade.

---

## Summary

Tries solve the prefix search problem — find all keys sharing a given prefix — in O(m + k) time, where m is the prefix length and k is the number of results. This is independent of the dictionary size n, which is what makes tries essential for autocomplete at scale.

The trie's structure is a tree where edges are labelled with characters and paths from root to terminal nodes spell out dictionary keys. Prefix search follows the prefix's characters from the root to a subtree, then collects all terminals in that subtree. Insertion, deletion, and exact lookup are all O(m).

Radix trees (Patricia tries) compress chains of single-child nodes into single edges labelled with strings rather than characters. This reduces node count from O(total characters) to O(n), making radix trees more memory-efficient for large dictionaries, at the cost of more complex insertion logic — the split operation.

Autocomplete adds ranking and a top-k interface. Storing subtree word counts enables best-first search: expand nodes in order of their count, returning high-frequency completions without exhausting the subtree. Fuzzy completion tolerates typing errors by tracking edit distance during trie traversal, pruning branches that exceed the error budget.

The trie generalises beyond strings to any sequence type: binary tries for IP routing, integer tries for bounded-integer priority queues, Merkle tries for verifiable key-value mappings. The core idea — use the structure of the key itself to navigate the index — applies wherever keys are sequences with shared prefixes.

The next chapter asks what happens when your patterns are not fixed strings but descriptions of sets of strings — regular expressions. The answer requires building a machine, in the precise sense of automata theory, and understanding why some regex engines are exponentially slower than others on certain inputs.
