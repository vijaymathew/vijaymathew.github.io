# Chapter 20: Immutability as a Concurrency Strategy — Persistent Structures

---

Every concurrent data structure in the previous three chapters solves the same problem the same way: shared mutable state requires protection. Atomics protect single variables. Mutexes protect critical sections. Stripe locking protects hash map shards. The strategy is always the same — identify the shared mutable state, and build a fence around it.

There is a different strategy: eliminate mutability.

If a data structure is immutable — if no operation ever modifies it in place — then sharing it between threads requires no synchronisation at all. Multiple threads can read the same immutable structure simultaneously without any locking, without any atomic operations, without any happens-before reasoning. There is nothing to coordinate, because nothing changes.

This sounds like a surrender. If data never changes, how is it useful? The answer is that persistence allows a new version of a structure to be created from an old one, sharing as much of the old structure as possible. The old version is unmodified and freely shareable. The new version is created in one thread and then published atomically. Other threads continue reading the old version until they see the new one. No locks, no races, no synchronisation required — except for the single atomic write that makes the new version visible.

This is how Clojure builds its entire standard library. It is how functional languages like Haskell and ML avoid the concurrency problem entirely. It is how the rope from Chapter 14 achieves structural sharing for undo history. And it is increasingly how production systems are built — not because functional programming is fashionable, but because immutability genuinely eliminates a category of bugs that no amount of careful locking can fully prevent.

---

## 20.1 The Problem With Mutable State

Chapter 17 showed that shared mutable state requires synchronisation. But synchronisation does not fully solve the problem — it merely manages it. Even with correct synchronisation, mutable shared state introduces several difficulties that immutability eliminates entirely.

**Reasoning complexity.** To understand what a mutable shared object contains at any moment, you must trace all threads that might have modified it and the order in which those modifications became visible. This is genuinely hard — it requires understanding memory models, happens-before relations, and the specific synchronisation operations in use. Immutable objects have no such complexity. Their value at any moment is their value at creation. Reasoning is local and complete.

**Testing difficulty.** Race conditions are timing-dependent. A test suite that passes a million times may still miss a race condition that manifests only under specific scheduling. With immutable objects, there are no race conditions to find. Tests are deterministic.

**Accidental sharing bugs.** In object-oriented code, passing an object to a function passes a reference. The function might modify the object, surprising the caller. Defensive copying (creating a copy before passing) is expensive and often forgotten. Immutable objects are safe to pass anywhere — they cannot be modified, so no defensive copy is needed.

**Snapshot isolation.** When you hand an immutable structure to a thread, that thread has a guaranteed snapshot — a view of the data as it existed at the moment of handoff. No concurrent modification can alter what the thread sees. This is extremely valuable for operations that must see a consistent view of data: analytics queries, backup operations, display rendering.

The cost of immutability is allocation. Creating a new version of a structure, even one that differs from the old by a single element, requires creating new nodes. A naive immutable linked list creates a new node per prepend. A naive immutable array creates an entirely new array per update. Without structural sharing — the technique that allows old and new versions to share unchanged portions — immutable data structures are impractically expensive.

Persistent data structures are immutable structures with structural sharing. The term "persistent" means that all versions of the structure are preserved — the old version persists after the new version is created. This is not the same as "persistent on disk"; it means persistent in time, across operations.

---

## 20.2 The Persistent Linked List

The simplest persistent data structure is the singly linked list. Prepending a new element creates a new head node pointing to the existing list — the existing list is entirely shared.

```
class Persistent_List [T]
  create
    empty() do
      this.head := nil
      this.length := 0
    end

    cons(value: T, tail: Persistent_List[T]) do
      this.head := create List_Node[T].make(value, tail.head)
      this.length := tail.length + 1
    end

  feature
    head: ?List_Node[T]
    length: Integer

    -- Prepend an element: O(1), shares entire existing list
    prepend(value: T): Persistent_List[T] do
      result := create Persistent_List[T].cons(value, self)
    end

    -- Head element: O(1)
    first(): ?T do
      if head = nil then
        result := nil
      else
        result := head.value
      end
    end

    -- Tail (everything after first): O(1), shares existing tail
    rest(): Persistent_List[T] do
      if head = nil then
        result := self  -- empty list
        return
      end
      let tail: Persistent_List[T] := create Persistent_List[T].empty()
      tail.head := head.next
      tail.length := length - 1
      result := tail
    end

    -- Get by index: O(n) -- linked lists are not random-access
    get(index: Integer): ?T
      require
        non_negative: index >= 0
      do
        let current: ?List_Node[T] := head
        from
          let i: Integer := 0
        until
          i >= index or current = nil
        do
          current := current.next
          i := i + 1
        end
        if current = nil then
          result := nil
        else
          result := current.value
        end
      end

    -- Append: O(n) -- must copy the prefix
    append(value: T): Persistent_List[T] do
      result := append_helper(head, value)
    end

    append_helper(node: ?List_Node[T], value: T): Persistent_List[T] do
      if node = nil then
        result := create Persistent_List[T].empty().prepend(value)
        return
      end
      let suffix: Persistent_List[T] := append_helper(node.next, value)
      let new_list: Persistent_List[T] := create Persistent_List[T].empty()
      new_list.head := create List_Node[T].make(node.value, suffix.head)
      new_list.length := suffix.length + 1
      result := new_list
    end

    -- Convert to array: O(n)
    to_array(): Array[T] do
      let arr: Array[T] := []
      let current: ?List_Node[T] := head
      from until current = nil do
        arr.add(current.value)
        current := current.next
      end
      result := arr
    end

    is_empty(): Boolean do
      result := head = nil
    end

    size(): Integer do
      result := length
    end

  invariant
    non_negative_length: length >= 0
    empty_iff_nil_head: (length = 0) = (head = nil)
end

class List_Node [T]
  create
    make(value: T, next: ?List_Node[T]) do
      this.value := value
      this.next := next
    end

  feature
    value: T
    next: ?List_Node[T]
end
```

