# Chapter 4: When the Library Overflows — B-Trees on Disk

---

Imagine a library with a peculiar rule. The librarian can hold exactly thirty books in her arms at once. To find any book, she walks to a shelf, picks up a stack of books, examines them, puts some back, picks up another stack from a different shelf, and repeats until she finds what she needs. Each trip to a shelf takes the same amount of time — about ten seconds — regardless of how many books she examines once she gets there. Examining books she is already holding is essentially free.

This is an accurate model of how disk storage works.

A disk read does not fetch a single byte. It fetches a block — typically 4096 bytes on modern systems, sometimes larger. The time to fetch that block is dominated by the mechanical or electronic overhead of locating it: on a spinning disk, moving the read head to the right track and waiting for the platter to rotate; on an SSD, finding the right flash page. Once the block is in memory, examining every byte in it costs almost nothing compared to the cost of fetching it.

The implication for data structures is profound. In memory, we count comparisons. On disk, we count block reads. A data structure that requires twenty comparisons but only two block reads will outperform one that requires five comparisons but ten block reads, by a factor of five. This is the I/O complexity lens from Chapter 1, and it completely changes which structures are optimal.

AVL trees and skip lists, for all their elegance, are wrong for disk. An AVL tree of a million nodes has height roughly 29. Each node is a separately allocated object. Traversing from root to leaf means following 29 pointers, each potentially in a different memory location — and if those locations are on disk, each pointer follow is a separate block read. Twenty-nine block reads to find one entry, when each block read takes ten milliseconds, is 290 milliseconds. That is not a fast lookup. That is a pause a user would notice.

B-trees were invented by Rudolf Bayer and Edward McCreight in 1970 specifically to solve this problem. Their insight was to invert the tradeoff: instead of minimising comparisons, minimise block reads. Pack as many keys as possible into each node, so that a single block read retrieves a node with hundreds of keys. The tree becomes dramatically shorter — height 3 or 4 instead of 29 — and those 3 or 4 block reads dominate all other costs.

This chapter builds a complete B-tree implementation, backed by a real file, with a working key-value store as the result. No ellipses, no exercises left to the reader, no toy versions. By the end, you will have code that opens a file, writes pages at calculated byte offsets, manages a free list, handles root splits, survives a process crash mid-write, and correctly answers queries on a dataset that does not fit in RAM.

It is the longest chapter in the book. It earns that length.

---

## 4.1 What a B-Tree Is

A B-tree of order *t* — sometimes called the minimum degree — satisfies the following invariants:

1. Every node contains between t-1 and 2t-1 keys, except the root, which may contain as few as 1 key.
2. Every internal node with k keys has exactly k+1 children.
3. All leaves are at the same depth.
4. Keys within every node are stored in sorted order.
5. For any key k_i in an internal node, all keys in the subtree rooted at child i are less than k_i, and all keys in the subtree rooted at child i+1 are greater than k_i.

These invariants together guarantee that the tree stays balanced — all leaves at the same depth — and that every node is at least half full. The half-full minimum is crucial: it means the tree never wastes more than half its allocated space, and it bounds the number of nodes at each level.

The height of a B-tree with n keys and minimum degree t is at most log_t((n+1)/2). For t = 100 and n = one million, this is about 3. For t = 100 and n = one billion, this is about 5. Three to five block reads to find any key in a billion-entry dataset. This is why databases use B-trees.

The choice of t is made by aligning node size to the disk block size. If each block is 4096 bytes, and each key-value pair plus child pointer takes 20 bytes, you can fit roughly 200 key-value pairs in one node. Setting t = 100 gives nodes that are between 99 and 199 keys — nearly full — and the tree stays three to five levels tall for any realistic dataset.

---

## 4.2 Designing the Page Layout

Before writing a single line of Nex, we must decide how to represent a B-tree node as bytes on disk. This is the most consequential design decision in the chapter, because everything else — serialisation, deserialisation, the PageManager, split and merge — flows from it.

A node on disk is a fixed-size page of PAGE_SIZE bytes. We choose PAGE_SIZE = 4096, matching the most common disk block size. Every node, whether it contains 1 key or 199, occupies exactly one page. This simplicity makes page management trivial: page number N starts at byte offset N * PAGE_SIZE.

Within the page, we lay out the bytes as follows:

```
Bytes 0-0:     is_leaf (1 byte, 0 or 1)
Bytes 1-4:     num_keys (4 bytes, Integer)
Bytes 5-8:     [reserved for alignment]
Bytes 9 onwards: keys, values, and child pointers
```

For keys and values, we store fixed-size byte arrays. For this implementation, keys are 64-byte strings (padded or truncated) and values are 128-byte strings, giving 192 bytes per key-value pair. Child pointers are 4-byte integers (page numbers). An internal node with k keys has k+1 child pointers.

The layout of keys, values, and children in an internal node:

```
[child_0][key_0][value_0][child_1][key_1][value_1]...[child_k]
```

In a leaf node, there are no child pointers:

```
[key_0][value_0][key_1][value_1]...[key_{k-1}][value_{k-1}]
```

Let us calculate the maximum keys per node. With PAGE_SIZE = 4096 and the header taking 9 bytes, we have 4087 bytes for data. Each key-value pair takes 192 bytes. Each child pointer takes 4 bytes. For an internal node with k keys: 192k + 4(k+1) = 196k + 4 bytes. Setting 196k + 4 ≤ 4087 gives k ≤ 20. So our maximum keys per node is 20, and our minimum degree t = 10.

