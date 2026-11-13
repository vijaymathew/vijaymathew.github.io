/* Nex books: apply the saved site theme and add a theme toggle + home crumb. */
(function () {
  var root = document.documentElement;
  try { var t = localStorage.getItem('nex-theme'); if (t) root.dataset.theme = t; } catch (e) {}

  var KEYWORDS = new RegExp('^(?:across|alias|and|as|assert|await|case|class|convert|create|declare|deferred|do|else|elseif|end|ensure|enum|false|feature|fn|from|function|if|implies|import|inherit|intern|invariant|let|match|nil|not|note|of|old|once|or|private|raise|repeat|require|rescue|result|retry|sealed|select|spawn|super|then|this|timeout|to|true|type|union|until|variant|when|where|with)$');
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  // Small Nex lexer (same as the reference pages): comments, strings, numbers,
  // keywords, capitalised names (types). A leading REPL prompt is dimmed.
  function highlight(src) {
    return src.split('\n').map(function (line) {
      if (/^\s*(Error|Warning)\b/.test(line)) return '<span class="er">' + esc(line) + '</span>';
      var out = '', p = /^(nex|dbg)> ?/.exec(line), m, prev = '';
      if (p) { out = '<span class="co">' + esc(p[0]) + '</span>'; line = line.slice(p[0].length); }
      var re = /(--.*$)|("(?:[^"\\]|\\.)*"|#(?!\{)(?:\d+|[^\s\d]\w*))|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][A-Za-z0-9_]*)|([\s\S])/g;
      while ((m = re.exec(line))) {
        if (m[1]) out += '<span class="co">' + esc(m[1]) + '</span>';
        else if (m[2] || m[3]) out += '<span class="st">' + esc(m[2] || m[3]) + '</span>';
        else if (m[4]) out += KEYWORDS.test(m[4]) && prev !== '.' ? '<span class="kw">' + m[4] + '</span>'
                           : /^[A-Z]/.test(m[4]) ? '<span class="ty">' + m[4] + '</span>' : m[4];
        else out += esc(m[5]);
        if (!/^\s$/.test(m[0])) prev = m[0];
      }
      return out;
    }).join('\n');
  }

  function highlightAll() {
    document.querySelectorAll('.prose pre > code').forEach(function (code) {
      if (code.closest('.grammar') || code.querySelector('*')) return;
      var text = code.textContent;
      // Leave shell sessions and plain-text examples ("Start: Office A") alone.
      if (/^\$ |^[A-Z]\w*:\s/.test(text)) return;
      code.innerHTML = highlight(text);
    });
  }

  // Copy buttons (Programming with Nex). What lands on the clipboard is meant
  // to be pasted and run: a REPL transcript gives only what was typed at the
  // prompts -- each input with its continuation lines, outdented by the
  // prompt's width, and no output -- a shell session only its commands, and
  // anything else the block verbatim.
  var PROMPT = /^(nex|dbg)> ?/, INDENTED = /^\s+\S/, SHELL = /^\$ /;

  function replInput(lines) {
    var out = [], i = 0;
    function continues(line) { return INDENTED.test(line) && !PROMPT.test(line); }
    while (i < lines.length) {
      var m = PROMPT.exec(lines[i]);
      if (!m) { i++; continue; }
      var width = m[0].length, input = lines[i].slice(width);
      out.push(input); i++;
      if (input.charAt(0) === ':') continue;          // a REPL command is one line
      while (i < lines.length) {
        if (continues(lines[i])) {
          out.push(lines[i].replace(new RegExp('^ {0,' + width + '}'), '')); i++;
          continue;
        }
        // Blank lines inside a multi-line input (between a class's features,
        // say) belong to it when an indented continuation follows them.
        var j = i;
        while (j < lines.length && !lines[j].trim()) j++;
        if (j > i && j < lines.length && continues(lines[j])) {
          while (i < j) { out.push(''); i++; }
          continue;
        }
        break;
      }
    }
    return out.join('\n');
  }

  function textToCopy(text) {
    var lines = text.replace(/\n+$/, '').split('\n');
    // A bare trailing prompt (the banner after `$ nex`) is not an input.
    if (lines.some(function (l) { return PROMPT.test(l) && l.replace(PROMPT, '').trim(); }))
      return replInput(lines);
    if (lines.some(function (l) { return SHELL.test(l); }))
      return lines.filter(function (l) { return SHELL.test(l); })
                  .map(function (l) { return l.slice(2); }).join('\n');
    return lines.join('\n');
  }

  function writeClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    // file:// pages and other insecure contexts have no async clipboard.
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
      if (ok) resolve(); else reject();
    });
  }

  function addCopyButtons() {
    if (root.dataset.book !== 'pwn') return;
    document.querySelectorAll('.prose pre').forEach(function (pre) {
      if (pre.closest('.grammar, .codeblock')) return;
      var wrap = document.createElement('div');
      wrap.className = 'codeblock';
      pre.parentNode.insertBefore(wrap, pre);
      wrap.appendChild(pre);
      var text = pre.textContent;
      var btn = document.createElement('button');
      btn.className = 'copy-btn'; btn.type = 'button'; btn.textContent = 'Copy';
      btn.title = /^(nex|dbg)> /m.test(text) ? 'Copy what was typed at the prompts'
                : /^\$ /m.test(text) ? 'Copy the commands' : 'Copy the code';
      btn.setAttribute('aria-label', btn.title);
      btn.addEventListener('click', function () {
        writeClipboard(textToCopy(pre.textContent)).then(
          function () { btn.textContent = 'Copied'; },
          function () { btn.textContent = 'Copy failed'; });
        setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
      });
      wrap.appendChild(btn);
    });
  }

  function ready() {
    highlightAll();
    addCopyButtons();
    var inner = document.querySelector('.site-header-inner');
    if (!inner) return;

    var home = document.createElement('a');
    home.className = 'site-crumb'; home.textContent = 'nex'; home.href = '../../../nex.html';
    var sep = document.createElement('span');
    sep.className = 'site-sep'; sep.textContent = '/';
    inner.insertBefore(sep, inner.firstChild);
    inner.insertBefore(home, sep);

    var btn = document.createElement('button');
    btn.className = 'theme-toggle'; btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle dark mode'); btn.title = 'Toggle theme';
    function sync() { btn.textContent = root.dataset.theme === 'dark' ? '☀️' : '🌙'; }
    btn.onclick = function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('nex-theme', next); } catch (e) {}
      sync();
    };
    sync();
    inner.appendChild(btn);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready); else ready();
})();