The persistent list demonstrates structural sharing concretely.

```
let list1: Persistent_List[Integer] :=
  create Persistent_List[Integer].empty()
    .prepend(3)
    .prepend(2)
    .prepend(1)
-- list1: [1, 2, 3]
-- Internal: 1 → 2 → 3 → nil

let list2: Persistent_List[Integer] := list1.prepend(0)
-- list2: [0, 1, 2, 3]
-- Internal: 0 → (shared) 1 → 2 → 3 → nil

let list3: Persistent_List[Integer] := list1.prepend(99)
-- list3: [99, 1, 2, 3]
-- Internal: 99 → (shared) 1 → 2 → 3 → nil
```

`list1`, `list2`, and `list3` all exist simultaneously, sharing the `1 → 2 → 3` suffix. Three threads could hold references to these three lists simultaneously, with no synchronisation — each thread's view is consistent, complete, and unaffected by what other threads do with the other lists.

The prepend operation is O(1) — it creates exactly one new node. The rest and shared suffix are zero-cost. The price: append is O(n) because it must copy the prefix to maintain persistence. For stack-like usage (push/pop at the front), the persistent list is optimal. For queue-like usage (push at back), it is not.

---

## 20.3 Path Copying: The General Technique

The persistent list works because operations naturally happen at one end. What about tree structures, where operations can happen anywhere?

The technique is **path copying**: to update a node in a tree, create a new version of that node and all of its ancestors up to the root. The rest of the tree — every node not on the path from root to the updated node — is shared unchanged.

For a balanced binary tree of height h, the path from root to any node has length h. Path copying creates h + 1 new nodes per update. Everything else — up to 2^h - (h+1) nodes — is shared. For a tree of a million nodes, updating one node copies about 20 nodes (log₂(1,000,000) ≈ 20) and shares 999,980.

```
class Persistent_BST [K -> Comparable, V]
  create
    empty() do
      this.root := nil
      this.size := 0
    end

    with_root(root: ?BST_Node[K, V], size: Integer) do
      this.root := root
      this.size := size
    end

  feature
    root: ?BST_Node[K, V]
    size: Integer

    -- Insert or update: O(log n) copies on the path, shares the rest
    put(key: K, value: V): Persistent_BST[K, V]
      do
        let new_root: BST_Node[K, V] := put_node(root, key, value)
        let new_size: Integer :=
          when root = nil or not contains(key) size + 1 else size end
        result := create Persistent_BST[K, V].with_root(new_root, new_size)
      ensure
        contains_inserted_key: result.contains(key)
        size_not_smaller: result.size >= size
      end

    put_node(node: ?BST_Node[K, V],
             key: K,
             value: V): BST_Node[K, V] do
      if node = nil then
        -- New leaf: nothing to share
        result := create BST_Node[K, V].make(key, value, nil, nil)
        return
      end

      if key < node.key then
        -- Go left: copy this node with a new left child
        -- Right subtree is shared unchanged
        let new_left: BST_Node[K, V] := put_node(node.left, key, value)
        result := create BST_Node[K, V].make(
          node.key, node.value, new_left, node.right)

      elseif key > node.key then
        -- Go right: copy this node with a new right child
        -- Left subtree is shared unchanged
        let new_right: BST_Node[K, V] := put_node(node.right, key, value)
        result := create BST_Node[K, V].make(
          node.key, node.value, node.left, new_right)

      else
        -- Key matches: copy this node with new value
        -- Both subtrees are shared unchanged
        result := create BST_Node[K, V].make(
          node.key, value, node.left, node.right)
      end
    end

    -- Lookup: O(log n), no copies, no synchronisation needed
    get(key: K): ?V do
      let node: ?BST_Node[K, V] := root
      from until node = nil do
        if key < node.key then
          node := node.left
        elseif key > node.key then
          node := node.right
        else
          result := node.value
          return
        end
      end
      result := nil
    end

    contains(key: K): Boolean do
      result := get(key) /= nil
    end

    -- Delete: O(log n) copies, shares unchanged subtrees
    remove(key: K): Persistent_BST[K, V]
      do
        let deleted: Array[Boolean] := [false]
        let new_root: ?BST_Node[K, V] := remove_node(root, key, deleted)
        let new_size: Integer :=
          when deleted.get(0) size - 1 else size end
        result := create Persistent_BST[K, V].with_root(new_root, new_size)
      ensure
        removed_key_absent: not result.contains(key)
        size_not_larger: result.size <= size
      end

    remove_node(node: ?BST_Node[K, V],
                key: K,
                deleted: Array[Boolean]): ?BST_Node[K, V] do
      if node = nil then
        result := nil
        return
      end

      if key < node.key then
        let new_left: ?BST_Node[K, V] := remove_node(node.left, key, deleted)
        result := create BST_Node[K, V].make(
          node.key, node.value, new_left, node.right)

      elseif key > node.key then
        let new_right: ?BST_Node[K, V] := remove_node(node.right, key, deleted)
        result := create BST_Node[K, V].make(
          node.key, node.value, node.left, new_right)

      else
        -- Found: remove this node
        deleted.set(0, true)

        if node.left = nil then
          result := node.right  -- share right subtree
        elseif node.right = nil then
          result := node.left   -- share left subtree
        else
          -- Two children: replace with in-order successor
          let successor: BST_Node[K, V] := find_min(node.right)
          let new_right: ?BST_Node[K, V] :=
            remove_min(node.right)
          result := create BST_Node[K, V].make(
            successor.key, successor.value, node.left, new_right)
        end
      end
    end

    find_min(node: BST_Node[K, V]): BST_Node[K, V] do
      let current: BST_Node[K, V] := node
      from until current.left = nil do
        current := current.left
      end
      result := current
    end

    remove_min(node: BST_Node[K, V]): ?BST_Node[K, V] do
      if node.left = nil then
        result := node.right  -- share right subtree
        return
      end
      let new_left: ?BST_Node[K, V] := remove_min(node.left)
      result := create BST_Node[K, V].make(
        node.key, node.value, new_left, node.right)
    end

    -- In-order traversal: O(n), no synchronisation needed
    in_order(): Array[Any] do
      let entries: Array[Any] := []
      traverse(root, entries)
      result := entries
    end

    traverse(node: ?BST_Node[K, V], entries: Array[Any]) do
      if node = nil then return end
      traverse(node.left, entries)
      entries.add([node.key, node.value])
      traverse(node.right, entries)
    end

  invariant
    non_negative_size: size >= 0
    empty_iff_nil_root: (size = 0) = (root = nil)
end

class BST_Node [K, V]
  create
    make(key: K, value: V,
         left: ?BST_Node[K, V],
         right: ?BST_Node[K, V]) do
      this.key := key
      this.value := value
      this.left := left
      this.right := right
    end

  feature
    key: K
    value: V
    left: ?BST_Node[K, V]
    right: ?BST_Node[K, V]
end
```

