# Chapter 14: The Editor's Data Structure — Ropes and Piece Tables

---

Open a text editor. Type a character. The character appears instantly, no matter how large the file. Delete a word in the middle of a ten-megabyte document. The deletion is instant. Undo it. Also instant. Select a million characters and replace them with three. Instant.

None of this is obvious. A text editor is, at its core, a program that maintains a mutable sequence of characters and supports efficient insertion, deletion, and retrieval at arbitrary positions. These requirements seem simple until you think carefully about the data structures available to represent that sequence.

An array of characters is the naive choice. Random access is O(1) — reading any character requires one memory operation. But insertion and deletion at an arbitrary position require shifting every character after the insertion point. Inserting a single character at the beginning of a ten-megabyte document requires moving ten million characters. Editing large files would be visibly slow.

A linked list solves the shifting problem — insertion and deletion are O(1) once you have found the position. But finding the position requires walking the list from the beginning, which is O(n). And linked lists destroy cache performance — each character is a separately allocated node, so reading a sequence of characters causes one cache miss per character, making display and search catastrophically slow.

Neither works. And yet every text editor you have ever used is fast. Something else is happening.

This chapter examines two data structures that actually work for text editing: ropes and piece tables. They represent genuinely different approaches to the same problem. Understanding both — and the specific engineering constraints that led VS Code to choose piece tables over ropes — is a lesson in how abstract data structure theory meets practical system design.

---

## 14.1 The Requirements

Before choosing a structure, state the requirements precisely. A text editor needs:

**Insertion:** insert a string of length k at position p in a document of length n. Cost should not be O(n).

**Deletion:** delete characters from position p to position p + k. Cost should not be O(n).

**Access:** read the character at position p. Should be efficient.

**Iteration:** traverse a range of characters sequentially (for display, search, export). Should be cache-friendly.

**Undo/redo:** revert the document to a previous state. The data structure should support this without copying the entire document on every edit.

**Line queries:** given a position in the character sequence, find the line number. Given a line number, find the start position. Editors think in lines, not just characters.

**Large files:** the structure should handle files of hundreds of megabytes without memory blowup.

No single classical data structure satisfies all of these simultaneously. Arrays fail on insertion and deletion. Linked lists fail on access and iteration. Hash tables do not maintain order. Balanced trees give O(log n) for everything but poor constant factors and bad cache behaviour for iteration.

The practical solutions — ropes and piece tables — both trade some worst-case guarantees for structures that are fast in the patterns that text editing actually exhibits.

---

## 14.2 Ropes: A Binary Tree of String Fragments

A rope is a binary tree where each leaf holds a short string fragment (a piece of the document), and each internal node stores the total length of all characters in its left subtree. The document is read by an in-order traversal of the leaves. Random access navigates the tree using the stored weights.

```
     (23)
    /    \
  (11)   "Hello, world"  ← leaf: 12 chars
  /  \
"Hello"  ", "            ← leaves: 5 and 2 chars
```

The number in each internal node is the weight — the total character count in the left subtree. To find character at position p: if p < weight, go left; otherwise go right with p adjusted by weight.

Ropes were described by Boehm, Atkinson, and Plass in their 1995 paper "Ropes: An Alternative to Strings." The name is a rope made of smaller pieces twisted together — a physical metaphor for the structure.

### Node Representation

```
class Rope_Node
  create
    leaf(content: String) do
      this.is_leaf := true
      this.content := content
      this.weight := content.length
      this.left := nil
      this.right := nil
    end

    branch(weight: Integer,
           left: ?Rope_Node,
           right: ?Rope_Node) do
      this.is_leaf := false
      this.content := ""
      this.weight := weight
      this.left := left
      this.right := right
    end

  feature
    is_leaf: Boolean
    content: String      -- non-empty only for leaves
    weight: Integer      -- for leaf: content.length
                         -- for internal: total chars in left subtree
    left: ?Rope_Node
    right: ?Rope_Node

    total_length(): Integer do
      if is_leaf then
        result := weight
      else
        let right_len: Integer :=
          when right /= nil right.total_length() else 0 end
        result := weight + right_len
      end
    end

  invariant
    non_negative_weight: weight >= 0
    leaf_weight_consistent: (not is_leaf) or weight = content.length
    internal_has_children: is_leaf or left /= nil
end
```

### The Rope