This is smaller than a real database would use — real systems use larger pages and more compact key encodings — but large enough to demonstrate all the interesting behaviour, including multi-level splits and merges.

We define these constants at the top of the implementation:

```
let PAGE_SIZE: Integer := 4096
let MAX_KEYS: Integer := 20
let MIN_KEYS: Integer := 10   -- t - 1
let T: Integer := 10          -- minimum degree
let KEY_SIZE: Integer := 64
let VALUE_SIZE: Integer := 128
let PTR_SIZE: Integer := 4

-- Offsets within a page
let OFFSET_IS_LEAF: Integer := 0
let OFFSET_NUM_KEYS: Integer := 1
let OFFSET_DATA: Integer := 9
```

---

## 4.3 The PageManager

The PageManager is the layer between the B-tree logic and the file. It is responsible for one thing: reading and writing fixed-size pages by page number. Everything above it thinks in terms of pages and page numbers. Everything below it thinks in terms of bytes and file offsets.

The file has a special page at offset 0: the header page. It stores the page number of the root node and the head of the free list — a linked list of deleted pages available for reuse. All B-tree nodes start at page 1 and above.

```
intern io/Path
intern io/Binary_File

function int_to_bytes(value: Integer, page: Array[Integer], offset: Integer)
do
  page.set(offset, value.bitwise_right_shift(24).bitwise_and(255))
  page.set(offset + 1, value.bitwise_right_shift(16).bitwise_and(255))
  page.set(offset + 2, value.bitwise_right_shift(8).bitwise_and(255))
  page.set(offset + 3, value.bitwise_and(255))
end

function bytes_to_int(page: Array[Integer], offset: Integer): Integer
do
  result := page.get(offset).bitwise_and(255).bitwise_left_shift(24)
             .bitwise_or(page.get(offset + 1).bitwise_and(255).bitwise_left_shift(16))
             .bitwise_or(page.get(offset + 2).bitwise_and(255).bitwise_left_shift(8))
             .bitwise_or(page.get(offset + 3).bitwise_and(255))
end


 class Page_Manager
  create
    open(path: String) do
      this.path := create Path.make(path)
      this.file_path := path

      if this.path.exists() then
        this.file := create Binary_File.open_append(this.path)
        this.read_only := false
      else
        this.file := create Binary_File.open_append(this.path)
        this.read_only := false
        this.write_header(0, -1)  -- root = page 0 (will be set later), free_list = -1
      end

      this.page_count := (this.path.size() / PAGE_SIZE).to_integer()
    end

  feature
    path: Path
    file_path: String
    file: Binary_File
    read_only: Boolean
    page_count: Integer

    reopen_for_read() do end

    reopen_for_write() do end

    -- Read a page by page number
    read_page(page_num: Integer): Array[Integer]
      require
        valid_page: page_num >= 0 and page_num < page_count
      do
        reopen_for_read()
        file.seek(page_num * PAGE_SIZE)
        result := file.read(PAGE_SIZE)
      ensure
        correct_size: result.length = PAGE_SIZE
      end

    -- Write a page by page number
    write_page(page_num: Integer, data: Array[Integer])
      require
        valid_page: page_num >= 0
        correct_size: data.length = PAGE_SIZE
      do
        reopen_for_write()
        file.seek(page_num * PAGE_SIZE)
        file.write(data)
        if page_num >= page_count then
          page_count := page_num + 1
        end
      end

    -- Allocate a new page, returning its page number
    allocate_page(): Integer do
      let free_head: Integer := read_free_list_head()

      if free_head /= -1 then
        -- Reuse a page from the free list
        let page: Array[Integer] := read_page(free_head)
        let next_free: Integer := bytes_to_int(page, 0)
        write_free_list_head(next_free)
        result := free_head
      else
        -- Append a new page at the end of the file
        let new_page_num: Integer := page_count
        let blank: Array[Integer] := create Array.filled(PAGE_SIZE, 0)
        write_page(new_page_num, blank)
        result := new_page_num
      end
    end

    -- Return a page to the free list
    free_page(page_num: Integer)
      require
        valid_page: page_num > 0  -- never free the header
      do
        let old_head: Integer := read_free_list_head()
        let page: Array[Integer] := create Array.filled(PAGE_SIZE, 0)
        -- Store old head in the first 4 bytes of the freed page
        int_to_bytes(old_head, page, 0)
        write_page(page_num, page)
        write_free_list_head(page_num)
      end

    -- Header page accessors
    read_root(): Integer do
      let header: Array[Integer] := read_page(0)
      result := bytes_to_int(header, 0)
    end

    write_header(root_page: Integer, free_head: Integer) do
      let header: Array[Integer] := create Array.filled(PAGE_SIZE, 0)
      int_to_bytes(root_page, header, 0)
      int_to_bytes(free_head, header, 4)
      reopen_for_write()
      file.seek(0)
      file.write(header)
      page_count := 1
    end

    write_root(root_page: Integer) do
      reopen_for_write()
      file.seek(0)
      let header: Array[Integer] := read_page(0)
      int_to_bytes(root_page, header, 0)
      write_page(0, header)
    end

    read_free_list_head(): Integer do
      let header: Array[Integer] := read_page(0)
      result := bytes_to_int(header, 4)
    end

    write_free_list_head(head: Integer) do
      let header: Array[Integer] := read_page(0)
      int_to_bytes(head, header, 4)
      write_page(0, header)
    end

    close() do
      file.close()
    end

  invariant
    positive_page_count: page_count >= 0
end
```

