---
title: Classes and their Contracts
tags: [how-to, object-oriented-programming, software-design, contracts]
updated: 2026-10-22
summary: How Nex allows the specification of an abstract datatype to live in code itself instead of a comment or document.
---

One of the first lessons taught in Object Oriented Programming courses is that classes are an expression of an *abstract datatype*.
An abstract datatype has a public API (an *interface*) and is supposed to keep its *invariants*. An invariant is a statement that is
always true about an object of the class, as seen from the client's perspective. For example, if a class represents the abstract notion of
a push-down stack, then the implementation must assure the client that after a successful call to the `pop` method, the size of the stack will
not go negative.

In this post let's look at the implementation of another abstract datatype – a text buffer with a cursor, the kind of thing behind any text field or editor.
It has to expose the following methods in its API:

1. insert(text) – insert `text` at the current cursor position. `text` must be non-null and non-empty.
2. delete_back(n) – delete `n` characters before the cursor (like backspace). `0 < n <= cursor`.
3. length – return the number of characters in the buffer.
4. cursor – return the cursor position (position starts at 0).

The implementation must also maintain the global invariant `0 <= cursor and cursor <= length`.

Given the above specification, an implementation in popular Object-Oriented style will be very similar to the following Java class definition:

```java
/**
 * A text buffer with an insertion cursor.
 * Invariant: 0 <= cursor <= length()
 */
public class TextBuffer {
    protected final StringBuilder content = new StringBuilder();
    protected int cursor = 0;

    public int length() { return content.length(); }
    public int cursor() { return cursor; }

    /**
     * Inserts s at the cursor and moves the cursor past it.
     * @param s must be non-null and non-empty
     * Postcondition: length grows by s.length(); cursor advances by s.length()
     */
    public void insert(String s) {
        if (s == null || s.isEmpty())
            throw new IllegalArgumentException("s must be non-empty");
        int oldLength = length(), oldCursor = cursor;   // manual "old"
        content.insert(cursor, s);
        cursor += s.length();
        assert length() == oldLength + s.length();
        assert cursor == oldCursor + s.length();
        assert 0 <= cursor && cursor <= length();      // invariant, by hand
    }

    /**
     * Deletes n characters before the cursor, like Backspace.
     * @param n must satisfy 0 < n <= cursor
     */
    public void deleteBack(int n) {
        if (n <= 0 || n > cursor)
            throw new IllegalArgumentException("need 0 < n <= cursor");
        int oldLength = length(), oldCursor = cursor;
        content.delete(cursor - n, cursor);
        cursor -= n;
        assert length() == oldLength - n;
        assert cursor == oldCursor - n;
        assert 0 <= cursor && cursor <= length();
    }
}
```

The above implementation is as close to the specification as it can be, but most of it really lives in comments. Though documenting the public API of a class like this in Javadoc (or whatever commenting style is followed by the language in question) is considered great software engineering practice, its value is minimal because no tool can check and enforce prose. For instance, if someone changes `deleteBack` to clamp `n` instead of rejecting it and forgets the comment, nothing complains.

You might've noticed that the programmer is also careful about the API's contracts. For example, `insert` makes sure that the content length and cursor are incremented correctly once the method finishes its job. Though this is good practice, every postcondition that mentions the previous state needs locals captured at the start. This is a tedious job and in practice people skip this, so postconditions mostly go unwritten.

What about the class invariant? Though it is part of almost all high-level design documents, the class invariant is not a language concept in Java (and most other popular OOP languages). This means, it has to be repeated at the end of every public method in the form of an `assert`. Add `moveCursorTo(int)` next month and whoever writes it will almost certainly forget the check.

Another catch for Java programmers is that `assert` is off by default. Assertions run only with the `-ea` flag.

The bottom line is specification and defensive code get mixed up, and any comment that keeps track of the original design assumptions soon goes out of sync with the code.

Before we do more critique of the Java implementation, let's turn around and see how the same class could be written in Nex, where preconditions, postconditions and invariants are first-class language constructs.