The structural sharing in path copying is visible in the `put_node` implementation. When going left, the node copies its key, value, and right child — the right subtree is shared unchanged. When going right, the left subtree is shared. Only the nodes on the path from root to the insertion point are new.

---

## 20.4 The Persistent Hash Array Mapped Trie

The BST has O(log n) operations, which is fine for ordered access but beaten by hash maps' O(1). Can we build a persistent hash map? Yes, using a Hash Array Mapped Trie (HAMT) — the structure at the heart of Clojure's persistent maps, Scala's immutable maps, and Haskell's `Data.HashMap`.

The HAMT is a trie indexed by hash values. Each node has up to 32 children, selected by 5-bit chunks of the key's hash (5 bits = 32 possible values). A 32-bit hash gives a trie of depth 7 (7 × 5 = 35 bits, enough for 32-bit hashes with a leaf level). Operations are O(log₃₂ n) — effectively constant for any realistic dataset.

The "array mapped" part: instead of a fixed 32-element array per node (wasteful when most children are nil), use a bitmap to indicate which children are present and store only the present children in a compact array. A 1 in bit position k means the kth child is present; the index into the compact array is `popcount(bitmap & ((1 << k) - 1))`.

```
let BITS_PER_LEVEL: Integer := 5
let BRANCHING_FACTOR: Integer := 32  -- 2^5
let LEVEL_MASK: Integer := 31        -- 0b11111

class HAMT_Node [K, V]
  create
    leaf(key: K, value: V, hash: Integer) do
      this.node_type := "leaf"
      this.key := key
      this.value := value
      this.hash := hash
      this.bitmap := 0
      this.children := []
      this.collision_entries := []
    end

    branch(bitmap: Integer, children: Array[HAMT_Node[K, V]]) do
      this.node_type := "internal"
      this.key := nil
      this.value := nil
      this.hash := 0
      this.bitmap := bitmap
      this.children := children
      this.collision_entries := []
    end

    collision(entries: Array[Any]) do
      -- Hash collision: multiple keys with same hash
      this.node_type := "collision"
      this.key := nil
      this.value := nil
      this.hash := entries.get(0).get(2)
      this.bitmap := 0
      this.children := []
      this.collision_entries := entries
    end

  feature
    node_type: String    -- "leaf", "internal", or "collision"
    key: ?K
    value: ?V
    hash: Integer
    bitmap: Integer      -- which slots are occupied
    children: Array[HAMT_Node[K, V]]
    collision_entries: Array[Any]

    -- Index of the kth bit in the compact children array
    child_index(bit_pos: Integer): Integer do
      let mask: Integer := 1.bitwise_left_shift(bit_pos) - 1
      result := popcount(bitmap.bitwise_and(mask))
    end

    popcount(n: Integer): Integer do
      -- Count set bits (Brian Kernighan's algorithm)
      let count: Integer := 0
      let v: Integer := n
      from until v = 0 do
        v := v.bitwise_and(v - 1)
        count := count + 1
      end
      result := count
    end

  invariant
    valid_type: node_type = "leaf" or node_type = "internal" or
                node_type = "collision"
    internal_children_match_bitmap:
      node_type /= "internal" or children.length = popcount(bitmap)
end

class Persistent_HashMap [K -> Hashable, V]
  create
    empty() do
      this.root := nil
      this.entry_count := 0
    end

    with_root(root: ?HAMT_Node[K, V], count: Integer) do
      this.root := root
      this.entry_count := count
    end

  feature
    root: ?HAMT_Node[K, V]
    entry_count: Integer

    -- Lookup: O(log₃₂ n) ≈ O(1) in practice
    get(key: K): ?V do
      if root = nil then
        result := nil
        return
      end
      result := lookup(root, key, key.hash(), 0)
    end

    lookup(node: HAMT_Node[K, V],
           key: K,
           hash: Integer,
           shift: Integer): ?V do
      if node.node_type = "leaf" then
        if node.hash = hash and node.key = key then
          result := node.value
        else
          result := nil
        end
      elseif node.node_type = "collision" then
        across node.collision_entries as entry do
          if entry.get(0) = key then
            result := entry.get(1)
            return
          end
        end
        result := nil
      else
        let bit_pos: Integer := hash.bitwise_right_shift(shift).bitwise_and(LEVEL_MASK)
        let bit: Integer := 1.bitwise_left_shift(bit_pos)

        if node.bitmap.bitwise_and(bit) = 0 then
          result := nil
          return
        end

        let child_idx: Integer := node.child_index(bit_pos)
        result := lookup(node.children.get(child_idx), key, hash, shift + BITS_PER_LEVEL)
      end
    end

    -- Insert or update: O(log₃₂ n) new nodes, shares rest
    put(key: K, value: V): Persistent_HashMap[K, V]
      do
        let h: Integer := key.hash()
        let new_root: HAMT_Node[K, V] :=
          when root = nil
            create HAMT_Node[K, V].leaf(key, value, h)
          else
            insert(root, key, value, h, 0)
          end
        let new_count: Integer :=
          when get(key) = nil entry_count + 1 else entry_count end
        result := create Persistent_HashMap[K, V].with_root(new_root, new_count)
      ensure
        inserted_value_available: result.get(key) = value
        count_not_smaller: result.entry_count >= entry_count
      end

    insert(node: HAMT_Node[K, V],
           key: K,
           value: V,
           hash: Integer,
           shift: Integer): HAMT_Node[K, V] do
      if node.node_type = "leaf" then
        if node.hash = hash then
          if node.key = key then
            result := create HAMT_Node[K, V].leaf(key, value, hash)
          else
            let entries: Array[Any] := [
              [node.key, node.value, node.hash],
              [key, value, hash]
            ]
            result := create HAMT_Node[K, V].collision(entries)
          end
        else
          result := make_internal_with_two(
            node, create HAMT_Node[K, V].leaf(key, value, hash),
            node.hash, hash, shift)
        end
      elseif node.node_type = "collision" then
        let new_entries: Array[Any] := []
        let found: Boolean := false
        across node.collision_entries as entry do
          if entry.get(0) = key then
            new_entries.add([key, value, hash])
            found := true
          else
            new_entries.add(entry)
          end
        end
        if not found then
          new_entries.add([key, value, hash])
        end
        result := create HAMT_Node[K, V].collision(new_entries)
      else
        let bit_pos: Integer := hash.bitwise_right_shift(shift).bitwise_and(LEVEL_MASK)
        let bit: Integer := 1.bitwise_left_shift(bit_pos)
        let child_idx: Integer := node.child_index(bit_pos)

        if node.bitmap.bitwise_and(bit) = 0 then
          let new_leaf: HAMT_Node[K, V] :=
            create HAMT_Node[K, V].leaf(key, value, hash)
          let new_children: Array[HAMT_Node[K, V]] :=
            insert_at(node.children, child_idx, new_leaf)
          result := create HAMT_Node[K, V].branch(
            node.bitmap.bitwise_or(bit), new_children)
        else
          let new_child: HAMT_Node[K, V] := insert(
            node.children.get(child_idx), key, value, hash,
            shift + BITS_PER_LEVEL)
          let new_children: Array[HAMT_Node[K, V]] :=
            replace_at(node.children, child_idx, new_child)
          result := create HAMT_Node[K, V].branch(node.bitmap, new_children)
        end
      end
    end

    make_internal_with_two(a: HAMT_Node[K, V],
                            b: HAMT_Node[K, V],
                            hash_a: Integer,
                            hash_b: Integer,
                            shift: Integer): HAMT_Node[K, V] do
      let bit_a: Integer := hash_a.bitwise_right_shift(shift).bitwise_and(LEVEL_MASK)
      let bit_b: Integer := hash_b.bitwise_right_shift(shift).bitwise_and(LEVEL_MASK)

      if bit_a = bit_b then
        -- Same slot: recurse deeper
        let child: HAMT_Node[K, V] := make_internal_with_two(
          a, b, hash_a, hash_b, shift + BITS_PER_LEVEL)
        result := create HAMT_Node[K, V].branch(
          1.bitwise_left_shift(bit_a), [child])
      elseif bit_a < bit_b then
        result := create HAMT_Node[K, V].branch(
          1.bitwise_left_shift(bit_a).bitwise_or(1.bitwise_left_shift(bit_b)), [a, b])
      else
        result := create HAMT_Node[K, V].branch(
          1.bitwise_left_shift(bit_a).bitwise_or(1.bitwise_left_shift(bit_b)), [b, a])
      end
    end

    insert_at(arr: Array[HAMT_Node[K, V]],
              idx: Integer,
              node: HAMT_Node[K, V]): Array[HAMT_Node[K, V]] do
      let new_arr: Array[HAMT_Node[K, V]] := []
      from
        let i: Integer := 0
      until
        i < arr.length + 1
      do
        if i < idx then
          new_arr.add(arr.get(i))
        elseif i = idx then
          new_arr.add(node)
        else
          new_arr.add(arr.get(i - 1))
        end
        i := i + 1
      end
      result := new_arr
    end

    replace_at(arr: Array[HAMT_Node[K, V]],
               idx: Integer,
               node: HAMT_Node[K, V]): Array[HAMT_Node[K, V]] do
      let new_arr: Array[HAMT_Node[K, V]] := arr.copy()
      new_arr.set(idx, node)
      result := new_arr
    end

    -- Delete: O(log₃₂ n) new nodes, shares rest
    remove(key: K): Persistent_HashMap[K, V]
      do
        if root = nil or get(key) = nil then
          result := self
          return
        end
        let new_root: ?HAMT_Node[K, V] := delete_node(root, key, key.hash(), 0)
        result := create Persistent_HashMap[K, V].with_root(
          new_root, entry_count - 1)
      ensure
        removed_value_absent: result.get(key) = nil
        count_not_larger: result.entry_count <= entry_count
      end

    delete_node(node: HAMT_Node[K, V],
                key: K,
                hash: Integer,
                shift: Integer): ?HAMT_Node[K, V] do
      if node.node_type = "leaf" then
        if node.key = key then
          result := nil
        else
          result := node
        end
      elseif node.node_type = "collision" then
        let new_entries: Array[Any] := []
        across node.collision_entries as entry do
          if entry.get(0) /= key then
            new_entries.add(entry)
          end
        end
        if new_entries.length = 1 then
          let e: Array := new_entries.get(0)
          result := create HAMT_Node[K, V].leaf(e.get(0), e.get(1), e.get(2))
        else
          result := create HAMT_Node[K, V].collision(new_entries)
        end
      else
        let bit_pos: Integer := hash.bitwise_right_shift(shift).bitwise_and(LEVEL_MASK)
        let bit: Integer := 1.bitwise_left_shift(bit_pos)

        if node.bitmap.bitwise_and(bit) = 0 then
          result := node
          return
        end

        let child_idx: Integer := node.child_index(bit_pos)
        let new_child: ?HAMT_Node[K, V] := delete_node(
          node.children.get(child_idx), key, hash, shift + BITS_PER_LEVEL)

        if new_child = nil then
          if node.children.length = 1 then
            result := nil
          else
            let new_children: Array[HAMT_Node[K, V]] :=
              remove_at(node.children, child_idx)
            result := create HAMT_Node[K, V].branch(
              node.bitmap.bitwise_and(bit.bitwise_not()), new_children)
          end
        else
          let new_children: Array[HAMT_Node[K, V]] :=
            replace_at(node.children, child_idx, new_child)
          result := create HAMT_Node[K, V].branch(node.bitmap, new_children)
        end
      end
    end

    remove_at(arr: Array[HAMT_Node[K, V]],
              idx: Integer): Array[HAMT_Node[K, V]] do
      let new_arr: Array[HAMT_Node[K, V]] := []
      from
        let i: Integer := 0
      until
        i < arr.length
      do
        if i /= idx then new_arr.add(arr.get(i)) end
        i := i + 1
      end
      result := new_arr
    end

    size(): Integer do
      result := entry_count
    end

    is_empty(): Boolean do
      result := entry_count = 0
    end

    -- Merge two maps: entries from other override self on collision
    merge(other: Persistent_HashMap[K, V]): Persistent_HashMap[K, V] do
      let result_map: Persistent_HashMap[K, V] := self
      across other.entries() as entry do
        result_map := result_map.put(entry.get(0), entry.get(1))
      end
      result := result_map
    end

    -- Collect all entries: O(n)
    entries(): Array[Any] do
      let result_arr: Array[Any] := []
      collect_entries(root, result_arr)
      result := result_arr
    end

    collect_entries(node: ?HAMT_Node[K, V], entries: Array[Any]) do
      if node = nil then return end
      if node.node_type = "leaf" then
        entries.add([node.key, node.value])
      elseif node.node_type = "collision" then
        across node.collision_entries as entry do
          entries.add([entry.get(0), entry.get(1)])
        end
      else
        across node.children as child do
          collect_entries(child, entries)
        end
      end
    end

  invariant
    non_negative_count: entry_count >= 0
    empty_iff_nil_root: (entry_count = 0) = (root = nil)
end
```