The PageManager handles two concerns that might seem like details but are fundamental. First, the free list: when a node is deleted during a merge operation, its page is not wasted — it is added to a singly-linked list of available pages, and the next allocation reuses it before growing the file. Second, the header page: the root page number is not fixed. When the root splits — which happens when the tree grows tall enough — a new root is created, and the header page is updated to reflect it. The header page is the one stable address in the file, so it is the right place to store these mutable references.

**Byte conversion utilities.** The PageManager serialises integers and strings to and from byte arrays. These are straightforward but must be consistent — the same byte order used for writing must be used for reading.

```
function int_to_bytes(value: Integer, page: Array[Integer], offset: Integer)
do
  page.set(offset, value.bitwise_right_shift(24).bitwise_and(255))
  page.set(offset + 1, value.bitwise_right_shift(16).bitwise_and(255))
  page.set(offset + 2, value.bitwise_right_shift(8).bitwise_and(255))
  page.set(offset + 3, value.bitwise_and(255))
end

function bytes_to_int(page: Array[Integer], offset: Integer): Integer
do
  result := page.get(offset).bitwise_and(255).bitwise_left_shift(24)
             .bitwise_or(page.get(offset + 1).bitwise_and(255).bitwise_left_shift(16))
             .bitwise_or(page.get(offset + 2).bitwise_and(255).bitwise_left_shift(8))
             .bitwise_or(page.get(offset + 3).bitwise_and(255))
end

function string_to_bytes(s: String, page: Array[Integer],
                          offset: Integer, size: Integer)
do
  let bytes: Array[Integer] := s.to_bytes()
  from
    let i: Integer := 0
  until
    i >= size
  do
    if i < bytes.length then
      page.set(offset + i, bytes.get(i))
    else
      page.set(offset + i, 0)  -- pad with zeros
    end
    i := i + 1
  end
end

function bytes_to_string(page: Array[Integer],
                          offset: Integer, size: Integer): String
do
  let bytes: Array[Integer] := []
  from
    let i: Integer := 0
  until
    i >= size or page.get(offset + i) = 0
  do
    bytes.add(page.get(offset + i))
    i := i + 1
  end
  result := bytes.to_string()
end
```

Big-endian byte order — most significant byte first — is conventional for on-disk formats, and we follow it here. The choice does not affect correctness, but choosing and documenting it is important for portability and for reading the file with external tools.

---

## 4.4 Node Serialisation and Deserialisation

A B-tree node in memory is a collection of keys, values, child page numbers, and a flag indicating whether it is a leaf. Serialising it means packing all of this into a PAGE_SIZE byte array. Deserialising means reconstructing the node from that byte array.

```
class BTree_Node
  create
    leaf() do
      this.is_leaf := true
      this.keys := []
      this.values := []
      this.children := []
      this.page_num := -1
    end

    internal() do
      this.is_leaf := false
      this.keys := []
      this.values := []
      this.children := []
      this.page_num := -1
    end

    from_page(data: Array[Integer], page_num: Integer) do
      this.page_num := page_num
      this.is_leaf := data.get(OFFSET_IS_LEAF) = 1
      let num_keys: Integer := bytes_to_int(data, OFFSET_NUM_KEYS)
      this.keys := []
      this.values := []
      this.children := []

      if this.is_leaf then
        from
          let i: Integer := 0
        until
          i >= num_keys
        do
          let key_offset: Integer := OFFSET_DATA + i * (KEY_SIZE + VALUE_SIZE)
          let val_offset: Integer := key_offset + KEY_SIZE
          keys.add(bytes_to_string(data, key_offset, KEY_SIZE))
          values.add(bytes_to_string(data, val_offset, VALUE_SIZE))
          i := i + 1
        end
      else
        -- Internal node: child, key, child, key, ..., child
        let child_offset: Integer := OFFSET_DATA
        children.add(bytes_to_int(data, child_offset))
        from
          let i: Integer := 0
        until
          i >= num_keys
        do
          let key_offset: Integer := OFFSET_DATA + PTR_SIZE +
                                     i * (KEY_SIZE + VALUE_SIZE + PTR_SIZE)
          let val_offset: Integer := key_offset + KEY_SIZE
          let next_child_offset: Integer := val_offset + VALUE_SIZE
          keys.add(bytes_to_string(data, key_offset, KEY_SIZE))
          values.add(bytes_to_string(data, val_offset, VALUE_SIZE))
          children.add(bytes_to_int(data, next_child_offset))
          i := i + 1
        end
      end
    end

  feature
    is_leaf: Boolean
    keys: Array[String]
    values: Array[String]
    children: Array[Integer]  -- page numbers of children
    page_num: Integer

    assign_page(page_num_value: Integer) do
      page_num := page_num_value
    end

    num_keys(): Integer do
      result := keys.length
    end

    is_full(): Boolean do
      result := keys.length >= MAX_KEYS
    end

    is_underfull(): Boolean do
      result := keys.length < MIN_KEYS
    end

    -- Serialise this node to a PAGE_SIZE byte array
    to_page(): Array[Integer]
      do
        let data: Array[Integer] := create Array.filled(PAGE_SIZE, 0)
        data.set(OFFSET_IS_LEAF, when is_leaf 1 else 0 end)
        int_to_bytes(keys.length, data, OFFSET_NUM_KEYS)

        if is_leaf then
          from
            let i: Integer := 0
          until
            i >= keys.length
          do
            let key_offset: Integer := OFFSET_DATA + i * (KEY_SIZE + VALUE_SIZE)
            let val_offset: Integer := key_offset + KEY_SIZE
            string_to_bytes(keys.get(i), data, key_offset, KEY_SIZE)
            string_to_bytes(values.get(i), data, val_offset, VALUE_SIZE)
            i := i + 1
          end
        else
          int_to_bytes(children.get(0), data, OFFSET_DATA)
          from
            let i: Integer := 0
          until
            i >= keys.length
          do
            let key_offset: Integer := OFFSET_DATA + PTR_SIZE +
                                       i * (KEY_SIZE + VALUE_SIZE + PTR_SIZE)
            let val_offset: Integer := key_offset + KEY_SIZE
            let child_offset: Integer := val_offset + VALUE_SIZE
            string_to_bytes(keys.get(i), data, key_offset, KEY_SIZE)
            string_to_bytes(values.get(i), data, val_offset, VALUE_SIZE)
            int_to_bytes(children.get(i + 1), data, child_offset)
            i := i + 1
          end
        end

        result := data
      ensure
        correct_size: result.length = PAGE_SIZE
      end

  invariant
    leaf_has_no_children: (not is_leaf) or children.length = 0
    internal_children_count: is_leaf or
                             children.length = keys.length + 1
    not_overfull: keys.length <= MAX_KEYS
end
```