```nex
class Text_Buffer
feature -- Access

  length: Integer
  do
    result := content.length
  end

  cursor: Integer

feature -- Editing
  insert(s: String)
    note "Insert `s` at the cursor and move the cursor past it."
  require
    not_empty: s.length > 0
  do
    let prefix := content.substring(0, cursor)
    content := prefix + s + content.substring(cursor, content.length)
    cursor := cursor + s.length
  ensure
    grown: length = old content.length + s.length
    cursor_advanced: cursor = old cursor + s.length
  end

  delete_back(n: Integer)
    note "Delete `n` characters before the cursor, like Backspace."
  require
    positive: n > 0
    enough_text_before_cursor: n <= cursor
  do
    let prefix := content.substring(0, cursor - n)
    let suffix := content.substring(cursor, content.length)
    content := prefix + suffix
    cursor := cursor - n
  ensure
    shrunk: length = old content.length - n
    cursor_moved_back: cursor = old cursor - n
  end

  set_cursor(n: Integer)
  require
    cursor_in_range: n >= 0 and n <= length
  do
    cursor := n
  end

feature -- Implementation
  content: String

invariant
    cursor_in_range: 0 <= cursor and cursor <= length
end

-- Tests
let buf := create Text_Buffer
buf.insert("hello")
buf.insert("world")
assert buf.content = "helloworld"
buf.set_cursor(5)
buf.insert(", ")
assert buf.content = "hello, world"
buf.set_cursor(3)
buf.delete_back(2)
assert buf.content = "hlo, world"
buf.insert("el")
assert buf.content = "hello, world"
```

In the Nex definition of `Text_Buffer`, the contract sits next to the code it describes.
Notice how the three kinds of assertion divide the work of completely enforcing the specification:

1. `require` is the client’s obligation. Calling `delete_back(5)` with the cursor at position 2 is a bug in the caller.
2. `ensure` is the supplier’s obligation. If `insert` leaves the cursor in the wrong place, the bug is in this routine. `old` refers to a value on entry, so the postcondition can relate the before and after states.
3. `invariant` must hold whenever an object is observable from outside: after creation, and before and after every call from a client. Here it says the cursor can never run off either end of the text.

Tools leke `nex doc` can extract the contract view of the class, which shows signatures, header comments and assertions with no implementation. That view is generated from the code, so it can’t drift away from it.

Note that there is no `null` check on `s`. Nex is null-safe. This means a `String` argument is attached to a value by default, so the type system rules out `null`.

## Preconditions vs. defensive programming

Let's go back and look at the Java class again. There we see `deleteBack` throwing `IllegalArgumentException`. It turns “n must not exceed the cursor” from an obligation on the caller into defined behaviour of the method: delete too much and you get an exception, which callers may catch and rely on. Java’s own guidance reinforces this. Oracle’s “Programming With Assertions” guide says not to use `assert` for argument checking in public methods, and to throw exceptions instead.

Design by Contract takes the opposite view, which Meyer calls the **non-redundancy principle**: the point is that the body of a well-designed routine should never test its own precondition. The caller is responsible for knowing where the cursor is. An editor that sends Backspace with nothing before the cursor has a bug in its key handling, and the buffer shouldn’t absorb it. The runtime check exists only to catch that bug during development and testing. Defensive programming, where every routine checks everything just in case, produces code that is longer and slower and leaves it unclear who is responsible for what.

Note one caveat here: external input is not covered by preconditions. A keystroke or a pasted clipboard string should be validated once, by the module that receives it, and from then on the program can rely on contracts.

## Contracts and Inheritance 

Dynamic binding means a client written against `Text_Buffer` might actually be working with an object of its child class. The client can only reason with the contract it can see. So every redefinition has to be a subcontract that honours that contract:

- The **precondition may only weaken**: the redefinition must accept at least everything the parent accepted.
- The **postcondition may only strengthen**: it must deliver at least everything the parent promised.
- The **invariant is inherited**, and descendants can only add to it.

