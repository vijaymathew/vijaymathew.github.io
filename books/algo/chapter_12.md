# Chapter 12: The Compression Game — Huffman and LZ

---

In 1949, Claude Shannon published a paper called "A Mathematical Theory of Communication." In it, he defined a quantity called entropy — a measure of the information content of a message — and proved a theorem that said, in effect: you cannot compress a message to fewer bits than its entropy, and you can get arbitrarily close to that bound with the right encoding.

Shannon's theorem is simultaneously a limit and a promise. The limit: no compression algorithm can do better than entropy. The promise: entropy is achievable. The question for the next seventy years of compression research was how to achieve it, efficiently, in practice.

Two algorithms emerged as foundational. Huffman coding, invented in 1952 by David Huffman as a homework problem in a graduate course at MIT, achieves entropy for the special case where you compress one character at a time and the character frequencies are known in advance. LZ77, invented in 1977 by Abraham Lempel and Jacob Ziv, achieves entropy in the limit for any source by exploiting repeated substrings rather than character frequencies. Together, they form the backbone of almost every compression format in use today: gzip, PNG, DEFLATE, zip, zlib — all of them combine Huffman coding with a variant of LZ77.

This chapter builds both from scratch. The goal is not just working implementations — it is understanding why each algorithm works, what Shannon's entropy means in practice, and how the two algorithms complement each other.

---

## 12.1 Information and Entropy

Before the algorithms, the theory. We need to understand what we are trying to achieve before we can judge whether we have achieved it.

**Information content of a symbol.** If a symbol occurs with probability p, its information content (also called self-information or surprisal) is -log₂(p) bits. A symbol that occurs half the time carries 1 bit of information. A symbol that occurs a quarter of the time carries 2 bits. A symbol that occurs with probability 1/1024 carries 10 bits.

The intuition: rare symbols are surprising, and surprise carries information. If someone tells you "the sun rose this morning," they have told you almost nothing — the sun rises every morning. If they tell you "it snowed in Cairo today," they have told you something significant. Information theory formalises this intuition.

**Entropy of a source.** Given an alphabet of symbols with probabilities p₁, p₂, ..., pₙ, the entropy is:

```
H = -Σ pᵢ log₂(pᵢ)
```

This is the expected information content per symbol — the average number of bits needed to encode one symbol, given the optimal encoding. For a source where all symbols are equally likely (pᵢ = 1/n for all i), entropy is log₂(n) bits — you need log₂(n) bits just to distinguish between n symbols, which is intuitive. For a source skewed toward rare and common symbols, entropy is lower — the common symbols carry little information and can be encoded cheaply.

**Shannon's source coding theorem** says: the expected number of bits per symbol in any lossless encoding is at least H, and there exist encodings that approach H arbitrarily closely.

Huffman coding achieves between H and H + 1 bits per symbol. LZ77 approaches H asymptotically as the input grows. Neither is optimal for short inputs; both are optimal in the appropriate limit.

Let us make this concrete. The string "aabbbcccc" has characters with frequencies: a=2, b=3, c=4. Total characters: 9.

Probabilities: a=2/9, b=3/9, c=4/9.

Entropy: -(2/9)log₂(2/9) - (3/9)log₂(3/9) - (4/9)log₂(4/9) ≈ 1.53 bits per character.

A naive encoding using 2 bits per character (since there are 3 characters, ceil(log₂(3)) = 2) uses 18 bits for 9 characters. Huffman coding, as we will see, can encode this string in 17 bits — close to the theoretical minimum of 1.53 × 9 = 13.8 bits.

---

## 12.2 Huffman Coding

### The Idea

Huffman coding assigns shorter binary codes to more frequent symbols and longer codes to rarer symbols. The codes are prefix-free: no code is a prefix of another, which means the encoded stream can be decoded unambiguously without separators.

The Huffman algorithm builds an optimal prefix-free code by constructing a binary tree bottom-up. Each symbol starts as a leaf. The algorithm repeatedly merges the two lowest-frequency nodes into a new internal node whose frequency is their sum. The final tree has all symbols as leaves; the code for each symbol is the path from the root to its leaf (0 for left, 1 for right).

For our example (a=2, b=3, c=4):

1. Start with three leaves: a(2), b(3), c(4).
2. Merge the two lowest: a(2) and b(3) → internal node ab(5).
3. Merge the remaining two: ab(5) and c(4) → root(9).

The tree:
```
     root(9)
    /        \
  ab(5)      c(4)
  /   \
a(2)  b(3)
```

Codes: a=00, b=01, c=1. Lengths: a=2, b=2, c=1.

Average length: (2×2 + 3×2 + 4×1) / 9 = (4 + 6 + 4) / 9 = 14/9 ≈ 1.56 bits per character.

