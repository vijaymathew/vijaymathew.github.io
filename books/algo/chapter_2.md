# Chapter 2: The Balanced Bookshelf — Self-Balancing Trees

---

Imagine a large bookshelf, the kind that lines the wall of a serious reader's study. The books are arranged alphabetically by author. Finding any book takes a moment — you go to roughly the right section, scan left or right, and there it is. Adding a new book means finding the right gap and sliding it in. The system works because the ordering is maintained continuously, not reconstructed on demand.

Now imagine the shelf has a problem. Books arrive faster than they can be carefully placed. Someone, in a hurry, puts each new arrival at the end. Within a week the shelf is partly alphabetical, partly chronological, and finding anything requires scanning from the beginning. The ordering has collapsed under the pressure of real use.

Self-balancing trees solve exactly this problem, in the precise mathematical sense. They are ordered structures that maintain their ordering guarantees automatically, under arbitrary insertions and deletions, without ever requiring a full reorganisation. The key insight — the one that makes them work and the one we will derive carefully in this chapter — is that a small amount of local reorganisation, applied at exactly the right moment, is sufficient to keep the whole structure balanced.

This chapter builds two self-balancing trees: AVL trees and red-black trees. They solve the same problem with different tradeoffs. Understanding both, and understanding *why* they differ, is more valuable than knowing either one in isolation.

---

## 2.1 The Problem, Precisely Stated

A dictionary is a data structure that maps keys to values. You insert a key-value pair, look up the value for a given key, and delete entries you no longer need. Hash tables do this well — O(1) amortised for all three operations — but as Chapter 1 established, hash tables do not maintain any ordering among keys.

The ordered dictionary adds one requirement: at any moment, you must be able to traverse all entries in sorted key order, and answer range queries — give me all entries whose key falls between *A* and *B* — efficiently.

This single additional requirement rules out hash tables entirely and makes the problem genuinely interesting.

Let us be precise about what we want:

- `insert(key, value)` — add or update an entry, in O(log n) time
- `get(key)` — retrieve the value for a key, in O(log n) time
- `delete(key)` — remove an entry, in O(log n) time
- `range(low, high)` — return all entries with keys between low and high, in O(log n + k) time, where k is the number of results
- `in_order()` — traverse all entries in sorted key order, in O(n) time

A sorted array gives us O(log n) lookup but O(n) insertion. An unsorted linked list gives us O(1) insertion but O(n) lookup. What we need is a structure that gives us O(log n) for everything, simultaneously, always — not just on average, not just for random input, but guaranteed, for any sequence of operations an adversary might choose.

---

## 2.2 The Binary Search Tree

The binary search tree (BST) is the natural starting point. Every node stores a key, a value, a left child, and a right child. The invariant is simple: every key in the left subtree is less than the node's key, and every key in the right subtree is greater. This invariant makes binary search possible: to find a key, compare it to the root, go left or right accordingly, and repeat.

In Nex:

```
class Node [K, V]
  create
    make(key: K, value: V) do
      this.key := key
      this.value := value
      this.left := nil
      this.right := nil
      this.height := 1
    end
  feature
    key: K
    value: ?V
    left: ?Node[K, V]
    right: ?Node[K, V]
    height: Integer
end
```

Search is clean and recursive:

```
function search(node: ?Node[K, V], key: K): ?V
do
  if node = nil then
    result := nil
  elseif key < node.key then
    result := search(node.left, key)
  elseif key > node.key then
    result := search(node.right, key)
  else
    result := node.value
  end
end
```

Insertion follows the same logic: walk the tree until you find where the key belongs, create a node there.

The BST invariant guarantees that search, insertion, and deletion all take O(h) time, where h is the height of the tree. For a perfectly balanced tree with n nodes, h is approximately log₂(n). For a million nodes, that is about twenty comparisons. Impressively fast.

But here is the problem. Nothing in the BST invariant says anything about balance. Consider inserting keys in sorted order: 1, 2, 3, 4, 5, 6, 7. The BST invariant is satisfied at every step — each new key is larger than all existing keys, so it goes to the right. The resulting tree is not a tree in any useful sense. It is a linked list, leaning entirely to the right. Its height is n, not log n. Search degrades to O(n).

This is not a pathological edge case. Sorted or nearly-sorted input is common in practice. Timestamps arrive in order. Identifiers are often sequential. Log entries are naturally ordered. A BST given real-world data degrades to O(n) with depressing regularity.