There is no language-level support in Java or Python to enforce these rules. That means the programmer who is implementing a child class can end up breaking the contracts of the abstract datatype. Imagine someone trying to implement a buffer with a maximum length, it may go as follows in Java:

```java
public class BoundedBuffer extends TextBuffer {
    private final int capacity;

    public BoundedBuffer(int capacity) { this.capacity = capacity; }

    @Override
    public void insert(String s) {
        int room = capacity - length();
        if (room > 0)
            super.insert(s.substring(0, Math.min(room, s.length())));
    }
}
```

This compiles and runs without complaint. Now consider a client written against `TextBuffer`, for example an autocomplete feature:

```java
void complete(TextBuffer buf, String suffix) {
    buf.insert(suffix);
    highlight(buf.cursor() - suffix.length(), buf.cursor());  // select what was inserted
}
```

With a `BoundedBuffer` that truncates, the highlight now covers text the user typed, not the completion. When the buffer is already full, it covers characters that were there before. No contract violation is reported. Even the parent’s asserts pass, because `super.insert` checks its postcondition against the truncated string it was handed, not the string the client asked to insert. The contract the client relied on is broken, and none of the checks can see it.

Now let's look at the same child class implemented in Nex:

```nex
class Bounded_Buffer
inherit Text_Buffer

feature
  capacity: Integer

create
  make_with_capacity(n: Integer)
  do
    capacity := n
  end

feature
  insert(s: String)
  do
    let room := capacity - length
    if room > 0 then
      super.insert(s.substring(0, room.min(s.length)))
    end
  end
end

let b_buf: Text_Buffer := create Bounded_Buffer.make_with_capacity(10)
b_buf.insert("he")
b_buf.insert("llo, ")
assert b_buf.content = "hello, "
b_buf.insert("world") -- raise postcondition violation
```

`Bounded_Buffer.insert` contains no assertions, but it inherits `grown: length = old content.length + s.length` and `cursor_advanced` from `Text_Buffer`. Crucially, they are evaluated for the call the client actually made, with the client’s `s`. The first time a string is truncated with checking enabled, you get a postcondition violation that names `Bounded_Buffer.insert` as the culprit. `super.insert` checking its own contract on the shorter string doesn’t hide the problem.

## Putting the limit in the parent's contract

The real problem isn't in `Bounded_Buffer`. It's that `Text_Buffer`'s contract promises something a bounded buffer can't deliver: any non-empty string can always be inserted. No redefinition of `insert` can fix that. When a string doesn't fit, the only honest thing a bounded `insert` can do is refuse it, and refusing means a stronger precondition, which the subcontracting rules forbid.

The fix is to make the parent's contract admit that a buffer may run out of room. Add a query, `has_room`, to `Text_Buffer` and make it part of `insert`'s precondition:

```nex
class Text_Buffer
feature -- Access
  -- length and cursor as before

  has_room(s: String): Boolean
    note "Can `s` be inserted without exceeding the buffer's limits?"
  do
    result := true
  end

feature -- Editing
  insert(s: String)
    note "Insert `s` at the cursor and move the cursor past it."
  require
    not_empty: s.length > 0
    room_available: has_room(s)
  do
    let prefix := content.substring(0, cursor)
    content := prefix + s + content.substring(cursor, content.length)
    cursor := cursor + s.length
  ensure
    grown: length = old content.length + s.length
    cursor_advanced: cursor = old cursor + s.length
  end

  -- delete_back, set_cursor, content and the invariant as before
end
```

A plain `Text_Buffer` always has room, so for its clients nothing changes in practice. But the contract now says, in code, that a client must establish `has_room(s)` before calling `insert`. A bounded buffer only has to say what "room" means for it:

```nex
class Bounded_Buffer
inherit Text_Buffer

feature
  capacity: Integer

  has_room(s: String): Boolean
  do
    result := length + s.length <= capacity
  end

create
  make_with_capacity(n: Integer)
  require
    non_negative: n >= 0
  do
    capacity := n
  end

invariant
  within_capacity: length <= capacity
end
```