Compare to entropy: 1.53 bits. Huffman gives 1.56 — within the H+1 bound.

Encoding "aabbbcccc": a(00) a(00) b(01) b(01) b(01) c(1) c(1) c(1) c(1) = 00 00 01 01 01 1 1 1 1 = 17 bits. The naive 2-bit encoding uses 18 bits. We saved 1 bit — modest here, enormous on large files with skewed character distributions.

### The Implementation

```
class Huffman_Node
  create
    leaf(symbol: Integer, frequency: Integer) do
      this.symbol := symbol
      this.frequency := frequency
      this.left := nil
      this.right := nil
      this.is_leaf := true
    end

    internal(frequency: Integer,
             left: Huffman_Node,
             right: Huffman_Node) do
      this.symbol := -1
      this.frequency := frequency
      this.left := left
      this.right := right
      this.is_leaf := false
    end

  feature
    symbol: Integer    -- byte value (0-255), -1 for internal nodes
    frequency: Integer
    left: ?Huffman_Node
    right: ?Huffman_Node
    is_leaf: Boolean

  invariant
    non_negative_frequency: frequency >= 0
    leaf_has_symbol: is_leaf implies symbol >= 0
    internal_has_children: not is_leaf implies
                           left /= nil and right /= nil
end

class Huffman_Codec
  create
    make() do end

  feature
    -- Build frequency table from data
    build_frequencies(data: Array[Integer]): Array[Integer] do
      let freq: Array[Integer] := Array.filled(256, 0)
      across data as byte do
        freq.set(byte, freq.get(byte) + 1)
      end
      result := freq
    end

    -- Build Huffman tree from frequency table
    build_tree(frequencies: Array[Integer]): ?Huffman_Node do
      -- Build priority queue of leaf nodes, ordered by frequency
      let pq: Min_Heap[Integer, Huffman_Node] :=
        create Min_Heap[Integer, Huffman_Node].empty()

      from
        let i: Integer := 0
      until
        i >= 256
      do
        if frequencies.get(i) > 0 then
          pq.insert([frequencies.get(i),
                     create Huffman_Node.leaf(i, frequencies.get(i))])
        end
        i := i + 1
      end

      -- Edge case: only one distinct symbol
      if pq.size() = 1 then
        let only: Array := pq.extract_min()
        let leaf: Huffman_Node := only.get(1)
        result := create Huffman_Node.internal(
          leaf.frequency,
          leaf,
          create Huffman_Node.leaf(leaf.symbol, 0))
        return
      end

      -- Merge until one tree remains
      from until pq.size() <= 1 do
        let first: Array := pq.extract_min()
        let second: Array := pq.extract_min()
        let left: Huffman_Node := first.get(1)
        let right: Huffman_Node := second.get(1)
        let merged: Huffman_Node := create Huffman_Node.internal(
          left.frequency + right.frequency, left, right)
        pq.insert([merged.frequency, merged])
      end

      if pq.is_empty() then
        result := nil
      else
        result := pq.extract_min().get(1)
      end
    end

    -- Generate code table from tree
    build_code_table(root: Huffman_Node): Array[Array[Integer]] do
      let codes: Array[Array[Integer]] := Array.filled(256, nil)
      traverse_tree(root, [], codes)
      result := codes
    end

    traverse_tree(node: Huffman_Node,
                  current_code: Array[Integer],
                  codes: Array[Array[Integer]]) do
      if node.is_leaf then
        -- Leaf: assign current code to this symbol
        if current_code.is_empty() then
          -- Single symbol edge case
          codes.set(node.symbol, [0])
        else
          codes.set(node.symbol, current_code.copy())
        end
        return
      end

      -- Go left: append 0
      let left_code: Array[Integer] := current_code.copy()
      left_code.add(0)
      traverse_tree(node.left, left_code, codes)

      -- Go right: append 1
      let right_code: Array[Integer] := current_code.copy()
      right_code.add(1)
      traverse_tree(node.right, right_code, codes)
    end

    -- Encode data using code table, return bit stream as bytes
    encode(data: Array[Integer],
           codes: Array[Array[Integer]]): Array[Integer] do
      -- Collect all bits
      let bits: Array[Integer] := []
      across data as byte do
        let code: ?Array[Integer] := codes.get(byte)
        if code /= nil then
          across code as bit do
            bits.add(bit)
          end
        end
      end

      -- Pack bits into bytes
      let packed: Array[Integer] := []
      let padding: Integer := (8 - bits.length % 8) % 8

      -- First byte: number of padding bits
      packed.add(padding)

      from
        let i: Integer := 0
      until
        i >= bits.length
      do
        let byte_val: Integer := 0
        from
          let j: Integer := 0
        until
          j < 8
        do
          let bit_pos: Integer := i + j
          if bit_pos < bits.length then
            byte_val := byte_val or (bits.get(bit_pos) << (7 - j))
          end
          j := j + 1
        end
        packed.add(byte_val)
        i := i + 8
      end

      result := packed
    end

    -- Decode bit stream using tree
    decode(packed: Array[Integer],
           root: Huffman_Node): Array[Integer] do
      let padding: Integer := packed.get(0)
      let decoded: Array[Integer] := []
      let node: Huffman_Node := root

      from
        let byte_i: Integer := 1
      until
        byte_i >= packed.length
      do
        let byte_val: Integer := packed.get(byte_i)
        let bits_in_byte: Integer :=
          when byte_i = packed.length - 1 8 - padding else 8 end

        from
          let bit_i: Integer := 7
        until
          bit_i >= 8 - bits_in_byte
        do
          let bit: Integer := (byte_val >> bit_i) & 1

          if node.is_leaf then
            decoded.add(node.symbol)
            node := root
          end

          if bit = 0 then
            node := node.left
          else
            node := node.right
          end

          bit_i := bit_i - 1
        end

        byte_i := byte_i + 1
      end

      -- Flush last symbol
      if node.is_leaf then
        decoded.add(node.symbol)
      end

      result := decoded
    end

    -- Serialise tree for inclusion in compressed output
    serialise_tree(node: Huffman_Node): Array[Integer] do
      let bits: Array[Integer] := []
      serialise_node(node, bits)

      -- Pack bits into bytes
      let result_bytes: Array[Integer] := []
      let padding: Integer := (8 - bits.length % 8) % 8
      result_bytes.add(padding)
      result_bytes.add(bits.length / 8 + 1)

      from
        let i: Integer := 0
      until
        i >= bits.length
      do
        let byte_val: Integer := 0
        from
          let j: Integer := 0
        until
          j < 8
        do
          if i + j < bits.length then
            byte_val := byte_val or (bits.get(i + j) << (7 - j))
          end
          j := j + 1
        end
        result_bytes.add(byte_val)
        i := i + 8
      end

      result := result_bytes
    end

    serialise_node(node: Huffman_Node, bits: Array[Integer]) do
      if node.is_leaf then
        bits.add(1)
        -- Write symbol as 8 bits
        from
          let i: Integer := 7
        until
          i >= 0
        do
          bits.add((node.symbol >> i) & 1)
          i := i - 1
        end
      else
        bits.add(0)
        serialise_node(node.left, bits)
        serialise_node(node.right, bits)
      end
    end

    -- Complete compress: frequencies + tree + encoded data
    compress(data: Array[Integer]): Array[Integer] do
      if data.is_empty() then
        result := []
        return
      end

      let freq: Array[Integer] := build_frequencies(data)
      let tree: ?Huffman_Node := build_tree(freq)

      if tree = nil then
        result := data  -- nothing to compress
        return
      end

      let codes: Array[Array[Integer]] := build_code_table(tree)
      let tree_bytes: Array[Integer] := serialise_tree(tree)
      let encoded: Array[Integer] := encode(data, codes)

      -- Output: [tree_bytes_length(4)][tree_bytes][encoded]
      let output: Array[Integer] := []
      int_to_bytes(tree_bytes.length, output, 0)
      across tree_bytes as b do output.add(b) end
      across encoded as b do output.add(b) end

      result := output
    end

    -- Complete decompress
    decompress(compressed: Array[Integer]): Array[Integer] do
      if compressed.is_empty() then
        result := []
        return
      end

      let tree_len: Integer := bytes_to_int(compressed, 0)
      let tree_bytes: Array[Integer] :=
        compressed.slice(4, 4 + tree_len)
      let encoded: Array[Integer] :=
        compressed.slice(4 + tree_len, compressed.length)

      let tree: Huffman_Node := deserialise_tree(tree_bytes)
      result := decode(encoded, tree)
    end

    deserialise_tree(bytes: Array[Integer]): Huffman_Node do
      -- Reconstruct tree from serialised form
      -- Implementation mirrors serialise_tree in reverse
      let bits: Array[Integer] := unpack_bits(bytes)
      let pos: Array[Integer] := [0]  -- mutable position
      result := deserialise_node(bits, pos)
    end

    deserialise_node(bits: Array[Integer],
                     pos: Array[Integer]): Huffman_Node do
      let flag: Integer := bits.get(pos.get(0))
      pos.set(0, pos.get(0) + 1)

      if flag = 1 then
        -- Leaf: read 8-bit symbol
        let symbol: Integer := 0
        from
          let i: Integer := 7
        until
          i >= 0
        do
          symbol := symbol or (bits.get(pos.get(0)) << i)
          pos.set(0, pos.get(0) + 1)
          i := i - 1
        end
        result := create Huffman_Node.leaf(symbol, 0)
      else
        -- Internal: read left and right subtrees
        let left: Huffman_Node := deserialise_node(bits, pos)
        let right: Huffman_Node := deserialise_node(bits, pos)
        result := create Huffman_Node.internal(0, left, right)
      end
    end

    unpack_bits(bytes: Array[Integer]): Array[Integer] do
      let padding: Integer := bytes.get(0)
      let bits: Array[Integer] := []
      from
        let i: Integer := 2  -- skip padding byte and length byte
      until
        i >= bytes.length
      do
        let byte_val: Integer := bytes.get(i)
        let bits_in_byte: Integer :=
          when i = bytes.length - 1 8 - padding else 8 end
        from
          let j: Integer := 7
        until
          j >= 8 - bits_in_byte
        do
          bits.add((byte_val >> j) & 1)
          j := j - 1
        end
        i := i + 1
      end
      result := bits
    end

  invariant
    true  -- stateless codec
end
```