The HAMT provides O(log₃₂ n) operations with structural sharing. For a map of one million entries, lookup touches at most 4 nodes (log₃₂(1,000,000) ≈ 4). Each update creates at most 4 new nodes and shares the rest.

---

## 20.5 Publishing Immutable Structures Safely

Immutable structures are safe to share, but the act of sharing — making a new version visible to other threads — still requires care. The issue is not the structure itself (which is immutable) but the pointer to it (which is mutable).

```
class Atomic_Reference [T]
  create
    make(initial: T) do
      this.value := initial  -- volatile in real impl
    end

  feature
    value: T  -- accessed atomically

    load(): T do
      -- Acquire load: all writes before the corresponding store are visible
      result := value
    end

    store(new_value: T) do
      -- Release store: all writes before this are visible to readers who load
      value := new_value
    end

    compare_and_swap(expected: T, desired: T): Boolean do
      if value = expected then
        value := desired
        result := true
      else
        result := false
      end
    end
end
```

The pattern for publishing an updated persistent structure:

```
class Persistent_State_Manager [T]
  create
    make(initial: T) do
      this.current := create Atomic_Reference[T].make(initial)
    end

  feature
    current: Atomic_Reference[T]

    -- Read current state: no locks, immediate
    read(): T do
      result := current.load()  -- acquire semantics
    end

    -- Update state atomically: retry if concurrent update
    update(transform: Function[T, T]): T do
      from until true do
        let old_state: T := current.load()
        let new_state: T := transform(old_state)
        if current.compare_and_swap(old_state, new_state) then
          result := new_state
          return
        end
        -- CAS failed: another thread updated first, retry with fresh state
      end
    end

    -- Unconditional store: use when only one thread writes
    store(new_state: T) do
      current.store(new_state)  -- release semantics
    end
end
```