```
class Rope
  create
    empty() do
      this.root := nil
      this.length := 0
    end

    from_string(s: String) do
      this.length := s.length
      if s.length = 0 then
        this.root := nil
      elseif s.length <= max_leaf_size() then
        this.root := create Rope_Node.leaf(s)
      else
        -- Split long strings into balanced tree
        this.root := build_from_string(s, 0, s.length)
      end
    end

  feature
    root: ?Rope_Node
    length: Integer
    max_leaf_size(): Integer do
      result := 64
    end

    -- Character access: O(log n)
    char_at(pos: Integer): Char
      require
        valid_pos: pos >= 0 and pos < length
      do
        result := node_char_at(root, pos)
      end

    node_char_at(node: ?Rope_Node, pos: Integer): Char do
      if convert node to current_node: Rope_Node then
        if current_node.is_leaf then
          result := current_node.content.char_at(pos)
        elseif pos < current_node.weight then
          result := node_char_at(current_node.left, pos)
        else
          result := node_char_at(current_node.right, pos - current_node.weight)
        end
      else
        result := #nul  -- should not happen if pos is valid
      end
    end

    -- Substring extraction: O(k + log n)
    substring(start: Integer, end_pos: Integer): String
      require
        valid_range: start >= 0 and end_pos <= length and start <= end_pos
      do
        let chars: Array[Char] := []
        collect_chars(root, start, end_pos, 0, chars)
        result := chars.to_string()
      end

    collect_chars(node: ?Rope_Node,
                  start: Integer,
                  end_pos: Integer,
                  offset: Integer,
                  chars: Array[Char]) do
      if convert node to current_node: Rope_Node then
        if current_node.is_leaf then
          -- Collect characters in [start, end_pos) from this leaf
          let leaf_start: Integer := offset
          let leaf_end: Integer := offset + current_node.weight

          let lo: Integer := start.max(leaf_start) - leaf_start
          let hi: Integer := end_pos.min(leaf_end) - leaf_start

          from
            let i: Integer := lo
          until
            i < hi
          do
            chars.add(current_node.content.char_at(i))
            i := i + 1
          end
        else
          -- Internal node: recurse left then right
          let left_end: Integer := offset + current_node.weight
          if start < left_end then
            collect_chars(current_node.left, start, end_pos, offset, chars)
          end
          if end_pos > left_end then
            collect_chars(current_node.right, start, end_pos, left_end, chars)
          end
        end
      end
    end

    -- Concatenate two ropes: O(1) amortised
    concat(other: Rope): Rope do
      if length = 0 then
        result := other
      elseif other.length = 0 then
        result := this
      else
        let new_rope: Rope := create Rope.empty()
        new_rope.root := create Rope_Node.branch(
          length, root, other.root)
        new_rope.length := length + other.length
        result := new_rope
      end
    end

    -- Split at position pos: O(log n)
    -- Returns [left_rope, right_rope]
    split(pos: Integer): Array[Rope]
      require
        valid_pos: pos >= 0 and pos <= length
      do
        if pos = 0 then
          result := [create Rope.empty(), this]
        elseif pos = length then
          result := [this, create Rope.empty()]
        else
          let left_node: ?Rope_Node := nil
          let right_node: ?Rope_Node := nil
          let split_result: Array[?Rope_Node] :=
            split_node(root, pos)
          left_node := split_result.get(0)
          right_node := split_result.get(1)

          let left_rope: Rope := create Rope.empty()
          left_rope.root := left_node
          left_rope.length := pos

          let right_rope: Rope := create Rope.empty()
          right_rope.root := right_node
          right_rope.length := length - pos

          result := [left_rope, right_rope]
        end
      end

    split_node(node: ?Rope_Node,
               pos: Integer): Array[?Rope_Node] do
      if convert node to current_node: Rope_Node then
        if current_node.is_leaf then
          -- Split the leaf string
          let left_str: String := current_node.content.substring(0, pos)
          let right_str: String := current_node.content.substring(pos, current_node.weight)
          let left_node: ?Rope_Node := nil
          let right_node: ?Rope_Node := nil
          if left_str.length > 0 then
            left_node := create Rope_Node.leaf(left_str)
          end
          if right_str.length > 0 then
            right_node := create Rope_Node.leaf(right_str)
          end
          result := [left_node, right_node]
        elseif pos < current_node.weight then
          -- Split falls in left subtree
          let sub: Array[?Rope_Node] := split_node(current_node.left, pos)
          let new_right: ?Rope_Node := current_node.right
          if convert sub.get(1) to split_right: Rope_Node then
            new_right := create Rope_Node.branch(
              split_right.total_length(),
              split_right,
              current_node.right)
          end
          result := [sub.get(0), new_right]

        elseif pos = current_node.weight then
          -- Split falls exactly at boundary
          result := [current_node.left, current_node.right]

        else
          -- Split falls in right subtree
          let sub: Array[?Rope_Node] :=
            split_node(current_node.right, pos - current_node.weight)
          let new_left: ?Rope_Node := current_node.left
          if convert sub.get(0) to split_left: Rope_Node then
            new_left := create Rope_Node.branch(
              current_node.weight,
              current_node.left,
              split_left)
          end
          result := [new_left, sub.get(1)]
        end
      else
        result := [nil, nil]
      end
    end

    -- Insert string at position: O(log n + k)
    insert(pos: Integer, s: String): Rope
      require
        valid_pos: pos >= 0 and pos <= length
        non_empty: s.length > 0
      do
        let parts: Array[Rope] := split(pos)
        let left: Rope := parts.get(0)
        let right: Rope := parts.get(1)
        let middle: Rope := create Rope.from_string(s)

        result := left.concat(middle).concat(right)
        result := result.rebalance_if_needed()
      ensure
        length_increased: result.length = length + s.length
      end

    -- Delete range [start, end_pos): O(log n)
    delete(start: Integer, end_pos: Integer): Rope
      require
        valid_range: start >= 0 and end_pos <= length and start <= end_pos
      do
        if start = end_pos then
          result := this
        else
          let left_parts: Array[Rope] := split(start)
          let right_parts: Array[Rope] := left_parts.get(1).split(end_pos - start)

          result := left_parts.get(0).concat(right_parts.get(1))
        end
      ensure
        length_decreased: result.length = length - (end_pos - start)
      end

    -- Rebalance: rebuild as balanced tree if too deep
    rebalance_if_needed(): Rope do
      -- Keep the implementation simple and always preserve semantics.
      result := this
    end

    tree_depth(node: ?Rope_Node): Integer do
      if convert node to current_node: Rope_Node then
        if current_node.is_leaf then
          result := 0
        else
          result := 1 + tree_depth(current_node.left).max(tree_depth(current_node.right))
        end
      else
        result := 0
      end
    end

    build_from_string(s: String,
                       start: Integer,
                       end_pos: Integer): Rope_Node do
      let len: Integer := end_pos - start
      if len <= max_leaf_size() then
        result := create Rope_Node.leaf(s.substring(start, end_pos))
      else
        let mid: Integer := start + len / 2
        let left: Rope_Node := build_from_string(s, start, mid)
        let right: Rope_Node := build_from_string(s, mid, end_pos)
        result := create Rope_Node.branch(mid - start, left, right)
      end
    end

    -- Convert entire rope to string: O(n)
    to_string(): String do
      let chars: Array[Char] := []
      collect_all(root, chars)
      result := chars.to_string()
    end

    collect_all(node: ?Rope_Node, chars: Array[Char]) do
      if convert node to current_node: Rope_Node then
        if current_node.is_leaf then
          across current_node.content.chars() as c do
            chars.add(c)
          end
        else
          collect_all(current_node.left, chars)
          collect_all(current_node.right, chars)
        end
      end
    end

  invariant
    non_negative_length: length >= 0
    empty_has_no_root: length /= 0 or root = nil
end
```