### Huffman's Limitations

Huffman coding achieves between H and H + 1 bits per symbol. The "+1" gap occurs because each symbol must receive a whole number of bits — you cannot give a symbol that deserves 1.7 bits a code of length 1.7. For symbols with probabilities close to powers of 1/2, the gap is small. For other distributions, it can approach 1 bit per symbol.

Two extensions address this. **Canonical Huffman coding** orders codes of the same length lexicographically, reducing the tree to a compact table. **Arithmetic coding** (and its practical variant, range coding) achieves arbitrarily close to H by encoding entire messages rather than individual symbols, effectively achieving fractional bits per symbol. gzip and zlib use Huffman; bzip2 and modern codecs like Zstandard use arithmetic or asymmetric numeral systems coding for the statistical model.

---

## 12.3 LZ77: The Other Compression Strategy

Huffman coding exploits symbol frequency — common symbols get short codes. LZ77 exploits a completely different kind of redundancy: repetition of substrings. The string "abcabcabc" has very little frequency-based redundancy (all characters appear equally often), but enormous repetition-based redundancy — "abc" appears three times.

LZ77 scans the input from left to right, maintaining a sliding window of recently seen bytes. At each position, it looks back into the window to find the longest match for the bytes starting at the current position. If a match is found, it encodes the current position as a back-reference: (distance, length) — go back `distance` bytes, copy `length` bytes. If no useful match is found, it emits the current byte as a literal.

