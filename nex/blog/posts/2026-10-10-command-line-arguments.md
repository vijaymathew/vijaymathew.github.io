---
title: Handling command-line arguments in Nex
tags: [how-to, cli, contracts]
summary: A Nex program reads its arguments from the Process object. Here is how to get at them, parse them into usable formats, and deal with invalid input gracefully.
---

A Nex program can ask for its command-line arguments via an instance of the `Process` class.
`create Process` gives you the process you are running in, and `command_line()` returns its arguments as an `Array[String]`.

```nex
let proc: Process := create Process
let args: Array[String] := proc.command_line()
let con: Console := create Console

con.print_line("got " + args.length + " argument(s)")
across args as a do
  con.print_line("  " + a)
end
```

Save that as `args.nex` and run it with a few arguments:

```
$ nex args.nex report.txt "two words" --top 3
got 4 argument(s)
  report.txt
  two words
  --top
  3
```

Three things to notice:

- **The array holds only your arguments.** It starts after the file name, so there is no `argv[0]` to skip, and with no arguments it is empty.
- **The shell has already split the words.** `"two words"` arrives as one element.
- **Everything is a `String`.** `3` is text until you call `to_integer` on it.

## Reserved runtime flags

`nex` takes a few options of its own, such as `--interpret`, `--skip-contracts` and `--classpath`. It removes them from the command line wherever they appear, so your program never sees them:

```
$ nex args.nex one --interpret two --skip-contracts three
got 3 argument(s)
  one
  two
  three
```

As those names are taken by the runtime, you cannot reuse them as your own options.

## A small tool

Here is a complete program that greets someone, with an optional repeat count and an option to shout.

```nex
-- greet: say hello from the command line.
--
--   nex greet.nex <name> [--times n] [--shout]

class Options
feature
  name: String
  times: Integer
  shout: Boolean
create
  make(a_name: String, a_times: Integer, a_shout: Boolean)
  require
    has_name: name.length > 0
    positive_times: times > 0
  do
    name := a_name
    times := a_times
    shout := a_shout
  end
invariant
  has_name: name.length > 0
  positive_times: times > 0
end

function fail(message: String) do
  let con: Console := create Console
  con.error("greet: " + message)
  con.error("usage: nex greet.nex <name> [--times n] [--shout]")
  exit(2)
end

function to_count(text: String): Integer
do
  result := text.to_integer()
  if result <= 0 then
    fail("--times must be at least 1, got " + text)
  end
rescue
  fail("--times needs a whole number, got " + text)
end

function parse(args: Array[String]): Options
do
  let name: String := ""
  let times: Integer := 1
  let shout: Boolean := false
  let i: Integer := 0
  from
    i := 0
  until
    i = args.length
  do
    let arg: String := args.get(i)
    if arg = "--shout" then
      shout := true
    elseif arg = "--times" then
      if i + 1 = args.length then
        fail("--times needs a value")
      end
      i := i + 1
      times := to_count(args.get(i))
    elseif arg.starts_with("--") then
      fail("unknown option " + arg)
    elseif name = "" then
      name := arg
    else
      fail("unexpected argument " + arg)
    end
    i := i + 1
  end
  if name = "" then
    fail("missing <name>")
  end
  result := create Options.make(name, times, shout)
end

function main() do
  let proc: Process := create Process
  let opts: Options := parse(proc.command_line())
  let con: Console := create Console
  let greeting: String := "Hello, " + opts.name + "!"
  if opts.shout then
    greeting := greeting.to_upper()
  end
  let n: Integer := 0
  from
    n := 0
  until
    n = opts.times
  do
    con.print_line(greeting)
    n := n + 1
  end
end

main()
```

It behaves the way you would expect a command-line tool to behave:

```
$ nex greet.nex Ada
Hello, Ada!

$ nex greet.nex Ada --times 3 --shout
HELLO, ADA!
HELLO, ADA!
HELLO, ADA!

$ nex greet.nex Ada --times zero
greet: --times needs a whole number, got zero
usage: nex greet.nex <name> [--times n] [--shout]

$ nex greet.nex Ada --loud
greet: unknown option --loud
usage: nex greet.nex <name> [--times n] [--shout]
```

The program is short, but there are some patterns worth copying.

### Parse once, at the edge

`main` does not pass the raw array around. It calls `parse` once and from then on works with an `Options` object. No other part of the program looks at strings, checks whether an index is in range, or wonders whether `times` was converted yet.

### Bad input is not a bug

Someone typing `--times zero` has made a mistake, but the *program* is fine. So `parse` handles it with ordinary code: it prints a message that names the problem, prints the usage line, and stops. `to_integer()` raises a `Conversion_Error` on text that is not a number, and the `rescue` clause in `to_count` turns that into the same kind of message.

Errors go to `Console.error`, which writes to standard error, so they stay out of the way when the output is piped somewhere. `exit(2)` sets the exit status. By convention `0` means success and `2` means the command was used wrongly, which lets a shell script tell the two apart.

### A broken parser is a bug

The contracts on `Options` do a different job. They are not there to check the user. They state what the rest of the program may assume: there is a name, and `times` is positive. `main` relies on that when it loops `opts.times` times without checking anything.

That makes the constructor a checkpoint for the parser itself. Suppose a later edit drops the `result <= 0` test from `to_count`. Nothing about the type of `times` changes, and the program still compiles. But the first run with a bad value stops at the boundary:

```
$ nex greet.nex Ada --times 0
Error: Precondition violation: positive_times
  The call at line 71, in parse does not meet the precondition `positive_times` of Options.make.
  called from line 76, in main
  called from line 93
```

The message names the clause and blames the caller, `parse`, which is where the missing check belongs. A user should never see this message. If one does, it is telling you about a hole in your validation, not about their typing.

## File arguments and relative paths

One thing will surprise you the first time you take a file name as an argument. The `nex` launcher starts your program from its own installation directory, so a relative path like `report.txt` does not resolve against the directory you ran the command in. The launcher records that directory in the environment variable `NEX_USER_DIR`, and you can use it to resolve the path yourself:

```nex
function resolve(proc: Process, raw: String): String
do
  let base: ?String := proc.getenv("NEX_USER_DIR")
  if raw.starts_with("/") or base = nil or base = "" then
    result := raw
  else
    result := base + "/" + raw
  end
end
```

The check for a missing `NEX_USER_DIR` is relevant for the next section: a compiled program does not go through the launcher, so the variable is not set and relative paths already work.

## Shipping it as a jar

`nex compile jvm` turns the program into a standalone jar. The arguments reach it the same way, so nothing in the code changes:

```
$ nex compile jvm greet.nex
$ java -jar greet.jar Grace --times 2
Hello, Grace!
Hello, Grace!
```

## Where to go next

- `Process` can also read the environment and start child processes. The full list is in the [system classes reference](../docs/ref/system-classes.html).
- If `require`, `ensure` and `invariant` are new to you, the [tour of Nex](../tutorial.html) introduces them in a few minutes.