The solution is to detect imbalance when it occurs and fix it immediately, before it propagates. This is what AVL trees do.

---

## 2.3 AVL Trees

AVL trees were invented by Georgy Adelson-Velsky and Evgenii Landis in 1962 — the first self-balancing binary search tree ever published. Their insight was elegant: define balance precisely, detect violations cheaply, and restore balance with a small set of local transformations called rotations.

**The balance invariant.** An AVL tree maintains the following invariant at every node: the heights of the left and right subtrees differ by at most one. This is called the balance factor, and it must always be -1, 0, or +1.

Height is easy to track: each node stores its own height, updated on every insertion or deletion.

```
function height(node: ?Node[K, V]): Integer
do
  result := when node = nil 0 else node.height end
end

function update_height(node: Node[K, V])
do
  node.height := 1 + max(height(node.left), height(node.right))
end

function balance_factor(node: Node[K, V]): Integer
do
  result := height(node.left) - height(node.right)
end
```

**Why this bound guarantees O(log n) height.** It can be proven that an AVL tree with n nodes has height at most 1.44 log₂(n). The proof involves Fibonacci numbers — the worst-case AVL tree at each height is constructed like a Fibonacci sequence — but the intuition is straightforward: if every node maintains the height difference invariant, the tree cannot become lopsided enough to grow taller than logarithmic. For a million nodes, maximum height is about 29. Compare this to a degenerate BST's worst case of a million.

**Rotations.** When an insertion or deletion violates the balance invariant at some node, we restore it with a rotation. A rotation is a local restructuring that preserves the BST ordering invariant while changing the shape of the tree. There are two basic rotations — left and right — and they are each other's inverse.

A right rotation at node *y*:

```
       y                x
      / \              / \
     x   C    →       A   y
    / \                  / \
   A   B                B   C
```

Node *x* rises, node *y* falls. The BST invariant is preserved — B, which was between x and y, becomes the left child of y, which is still correct. The heights change: y's height decreases, x's height may increase or stay the same.

In Nex:

```
function rotate_right(y: Node[K, V]): Node[K, V]
  require
    has_left_child: y.left /= nil
  do
    let x: Node[K, V] := y.left
    let b: ?Node[K, V] := x.right
    x.right := y
    y.left := b
    update_height(y)
    update_height(x)
    result := x
  end
```

A left rotation is the mirror image:

```
function rotate_left(x: Node[K, V]): Node[K, V]
  require
    has_right_child: x.right /= nil
  do
    let y: Node[K, V] := x.right
    let b: ?Node[K, V] := y.left
    y.left := x
    x.right := b
    update_height(x)
    update_height(y)
    result := y
  end
```

**The four imbalance cases.** After every insertion, we walk back up the tree checking balance factors. When we find a node with balance factor +2 or -2, we have an imbalance that must be fixed. There are exactly four cases, distinguished by where the imbalance originated.

*Left-Left case*: the left subtree is too tall, and the imbalance is in the left subtree's left child. One right rotation at the unbalanced node fixes it.

*Right-Right case*: mirror of Left-Left. One left rotation fixes it.

*Left-Right case*: the left subtree is too tall, but the imbalance is in the left subtree's right child. One right rotation alone would not fix it — the imbalance would shift rather than resolve. The fix is two rotations: first a left rotation on the left child, then a right rotation on the unbalanced node.

*Right-Left case*: mirror of Left-Right. Left rotation on right child, then right rotation on the node.

The rebalancing function applies whichever case applies:

```
function rebalance(node: Node[K, V]): Node[K, V]
do
  update_height(node)
  let bf: Integer := balance_factor(node)

  -- Left-Left
  if bf > 1 and balance_factor(node.left) >= 0 then
    result := rotate_right(node)

  -- Left-Right
  elseif bf > 1 and balance_factor(node.left) < 0 then
    node.left := rotate_left(node.left)
    result := rotate_right(node)

  -- Right-Right
  elseif bf < -1 and balance_factor(node.right) <= 0 then
    result := rotate_left(node)

  -- Right-Left
  elseif bf < -1 and balance_factor(node.right) > 0 then
    node.right := rotate_right(node.right)
    result := rotate_left(node)

  else
    result := node
  end
end
```

**Insertion.** With rebalancing in hand, insertion is a standard BST insertion followed by rebalancing on the way back up:

```
function insert(node: ?Node[K, V], key: K, value: V): Node[K, V]
do
  if node = nil then
    result := create Node[K, V].make(key, value)
  elseif key < node.key then
    node.left := insert(node.left, key, value)
    result := rebalance(node)
  elseif key > node.key then
    node.right := insert(node.right, key, value)
    result := rebalance(node)
  else
    node.value := value
    result := node
  end
end
```

The recursion descends to the insertion point, creates a leaf, then rebalances on every node on the way back up. At most one or two rotations will be needed — the imbalance is always local, never global.

**Deletion.** Deletion is the harder operation. To delete a node with two children, we replace it with its in-order successor — the smallest key in its right subtree — then delete that successor from the right subtree. The tree must then be rebalanced on the way back up, and unlike insertion, deletion may require O(log n) rotations rather than just one or two.

```
function find_min(node: Node[K, V]): Node[K, V]
do
  result := when node.left = nil node else find_min(node.left) end
end

function delete_min(node: Node[K, V]): ?Node[K, V]
do
  if node.left = nil then
    result := node.right
  else
    node.left := delete_min(node.left)
    result := rebalance(node)
  end
end

function delete(node: ?Node[K, V], key: K): ?Node[K, V]
do
  if node = nil then
    result := nil
  elseif key < node.key then
    node.left := delete(node.left, key)
    result := rebalance(node)
  elseif key > node.key then
    node.right := delete(node.right, key)
    result := rebalance(node)
  else
    if node.right = nil then
      result := node.left
    elseif node.left = nil then
      result := node.right
    else
      let successor: Node[K, V] := find_min(node.right)
      successor.right := delete_min(node.right)
      successor.left := node.left
      result := rebalance(successor)
    end
  end
end
```

**The complete AVL ordered map.** Wrapping everything in a class with Nex contracts:

```
class AVL_Map [K -> Comparable, V]
  create
    empty() do
      this.root := nil
      this.count := 0
    end

  feature
    root: ?Node[K, V]
    count: Integer

    get(key: K): ?V do
      result := search(root, key)
    end

    put(key: K, value: V)
      ensure
        key_present: get(key) /= nil
        count_nondecreasing: count >= old count
      do
        let was_present: Boolean := get(key) /= nil
        root := insert(root, key, value)
        if not was_present then
          count := count + 1
        end
      end

    remove(key: K)
      ensure
        key_absent: get(key) = nil
      do
        let was_present: Boolean := get(key) /= nil
        root := delete(root, key)
        if was_present then
          count := count - 1
        end
      end

    in_order(): Array[K] do
      let result_arr: Array[K] := []
      traverse(root, result_arr)
      result := result_arr
    end

  invariant
    non_negative_count: count >= 0
    balanced: is_balanced(root)
end
```

The `is_balanced` invariant check verifies the AVL property holds at every node — in production you would disable this for performance, but during development it catches bugs immediately.

---

## 2.4 The Cost of Strictness

AVL trees are strictly balanced. The height difference between any two sibling subtrees is always at most one. This strictness is their strength — it guarantees the minimum possible height for a given number of nodes — and their weakness.

The weakness is insertion and deletion performance under heavy write loads. Every insertion must recheck balance from the modified leaf all the way to the root. Every deletion may trigger O(log n) rotations. In a read-heavy workload, AVL trees are excellent — their strict balance minimises the depth of every search. In a write-heavy workload, the rebalancing overhead accumulates.

This tradeoff — strict balance for fast reads, permissive balance for fast writes — motivates a different design. Red-black trees relax the balance invariant slightly, reducing rebalancing work at the cost of a marginally taller tree. The result is a structure that performs better under mixed read-write loads and is preferred in most standard library implementations as a consequence.

---

## 2.5 Red-Black Trees

A red-black tree is a BST where every node is coloured either red or black, and the colouring is constrained by four rules that together guarantee approximate balance.

**The four rules:**

1. Every node is red or black.
2. The root is black.
3. Every nil leaf is considered black.
4. No red node has a red child — red nodes cannot appear consecutively on any path.
5. Every path from any node to any nil leaf below it contains the same number of black nodes.

Rules 4 and 5 together are the key. Rule 5 — equal black-height on all paths — prevents any path from being dramatically shorter than another. Rule 4 — no consecutive reds — prevents any path from being dramatically longer by stuffing in extra red nodes. Together they guarantee that the longest path from root to leaf is at most twice the shortest path, which bounds height at 2 log₂(n+1).

