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
2. delete(n) – delete `n` characters before the cursor (like backspace). `0 < n <= cursor`.
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

You might've noticed that The programmer is also carfeful about the APIs contracts. For example, `insert` makse sure that the content length and cursor is incremented correctly once the method finishes its job. Though this is good practice, every postcondition that mentions the previous state needs locals captured at the start. This is tedious job and in practice people skip this, so postconditions mostly go unwritten.

What about the class invariant? Though it is part of almost all high-level design documents, class invariant is not language concept in Java (and most other popular OOP languages). This means, it has to be repeated at the end of every public method in the form of an `assert`. Add `moveCursorTo(int)` next month and it will almost certainly forget the check.

Another catch for Java programmers is that `assert` is off by default. Assertions run only with the `-ea` flag.

The bottom line is specification and defensive code gets mixed up and any comment that keeps track of the original design assumptions soon go out of sync with the code.

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
    cursor_in_range: n >= 0 and n <= cursor
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

Tools can extract the contract view of the class, which shows signatures, header comments and assertions with no implementation. That view is generated from the code, so it can’t drift away from it.

Note that there is no `null` check on `s`. Nex is null-safe. This means a `String` argument is attached to a value by default, so the type system rules out `null`.

## Preconditions vs. defensive programming

Let's go back and look at the Java class again. There we see `deleteBack` throwing `IllegalArgumentException`. It turns “n must not exceed the cursor” from an obligation on the caller into defined behaviour of the method: delete too much and you get an exception, which callers may catch and rely on. Java’s own guidance reinforces this. Oracle’s “Programming With Assertions” guide says not to use `assert` for argument checking in public methods, and to throw exceptions instead.

The class-designed in Nex argues the opposite (the **non-redundancy principle**). The point is that the body of a well-designed routine should never test its own precondition. The caller is responsible for knowing where the cursor is. An editor that sends Backspace with nothing before the cursor has a bug in its key handling, and the buffer shouldn’t absorb it. The runtime check exists only to catch that bug during development and testing. Defensive programming, where every routine checks everything just in case, produces code that is longer and slower and leaves it unclear who is responsible for what.

Note one caveat here: external input is not covered by preconditions. A keystroke or a pasted clipboard string should be validated once, by the module that receives it, and from then on the program can rely on contracts.

## Contracts and Inheritance 

Dynamic binding means a client written against `Text_Buffer` might actually be working with an object of its child class. The client can only reason with the contract it can see. So every redefinition has to be a subcontract that honours that contract:

    - The **precondition may only weaken**: the redefinition must accept at least everything the parent accepted.
    - The **postcondition may only strengthen**: it must deliver at least everything the parent promised.
	- The **invariant is inherited**, and descendants can only add to it.
	
There are no language-level support in Java or Python to enforce these rules. That means, if the programmer who is implementing a child class can end up breaking the contracts of the abstract datatype. Imagine someone trying to implement a buffer with a maximum length, it may go as follows in Java:

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

`Bounded_Buffer.insert` contains no assertions, but it inherits `grown: count = old count + s.count` and `cursor_advanced` from `Text_Buffer`. Crucially, they are evaluated for the call the client actually made, with the client’s `s`. The first time a string is truncated with checking enabled, you get a postcondition violation that names `Bounded_Buffer.insert` as the culprit. `super.insert` checking its own contract on the shorter string doesn’t hide the problem.