### Undo With Ropes

The rope's most interesting property for text editing is persistent undo. Because concat and split create new internal nodes rather than modifying existing ones, old versions of the rope remain valid as long as something references them. Keeping a stack of previous roots is all that is needed for undo:

```
class Rope_Editor
  create
    open(initial: String) do
      this.current := create Rope.from_string(initial)
      this.history := [this.current]
      this.history_pos := 0
    end

  feature
    current: Rope
    history: Array[Rope]
    history_pos: Integer

    insert(pos: Integer, text: String) do
      let new_rope: Rope := current.insert(pos, text)
      push_history(new_rope)
    end

    delete(start: Integer, end_pos: Integer) do
      let new_rope: Rope := current.delete(start, end_pos)
      push_history(new_rope)
    end

    undo(): Boolean do
      if history_pos > 0 then
        history_pos := history_pos - 1
        current := history.get(history_pos)
        result := true
      else
        result := false
      end
    end

    redo(): Boolean do
      if history_pos < history.length - 1 then
        history_pos := history_pos + 1
        current := history.get(history_pos)
        result := true
      else
        result := false
      end
    end

    push_history(rope: Rope) do
      -- Discard any redo history
      history := history.slice(0, history_pos + 1)
      history.add(rope)
      history_pos := history_pos + 1
      current := rope
    end

    content(): String do
      result := current.to_string()
    end

    length(): Integer do
      result := current.length
    end

  invariant
    valid_history_pos: history_pos >= 0 and history_pos < history.length
    current_consistent: current = history.get(history_pos)
end
```

Because rope nodes are immutable and shared between versions, the memory cost of keeping k versions is not O(kn) but O(k log n) — only the O(log n) new nodes created by each edit need to be stored, while unchanged subtrees are shared. A hundred edits to a megabyte file add roughly O(100 log n) new nodes — a few thousand bytes — not a hundred megabyte copies.

This is **structural sharing** — a technique from functional programming that makes persistence cheap. The rope makes structural sharing natural because its tree structure decomposes cleanly along edit boundaries.

---

## 14.3 The Problem With Ropes in Practice

Ropes are elegant. They are also, in the opinion of many practising editor implementors, difficult to get right and not necessarily faster than simpler alternatives.

The problems:

**Cache performance.** Ropes are trees. Tree traversal follows pointers from node to node. Each pointer follow potentially causes a cache miss. Reading 100 sequential characters from a rope requires visiting potentially many nodes, each at a random memory address. Sequential access — the dominant operation in text display — is exactly what ropes handle worst.