This is slightly worse than AVL's 1.44 log₂(n), but the difference in practice is small — for a million nodes, red-black height is at most 40 versus AVL's 29. The benefit is that rebalancing after insertion always requires at most two rotations, and rebalancing after deletion at most three. This constant bound on rotations makes red-black trees dramatically faster under heavy write loads.

**Node representation:**

```
class RB_Node [K, V]
  create
    make(key: K, value: V, red: Boolean) do
      this.key := key
      this.value := value
      this.red := red
      this.left := nil
      this.right := nil
    end
  feature
    key: K
    value: ?V
    red: Boolean
    left: ?RB_Node[K, V]
    right: ?RB_Node[K, V]
end

function is_red(node: ?RB_Node[K, V]): Boolean
do
  result := node /= nil and node.red
end
```

**The left-leaning simplification.** Standard red-black trees have a complex deletion algorithm — complex enough that most textbook presentations contain bugs, and complex enough that implementing it from scratch is genuinely difficult. Robert Sedgewick introduced a simplification called the Left-Leaning Red-Black (LLRB) tree, which adds one constraint: red links always lean left, meaning a red node is always a left child. This eliminates several cases in insertion and deletion, making the implementation significantly shorter without sacrificing any performance guarantees.

We follow the LLRB approach here.

**Insertion.** LLRB insertion uses three helper operations: left rotation, right rotation, and colour flip.

A colour flip is used when both children of a node are red — we push the redness up to the parent by making both children black and the parent red:

```
function flip_colors(node: RB_Node[K, V])
  require
    both_children_red: is_red(node.left) and is_red(node.right)
  do
    node.red := true
    node.left.red := false
    node.right.red := false
  end
```

Insertion descends to the correct leaf, inserts a red node, then fixes violations on the way back up with a standard sequence of checks:

```
function rb_insert(node: ?RB_Node[K, V], key: K, value: V): RB_Node[K, V]
do
  if node = nil then
    result := create RB_Node[K, V].make(key, value, true)
  else
    if key < node.key then
      node.left := rb_insert(node.left, key, value)
    elseif key > node.key then
      node.right := rb_insert(node.right, key, value)
    else
      node.value := value
    end

    -- Fix right-leaning red link
    if is_red(node.right) and not is_red(node.left) then
      node := rotate_left(node)
    end

    -- Fix two consecutive left reds
    if is_red(node.left) and is_red(node.left.left) then
      node := rotate_right(node)
    end

    -- Split 4-nodes
    if is_red(node.left) and is_red(node.right) then
      flip_colors(node)
    end

    result := node
  end
end
```

After insertion, the root is always set to black:

```
function put(key: K, value: V)
do
  root := rb_insert(root, key, value)
  root.red := false
end
```

The three fixup steps — rotate left, rotate right, flip colours — handle every possible violation. Their order is not arbitrary: each step may create the condition that the next step fixes, and the sequence always terminates with a valid red-black tree.

**Deletion.** LLRB deletion is more involved but still significantly simpler than standard red-black deletion. The key idea is to maintain the invariant that the current node or one of its children is red, which ensures we can always delete a leaf without creating a black-height violation. We restore this invariant as we descend, then fix up on the way back up.

Rather than reproduce the full deletion implementation here — it runs to roughly sixty lines of careful case analysis — we note that it follows the same structural pattern as insertion: descend with invariant maintenance, modify at the leaf, fix up on the ascent. The complete implementation is in the book's code repository with full annotations.

---

## 2.6 AVL vs Red-Black: When to Choose Which

Both structures give you O(log n) for all operations. The difference is constant factors and behaviour under specific workloads.

**Choose AVL trees when:**
- Reads dominate writes by a significant margin
- You need the minimum possible search depth
- The dataset is largely static with occasional updates
- Examples: in-memory indexes on read-heavy reference data, autocomplete structures, compiler symbol tables

**Choose red-black trees when:**
- Writes are frequent relative to reads
- Worst-case rotation count matters more than average search depth
- You need predictable, bounded rebalancing cost per operation
- Examples: operating system schedulers, general-purpose ordered maps in standard libraries, event-driven systems with high insert rates

This is why Linux's completely fair scheduler uses a red-black tree for its run queue: tasks are inserted and removed constantly, and the scheduler cannot afford the AVL tree's potentially higher rotation cost per insertion. It is also why Java's `TreeMap` and C++'s `std::map` use red-black trees rather than AVL trees — they are general-purpose containers, and write performance matters as much as read performance.