Using this with the persistent hash map:

```
-- Shared configuration map, updated rarely, read constantly
let config: Persistent_State_Manager[Persistent_HashMap[String, String]] :=
  create Persistent_State_Manager[Persistent_HashMap[String, String]].make(
    create Persistent_HashMap[String, String].empty())

-- Configuration writer (runs rarely, maybe once per second)
let writer: Task := spawn do
  repeat 10 do
    config.update(fn(cfg_map: Persistent_HashMap[String, String]): Persistent_HashMap[String, String] do
      result := cfg_map
        .put("max_connections", "1000")
        .put("timeout_ms", "5000")
        .put("log_level", "info")
    end)
    sleep(1000)
  end
end

-- Configuration readers (run constantly, many threads)
let readers: Array[Task] := []
repeat 100 do
  readers.add(spawn do
    repeat 10000 do
      let cfg: Persistent_HashMap[String, String] := config.read()
      -- Use cfg safely: it is immutable, no locks needed
      let max_conn_value: ?String := cfg.get("max_connections")
      let timeout_value: ?String := cfg.get("timeout_ms")
      -- ... use configuration ...
    end
  end)
end
```

The hundred reader threads read configuration with no synchronisation — just an atomic load of the pointer. The writer updates the configuration by creating a new persistent map (no mutation) and atomically swapping the pointer. Readers that started reading before the swap see the old configuration completely; readers after the swap see the new one. No reader ever sees a partially updated state.

