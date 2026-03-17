# Bibliography

This bibliography lists all tools, projects, and written works referenced throughout the book, organized by category. Where a tool has a primary home page, repository, or documentation site, that is listed as the reference. All URLs were verified at time of writing.


## Books

Kernighan, Brian W., and Rob Pike. *The Unix Programming Environment*. Prentice Hall, 1984.
> The foundational text on Unix philosophy and command-line thinking. Chapter 3 in particular — on using the shell — remains one of the clearest articulations of the pipe-and-filter model ever written.

Kernighan, Brian W., and Dennis M. Ritchie. *The C Programming Language*, 2nd ed. Prentice Hall, 1988.
> Not a command-line book per se, but the cultural artifact closest to the original Unix design sensibility. Useful context for understanding why the tools were designed the way they were.

Robbins, Arnold, and Nelson H.F. Beebe. *Classic Shell Scripting*. O'Reilly Media, 2005.
> The most thorough treatment of portable POSIX shell scripting available. Covers edge cases and portability concerns that most scripting guides skip entirely.

Robbins, Arnold. *sed & awk*, 2nd ed. O'Reilly Media, 1997.
> The definitive reference for both tools. Goes significantly deeper than this book on `awk` as a programming language and `sed` as a full stream editor.

Shotts, William. *The Linux Command Line*, 2nd ed. No Starch Press, 2019.
> A comprehensive introduction to Linux-specific tools and shell internals. Freely available online at linuxcommand.org.

Janssens, Jeroen. *Data Science at the Command Line*, 2nd ed. O'Reilly Media, 2021.
> Applies the Unix toolkit to data science workflows — fetching, cleaning, exploring, and modeling data entirely from the terminal. Freely available online at datascienceatthecommandline.com.

Cooper, Mendel. *Advanced Bash-Scripting Guide*. The Linux Documentation Project, 2014.
> An exhaustive reference for bash scripting. Freely available at tldp.org. Dense but comprehensive — the right place to look for anything not covered in the bash man page.

Raymond, Eric S. *The Art of Unix Programming*. Addison-Wesley, 2003.
> A detailed exploration of Unix philosophy, design patterns, and culture. Freely available online at catb.org/esr/writings/taoup. Essential reading for understanding *why* the tools work the way they do, not just how.



## Core Unix Tools

These are tools that ship with or are standard on virtually every Unix and Linux system.

**bash** — GNU Bourne Again Shell
https://www.gnu.org/software/bash/
https://www.gnu.org/software/bash/manual/

**zsh** — Z Shell
https://www.zsh.org/

**awk** — Pattern scanning and processing language. Covered in Chapter 4.
POSIX specification: https://pubs.opengroup.org/onlinepubs/9699919799/utilities/awk.html
Gawk (GNU awk) manual: https://www.gnu.org/software/gawk/manual/

**sed** — Stream editor. Covered in Chapter 4.
GNU sed manual: https://www.gnu.org/software/sed/manual/sed.html

**grep** — Pattern search. Covered in Chapter 2.
GNU grep manual: https://www.gnu.org/software/grep/manual/

**find** — File search. Covered in Chapter 1.
GNU findutils: https://www.gnu.org/software/findutils/

**curl** — Data transfer tool. Covered in Chapter 6.
https://curl.se/
https://curl.se/docs/manpage.html

**git** — Distributed version control. Covered in Chapter 5.
https://git-scm.com/
https://git-scm.com/doc

**make** — Build automation tool. Covered in Chapter 7.
GNU make manual: https://www.gnu.org/software/make/manual/

**less** — Terminal pager. Covered in Chapter 3.
http://www.greenwoodsoftware.com/less/

**tmux** — Terminal multiplexer. Covered in Chapter 8.
https://github.com/tmux/tmux
https://github.com/tmux/tmux/wiki

**cron** — Job scheduler. Covered in Chapter 7.
https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html

**strace** — System call tracer (Linux). Covered in Chapter 9 (Process Management).
https://strace.io/

**lsof** — List open files. Covered in Chapter 9 (Process Management).
https://github.com/lsof-org/lsof