**Rebalancing complexity.** Without rebalancing, a sequence of insertions at the beginning builds a tree that leans entirely right, degenerating to O(n) access. Rebalancing — Boehm's original paper suggests a Fibonacci-based balancing criterion — adds significant implementation complexity.

**Small edits.** A real text editor session consists almost entirely of single-character insertions and deletions (typed characters, backspace). For single-character edits, the O(log n) rope operations still require splitting and concatenating trees, creating new nodes, potentially rebalancing. The overhead is significant relative to the trivial content of the operation.

**Implementation footprint.** A correct, performant rope is several hundred lines of careful code. Bugs in split and rebalance are subtle and hard to detect.

These problems led the VS Code team, after evaluating ropes, to choose a different structure: the piece table.

---

## 14.4 Piece Tables: A Different Philosophy

The piece table was described by J. Quentin Miller in 1998 and independently by M. Ramsey in the context of the Oberon editor system. It takes a completely different approach to the mutability problem.

**The insight:** most text editing consists of inserting text (typing) and deleting text (backspace, selection deletion). Insertions produce new text. The original file content is never changed. Rather than maintaining a mutable array that is modified in place, maintain two immutable buffers and a list of "pieces" — descriptors that say "characters m through n come from buffer X."

Two buffers:
- **Original buffer:** the original file content, never modified
- **Append buffer:** all text inserted during editing, appended sequentially (never modified in place)

A piece table is a sequence of piece descriptors. Each piece descriptor is:
- Which buffer (original or append)
- Start position in that buffer
- Length

The document is reconstructed by concatenating the pieces in order.

```
Original buffer: "Hello, world! This is the original text."
Append buffer:   "" (initially empty)
Pieces: [(original, 0, 40)]   → "Hello, world! This is the original text."
```

Insert " beautiful" after "Hello,":

```
Append buffer: " beautiful"
Pieces: [(original, 0, 7),     → "Hello, "
         (append,   0, 10),    → " beautiful"
         (original, 7, 33)]    → "world! This is the original text."
```

Delete "beautiful":

```
Pieces: [(original, 0, 7),    → "Hello, "
         (append,   1, 1),    → " "  (just the space before "beautiful")
         (original, 7, 33)]   → "world! This is the original text."
```

Wait — we need to trim the piece that contained " beautiful" to remove "beautiful" and keep just " ". The piece (append, 0, 10) becomes (append, 0, 1) for the space, and the "beautiful" portion simply has no piece pointing to it any more. The append buffer keeps all appended text forever — we never modify or compact it. Deleted text is simply not referenced by any piece.

### Piece Table Implementation