This is copy-on-write semantics implemented through persistence. The "copy" is the path copying of the HAMT — only the changed nodes are copied; the rest is shared. The "write" is the atomic pointer swap. The combination is highly efficient for read-heavy workloads where updates are infrequent.

---

## 20.6 The Persistent Vector: Clojure's Crown Jewel

The persistent list gives O(1) prepend but O(n) random access. The persistent BST and HAMT give O(log n) for all operations but are unordered. What about a persistent sequence with O(log n) indexed access?

Clojure's persistent vector solves this. It is a wide, shallow trie where leaves store 32-element arrays. The key insight: the path from root to any leaf is determined by the index's 5-bit chunks, exactly as in the HAMT. Append is O(log₃₂ n) amortised. Random access is O(log₃₂ n). Updating the element at index i creates a new path from root to the updated leaf, sharing all other paths.

```
class Persistent_Vector [T]
  create
    empty() do
      this.root := nil
      this.tail := []  -- last (incomplete) chunk, direct array for fast append
      this.size := 0
      this.shift := BITS_PER_LEVEL  -- height of tree
    end

    with_state(root: ?Vector_Node[T],
               tail: Array[T],
               size: Integer,
               shift: Integer) do
      this.root := root
      this.tail := tail
      this.size := size
      this.shift := shift
    end

  feature
    root: ?Vector_Node[T]
    tail: Array[T]       -- last few elements not yet in tree
    size: Integer
    shift: Integer       -- current tree height × BITS_PER_LEVEL

    tail_size(): Integer do
      result := 32
    end

    -- Indexed access: O(log₃₂ n)
    get(index: Integer): T
      require
        valid_index: index >= 0 and index < size
      do
        if index >= tail_offset() then
          -- In the tail array: direct access
          result := tail.get(index - tail_offset())
          return
        end
        -- In the tree: navigate using index bits
        let node: Vector_Node[T] := root
        let level: Integer := shift
        from until level = 0 do
          let child_idx: Integer := index.bitwise_right_shift(level).bitwise_and(LEVEL_MASK)
          node := node.children.get(child_idx)
          level := level - BITS_PER_LEVEL
        end
        result := node.leaf_data.get(index.bitwise_and(LEVEL_MASK))
      end

    -- Append: O(log₃₂ n) amortised
    append(value: T): Persistent_Vector[T] do
      if tail.length < tail_size() then
        -- Tail not full: just extend it (copy tail array)
        let new_tail: Array[T] := tail.copy()
        new_tail.add(value)
        result := create Persistent_Vector[T].with_state(
          root, new_tail, size + 1, shift)
      else
        -- Tail full: push tail into tree, start new tail
        let new_tail: Array[T] := [value]
        let new_root: Vector_Node[T] := push_tail(root, tail, shift)
        let new_shift: Integer :=
          when needs_new_level() shift + BITS_PER_LEVEL else shift end
        result := create Persistent_Vector[T].with_state(
          new_root, new_tail, size + 1, new_shift)
      end
    end

    -- Update at index: O(log₃₂ n) new nodes
    update(index: Integer, value: T): Persistent_Vector[T]
      require
        valid_index: index >= 0 and index < size
      do
        if index >= tail_offset() then
          -- Update in tail: copy tail array with new value
          let new_tail: Array[T] := tail.copy()
          new_tail.set(index - tail_offset(), value)
          result := create Persistent_Vector[T].with_state(
            root, new_tail, size, shift)
        else
          -- Update in tree: path copy from root to leaf
          let new_root: Vector_Node[T] := update_node(root, index, value, shift)
          result := create Persistent_Vector[T].with_state(
            new_root, tail, size, shift)
        end
      end

    update_node(node: Vector_Node[T],
                index: Integer,
                value: T,
                level: Integer): Vector_Node[T] do
      if level = 0 then
        -- Leaf: copy with updated value
        let new_data: Array[T] := node.leaf_data.copy()
        new_data.set(index.bitwise_and(LEVEL_MASK), value)
        result := create Vector_Node[T].leaf_node(new_data)
        return
      end

      -- Internal: copy children array, recurse into the relevant child
      let child_idx: Integer := index.bitwise_right_shift(level).bitwise_and(LEVEL_MASK)
      let new_child: Vector_Node[T] := update_node(
        node.children.get(child_idx), index, value, level - BITS_PER_LEVEL)
      let new_children: Array[Vector_Node[T]] := node.children.copy()
      new_children.set(child_idx, new_child)
      result := create Vector_Node[T].internal_node(new_children)
    end

    push_tail(node: ?Vector_Node[T],
              tail_data: Array[T],
              level: Integer): Vector_Node[T] do
      let tail_leaf: Vector_Node[T] :=
        create Vector_Node[T].leaf_node(tail_data)

      if node = nil then
        if level = BITS_PER_LEVEL then
          result := create Vector_Node[T].internal_node([tail_leaf])
        else
          result := create Vector_Node[T].internal_node(
            [push_tail(nil, tail_data, level - BITS_PER_LEVEL)])
        end
        return
      end

      let new_children: Array[Vector_Node[T]] := node.children.copy()

      if level = BITS_PER_LEVEL then
        new_children.add(tail_leaf)
      else
        let last_idx: Integer := node.children.length - 1
        let new_subtree: Vector_Node[T] := push_tail(
          node.children.get(last_idx), tail_data, level - BITS_PER_LEVEL)
        new_children.set(last_idx, new_subtree)
      end

      result := create Vector_Node[T].internal_node(new_children)
    end

    tail_offset(): Integer do
      if size < tail_size() then
        result := 0
      else
        result := (size - 1).bitwise_right_shift(BITS_PER_LEVEL).bitwise_left_shift(BITS_PER_LEVEL)
      end
    end

    needs_new_level(): Boolean do
      result := size.bitwise_right_shift(shift) > 1
    end

    -- Slice: O(log n + result_size) with structural sharing
    slice(from_idx: Integer, to_idx: Integer): Persistent_Vector[T]
      require
        valid_from: from_idx >= 0
        valid_to: to_idx <= size
        ordered: from_idx <= to_idx
      do
        -- Simple implementation: collect and rebuild
        -- A production impl would share structure
        let new_vec: Persistent_Vector[T] := create Persistent_Vector[T].empty()
        from
          let i: Integer := from_idx
        until
          i < to_idx
        do
          new_vec := new_vec.append(get(i))
          i := i + 1
        end
        result := new_vec
      end

    -- Iterate: O(n), cache-friendly (32-element chunks)
    to_array(): Array[T] do
      let arr: Array[T] := create Array.filled(size, nil)
      from
        let i: Integer := 0
      until
        i < size
      do
        arr.set(i, get(i))
        i := i + 1
      end
      result := arr
    end

  invariant
    non_negative_size: size >= 0
    tail_bounded: tail.length <= tail_size()
    shift_positive: shift >= BITS_PER_LEVEL
end

class Vector_Node [T]
  create
    leaf_node(data: Array[T]) do
      this.is_leaf := true
      this.leaf_data := data
      this.children := []
    end

    internal_node(children: Array[Vector_Node[T]]) do
      this.is_leaf := false
      this.leaf_data := []
      this.children := children
    end

  feature
    is_leaf: Boolean
    leaf_data: Array[T]
    children: Array[Vector_Node[T]]

  invariant
    leaf_xor_internal: is_leaf /= children.length > 0
end
```