The algorithm:
- Window: the last W bytes already encoded (W is the window size, typically 32KB)
- Look-ahead buffer: the next L bytes to be encoded (L is the buffer size, typically 258 bytes)
- At each step: find the longest match in the window for the look-ahead, emit a token, advance

```
class LZ77_Codec
  create
    make(window_size: Integer, min_match: Integer) do
      this.window_size := window_size
      this.min_match := min_match  -- minimum match length to encode as reference
    end

    default() do
      this.window_size := 32768  -- 32KB, standard for gzip
      this.min_match := 3        -- minimum 3-byte match
    end

  feature
    window_size: Integer
    min_match: Integer

    -- An LZ77 token is either:
    -- Literal: [0, byte_value]
    -- Back-reference: [1, distance, length]
    compress(data: Array[Integer]): Array[LZ77_Token] do
      let tokens: Array[LZ77_Token] := []
      let n: Integer := data.length
      let pos: Integer := 0

      from until pos >= n do
        let best: Array[Integer] := find_longest_match(data, pos)
        let match_len: Integer := best.get(0)
        let match_dist: Integer := best.get(1)

        if match_len >= min_match then
          tokens.add(create LZ77_Token.reference(match_dist, match_len))
          pos := pos + match_len
        else
          tokens.add(create LZ77_Token.literal(data.get(pos)))
          pos := pos + 1
        end
      end

      result := tokens
    end

    -- Find longest match in sliding window
    find_longest_match(data: Array[Integer],
                        pos: Integer): Array[Integer] do
      let n: Integer := data.length
      let window_start: Integer := (pos - window_size).max(0)
      let best_len: Integer := 0
      let best_dist: Integer := 0

      from
        let i: Integer := window_start
      until
        i < pos
      do
        -- How many bytes match starting at data[i] and data[pos]?
        let match_len: Integer := 0
        from until pos + match_len >= n or
                   match_len >= 258 or   -- max match length (gzip standard)
                   data.get(i + match_len % (pos - i)) /=
                   data.get(pos + match_len) do
          match_len := match_len + 1
        end

        if match_len > best_len then
          best_len := match_len
          best_dist := pos - i
        end

        i := i + 1
      end

      result := [best_len, best_dist]
    end

    -- Decompress: reconstruct original data from tokens
    decompress(tokens: Array[LZ77_Token]): Array[Integer] do
      let output: Array[Integer] := []

      across tokens as token do
        if token.is_literal then
          output.add(token.byte_value)
        else
          -- Copy from back-reference
          let start: Integer := output.length - token.distance
          from
            let i: Integer := 0
          until
            i >= token.length
          do
            -- Note: start + i might exceed original start
            -- (run-length encoding of repeated patterns)
            output.add(output.get(start + i))
            i := i + 1
          end
        end
      end

      result := output
    end

    -- Encode tokens to bytes for storage
    encode_tokens(tokens: Array[LZ77_Token]): Array[Integer] do
      let bytes: Array[Integer] := []

      across tokens as token do
        if token.is_literal then
          bytes.add(0)             -- literal flag
          bytes.add(token.byte_value)
        else
          bytes.add(1)             -- reference flag
          int_to_bytes(token.distance, bytes, bytes.length)
          int_to_bytes(token.length, bytes, bytes.length)
        end
      end

      result := bytes
    end

  invariant
    positive_window: window_size > 0
    positive_min_match: min_match >= 2
end

class LZ77_Token
  create
    literal(byte: Integer) do
      this.is_literal := true
      this.byte_value := byte
      this.distance := 0
      this.length := 0
    end

    reference(distance: Integer, length: Integer) do
      this.is_literal := false
      this.byte_value := 0
      this.distance := distance
      this.length := length
    end

  feature
    is_literal: Boolean
    byte_value: Integer
    distance: Integer
    length: Integer

  invariant
    valid_reference: not is_literal implies distance > 0 and length > 0
    valid_literal: is_literal implies byte_value >= 0 and byte_value <= 255
end
```