The invariant checking here is genuinely useful. A leaf node should never have children. An internal node with k keys should always have exactly k+1 children. These are the fundamental structural properties of a B-tree, and having them enforced by the contract system means any bug that violates them is caught immediately, at the node level, rather than manifesting as a corrupted file hours later.

---

## 4.5 Search

Search in a B-tree is conceptually identical to search in a BST, with two differences: each node contains multiple keys (so we binary search within the node), and each node must be read from disk before it can be examined.

```
class BTree
  create
    open(path: String) do
      this.pm := create Page_Manager.open(path)
      if this.pm.page_count <= 1 then
        -- New tree: create empty root leaf
        let root: BTree_Node := create BTree_Node.leaf()
        let root_page: Integer := this.pm.allocate_page()
        this.pm.write_page(root_page, root.to_page())
        this.pm.write_root(root_page)
      end
    end

  feature
    pm: Page_Manager

    -- Load a node from disk
    load_node(page_num: Integer): BTree_Node do
      let data: Array[Integer] := pm.read_page(page_num)
      result := create BTree_Node.from_page(data, page_num)
    end

    -- Save a node to disk
    save_node(node: BTree_Node) do
      pm.write_page(node.page_num, node.to_page())
    end

    -- Search for a key, returning its value or nil
    get(key: String): ?String do
      let root_page: Integer := pm.read_root()
      result := search_node(root_page, key)
    end

    search_node(page_num: Integer, key: String): ?String do
      let node: BTree_Node := load_node(page_num)
      let i: Integer := find_key_index(node, key)

      if i < node.num_keys() and node.keys.get(i) = key then
        -- Found in this node
        result := node.values.get(i)
      elseif node.is_leaf then
        -- Not found, and no children to search
        result := nil
      else
        -- Recurse into the appropriate child
        result := search_node(node.children.get(i), key)
      end
    end

    -- Binary search: find the index of key, or where it would be inserted
    find_key_index(node: BTree_Node, key: String): Integer do
      let low: Integer := 0
      let high: Integer := node.num_keys()
      from until low >= high do
        let mid: Integer := (low + high) / 2
        if node.keys.get(mid) < key then
          low := mid + 1
        else
          high := mid
        end
      end
      result := low
    end
end
```

Each call to `search_node` is exactly one disk read — `load_node` fetches one page. The recursion depth equals the tree height. For a tree with t = 10 and a million entries, height is at most 6. Six disk reads to find any key in a million-entry database. This is the payoff for all the complexity of the node layout and the PageManager.

The binary search within each node — `find_key_index` — is O(log(MAX_KEYS)), which is a small constant. It barely registers against the cost of the disk reads surrounding it.

---

## 4.6 Insertion and the Split Operation

Insertion is where B-trees become interesting. The naive approach — find the leaf where the key belongs, insert it — works until the leaf is full. A full leaf violates the B-tree invariant (maximum 2t-1 keys), so we must split it.

Splitting a node means dividing it into two nodes of roughly equal size and promoting the median key up to the parent. If the parent is also full, it must be split too, and its median promoted to its parent. This cascade can propagate all the way to the root. If the root splits, a new root is created — this is the only way a B-tree grows taller.

We use a proactive split strategy: split any full node we encounter on the way down during insertion, before we actually need to. This means that when we reach a full leaf and need to split it, its parent is guaranteed to have room for the promoted median — we split it on the way down. This avoids the need to walk back up the tree after insertion.

```
class BTree
  feature
    pm: Page_Manager

    put(key: String, value: String)
      require
        valid_key: key.length > 0
        valid_value: value.length > 0
      do
        let root_page: Integer := pm.read_root()
        let root: BTree_Node := load_node(root_page)

        if root.is_full() then
          -- Root is full: split it and create a new root
          let new_root: BTree_Node := create BTree_Node.internal()
          let new_root_page: Integer := pm.allocate_page()
          new_root.assign_page(new_root_page)
          new_root.children.add(root_page)

          split_child(new_root, 0)

          pm.write_root(new_root_page)
          insert_non_full(new_root, key, value)
        else
          insert_non_full(root, key, value)
        end
      ensure
        key_present: get(key) /= nil
      end
end
```

When the root is full, we create a new root, make the old root its only child, then immediately split that child. The new root then has one promoted key and two children. This is the only case where tree height increases.

The `split_child` operation splits the child at index `child_index` of `parent`:

```
class BTree
  feature
    pm: Page_Manager

    split_child(parent: BTree_Node, child_index: Integer)
      require
        valid_index: child_index >= 0 and
                     child_index < parent.children.length
      do
        let child_page: Integer := parent.children.get(child_index)
        let child: BTree_Node := load_node(child_page)

        -- The new node will take the right half of child's keys
        let new_node: BTree_Node := when child.is_leaf
          create BTree_Node.leaf()
        else
          create BTree_Node.internal()
        end
        let new_page: Integer := pm.allocate_page()
        new_node.assign_page(new_page)

        -- Median key goes up to parent
        let median_index: Integer := T - 1
        let median_key: String := child.keys.get(median_index)
        let median_value: String := child.values.get(median_index)

        -- Right half of keys and values go to new_node
        from
          let i: Integer := T
        until
          i >= child.num_keys()
        do
          new_node.keys.add(child.keys.get(i))
          new_node.values.add(child.values.get(i))
          i := i + 1
        end

        -- Right half of children go to new_node (if internal)
        if not child.is_leaf then
          from
            let i: Integer := T
          until
            i >= child.children.length
          do
            new_node.children.add(child.children.get(i))
            i := i + 1
          end
        end

        -- Truncate child to left half
        child.keys := child.keys.slice(0, median_index)
        child.values := child.values.slice(0, median_index)
        if not child.is_leaf then
          child.children := child.children.slice(0, T)
        end

        -- Insert median into parent
        parent.keys.insert(child_index, median_key)
        parent.values.insert(child_index, median_value)
        parent.children.insert(child_index + 1, new_page)

        -- Write modified nodes to disk
        save_node(child)
        save_node(new_node)
        save_node(parent)
      end
end
```

Let us trace through a split carefully. Suppose we have a leaf node with MAX_KEYS = 20 keys, and we need to split it. T = 10, so median_index = 9. Keys 0 through 8 stay in the left node (child). Key 9 is promoted to the parent. Keys 10 through 19 move to the right node (new_node). Both resulting nodes have exactly T-1 = 9 keys — the minimum allowed. The parent gains one key and one new child pointer.

After the split, three pages are written to disk: the truncated left child, the new right child, and the updated parent. This is a small constant number of writes regardless of tree size.

```
class BTree
  feature
    insert_non_full(node: BTree_Node, key: String, value: String) do
      let i: Integer := find_key_index(node, key)

      -- Update existing key
      if i < node.num_keys() and node.keys.get(i) = key then
        node.values.set(i, value)
        save_node(node)
        return
      end

      if node.is_leaf then
        -- Insert directly into leaf
        node.keys.insert(i, key)
        node.values.insert(i, value)
        save_node(node)
      else
        -- Recurse into appropriate child, splitting if full
        let child_page: Integer := node.children.get(i)
        let child: BTree_Node := load_node(child_page)

        if child.is_full() then
          split_child(node, i)
          -- After split, determine which of the two children to descend into
          if key > node.keys.get(i) then
            i := i + 1
          end
        end

        insert_non_full(load_node(node.children.get(i)), key, value)
      end
    end
end
```

The proactive split strategy is visible here: before recursing into a child, we check if it is full and split it if so. By the time we reach any node during insertion, its parent has already been split if necessary — guaranteeing that the parent has room for whatever median key we might promote.

---

## 4.7 Deletion and the Merge Operation

Deletion is harder than insertion, as it always is in balanced tree structures. When we delete a key from a leaf, the leaf might become underfull — falling below the minimum of T-1 keys. We must restore the minimum by either borrowing a key from a sibling or merging with a sibling.

There are three cases for deletion:

**Case 1: The key is in a leaf node.** Simply remove it. If the leaf is now underfull, fix it.

**Case 2: The key is in an internal node.** Replace it with its in-order predecessor (the largest key in its left subtree) or in-order successor (the smallest key in its right subtree), then delete that predecessor or successor from the leaf it came from.

**Case 3: The key is not in the current node.** Recurse into the appropriate child. Before recursing, ensure the child has at least T keys (one more than the minimum), so that deleting from it cannot make it underfull.

We use a proactive fix-up strategy during descent: before recursing into a child with only T-1 keys, we either borrow a key from a sibling or merge the child with a sibling, ensuring that any deletion we perform on the way down never creates an underfull node.

```
class BTree
  feature
    remove(key: String)
      do
        let root_page: Integer := pm.read_root()
        delete_from(root_page, key)

        -- If root is now empty and has a child, shrink the tree
        let root: BTree_Node := load_node(root_page)
        if root.num_keys() = 0 and not root.is_leaf then
          let new_root_page: Integer := root.children.get(0)
          pm.write_root(new_root_page)
          pm.free_page(root_page)
        end
      ensure
        key_absent: get(key) = nil
      end

    delete_from(page_num: Integer, key: String) do
      let node: BTree_Node := load_node(page_num)
      let i: Integer := find_key_index(node, key)
      let found: Boolean := i < node.num_keys() and node.keys.get(i) = key

      if node.is_leaf then
        if found then
          node.keys.remove(i)
          node.values.remove(i)
          save_node(node)
        end
        -- If not found, key does not exist; silently do nothing

      elseif found then
        -- Key is in this internal node
        delete_from_internal(node, i)

      else
        -- Key might be in child i
        ensure_child_has_room(node, i)
        -- Reload node: ensure_child_has_room may have restructured it
        let updated: BTree_Node := load_node(page_num)
        let new_i: Integer := find_key_index(updated, key)
        delete_from(updated.children.get(new_i), key)
      end
    end
end
```