Conversely, database index structures that are read far more than written — once built, queried millions of times — often prefer AVL-like strict balance because every fraction of a level saved in height reduces query cost across all those reads.

---

## 2.7 Range Queries and In-Order Traversal

Both trees support range queries elegantly. In-order traversal visits nodes in sorted key order by going left, visiting the current node, then going right. A range query is simply a bounded traversal:

```
function range(node: ?Node[K, V], low: K, high: K, results: Array[K, V])
do
  if node = nil then
    -- base case, nothing to do
  else
    if low < node.key then
      range(node.left, low, high, results)
    end
    if low <= node.key and node.key <= high then
      results.add([node.key, node.value])
    end
    if node.key < high then
      range(node.right, low, high, results)
    end
  end
end
```

The pruning conditions — only recurse left if low is less than the current key, only recurse right if the current key is less than high — mean that this visits only O(log n + k) nodes, where k is the number of results. For a range that returns ten results from a tree of a million nodes, this visits roughly thirty nodes. A hash table scanning all entries would visit a million.

This is the payoff for maintaining order. The hash table's O(1) per element is irrelevant when you need to visit millions of elements to find ten. The tree's O(log n) overhead is a bargain when the alternative is a full scan.

---

## 2.8 Where This Lives in the Wild

Self-balancing trees appear throughout production systems, often invisibly.

**The Linux kernel** uses red-black trees in at least a dozen subsystems. The completely fair scheduler stores runnable tasks in a red-black tree keyed by virtual runtime. The virtual memory subsystem stores memory-mapped regions in a red-black tree keyed by start address, allowing O(log n) lookup of which region contains a given address. The epoll subsystem — used by every high-performance network server on Linux — uses red-black trees to manage file descriptors.

**Java's standard library** implements `TreeMap` and `TreeSet` as red-black trees. These are the data structures behind any Java code that needs sorted keys with dynamic updates — and because they implement the `NavigableMap` interface, they support floor, ceiling, and range queries directly.

**C++ STL** implements `std::map` and `std::set` as red-black trees in every major implementation (GCC, Clang, MSVC). Every time a C++ programmer uses a `std::map`, they are using a red-black tree.

**Database systems** use AVL-like structures for in-memory indexes on hot data. PostgreSQL's buffer pool manager uses a hash table for fast page lookup and an AVL tree for ordered operations on buffer descriptors.

If you have ever wondered how an operating system knows which process to run next in O(log n) time, or how a Java `TreeMap` finds the nearest key to a given value, or how a database index supports both point queries and range queries simultaneously — the answer is the structures in this chapter.

---

## 2.9 What We Have Not Covered

Two things worth naming explicitly.

**Treaps** combine BSTs with heap ordering on random priorities, achieving expected O(log n) balance without explicit rebalancing. They are elegant and worth knowing, but skip lists — covered in the next chapter — solve the same problem with better cache behaviour and a more instructive implementation.

**B-trees** generalise the binary tree by allowing each node to hold many keys and many children. They solve the same ordered dictionary problem as AVL and red-black trees but are designed for disk access, where the cost of fetching a node is orders of magnitude higher than the cost of comparing keys within a node. Chapter 4 covers them in full. Everything you have learned in this chapter about BST ordering invariants, rotations, and split operations carries directly over — the ideas scale, only the constants change.

---

## Summary

A plain binary search tree degrades to O(n) on sorted or adversarial input. Self-balancing trees prevent this by maintaining a height bound — AVL trees within a factor of 1.44 log n, red-black trees within 2 log n — through local restructuring operations called rotations.

AVL trees maintain strict balance and are optimal for read-heavy workloads. Red-black trees maintain approximate balance with a bounded rotation count per operation and are preferred for mixed workloads — which is why they appear in operating system schedulers and standard library containers.

Both trees support ordered operations that hash tables cannot: range queries, in-order traversal, floor and ceiling lookups. These operations make self-balancing trees irreplaceable for any problem where key ordering matters.

The implementation in Nex — with contracts enforcing the balance invariant throughout — demonstrates that correctness and clarity are not in conflict. The contract on `put` guarantees the key is present after insertion. The class invariant guarantees balance is maintained at all times. When an implementation satisfies its contracts, the code can be trusted rather than merely tested.