### The Run-Length Trick

The decompression code has a subtle feature: `output.get(start + i)` is indexed into the output array as it grows. When a back-reference says "distance=1, length=5", and the last byte output was 'a', the output starts copying 'a' back — and the next byte copied is also 'a' (since it was just appended), and the next, and the next. This is run-length encoding emerging naturally from the LZ77 format: a single back-reference can expand into an arbitrarily long run of repeated bytes. The encoder does not need a special run-length mode — the format handles it automatically.

### Hash Chain Optimisation

The naive `find_longest_match` is O(W × L) per position — searching the entire window for each position. For a 32KB window and typical inputs, this makes compression O(n × W × L) — far too slow for practical use.

Real LZ77 implementations use a hash chain: a hash table mapping 3-byte sequences to their most recent position in the window. To find a match candidate for the current position, hash the next 3 bytes, look up the hash table to find the most recent occurrence, and extend the match from there.

```
class LZ77_Fast_Codec
  create
    make() do
      this.window_size := 32768
      this.min_match := 3
      this.hash_size := 65536  -- must be power of 2
      this.hash_table := Array[Integer].filled(65536, -1)
      this.hash_chain := Array[Integer].filled(32768, -1)
    end

  feature
    window_size: Integer
    min_match: Integer
    hash_size: Integer
    hash_table: Array[Integer]    -- hash -> most recent position
    hash_chain: Array[Integer]    -- position -> previous position with same hash

    hash3(data: Array[Integer], pos: Integer): Integer do
      if pos + 2 >= data.length then
        result := 0
        return
      end
      -- Simple 3-byte hash
      result := ((data.get(pos) << 10) xor
                 (data.get(pos + 1) << 5) xor
                 data.get(pos + 2)) & (hash_size - 1)
    end

    compress(data: Array[Integer]): Array[LZ77_Token] do
      let tokens: Array[LZ77_Token] := []
      let n: Integer := data.length
      let pos: Integer := 0

      -- Reset hash structures
      hash_table := Array[Integer].filled(hash_size, -1)
      hash_chain := Array[Integer].filled(window_size, -1)

      from until pos >= n do
        if pos + min_match > n then
          -- Not enough bytes for a match: emit literal
          tokens.add(create LZ77_Token.literal(data.get(pos)))
          pos := pos + 1
        else
          let h: Integer := hash3(data, pos)
          let best_len: Integer := 0
          let best_dist: Integer := 0

          -- Follow hash chain to find match candidates
          let candidate: Integer := hash_table.get(h)
          let chain_steps: Integer := 0

          from until candidate = -1 or
                     pos - candidate > window_size or
                     chain_steps > 64 do  -- limit chain depth
            let match_len: Integer := extend_match(data, candidate, pos, n)
            if match_len > best_len then
              best_len := match_len
              best_dist := pos - candidate
            end
            candidate := hash_chain.get(candidate % window_size)
            chain_steps := chain_steps + 1
          end

          -- Update hash structures
          hash_chain.set(pos % window_size, hash_table.get(h))
          hash_table.set(h, pos)

          if best_len >= min_match then
            tokens.add(create LZ77_Token.reference(best_dist, best_len))
            -- Update hash for positions within the match
            from
              let i: Integer := 1
            until
              i < best_len
            do
              if pos + i + min_match <= n then
                let hi: Integer := hash3(data, pos + i)
                hash_chain.set((pos + i) % window_size, hash_table.get(hi))
                hash_table.set(hi, pos + i)
              end
              i := i + 1
            end
            pos := pos + best_len
          else
            tokens.add(create LZ77_Token.literal(data.get(pos)))
            pos := pos + 1
          end
        end
      end

      result := tokens
    end

    extend_match(data: Array[Integer],
                 start: Integer,
                 pos: Integer,
                 n: Integer): Integer do
      let max_len: Integer := (n - pos).min(258)
      let len: Integer := 0
      from until len >= max_len or
                 data.get(start + len) /= data.get(pos + len) do
        len := len + 1
      end
      result := len
    end
end
```