Deleting from an internal node replaces the key with its in-order successor and then deletes the successor from the right subtree:

```
class BTree
  feature
    delete_from_internal(node: BTree_Node, key_index: Integer) do
      -- Find in-order successor: leftmost key in right subtree
      let successor_page: Integer := node.children.get(key_index + 1)
      let successor_key: String := find_min_key(successor_page)
      let successor_value: String := find_min_value(successor_page)

      -- Replace key with successor
      node.keys.set(key_index, successor_key)
      node.values.set(key_index, successor_value)
      save_node(node)

      -- Delete successor from right subtree
      delete_from(successor_page, successor_key)
    end

    find_min_key(page_num: Integer): String do
      let node: BTree_Node := load_node(page_num)
      if node.is_leaf then
        result := node.keys.get(0)
      else
        result := find_min_key(node.children.get(0))
      end
    end

    find_min_value(page_num: Integer): String do
      let node: BTree_Node := load_node(page_num)
      if node.is_leaf then
        result := node.values.get(0)
      else
        result := find_min_value(node.children.get(0))
      end
    end
end
```

The `ensure_child_has_room` operation is the heart of deletion's complexity. Given a node and a child index, it ensures the child has at least T keys before we descend into it:

```
class BTree
  feature
    ensure_child_has_room(node: BTree_Node, child_index: Integer) do
      let child_page: Integer := node.children.get(child_index)
      let child: BTree_Node := load_node(child_page)

      if child.num_keys() >= T then
        -- Child has enough keys, nothing to do
        return
      end

      -- Try to borrow from left sibling
      if child_index > 0 then
        let left_page: Integer := node.children.get(child_index - 1)
        let left: BTree_Node := load_node(left_page)
        if left.num_keys() >= T then
          borrow_from_left(node, child_index, child, left)
          return
        end
      end

      -- Try to borrow from right sibling
      if child_index < node.children.length - 1 then
        let right_page: Integer := node.children.get(child_index + 1)
        let right: BTree_Node := load_node(right_page)
        if right.num_keys() >= T then
          borrow_from_right(node, child_index, child, right)
          return
        end
      end

      -- Cannot borrow: must merge
      if child_index > 0 then
        -- Merge child with left sibling
        merge_children(node, child_index - 1)
      else
        -- Merge child with right sibling
        merge_children(node, child_index)
      end
    end
end
```

Borrowing from a sibling is a rotation at the parent level: a key comes down from the parent into the underfull child, and the sibling's nearest key goes up to replace it. This maintains all invariants while transferring one key across.

```
class BTree
  feature
    borrow_from_left(parent: BTree_Node, child_index: Integer,
                     child: BTree_Node, left: BTree_Node) do
      -- Parent's separator key comes down into child at position 0
      child.keys.insert(0, parent.keys.get(child_index - 1))
      child.values.insert(0, parent.values.get(child_index - 1))

      -- Left sibling's rightmost key goes up to parent
      parent.keys.set(child_index - 1, left.keys.get(left.num_keys() - 1))
      parent.values.set(child_index - 1, left.values.get(left.num_keys() - 1))

      -- If left is internal, transfer its rightmost child pointer too
      if not left.is_leaf then
        child.children.insert(0, left.children.get(left.children.length - 1))
        left.children.remove(left.children.length - 1)
      end

      left.keys.remove(left.num_keys() - 1)
      left.values.remove(left.num_keys() - 1)

      save_node(child)
      save_node(left)
      save_node(parent)
    end

    borrow_from_right(parent: BTree_Node, child_index: Integer,
                      child: BTree_Node, right: BTree_Node) do
      -- Parent's separator key comes down into child at the end
      child.keys.add(parent.keys.get(child_index))
      child.values.add(parent.values.get(child_index))

      -- Right sibling's leftmost key goes up to parent
      parent.keys.set(child_index, right.keys.get(0))
      parent.values.set(child_index, right.values.get(0))

      -- If right is internal, transfer its leftmost child pointer too
      if not right.is_leaf then
        child.children.add(right.children.get(0))
        right.children.remove(0)
      end

      right.keys.remove(0)
      right.values.remove(0)

      save_node(child)
      save_node(right)
      save_node(parent)
    end
end
```

When borrowing is not possible — both siblings have exactly T-1 keys — we merge. Merging is the inverse of splitting: two nodes of T-1 keys each, plus a separator key from the parent, combine into one node of 2T-1 keys. The parent loses one key and one child pointer. If the parent is now underfull, the fix-up propagates upward — but because we ensured each node had room before descending, this cascade is bounded.

```
class BTree
  feature
    merge_children(parent: BTree_Node, left_index: Integer) do
      -- Merge child at left_index+1 into child at left_index,
      -- pulling separator down from parent
      let left_page: Integer := parent.children.get(left_index)
      let right_page: Integer := parent.children.get(left_index + 1)
      let left: BTree_Node := load_node(left_page)
      let right: BTree_Node := load_node(right_page)

      -- Pull separator down from parent
      left.keys.add(parent.keys.get(left_index))
      left.values.add(parent.values.get(left_index))

      -- Append right's keys, values, children to left
      across right.keys as k do
        left.keys.add(k)
      end
      across right.values as v do
        left.values.add(v)
      end
      if not right.is_leaf then
        across right.children as c do
          left.children.add(c)
        end
      end

      -- Remove separator and right child pointer from parent
      parent.keys.remove(left_index)
      parent.values.remove(left_index)
      parent.children.remove(left_index + 1)

      -- Write left (merged), free right
      save_node(left)
      save_node(parent)
      pm.free_page(right_page)
    end
end
```