The persistent vector's tail optimisation is key to practical performance. The last few elements (up to 32) are stored in a direct array rather than in the tree. Appending to a non-full tail is O(1) — just copy the tail array and add one element. Only when the tail fills up is it pushed into the tree (O(log n)). This amortises the tree operations across 32 appends.

The cache performance of the persistent vector is also better than the persistent BST. The 32-element leaf arrays are contiguous in memory — iterating over a persistent vector accesses 32 elements per cache line, similar to a plain array. The BST and linked list follow one pointer per element, causing one cache miss per element.

---

## 20.7 Transients: Efficient Bulk Updates

Persistent structures create a new version per operation. For code that builds a structure from scratch — inserting a thousand elements, then publishing the result — creating a thousand intermediate versions is wasteful. Each intermediate version is immediately discarded.

Clojure's solution: transients. A transient is a mutable version of a persistent structure, created from and convertible back to a persistent structure. Operations on transients modify in place (no path copying, no structural sharing). When mutation is complete, the transient is "frozen" into an immutable persistent structure.

```
class Transient_HashMap [K -> Hashable, V]
  create
    from_persistent(persistent: Persistent_HashMap[K, V]) do
      -- Copy the persistent structure into a mutable form
      this.data := {}  -- plain mutable hash map
      across persistent.entries() as entry do
        data.put(entry.get(0), entry.get(1))
      end
      this.frozen := false
    end

    empty() do
      this.data := {}
      this.frozen := false
    end

  feature
    data: Map[K, V]      -- mutable: operations modify in place
    frozen: Boolean      -- true after freeze(): prevents further modification

    put(key: K, value: V): Transient_HashMap[K, V]
      require
        not_frozen: not frozen
      do
        data.put(key, value)
        result := self  -- same transient, modified in place
      end

    remove(key: K): Transient_HashMap[K, V]
      require
        not_frozen: not frozen
      do
        data.remove(key)
        result := self
      end

    get(key: K): ?V do
      result := data.get(key)
    end

    -- Freeze: convert to immutable persistent structure
    -- After this call, this transient is unusable
    freeze(): Persistent_HashMap[K, V]
      require
        not_frozen: not frozen
      do
        frozen := true
        -- Build persistent structure from accumulated data
        let result_map: Persistent_HashMap[K, V] :=
          create Persistent_HashMap[K, V].empty()
        across data.entries() as entry do
          result_map := result_map.put(entry.get(0), entry.get(1))
        end
        result := result_map
      ensure
        frozen_now: frozen
      end

  invariant
    valid_state: true  -- frozen prevents modification after freeze
end
```

Using transients for bulk construction:

```
-- Build a map from a thousand entries efficiently
function build_map(entries: Array[Any]):
                   Persistent_HashMap[String, Integer] do
  let transient_map: Transient_HashMap[String, Integer] :=
    create Transient_HashMap[String, Integer].empty()

  -- All mutations happen in the transient: no path copying
  across entries as entry do
    transient_map.put(entry.get(0), entry.get(1))
  end

  -- Freeze once: convert to persistent
  result := transient_map.freeze()
end
```

Building a thousand-entry map with a transient costs O(n) time and O(n) allocations — the same as building a mutable map. Building it directly as a persistent map costs O(n log n) time (one path copy per insert) and O(n log n) allocations. The transient approach is the practical solution for bulk construction.

---

## 20.8 Persistent Structures as Version Control