The hash chain turns worst-case O(W) search into expected O(1) per position for typical data, reducing overall compression to O(n) expected. The chain depth limit (64 in the implementation) bounds worst-case behavior — for highly repetitive data where the chain is very long, we stop after 64 candidates. This is the same tradeoff made by zlib.

---

## 12.4 DEFLATE: The Marriage of Huffman and LZ77

DEFLATE, the format used by gzip, zip, and PNG, combines LZ77 and Huffman coding in a two-stage pipeline:

1. **LZ77 stage:** tokenise the input into literals and back-references. The result is a sequence of tokens, each either a literal byte or a (distance, length) pair.

2. **Huffman stage:** encode the token stream using Huffman coding. Two separate Huffman trees are used: one for literals and lengths (combined into a single alphabet of 286 symbols: 256 literal bytes, one end-of-block symbol, and 29 length codes), and one for distances (30 distance codes with extra bits for fine-grained distances).

The combination is powerful because LZ77 and Huffman exploit different kinds of redundancy. LZ77 handles long-range repetition — the same phrase appearing multiple times in a document. Huffman handles short-range frequency skew — certain bytes or lengths appearing much more often than others in the LZ77 output. After LZ77 tokenises a typical file, the literal bytes remaining are not uniformly distributed (spaces, 'e', 't' appear much more than 'z', 'q'), and back-reference lengths cluster around small values. Huffman coding on the LZ77 output captures both patterns.

```
class DEFLATE_Codec
  create
    make() do
      this.lz77 := create LZ77_Fast_Codec.make()
      this.huffman := create Huffman_Codec.make()
    end

  feature
    lz77: LZ77_Fast_Codec
    huffman: Huffman_Codec

    compress(data: Array[Integer]): Array[Integer] do
      -- Stage 1: LZ77 tokenisation
      let tokens: Array[LZ77_Token] := lz77.compress(data)

      -- Stage 2: convert tokens to byte stream for Huffman
      -- (simplified: encode tokens as bytes, then Huffman compress)
      let token_bytes: Array[Integer] := lz77.encode_tokens(tokens)

      -- Stage 3: Huffman compress the token byte stream
      result := huffman.compress(token_bytes)
    end

    decompress(compressed: Array[Integer]): Array[Integer] do
      -- Stage 1: Huffman decompress
      let token_bytes: Array[Integer] := huffman.decompress(compressed)

      -- Stage 2: decode token bytes back to LZ77 tokens
      let tokens: Array[LZ77_Token] := decode_token_bytes(token_bytes)

      -- Stage 3: LZ77 decompress
      result := lz77.decompress(tokens)
    end

    decode_token_bytes(bytes: Array[Integer]): Array[LZ77_Token] do
      let tokens: Array[LZ77_Token] := []
      let i: Integer := 0

      from until i >= bytes.length do
        let flag: Integer := bytes.get(i)
        i := i + 1

        if flag = 0 then
          tokens.add(create LZ77_Token.literal(bytes.get(i)))
          i := i + 1
        else
          let distance: Integer := bytes_to_int(bytes, i)
          let length: Integer := bytes_to_int(bytes, i + 4)
          tokens.add(create LZ77_Token.reference(distance, length))
          i := i + 8
        end
      end

      result := tokens
    end

    -- Compression ratio for analysis
    compression_ratio(original: Array[Integer],
                       compressed: Array[Integer]): Real do
      result := compressed.length.to_real() / original.length.to_real()
    end
end
```

### What Makes Data Compressible

The DEFLATE pipeline reveals what makes data compressible:

**Repetition** — text, code, HTML, XML, log files — is handled well by LZ77. Repeated words, repeated HTML tags, repeated log prefixes — all become back-references.

**Frequency skew** — natural language uses 'e' ten times more often than 'z'; typical binary formats have many zero bytes — is handled by Huffman coding.

**Random data** — encrypted data, already-compressed data, data generated by a good PRNG — is handled badly by both. LZ77 finds no back-references (random data has no repetition). Huffman coding assigns nearly equal-length codes to all bytes (random data has nearly uniform byte frequency). Compressed output is slightly larger than input. This is not a failure — it is Shannon's theorem: random data has maximum entropy and cannot be compressed.