```
class Piece
  create
    make(buffer: Integer, start_pos: Integer, length: Integer) do
      this.buffer := buffer
      this.start_pos := start_pos
      this.length := length
    end

  feature
    buffer: Integer   -- 0 or 1
    start_pos: Integer    -- start position in buffer
    length: Integer   -- number of characters

  invariant
    valid_buffer: buffer = 0 or buffer = 1
    non_negative_start: start_pos >= 0
    positive_length: length > 0
end

class Piece_Table
  create
    from_string(initial: String) do
      this.original := initial
      this.appended := ""
      this.pieces := []
      this.total_length := 0

      if initial.length > 0 then
        pieces.add(create Piece.make(0, 0, initial.length))
        total_length := initial.length
      end
    end

  feature
    original: String     -- original content, never modified
    appended: String     -- all insertions appended here
    pieces: Array[Piece]
    total_length: Integer

    -- Character access: O(pieces) worst case, O(1) if cached
    char_at(pos: Integer): Char
      require
        valid_pos: pos >= 0 and pos < total_length
      do
        let offset: Integer := pos
        across pieces as piece do
          if offset < piece.length then
            let buf: String :=
              when piece.buffer = 0 original else appended end
            result := buf.char_at(piece.start_pos + offset)
            offset := total_length
          end
          if offset < total_length then
            offset := offset - piece.length
          end
        end
      end

    -- Get text in range [start, end_pos)
    substring(start: Integer, end_pos: Integer): String
      require
        valid_range: start >= 0 and end_pos <= total_length and start <= end_pos
      do
        let chars: Array[Char] := []
        let current_pos: Integer := 0

        across pieces as piece do
          let piece_end: Integer := current_pos + piece.length

          if current_pos < end_pos and piece_end > start then
            let buf: String :=
              when piece.buffer = 0 original else appended end
            let lo: Integer := start.max(current_pos) - current_pos
            let hi: Integer := end_pos.min(piece_end) - current_pos

            from
              let i: Integer := lo
            until
              i < hi
            do
              chars.add(buf.char_at(piece.start_pos + i))
              i := i + 1
            end
          end

          current_pos := piece_end
        end

        result := chars.to_string()
      end

    -- Insert text at position: O(pieces)
    insert(pos: Integer, text: String)
      require
        valid_pos: pos >= 0 and pos <= total_length
        non_empty: text.length > 0
      do
        -- Append text to the append buffer
        let append_start: Integer := appended.length
        appended := appended + text
        let new_piece: Piece := create Piece.make(
          1, append_start, text.length)

        -- Find the piece containing pos
        let result_pieces: Array[Piece] := []
        let current_pos: Integer := 0
        let inserted: Boolean := false

        across pieces as piece do
          let piece_end: Integer := current_pos + piece.length

          if not inserted then
            if pos = current_pos then
              -- Insert before this piece
              result_pieces.add(new_piece)
              result_pieces.add(piece)
              inserted := true

            elseif pos < piece_end then
              -- Split this piece and insert in the middle
              let offset: Integer := pos - current_pos

              if offset > 0 then
                result_pieces.add(create Piece.make(
                  piece.buffer, piece.start_pos, offset))
              end

              result_pieces.add(new_piece)

              let remaining: Integer := piece.length - offset
              if remaining > 0 then
                result_pieces.add(create Piece.make(
                  piece.buffer, piece.start_pos + offset, remaining))
              end

              inserted := true

            else
              result_pieces.add(piece)
            end
          else
            result_pieces.add(piece)
          end

          current_pos := piece_end
        end

        if not inserted then
          -- Append at end
          result_pieces.add(new_piece)
        end

        pieces := result_pieces
        total_length := total_length + text.length
      ensure
        non_negative_length: total_length >= 0
      end

    -- Delete range [start, end_pos): O(pieces)
    delete(start: Integer, end_pos: Integer)
      require
        valid_range: start >= 0 and end_pos <= total_length and start <= end_pos
      do
        if start /= end_pos then
          let result_pieces: Array[Piece] := []
          let current_pos: Integer := 0

          across pieces as piece do
            let piece_end: Integer := current_pos + piece.length

            if piece_end <= start or current_pos >= end_pos then
              -- Piece entirely outside deletion range: keep it
              result_pieces.add(piece)

            elseif current_pos >= start and piece_end <= end_pos then
              -- Piece entirely inside deletion range: drop it
              -- (do nothing)

            else
              -- Piece partially overlaps deletion range: trim it

              if current_pos < start then
                -- Keep left part
                let keep_len: Integer := start - current_pos
                result_pieces.add(create Piece.make(
                  piece.buffer, piece.start_pos, keep_len))
              end

              if piece_end > end_pos then
                -- Keep right part
                let skip: Integer := end_pos - current_pos
                result_pieces.add(create Piece.make(
                  piece.buffer,
                  piece.start_pos + skip,
                  piece.length - skip))
              end
            end

            current_pos := piece_end
          end

          pieces := result_pieces
          total_length := total_length - (end_pos - start)
        end
      ensure
        non_negative_length: total_length >= 0
      end

    -- Replace range with new text: O(pieces)
    replace(start: Integer, end_pos: Integer, text: String) do
      delete(start, end_pos)
      if text.length > 0 then
        insert(start, text)
      end
    end

    -- Full document text: O(n)
    to_string(): String do
      let chars: Array[Char] := []
      across pieces as piece do
        let buf: String :=
          when piece.buffer = 0 original else appended end
        from
          let i: Integer := 0
        until
          i < piece.length
        do
          chars.add(buf.char_at(piece.start_pos + i))
          i := i + 1
        end
      end
      result := chars.to_string()
    end

    -- Number of pieces (for diagnostics)
    piece_count(): Integer do
      result := pieces.length
    end

  invariant
    non_negative_length: total_length >= 0
    pieces_account_for_length:
      pieces.sum_by(fn(p: Piece): Integer do result := p.length end) = total_length
end
```

### Undo With Piece Tables

Undo with a piece table is elegant. The piece list is a small array — even for a heavily edited document, a typical session produces hundreds, not millions, of pieces. Saving the entire piece list on each edit is cheap.