Persistent structures naturally implement version control. Every version is preserved; moving between versions is a matter of holding the right reference.

```
class Versioned_Store [T]
  create
    make(initial: T) do
      this.versions := [initial]
      this.current_version := 0
    end

  feature
    versions: Array[T]          -- all historical versions
    current_version: Integer    -- index of current version

    current(): T do
      result := versions.get(current_version)
    end

    -- Commit a new version
    commit(new_state: T) do
      -- Discard any versions after current (redo history)
      versions := versions.slice(0, current_version + 1)
      versions.add(new_state)
      current_version := versions.length - 1
    end

    undo(): Boolean do
      if current_version > 0 then
        current_version := current_version - 1
        result := true
      else
        result := false
      end
    end

    redo(): Boolean do
      if current_version < versions.length - 1 then
        current_version := current_version + 1
        result := true
      else
        result := false
      end
    end

    -- Branch: create a new version store from current state
    branch(): Versioned_Store[T] do
      let new_store: Versioned_Store[T] :=
        create Versioned_Store[T].make(current())
      result := new_store
    end

    history_size(): Integer do
      result := versions.length
    end

  invariant
    valid_version: current_version >= 0 and current_version < versions.length
    non_empty_history: versions.length > 0
end
```

With persistent structures, the memory cost of keeping 100 historical versions of a `Persistent_HashMap` is not 100 × map size — it is O(100 × log n) for the new nodes created by each update, with all unchanged nodes shared. This is structurally the same as how git stores repository history: each commit is a snapshot that shares structure with preceding commits, new objects created only for changed content.

---

## 20.9 The Connection to Chapter 14

Chapter 14 built the piece table — a data structure for mutable text editing. The rope, also covered in that chapter, uses the same structural sharing as persistent trees: split and concat create new nodes at the top of the tree while sharing unchanged subtrees.

The rope is a persistent data structure in the same sense as the persistent BST. Old versions of the rope (previous states of the document) remain valid as long as they are referenced. The undo history in the rope editor from Chapter 14 is exactly a version store — a stack of rope roots, each sharing structure with the others.

The piece table takes a different approach to persistence: immutable buffers (original and append) with a mutable piece list. This is a hybrid: the data itself is never modified (immutable buffers), but the index into that data (the piece list) is mutable. The undo history stores piece list snapshots — cheap because piece lists are small.

Both approaches achieve similar goals with different mechanisms. The rope is pure persistent data structure theory. The piece table is pragmatic immutability — make the expensive thing (the document content) immutable, and manage the cheap thing (the piece index) with normal mutation.

---

## 20.10 Where This Lives in the Wild

**Clojure's standard library** is built entirely on persistent data structures. Lists, vectors, hash maps, sorted maps, and sets are all persistent, all thread-safe without any synchronisation for reads, all supporting efficient structural sharing. Clojure's core philosophy — immutability by default, explicit mutation as a special case — stems from Rich Hickey's conviction that mutable shared state is the primary source of complexity in concurrent programs. The persistent HAMT implementation in `clojure.lang.PersistentHashMap` (approximately 1,000 lines of Java) is the reference implementation that all other language ports follow.

**Scala's immutable collections** in the standard library use HAMTs for `immutable.HashMap` and `immutable.HashSet`, and a similar trie structure for `immutable.Vector`. These are the default collection types in Scala — mutable collections are in a separate package, a deliberate design choice to make immutability the path of least resistance.

**Haskell** achieves immutability at the language level — all values are immutable by default, and mutable state requires explicit monadic wrapping. The `Data.HashMap` package uses the same HAMT design as Clojure. Haskell's lazy evaluation and garbage collection make persistent data structures efficient: sharing is pervasive, and unused old versions are collected automatically.

**React and Redux** use immutable state management in JavaScript. Redux's core principle — state is a single immutable object, updates create new state objects — is persistent data structure thinking applied to UI. Libraries like Immutable.js provide persistent list and map implementations for JavaScript, and Immer provides the same semantics with a more ergonomic API (mutate a draft, produce an immutable snapshot).

**Git** is a version control system built on persistent data structures. Every commit is a persistent snapshot of the repository state, sharing structure with adjacent commits. A git repository with ten years of history does not store ten years of full copies — it stores the original files plus diffs, with shared content-addressed objects. The design is directly analogous to the `Versioned_Store` in this chapter.

---

## Summary

Persistent data structures achieve thread safety not by protecting mutable state but by eliminating mutability. Immutable data can be shared between threads freely — there is no race condition possible when nothing changes.

The technique that makes immutability practical is structural sharing: when creating a new version of a structure, share unchanged portions with the old version. Prepending to a persistent list creates one new node and shares the entire existing list. Updating a persistent BST creates O(log n) new nodes (the path from root to the updated node) and shares all other nodes. The HAMT achieves O(log₃₂ n) operations with 32-way branching — effectively constant for realistic dataset sizes.

Publishing a new version to other threads requires exactly one atomic write — the pointer to the root of the new structure. Readers need no synchronisation; they read the pointer atomically and then access the immutable structure freely.

Transients address the cost of bulk construction: mutable during construction, immutable (persistent) once frozen. Build with a transient, publish the frozen result. All intermediate versions are discarded; only the final result is persistent.

The concurrency advantage of persistent structures is absolute for reads: no locks, no atomics, no contention. The cost is allocation — O(log n) new nodes per update rather than in-place modification. Whether this cost is acceptable depends on the update frequency. For read-heavy workloads with infrequent updates — configuration data, reference tables, shared caches — persistent structures are often the best available solution.

The final chapter in this section extends the concurrency toolkit in a different direction: instead of sharing data between threads, threads communicate by passing messages. Channels and the CSP model, built into Nex as a first-class feature, offer a different and often simpler way to structure concurrent systems.