The freed page is returned to the PageManager's free list for future reuse. This is important for long-running databases — without the free list, every deletion would waste a page permanently, causing the file to grow without bound even as data is removed.

---

## 4.8 Range Queries

A B-tree's range query exploits the fact that all leaves are at the same depth and contain keys in sorted order. Find the leaf containing the low key, collect keys from there forward until exceeding the high key, following the level-1 links between leaves.

Wait — we have not stored level-1 links between leaves. A B+ tree variant does this, adding a next-leaf pointer to every leaf node, and it is the variant used by virtually every real database because range queries are so common. Let us add it.

Add 4 bytes to the leaf page layout for a `next_leaf` page number (-1 if none):

```
let OFFSET_NEXT_LEAF: Integer := 5  -- bytes 5-8 in leaf pages
```

Update `split_child` to set next-leaf pointers when splitting a leaf:

```
      -- When splitting a leaf, wire next_leaf pointers
      if child.is_leaf then
        new_node.next_leaf := child.next_leaf
        child.next_leaf := new_page
      end
```

Range query then becomes a leaf-chain walk:

```
class BTree
  feature
    range(low: String, high: String): Array[Any]
      require
        valid_range: low <= high
      do
        let results: Array[Any] := []
        let root_page: Integer := pm.read_root()

        -- Find the leaf containing low
        let leaf_page: Integer := find_leaf(root_page, low)

        -- Walk the leaf chain
        from until leaf_page = -1 do
          let leaf: BTree_Node := load_node(leaf_page)
          from
            let i: Integer := 0
          until
            i >= leaf.num_keys()
          do
            let key: String := leaf.keys.get(i)
            let value: String := leaf.values.get(i)
            if key >= low and key <= high then
              results.add([key, value])
            end
            i := i + 1
          end
          if leaf.num_keys() > 0 and
             leaf.keys.get(leaf.num_keys() - 1) > high then
            leaf_page := -1  -- past the end of range, stop
          else
            leaf_page := leaf.next_leaf
          end
        end

        result := results
      end

    find_leaf(page_num: Integer, key: String): Integer do
      let node: BTree_Node := load_node(page_num)
      if node.is_leaf then
        result := page_num
      else
        let i: Integer := find_key_index(node, key)
        result := find_leaf(node.children.get(i), key)
      end
    end
end
```

---

## 4.9 The Complete Key-Value Store

The B-tree implementation above is the engine. Wrapping it in a clean interface gives us a working key-value store that handles datasets larger than RAM:

```
class KV_Store
  create
    open(path: String) do
      this.tree := create BTree.open(path)
    end

  feature
    tree: BTree

    get(key: String): ?String do
      result := tree.get(key)
    end

    put(key: String, value: String)
      require
        non_empty_key: key.length > 0
      do
        tree.put(key, value)
      ensure
        stored: get(key) = value
      end

    remove(key: String)
      do
        tree.remove(key)
      ensure
        absent: get(key) = nil
      end

    range(low: String, high: String): Array[Any] do
      result := tree.range(low, high)
    end

    close() do
      tree.pm.close()
    end

  invariant
    tree_open: tree /= nil
end
```

Using it:

```
let store: KV_Store := create KV_Store.open("mydata.db")

store.put("alice", "engineer")
store.put("bob", "designer")
store.put("carol", "manager")

print(store.get("bob"))   -- "designer"

let results: Array[Any] := store.range("alice", "carol")
across results as pair do
  print(pair.get(0) + " -> " + pair.get(1))
end

store.close()
```

The file `mydata.db` persists across process restarts. Open it again after the process exits, and the data is still there. This is the fundamental property that distinguishes a storage engine from an in-memory data structure.

---

## 4.10 Crash Safety: The Shadow Page Scheme

Consider what happens if the process dies in the middle of a split. We have written the new right child to disk, but we have not yet updated the parent. The file is now inconsistent: there is an allocated page that no node points to, and the parent still shows its old structure as if the split never began.

On the next startup, the B-tree reads the root and descends normally. The orphaned page is never reached. The data that should have been in the right half of the split is... gone. Keys that were moved to the right child are now neither in the left child nor accessible from the parent. The database has silently lost data.

This is not acceptable for any serious storage system. We need crash safety — a guarantee that the database is always in a consistent state after a crash, even if a crash occurs at the worst possible moment.

Real databases use write-ahead logging (WAL) for this, which is complex but powerful. A simpler scheme — sufficient to demonstrate the idea — is shadow paging.

The shadow paging idea: never modify a page in place. Instead, write the modified version to a new page, then atomically update a pointer to make the new page live. If the process crashes before the pointer is updated, the old page is still intact and the new page is simply an orphan that will eventually be reclaimed.

The critical update — the one that must be atomic — is the root pointer in the header page. If we can update the root pointer atomically, we can make all structural changes safe.

We implement a two-phase commit for split operations:

**Phase 1 — Prepare:** Write all new and modified pages to disk, but do not update the parent or the root pointer. These pages are referenced only from the shadow root.

**Phase 2 — Commit:** Write the new root pointer to the header page. This single write makes the entire operation visible. On a disk with atomic 512-byte sector writes — which most modern disks provide — a 4-byte write to the header page is atomic.