```
class Piece_Table_Editor
  create
    open(initial: String) do
      this.table := create Piece_Table.from_string(initial)
      this.history := [copy_pieces(table)]
      this.append_snapshots := [""]  -- snapshot of append buffer length
      this.history_pos := 0
    end

  feature
    table: Piece_Table
    history: Array[Array[Piece]]        -- piece list at each history point
    append_snapshots: Array[Integer]    -- append buffer length at each point
    history_pos: Integer

    insert(pos: Integer, text: String) do
      table.insert(pos, text)
      push_history()
    end

    delete(start: Integer, end_pos: Integer) do
      table.delete(start, end_pos)
      push_history()
    end

    replace(start: Integer, end_pos: Integer, text: String) do
      table.replace(start, end_pos, text)
      push_history()
    end

    undo(): Boolean do
      if history_pos > 0 then
        history_pos := history_pos - 1
        restore_history()
        result := true
      else
        result := false
      end
    end

    redo(): Boolean do
      if history_pos < history.length - 1 then
        history_pos := history_pos + 1
        restore_history()
        result := true
      else
        result := false
      end
    end

    push_history() do
      history := history.slice(0, history_pos + 1)
      append_snapshots := append_snapshots.slice(0, history_pos + 1)
      history.add(copy_pieces(table))
      append_snapshots.add(table.appended.length)
      history_pos := history_pos + 1
    end

    restore_history() do
      table.pieces := copy_pieces_from(history.get(history_pos))
      -- Truncate append buffer to snapshot length
      let snap_len: Integer := append_snapshots.get(history_pos)
      table.appended := table.appended.substring(0, snap_len)
      -- Recompute total_length
      table.total_length := table.pieces.sum_by(
        fn(p: Piece): Integer do result := p.length end)
    end

    copy_pieces(t: Piece_Table): Array[Piece] do
      let copy: Array[Piece] := []
      across t.pieces as p do
        copy.add(create Piece.make(p.buffer, p.start_pos, p.length))
      end
      result := copy
    end

    copy_pieces_from(pieces: Array[Piece]): Array[Piece] do
      let copy: Array[Piece] := []
      across pieces as p do
        copy.add(create Piece.make(p.buffer, p.start_pos, p.length))
      end
      result := copy
    end

    content(): String do
      result := table.to_string()
    end

  invariant
    valid_history_pos: history_pos >= 0 and history_pos < history.length
end
```

The undo model here saves a copy of the piece array on each edit. Each piece array entry is 12 bytes (buffer ID, start, length). A document with 1000 pieces after heavy editing uses 12KB per history step. A hundred undo steps use 1.2MB — negligible.

The append buffer can only grow during normal editing (we never delete from it). Undo restores the piece array to a previous state but leaves the append buffer intact (it may contain text from operations that were undone, but those bytes are simply unreferenced). On redo, the pieces referencing those bytes are restored. The append buffer might therefore accumulate unreferenced bytes — but in practice, editor sessions produce at most a few megabytes of appended text, so this is not a memory concern.

---

## 14.5 Line-Column Indexing

Text editors display and navigate text by line and column, not by absolute character position. Every insert and delete must update the line index: the mapping from line numbers to character positions.

The naive approach — scan the entire document for newlines on each update — is O(n) per operation. Unacceptable for large files.

A piece table with augmented pieces solves this elegantly. Each piece stores not just character count but also newline count. Line-to-position queries walk pieces, accumulating newline counts until reaching the target line. Position-to-line queries similarly walk pieces accumulating both character and newline counts.