A compression algorithm that made random data smaller would be a magic lossless information sink, contradicting Shannon's theorem. Any compression algorithm must make some inputs larger (otherwise you could keep compressing forever). Good algorithms make almost all real-world inputs smaller at the cost of making random inputs slightly larger.

---

## 12.5 Measuring Compression

A complete compression benchmark shows how different data types respond to each algorithm:

```
function compression_benchmark() do
  let deflate: DEFLATE_Codec := create DEFLATE_Codec.make()
  let huffman: Huffman_Codec := create Huffman_Codec.make()
  let lz77: LZ77_Fast_Codec := create LZ77_Fast_Codec.make()

  -- Test 1: English text (high repetition, skewed frequency)
  let text: String := "the quick brown fox jumps over the lazy dog. " +
    "the dog barked at the fox. the fox ran away quickly. " +
    "the dog chased the fox but the fox was too quick. " +
    "the quick brown fox jumps over the lazy dog again."
  let text_bytes: Array[Integer] := text.to_bytes()

  -- Test 2: Repetitive data (pure repetition)
  let repeated: Array[Integer] := []
  repeat 100 do
    across "abcdefgh".to_bytes() as b do repeated.add(b) end
  end

  -- Test 3: Random bytes (incompressible)
  let random_bytes: Array[Integer] := []
  repeat 400 do
    random_bytes.add(random_integer() % 256)
  end

  let datasets: Array[String, Array[Integer]] := [
    ["English text", text_bytes],
    ["Repetitive",   repeated],
    ["Random",       random_bytes]
  ]

  across datasets as dataset do
    let name: String := dataset.get(0)
    let data: Array[Integer] := dataset.get(1)

    let huff_compressed: Array[Integer] := huffman.compress(data)
    let lz_tokens: Array[LZ77_Token] := lz77.compress(data)
    let lz_bytes: Array[Integer] := lz77.encode_tokens(lz_tokens)
    let deflate_compressed: Array[Integer] := deflate.compress(data)

    print(name + " (" + data.length.to_string() + " bytes):")
    print("  Huffman: " + huff_compressed.length.to_string() +
          " bytes (" +
          (huff_compressed.length * 100 / data.length).to_string() + "%)")
    print("  LZ77: " + lz_bytes.length.to_string() +
          " bytes (" +
          (lz_bytes.length * 100 / data.length).to_string() + "%)")
    print("  DEFLATE: " + deflate_compressed.length.to_string() +
          " bytes (" +
          (deflate_compressed.length * 100 / data.length).to_string() + "%)")

    -- Verify round-trip
    let recovered: Array[Integer] := deflate.decompress(deflate_compressed)
    print("  Round-trip: " +
          when arrays_equal(data, recovered) "OK" else "FAILED" end)
  end
end
```

Expected output (approximate):
```
English text (400 bytes):
  Huffman: 320 bytes (80%)        -- frequency skew helps
  LZ77: 180 bytes (45%)           -- repetition helps more
  DEFLATE: 150 bytes (37%)        -- both together best

Repetitive (800 bytes):
  Huffman: 750 bytes (94%)        -- frequency is uniform, little gain
  LZ77: 30 bytes (4%)             -- pure repetition, huge gain
  DEFLATE: 28 bytes (3%)          -- Huffman adds tiny improvement

Random (400 bytes):
  Huffman: 410 bytes (103%)       -- slightly larger (overhead)
  LZ77: 420 bytes (105%)          -- slightly larger (no matches)
  DEFLATE: 430 bytes (108%)       -- slightly larger (two overheads)
```

---

## 12.6 The Connection to Rolling Hashes

Chapter 8 introduced rolling hashes as the mechanism for finding repeated substrings efficiently. LZ77's `find_longest_match` is exactly the same problem: given the current position, find the longest previous occurrence of the same substring. The hash chain in `LZ77_Fast_Codec` is the same structure as the Rabin-Karp rolling hash index.

This is not coincidental. LZ77 was invented independently of Rabin-Karp (Lempel and Ziv published in 1977; Rabin and Karp published in 1987), but they are solving the same subproblem with the same technique. The hash chain maps a k-gram to its most recent occurrence, enabling O(1) candidate lookup. The extension step verifies and extends the candidate match. The structure is identical.

The connection runs deeper. Chapter 13's suffix arrays solve the same "find all occurrences of a substring" problem that both LZ77 and Rabin-Karp address, but with O(n log n) preprocessing that enables O(m) query for any pattern. For offline compression — compressing a file that can be fully read before any output is produced — suffix array-based matching gives LZ77 the best possible back-references. LZMA (used by 7-zip and xz) uses a variant of this approach, achieving the best compression ratios among general-purpose compressors at the cost of slower compression speed.

