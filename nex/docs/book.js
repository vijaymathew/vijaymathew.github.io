/* Nex books: apply the saved site theme and add a theme toggle + home crumb. */
(function () {
  var root = document.documentElement;
  try { var t = localStorage.getItem('nex-theme'); if (t) root.dataset.theme = t; } catch (e) {}

  var KEYWORDS = new RegExp('^(?:across|alias|and|as|assert|await|case|class|convert|create|declare|deferred|do|else|elseif|end|ensure|enum|false|feature|fn|from|function|if|import|inherit|intern|invariant|let|match|nil|not|note|of|old|once|or|private|raise|repeat|require|rescue|result|retry|sealed|select|spawn|super|then|this|timeout|to|true|type|union|until|variant|when|where|with)$');
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

  function ready() {
    highlightAll();
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