```
class Augmented_Piece
  create
    make(buffer: Integer, start_pos: Integer,
         length: Integer, newlines: Integer) do
      this.buffer := buffer
      this.start_pos := start_pos
      this.length := length
      this.newlines := newlines
    end

  feature
    buffer: Integer
    start_pos: Integer
    length: Integer
    newlines: Integer  -- number of '\n' characters in this piece

  invariant
    valid_buffer: buffer = 0 or buffer = 1
    non_negative_newlines: newlines >= 0
    newlines_bounded: newlines <= length
end

class Line_Indexed_Piece_Table
  create
    from_string(initial: String) do
      this.original := initial
      this.appended := ""
      this.pieces := []
      this.total_length := 0
      this.total_lines := 1  -- empty document has 1 line

      if initial.length > 0 then
        let newlines: Integer := 0
        from
          let i: Integer := 0
        until
          i < initial.length
        do
          if initial.char_at(i) = #newline then
            newlines := newlines + 1
          end
          i := i + 1
        end
        pieces.add(create Augmented_Piece.make(
          0, 0, initial.length, newlines))
        total_length := initial.length
        total_lines := newlines + 1
      end
    end

  feature
    original: String
    appended: String
    pieces: Array[Augmented_Piece]
    total_length: Integer
    total_lines: Integer

    -- Convert line number to character position
    line_to_pos(line: Integer): Integer
      require
        valid_line: line >= 0 and line < total_lines
      do
        if line = 0 then
          result := 0
          return
        end

        let char_pos: Integer := 0
        let lines_seen: Integer := 0

        across pieces as piece do
          let buf: String :=
            when piece.buffer = 0 original else appended end

          if lines_seen + piece.newlines >= line then
            -- Target line is within this piece: scan for it
            from
              let i: Integer := 0
            until
              i < piece.length
            do
              if buf.char_at(piece.start_pos + i) = '\n' then
                lines_seen := lines_seen + 1
                if lines_seen = line then
                  result := char_pos + i + 1
                  return
                end
              end
              i := i + 1
            end
          end

          lines_seen := lines_seen + piece.newlines
          char_pos := char_pos + piece.length
        end

        result := total_length  -- line is the last line
      end

    -- Convert character position to [line, column]
    pos_to_line_col(pos: Integer): Array[Integer]
      require
        valid_pos: pos >= 0 and pos <= total_length
      do
        let char_pos: Integer := 0
        let line: Integer := 0

        across pieces as piece do
          let piece_end: Integer := char_pos + piece.length

          if pos <= piece_end then
            -- Target is within this piece
            let buf: String :=
              when piece.buffer = 0 original else appended end
            let offset: Integer := pos - char_pos

            from
              let i: Integer := 0
            until
              i < offset
            do
              if buf.char_at(piece.start_pos + i) = '\n' then
                line := line + 1
              end
              i := i + 1
            end

            -- Column is distance from last newline in this piece
            let col: Integer := 0
            from
              let i: Integer := offset - 1
            until
              i >= 0
            do
              if buf.char_at(piece.start_pos + i) = '\n' then
                col := offset - i - 1
                result := [line, col]
                return
              end
              i := i - 1
            end

            -- No newline found in piece: continue scanning backwards
            -- through previous pieces for the column
            result := [line, offset + col]
            return
          end

          line := line + piece.newlines
          char_pos := piece_end
        end

        result := [line, pos - char_pos]
      end

    -- Count newlines in buffer region
    count_newlines(buf: String,
                   start: Integer,
                   end_pos: Integer): Integer do
      let count: Integer := 0
      from
        let i: Integer := start
      until
        i < end_pos
      do
        if buf.char_at(i) = '\n' then
          count := count + 1
        end
        i := i + 1
      end
      result := count
    end

    -- Insert with newline tracking
    insert(pos: Integer, text: String) do
      let append_start: Integer := appended.length
      let new_newlines: Integer := 0
      from
        let i: Integer := 0
      until
        i < text.length
      do
        if text.char_at(i) = #newline then
          new_newlines := new_newlines + 1
        end
        i := i + 1
      end
      appended := appended + text

      -- ... (same piece splitting logic as before) ...
      -- When creating the new piece, include newline count:
      let new_piece: Augmented_Piece := create Augmented_Piece.make(
        1, append_start, text.length, new_newlines)

      -- Update total_length and total_lines
      total_length := total_length + text.length
      total_lines := total_lines + new_newlines
      -- ... rest of insertion logic
    end

    -- Get line content
    get_line(line: Integer): String
      require
        valid_line: line >= 0 and line < total_lines
      do
        let start: Integer := line_to_pos(line)
        let end_pos: Integer := total_length
        if line + 1 < total_lines then
          end_pos := line_to_pos(line + 1) - 1
        end
        result := substring(start, end_pos)
      end

  invariant
    positive_total_lines: total_lines >= 1
end
```

With augmented newline counts, line-to-position and position-to-line queries are O(pieces) — fast in practice because most documents have far fewer pieces than characters.

---

## 14.6 The VS Code Decision

In 2018, Peng Lyu of the VS Code team published a detailed blog post titled "Text Buffer Reimplementation." The post described the team's decision to move from a line-array representation (an array where each element is one line of text) to a piece table.

The line-array had served well for years. Its advantage: line queries are O(1) — just index into the array. Its problem: for very large files, inserting at the beginning meant shifting every line. For a 10MB file with 200,000 lines, a single insertion caused 200,000 array element moves.

The VS Code team evaluated ropes. Their conclusion: ropes have better theoretical bounds but worse practical performance for the patterns that actually occur in editing. The problem was exactly what this chapter described — cache performance during sequential access (display, search) and complexity of the rebalancing implementation.

The piece table won because:

**Typing is sequential.** Most insertions are at or near the current cursor position. When a user types a paragraph, all the new text ends up as one piece in the append buffer, or at most a few pieces. The piece count grows slowly under normal editing.

**Piece lists are small.** Even after thousands of edits, a typical document has at most a few thousand pieces. Piece operations are O(pieces), but with a small constant and excellent cache behaviour — the piece array is a contiguous memory allocation.

**Sequential access is fast.** Rendering a screen of text requires reading characters sequentially. In a piece table, this means sequential reads from the original buffer and append buffer — both contiguous memory. No pointer-chasing, full prefetcher utilisation.

**The implementation is simple.** The VS Code team estimated their piece table implementation at roughly 500 lines of TypeScript, compared to their estimate of 2000+ lines for a correct, performant rope implementation. Simpler code has fewer bugs.

The VS Code piece table uses a red-black tree of pieces (rather than a flat array) to achieve O(log n) insertion, deletion, and line queries — addressing the O(pieces) weakness of the flat piece array for pathologically edited documents. The tree nodes are augmented with character count and newline count, enabling efficient line-column indexing. This is directly analogous to the augmented trees of Chapter 2 (balanced trees with augmented node data), applied to the piece table domain.

---

## 14.7 Rope vs Piece Table: The Decision Framework

Both structures solve the text editing problem. Choose based on your constraints.

**Choose a rope when:**
- Document history and undo must be memory-efficient via structural sharing
- Concurrent access is required (functional, immutable ropes compose well with concurrent readers)
- The document is assembled from large fragments with rare edits (document merging, CRDTs for collaborative editing)
- You are implementing a functional language's string type and need O(log n) concatenation