---

## 12.7 Beyond DEFLATE: Modern Compression

DEFLATE, published in 1996, remains in use because it is fast, well-understood, and supported everywhere. But the field has advanced significantly.

**bzip2** uses the Burrows-Wheeler Transform (BWT) — a reversible permutation of the input that groups similar substrings together — followed by move-to-front coding and Huffman. BWT compression is slower than DEFLATE but achieves better ratios on text.

**Zstandard (zstd)**, developed at Facebook in 2015, achieves DEFLATE-level speed with bzip2-level compression ratios, by using a more sophisticated entropy coder (Finite State Entropy, an asymmetric numeral systems codec) combined with LZ77. It also supports pre-trained dictionaries — compressing many small similar files by sharing a common dictionary that captures common patterns. Zstandard is now the default compression format for Facebook's internal systems and is increasingly used in Linux kernel packages and network protocols.

**Brotli**, developed at Google in 2015, is optimised for web content (HTML, CSS, JavaScript). It uses a pre-built static dictionary of common web strings ("DOCTYPE html", "text/html; charset=utf-8") combined with LZ77 and a Huffman-like entropy coder. On typical web content, Brotli compresses 20-26% better than gzip at comparable speeds.

All of these combine the same two ideas — exploit repetition with some form of LZ, exploit frequency skew with some form of entropy coding — with increasingly sophisticated engineering around each component.

---

## 12.8 Where This Lives in the Wild

**Every HTTP response you have ever received** over a modern connection has been compressed with DEFLATE (gzip) or Brotli. The `Content-Encoding: gzip` header tells your browser that the response body is gzip-compressed. Your browser decompresses it before rendering. The combination of LZ77 and Huffman in DEFLATE reduces typical HTML by 60-80%, saving bandwidth and latency on every page load.

**PNG images** use DEFLATE internally. The image data — raw pixel values — is filtered first (subtracting each pixel from its neighbour to increase the frequency of small values and reduce entropy) and then DEFLATE-compressed. The filtering step, not part of the compression algorithm itself, is a preprocessing step that makes the data more compressible by introducing the frequency skew that Huffman coding exploits.

**Git's object store** uses zlib (a thin wrapper around DEFLATE) to compress every object — blobs, trees, commits. A repository's `.git/objects` directory contains thousands of zlib-compressed files. Git also packs multiple objects into packfiles using delta compression — a form of LZ77 where back-references can point to other objects rather than just earlier in the same file. This allows git to represent similar versions of a file as deltas, reducing repository size dramatically.

**ZIP files** use DEFLATE per-entry, with an uncompressed local file header for random access. Each file in a ZIP archive is independently compressed and can be decompressed without decompressing preceding files. This enables random access at the cost of not exploiting redundancy across files — DEFLATE cannot use back-references across file boundaries.

**CPU instruction caches** and hardware compression accelerators in modern CPUs implement DEFLATE in silicon. Intel's IAA (In-Memory Analytics Accelerator) and ARM's hardware compression engines perform DEFLATE compression and decompression at memory bandwidth speeds — gigabytes per second — with negligible CPU involvement. Storage systems from Zfs to Amazon S3 use these accelerators for transparent compression.

---

## Summary

Compression is information theory made practical. Shannon's entropy gives the theoretical lower bound: you cannot compress data below its entropy, and optimal encoding approaches that bound arbitrarily closely.

Huffman coding achieves between H and H+1 bits per symbol by building a binary tree that assigns shorter codes to more frequent symbols. The tree is built greedily from the bottom up using a priority queue: repeatedly merge the two lowest-frequency nodes. The resulting prefix-free code is optimal among all fixed-length-code-per-symbol schemes.

LZ77 achieves entropy in the limit by exploiting a completely different kind of redundancy: repetition of substrings. The algorithm maintains a sliding window of recently seen bytes and encodes the current position as a back-reference (distance, length) whenever a long match is found in the window. Hash chains accelerate match finding from O(W) to O(1) expected per position, making compression practical for large files.

DEFLATE combines both: LZ77 to tokenise the input into literals and back-references, then Huffman to entropy-code the token stream. The combination exploits both repetition and frequency skew, achieving better compression than either algorithm alone on typical real-world data.

The connection to earlier chapters is direct: LZ77's hash chain is the same structure as Rabin-Karp's rolling hash index from Chapter 8. Both find repeated substrings efficiently by hashing fixed-length windows. The suffix array of Chapter 13 takes this further — offline preprocessing that enables optimal LZ77 back-references.

The next chapter introduces the suffix array itself, which solves the full family of substring problems — all occurrences of a pattern, the longest repeated substring, the longest common substring of two documents — with a single, elegant on-disk-friendly data structure.