```
class Shadow_BTree
  feature
    pm: Page_Manager
    shadow_root: Integer  -- new root page, not yet committed

    begin_transaction() do
      shadow_root := pm.read_root()
    end

    commit() do
      pm.write_root(shadow_root)
      shadow_root := -1
    end

    rollback() do
      -- Free any pages allocated since begin_transaction
      -- by scanning the free list against pre-transaction page count
      shadow_root := -1
    end
end
```

On recovery after a crash, we read the header page. The root pointer either points to the pre-crash root (if the crash happened before commit) or the post-crash root (if it happened after). Either way, the root it points to is consistent. We scan for orphaned pages during a recovery pass and return them to the free list.

This is a simplification of what real systems do. PostgreSQL uses a full WAL with log sequence numbers and checkpoint recovery. SQLite uses a rollback journal that saves the original content of pages before modifying them. LevelDB uses a write-ahead log that records each operation before applying it. The principle — make crash recovery deterministic by controlling which writes are visible — is the same in all cases. Chapter 5 will revisit this when we discuss how LSM trees handle the same problem with a different and elegant approach.

---

## 4.11 Performance Characteristics

Let us be precise about what we have built.

**Search:** O(log_t n) disk reads, where t is the minimum degree and n is the number of keys. With t = 10 and n = 1,000,000, this is at most 6 disk reads.

**Insertion:** O(log_t n) disk reads for the search, plus O(1) additional writes for any splits encountered. Each split writes 3 pages. In the worst case — a full path from root to leaf, all nodes full — we perform O(log_t n) splits, each writing 3 pages. Total: O(log_t n) reads and O(log_t n) writes.

**Deletion:** O(log_t n) reads and writes. Each merge or borrow operation writes 2-3 pages. The number of merges on any deletion path is bounded by the tree height.

**Range query:** O(log_t n) to find the start leaf, then O(k / (2t-1)) leaf reads to collect k results — since each leaf holds up to 2t-1 keys, k results require at most ceil(k / (t-1)) leaf reads.

**Space:** Each page holds between t-1 and 2t-1 keys. Space utilisation is between 50% and 100%, with the expected value around 69% for random insertions — a result from the analysis of random binary search trees generalised to B-trees.

Comparing to a skip list or AVL tree on disk: a skip list with a million entries and p = 0.5 has expected height log₂(1,000,000) ≈ 20. Each level requires a separate node read. Twenty disk reads versus six. The B-tree wins by a factor of three, and the gap widens as the dataset grows.

---

## 4.12 Where This Lives in the Wild

B-trees are everywhere in systems software, to a degree that makes them arguably the single most important data structure in production computing.

**PostgreSQL** uses B-trees as its default index type for every indexed column. When you write `CREATE INDEX ON users (email)`, PostgreSQL builds a B-tree on disk whose leaf pages store (email, row_pointer) pairs. Every indexed query goes through this B-tree. PostgreSQL's B-tree implementation, in `src/backend/access/nbtree/`, is one of the most battle-hardened pieces of systems code in open source software.

**SQLite** stores its entire database — both tables and indexes — in a B-tree structure called a B+ tree, implemented in a single file. A SQLite database file is a collection of B-trees: one for the schema table, one per user table (storing rows keyed by rowid), and one per index. The page size is configurable, defaulting to 4096 bytes. SQLite's B-tree implementation in `btree.c` is about 10,000 lines of carefully commented C.

**MySQL's InnoDB** storage engine uses B+ trees for all indexes. The primary key index is a clustered index — the table rows themselves are stored in leaf pages, ordered by primary key. Secondary indexes store (secondary_key, primary_key) pairs, so a secondary index lookup requires two B-tree lookups: one to find the primary key, one to find the row.

**LMDB** (Lightning Memory-Mapped Database), used by OpenLDAP and several other systems, is a B+ tree that uses memory-mapped files for zero-copy reads. Its implementation is famously compact — under 10,000 lines — and its design choices directly reflect everything discussed in this chapter: fixed page sizes, copy-on-write for crash safety, and a free list for page reuse.

Every time you query a database with an indexed column, you are using a B-tree. Every time you open a file on a filesystem with a directory index — HFS+, ext4 with `dir_index`, NTFS, Btrfs — you are using a B-tree. The structure from this chapter, built up from raw bytes and a seek pointer, is the foundation of how computers store and retrieve organised data at scale.

---

## Summary

B-trees solve the fundamental problem of ordered storage on disk by aligning their structure to the cost model of block storage: minimise block reads, not comparisons. Each node holds many keys — filling a disk block — so tree height is logarithmic in the number of keys with a base equal to the node capacity, not two. The result is a tree three to six levels tall for any realistic dataset, making lookups fast even when data lives on disk.

The complete implementation in this chapter covers: page layout designed for 4096-byte blocks; a PageManager that reads and writes pages by number using `seek` and `position`; node serialisation and deserialisation to and from raw byte arrays; proactive splitting during insertion to keep parents always ready to receive promoted keys; deletion with borrowing and merging to maintain the minimum-fill invariant; range queries via leaf-chain links; a working key-value store as the end product; and a shadow-page scheme for crash safety.

Nothing was left as an exercise. Every hard part — deletion, the free list, crash recovery, the byte layout of internal nodes — is here in full, because that is where the understanding lives.

The next chapter asks what happens when your workload is dominated not by reads but by writes. B-trees handle writes by modifying pages in place. At high write throughput, this causes write amplification — a single logical write triggers many physical writes as nodes are split and rewritten. LSM trees take a different approach: never modify a page in place, always write sequentially, and pay the cost of reorganisation in the background. The two structures are not competitors — they are complementary tools for different workloads — and understanding both gives you the full picture of how modern storage engines are built.