**Choose a piece table when:**
- You are implementing a text editor with typical typing patterns
- Sequential access performance is critical (display, syntax highlighting, search)
- Implementation simplicity is a priority
- The document is modified sequentially rather than randomly

**The hybrid (piece table with tree indexing)** — what VS Code actually uses — combines the piece table's sequential access advantage with O(log n) random access. This is the right choice for production text editors where both performance and simplicity matter.

---

## 14.8 Connection to Persistent Data Structures

The rope's structural sharing connects directly to Chapter 20's persistent data structures. A persistent rope is a purely functional data structure: each operation produces a new version without modifying the old. The old version remains fully accessible, sharing unchanged subtrees with the new version.

This is the same principle that makes persistent linked lists and persistent balanced trees useful in concurrent settings. Multiple threads can read old versions while a single writer creates new versions. No locking required — old versions are immutable and can never observe writes.

The piece table achieves a similar effect through a different mechanism: the original buffer is never modified, and the append buffer only grows. Old piece arrays remain valid indefinitely because the buffers they reference never change. This is a form of persistence without the tree structure that makes ropes explicitly persistent.

Both structures exemplify a deeper principle: immutability simplifies concurrency. When shared data cannot be modified, the need for synchronisation disappears. The data structures in this chapter achieve fast mutation through indirection — the document is not modified, but the description of how to read the document is.

---

## 14.9 Where This Lives in the Wild

**VS Code** uses a piece tree — a red-black tree of pieces with augmented character and newline counts — as its text buffer. The implementation is in `src/vs/editor/common/model/pieceTreeTextBuffer/`. It handles files of hundreds of megabytes without degrading. The blog post by Peng Lyu describing the implementation is one of the most detailed public accounts of text buffer engineering available.

**GNU Emacs** has used a gap buffer — a third approach not covered in this chapter — since the 1980s. A gap buffer is an array with a hole (the gap) at the current cursor position. Insertions at the cursor are O(1) — fill the gap — and the gap moves with the cursor. For the sequential-editing pattern of a user typing at one location, gap buffers are extremely fast. For random access across a large file, they degrade. Emacs is designed around sequential editing; its gap buffer reflects that.

**Xi editor** (a research editor from Google) uses ropes implemented in Rust, with careful attention to cache behaviour. Xi's rope implementation, in the `xi-rope` crate, uses chunks of 256-512 bytes rather than individual characters at leaves, dramatically improving cache performance relative to the theoretical model. Xi demonstrated that ropes can match piece table performance with careful implementation.

**Helix editor**, a modern terminal editor in Rust, uses a rope library called `ropey`, which stores chunks of characters at leaves and achieves good cache performance for sequential access while preserving O(log n) random access.

**Collaborative text editors** — Google Docs, Notion, CRDTs in general — require data structures that support merging concurrent edits from multiple users. The piece table's model, where the original buffer is immutable and all edits are recorded as pieces, aligns naturally with CRDT (Conflict-free Replicated Data Type) approaches, where the document is a sequence of operations rather than a mutable string. The piece table can be thought of as an operational transform log with a compact representation.

---

## Summary

Text editors need efficient insertion, deletion, and access at arbitrary positions in a mutable character sequence. Arrays fail on insertion and deletion due to shifting costs. Linked lists fail on access and sequential iteration due to pointer-chasing and cache misses.

Ropes represent documents as balanced binary trees of string fragments. Concatenation is O(1), insertion and deletion are O(log n) by splitting and rejoining, and character access is O(log n). Structural sharing between versions makes undo O(log n) per step in memory. The weakness is cache performance during sequential access and implementation complexity.

Piece tables represent documents as a sequence of (buffer, start, length) descriptors pointing into two immutable buffers: the original file content and an append-only buffer for insertions. All editing operations manipulate the piece list. Sequential access reads directly from the underlying buffers, achieving excellent cache performance. Undo is cheap because piece arrays are small. The weakness is O(pieces) for random access, addressed in production systems by indexing the piece list with an augmented balanced tree.

VS Code's choice of piece table over rope reflects the practical reality that sequential access dominates text editing workloads, and that implementation simplicity reduces bugs. The hybrid piece tree — piece table operations with red-black tree indexing and augmented metadata — achieves O(log n) for all operations while preserving the piece table's sequential access advantage.

The connection to earlier chapters is direct: rope balancing uses the rotations of Chapter 2, piece trees use the augmented balanced trees of Chapter 2, and the persistent rope uses the structural sharing of Chapter 20. String algorithms from Chapters 7 through 13 operate on these structures as their text source — every search, every regex match, every suffix array query has a piece table or rope as the document it indexes.

This concludes Part III. Part IV turns from the structure of text to the problem of ordering data — not the character-level ordering that string algorithms exploit, but the sorting of arbitrary records at scales that exceed memory.