`Bounded_Buffer` doesn't redefine `insert` at all. It inherits the parent's body, precondition and postconditions unchanged. Its only addition to the contract is the invariant `within_capacity`, which is AND-ed with the inherited `cursor_in_range`.

Clients written against `Text_Buffer` now ask before they insert:

```nex
let buf: Text_Buffer := create Bounded_Buffer.make_with_capacity(10)
buf.insert("he")
buf.insert("llo, ")
assert not buf.has_room("world")
if buf.has_room("wor") then
  buf.insert("wor")
end
assert buf.content = "hello, wor"
buf.insert("!") -- raise precondition violation
```

The last call fails with `Precondition violation: room_available`, and the error points at the call, not at `insert`. That's the right verdict: the buffer was full, the client could have asked, and it didn't. In the previous version the same mistake produced a postcondition violation that blamed `Bounded_Buffer.insert`, and in Java it produced nothing at all.

Isn't this just a stronger precondition in disguise? For a given object, a `Bounded_Buffer` does accept fewer strings than an unbounded one. The difference is that clients were told. The precondition a client reads is `has_room(s)`, the same expression in both classes, and a client that respects it is correct for every kind of buffer. What the subcontracting rules forbid is a child adding a requirement the client can't see. Here the requirement was in the parent's contract all along, and the child only answers it for its own case. Bertrand Meyer calls this an *abstract precondition* in *Object-Oriented Software Construction*, where the example is a bounded stack whose `put` requires `not full`.

The catch is that the parent has to be designed for it. Someone has to anticipate that a descendant might run out of room, or go back and add `has_room` when the first such descendant shows up. That's the general lesson: when a child class can't honour its parent's contract, the fix belongs in the parent's contract, not in a clever override.


## What a child class may do

So far we've looked at what a child class must not do. The subcontracting rules also say what it may do: accept more calls, promise more on each call, and guarantee more about its state. An editor buffer with undo needs all three.

`Undoable_Buffer` remembers the text and cursor before each edit, as a `Snapshot`. It keeps them on a stack, with the most recent snapshot at index 0, and caps the history at `history_limit` edits so that memory use stays bounded:

```nex
class Snapshot
create
  make(t: String, c: Integer)
  do
    text := t
    cursor := c
  end
feature
  text: String
  cursor: Integer
end

class Undoable_Buffer
inherit Text_Buffer

create
  make_with_limit(n: Integer)
  require
    positive: n > 0
  do
    history_limit := n
  end

feature -- Access
  history_limit: Integer

  can_undo: Boolean
  do
    result := undo_stack.length > 0
  end

  undo_count: Integer
  do
    result := undo_stack.length
  end

feature -- Editing
  -- insert and delete_back are redefined below

  undo
    note "Restore the text and cursor to what they were before the last edit."
  require
    something_to_undo: can_undo
  do
    let previous := undo_stack.get(0)
    undo_stack.remove(0)
    set_cursor(length)
    if length > 0 then
      super.delete_back(length)
    end
    if previous.text.length > 0 then
      super.insert(previous.text)
    end
    set_cursor(previous.cursor)
  ensure
    text_restored: content = old undo_stack.get(0).text
    cursor_restored: cursor = old undo_stack.get(0).cursor
  end

feature -- Implementation
  undo_stack: Array[Snapshot]

  record_edit
  do
    if undo_count = history_limit then
      undo_stack.remove(undo_count - 1)  -- forget the oldest edit
    end
    undo_stack.add_at(0, create Snapshot.make(content, cursor))
  end

invariant
  history_bounded: undo_count <= history_limit
end
```

Notice how `undo` rebuilds the text with `super.delete_back` and `super.insert` instead of assigning to `content`. Nex lets only the class that declares a field assign it, so even a child class has to work through `Text_Buffer`'s routines and their contracts. It calls the `super` versions so that restoring a snapshot doesn't itself get recorded as an edit.

### Accepting more: a weaker precondition

`Text_Buffer.insert` rejects an empty string. For an editor that's an inconvenience: pasting an empty clipboard is a reasonable thing for a user to do. It shouldn't be a bug, and it shouldn't leave an empty step in the undo history either. `Undoable_Buffer` accepts it:

```nex
  insert(s: String)
    note "As in Text_Buffer, but an empty string is accepted and ignored."
  require
    nothing_to_insert: s.length = 0
  do
    if s.length > 0 then
      record_edit
      super.insert(s)
    end
  ensure
    undoable: s.length = 0 or can_undo
    ignored: s.length > 0 or content = old content
  end
```

A redefinition's `require` is OR-ed with the one it inherits, so the precondition of `Undoable_Buffer.insert` is effectively `(not_empty and room_available) or nothing_to_insert`. Every call the parent accepted is still accepted, plus one more kind. A client that knows it has an `Undoable_Buffer` can rely on the extra case. A client written against `Text_Buffer` still reads `not_empty` in the contract it sees, so it shouldn't count on it, even though the call would go through at runtime.

The OR also means a child can't sneak in a stronger precondition. Suppose `Undoable_Buffer.delete_back` declared `require small: n <= 2` to keep undo steps small. The combined precondition would be `(positive and enough_text_before_cursor) or small`, and `delete_back(4)` would still be accepted. A `require` in a redefinition can only add to the set of calls the routine accepts.

There's a second catch: the inherited postconditions still apply to the calls the redefinition now accepts. For an empty string they hold trivially. The length grows by zero and the cursor advances by zero. Compare that with a tempting weakening of `delete_back` that accepts any positive `n` and clamps it to the cursor:

```nex
  delete_back(n: Integer)
  require
    any_amount: n > 0
  do
    record_edit
    super.delete_back(n.min(cursor))
  end
```

Calling `delete_back(5)` on a buffer holding `"hi"` now fails with `Postcondition violation: shrunk`. The parent promised that the length shrinks by exactly `n`, and a clamped delete can't deliver that. Weakening a precondition only works when the routine can still keep the old promises for the new calls.

### Promising more: stronger postconditions

The `ensure` clauses of the redefined `insert` don't replace the parent's `grown` and `cursor_advanced`. They are AND-ed with them, so `Undoable_Buffer.insert` promises everything `Text_Buffer.insert` did, plus two things about the history. Nex has no `implies` operator, so `s.length = 0 or can_undo` is how to say "if something was inserted, it can be undone".

`delete_back` keeps the parent's precondition and only adds a promise:

```nex
  delete_back(n: Integer)
  do
    record_edit
    super.delete_back(n)
  ensure
    undoable: can_undo
  end
```

A client written against `Text_Buffer` still gets `shrunk` and `cursor_moved_back`, and never notices the extra one. An editor that knows it has an `Undoable_Buffer` can enable its Undo menu item right after a Backspace without checking anything. The `undo` routine is new, so its contract is a first declaration, and any child of `Undoable_Buffer` will inherit it.

### Guaranteeing more: a new invariant

`Undoable_Buffer` inherits `cursor_in_range` from `Text_Buffer` and adds `history_bounded: undo_count <= history_limit`. Both are checked after every call a client makes. If `record_edit` forgot to drop the oldest snapshot, the first edit after the history filled up would fail with `Class invariant violation: history_bounded`, and the error would name the routine that left the object in that state.

Putting it all together:

```nex
let buf := create Undoable_Buffer.make_with_limit(3)
buf.insert("hello")
buf.insert(", world")
buf.delete_back(7)
assert buf.content = "hello"
buf.undo
assert buf.content = "hello, world"
buf.undo
assert buf.content = "hello"
buf.insert("")  -- accepted, and not recorded
assert buf.undo_count = 1
buf.insert("!")
buf.insert("!")
buf.insert("!")
assert buf.undo_count = 3  -- the oldest edit was forgotten
```

Adding `redo` is a good exercise. It needs a second stack, a `can_redo` query, a `redo_cleared: not can_redo` postcondition on every edit, and an invariant that bounds both stacks together.

None of these additions was free to make. Each one had to fit around the contract `Text_Buffer` already published, and Nex checked that it did.