**xargs** — Build and execute command lines from stdin. Covered in Chapter 9 (Pipes and Redirection).
GNU findutils (includes xargs): https://www.gnu.org/software/findutils/



## Modern CLI Tools

These are third-party tools that extend or replace classic Unix utilities, referenced throughout the book.

**ripgrep (`rg`)** — Fast recursive search. Covered in Chapter 2.
Burns, Andrew. ripgrep. 2016–present.
https://github.com/BurntSushi/ripgrep

**fd** — Fast and user-friendly alternative to `find`. Covered in Chapters 1 and 8.
Peter, David. fd. 2017–present.
https://github.com/sharkdp/fd

**bat** — Syntax-highlighted `cat` replacement. Covered in Chapters 3 and 8.
Peter, David. bat. 2018–present.
https://github.com/sharkdp/bat

**eza** — Modern replacement for `ls`. Covered in Chapters 1 and 8.
https://github.com/eza-community/eza
> Note: `eza` is the maintained fork of the original `exa` project by Benjamin Sago (https://github.com/ogham/exa), which is no longer actively developed.

**fzf** — General-purpose fuzzy finder. Covered in Chapter 8.
Junegunn, Choi. fzf. 2013–present.
https://github.com/junegunn/fzf

**zoxide** — Smarter `cd` command. Covered in Chapter 8.
Bhatt, Ajeet. zoxide. 2020–present.
https://github.com/ajeetdsouza/zoxide

**jq** — Command-line JSON processor. Covered in Chapters 2 and 6.
Dolan, Stephen (original author). jq. 2012–present. Currently maintained by the jq community.
https://jqlang.github.io/jq/
https://jqlang.github.io/jq/manual/

**yq** — YAML/JSON processor. Covered in Chapter 6.
Humphrey, Mike. yq. 2017–present.
https://github.com/mikefarah/yq
https://mikefarah.gitbook.io/yq/

**csvkit** — Suite of utilities for working with CSV files. Covered in Chapter 6.
Schafer, Christopher. csvkit. 2011–present.
https://csvkit.readthedocs.io/

**httpie** — Modern HTTP client. Covered in Chapter 6.
Reberski, Jakub, and contributors. HTTPie. 2012–present.
https://httpie.io/
https://github.com/httpie/cli

**starship** — Cross-shell prompt. Covered in Chapter 8.
The Starship Contributors. Starship. 2019–present.
https://starship.rs/
https://github.com/starship/starship

**direnv** — Environment switcher for the shell. Covered in Chapter 7.
Petazzoni, Jérôme (original author). direnv. 2012–present.
https://direnv.net/
https://github.com/direnv/direnv

**htop** — Interactive process viewer. Covered in Chapter 9 (Process Management).
Hisham, Muhammad (original author). htop. 2004–present. Currently maintained by the htop community.
https://htop.dev/
https://github.com/htop-dev/htop

**Oh My Zsh** — Framework for managing zsh configuration. Covered in Chapter 8.
Robrussell, Robby. Oh My Zsh. 2009–present.
https://ohmyz.sh/
https://github.com/ohmyzsh/ohmyzsh

**shellcheck** — Static analysis tool for shell scripts. Referenced in Chapter 12.
Kola, Vidar. ShellCheck. 2012–present.
https://www.shellcheck.net/
https://github.com/koalaman/shellcheck

**tldr** — Simplified, community-driven man pages. Referenced in Chapter 12.
The tldr-pages contributors. tldr-pages. 2014–present.
https://tldr.sh/
https://github.com/tldr-pages/tldr

**GNU Parallel** — Shell tool for executing jobs in parallel. Referenced in Chapter 12.
Tange, Ole. GNU Parallel. 2010–present.
https://www.gnu.org/software/parallel/

**pv** — Monitor the progress of data through a pipe. Referenced in Chapter 12.
Wood, Andrew. pv. 2002–present.
http://www.ivarch.com/programs/pv.shtml



## Terminal Emulators

**iTerm2** — macOS terminal emulator. Covered in Chapter 8.
https://iterm2.com/

**Warp** — Modern terminal emulator. Covered in Chapter 8.
https://www.warp.dev/

**Alacritty** — GPU-accelerated terminal emulator. Covered in Chapter 8.
https://alacritty.org/
https://github.com/alacritty/alacritty

**Ghostty** — Fast, native terminal emulator. Covered in Chapter 8.
https://ghostty.org/



## Online Resources

**explainshell.com**
https://explainshell.com/
> Parses and annotates shell commands using man page content. Referenced in Chapter 12.

**commandlinefu.com**
https://www.commandlinefu.com/
> Community-curated collection of shell one-liners and idioms. Referenced in Chapter 12.

**linuxcommand.org**
https://linuxcommand.org/
> Home of William Shotts' *The Linux Command Line*, freely available in full. Referenced in Chapter 12.

**datascienceatthecommandline.com**
https://datascienceatthecommandline.com/
> Home of Jeroen Janssens' *Data Science at the Command Line*, freely available in full. Referenced in Chapter 12.

**The GNU Bash Reference Manual**
https://www.gnu.org/software/bash/manual/bash.html
> The authoritative reference for bash syntax, builtins, and behavior. Referenced throughout.

**POSIX.1-2017 Shell & Utilities Specification**
https://pubs.opengroup.org/onlinepubs/9699919799/
> The formal specification for POSIX-compliant shell behavior and standard utilities. The authoritative source for portable shell scripting.

**The Bash Hackers Wiki**
https://wiki.bash-hackers.org/
> Community documentation covering bash features and idioms in depth. Particularly good on parameter expansion, arrays, and process substitution.

**Greg's Wiki (Wooledge Bash Guide)**
https://mywiki.wooledge.org/BashGuide
> One of the most reliable community resources for bash scripting best practices. The associated BashFAQ (https://mywiki.wooledge.org/BashFAQ) is an excellent reference for common scripting questions.



## Standards and Specifications

**POSIX.1-2017 (IEEE Std 1003.1-2017)**
The Open Group. *The Open Group Base Specifications Issue 7, 2018 Edition*. 2018.
https://pubs.opengroup.org/onlinepubs/9699919799/
> The formal standard that defines the behavior of shell utilities including `grep`, `find`, `awk`, `sed`, `xargs`, and the shell itself. Where tool behavior differs between macOS and Linux, POSIX is the arbiter of what is "correct."

**RFC 7159 / RFC 8259 — JSON**
Bray, T. (ed.). *The JavaScript Object Notation (JSON) Data Interchange Format*. IETF, 2017.
https://datatracker.ietf.org/doc/html/rfc8259
> The formal specification for JSON, the data format processed by `jq` throughout Chapter 6.

**RFC 4180 — CSV**
Shafranovich, Y. *Common Format and MIME Type for Comma-Separated Values (CSV) Files*. IETF, 2005.
https://datatracker.ietf.org/doc/html/rfc4180
> The closest thing to a formal CSV specification. Explains why naive field-splitting on commas fails for real-world CSV files.



## Historical and Cultural References

McIlroy, M. D., E. N. Pinson, and B. A. Tague. "Unix Time-Sharing System: Foreword." *The Bell System Technical Journal* 57, no. 6 (1978): 1902–1903.
> Contains McIlroy's famous statement of the Unix philosophy, including the principle of writing programs that do one thing well and work together — the philosophical foundation of Chapter 9 (Pipes and Redirection) and the book as a whole.

Ritchie, Dennis M., and Ken Thompson. "The UNIX Time-Sharing System." *Communications of the ACM* 17, no. 7 (1974): 365–375.
> The original paper describing Unix. Freely available through the ACM digital library. Worth reading for the historical context of where these tools came from.

Salus, Peter H. *A Quarter Century of Unix*. Addison-Wesley, 1994.
> A history of Unix from its origins at Bell Labs through the early 1990s. Provides context for why the tools are designed the way they are and how the culture of the command line developed.



*Tool versions, repository locations, and maintainer information are subject to change. Readers encountering broken links or outdated information are encouraged to search for the current location of any tool using its name — active open source projects are generally easy to find.*

