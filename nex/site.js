/* Nex site behaviour: theme, code-block copy buttons and highlighting, TOC, blog comments. */
(function () {
  var root = document.documentElement;

  // Apply the saved theme immediately (this file loads in <head>) to avoid a flash.
  try { var saved = localStorage.getItem('nex-theme'); if (saved) root.dataset.theme = saved; } catch (e) {}

  function syncTheme() {
    var dark = root.dataset.theme === 'dark';
    var btn = document.getElementById('theme');
    if (btn) btn.textContent = dark ? '☀️' : '🌙';
    document.querySelectorAll('img[data-light][data-dark]').forEach(function (i) {
      i.src = dark ? i.dataset.dark : i.dataset.light;
    });
  }

  var KEYWORDS = new RegExp('^(?:class|feature|create|inherit|invariant|require|ensure|do|end|if|then|elseif|else|when|case|of|from|until|repeat|across|as|let|function|fn|result|old|import|intern|with|spawn|select|timeout|rescue|retry|raise|and|or|not|true|false|nil|this|assert|await)$');
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  // Small lexer: comments, strings, numbers, keywords, capitalised names (types).
  function highlight(src) {
    return src.split('\n').map(function (line) {
      if (/^\s*(Error|Warning)\b/.test(line)) return '<span class="er">' + esc(line) + '</span>';
      var re = /(--.*$)|("(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][A-Za-z0-9_]*)|([\s\S])/g, out = '', m;
      while ((m = re.exec(line))) {
        if (m[1]) out += '<span class="c">' + esc(m[1]) + '</span>';
        else if (m[2]) out += '<span class="s">' + esc(m[2]) + '</span>';
        else if (m[3]) out += '<span class="s">' + m[3] + '</span>';
        else if (m[4]) out += KEYWORDS.test(m[4]) ? '<span class="k">' + m[4] + '</span>'
                           : /^[A-Z]/.test(m[4]) ? '<span class="n">' + m[4] + '</span>' : m[4];
        else out += esc(m[5]);
      }
      return out;
    }).join('\n');
  }

  function ready() {
    syncTheme();
    var btn = document.getElementById('theme');
    if (btn) btn.onclick = function () {
      var t = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = t;
      try { localStorage.setItem('nex-theme', t); } catch (e) {}
      syncTheme();
      var frame = document.querySelector('iframe.giscus-frame');
      if (frame) frame.contentWindow.postMessage({ giscus: { setConfig: { theme: t } } }, 'https://giscus.app');
    };

    // Blog comments: load giscus in the current theme (the toggle above keeps it in sync).
    var comments = document.querySelector('.giscus[data-repo]');
    if (comments) {
      var gs = document.createElement('script');
      gs.src = 'https://giscus.app/client.js'; gs.async = true; gs.crossOrigin = 'anonymous';
      Object.keys(comments.dataset).forEach(function (k) {
        gs.setAttribute('data-' + k.replace(/[A-Z]/g, function (c) { return '-' + c.toLowerCase(); }), comments.dataset[k]);
      });
      gs.setAttribute('data-theme', root.dataset.theme === 'dark' ? 'dark' : 'light');
      comments.appendChild(gs);
    }

    // Documentation pages: highlight + copy buttons on every code block.
    document.querySelectorAll('.prose pre').forEach(function (pre) {
      var code = pre.querySelector('code');
      if (!code) return;
      var text = code.textContent;
      // Fenced blocks from Markdown carry a language-* class; only Nex is highlighted.
      var lang = (code.className.match(/language-(\S+)/) || [])[1];
      if ((!lang || lang === 'nex') && !/^dbg>|^\$ /.test(text)) code.innerHTML = highlight(text);
      var b = document.createElement('button');
      b.className = 'pre-copy'; b.type = 'button'; b.textContent = 'Copy';
      b.setAttribute('aria-label', 'Copy code');
      b.onclick = function () {
        (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(
          function () { b.textContent = 'Copied'; }, function () { b.textContent = 'Failed'; });
        setTimeout(function () { b.textContent = 'Copy'; }, 1500);
      };
      pre.appendChild(b);
    });

    // Tables of contents: open on desktop, highlight the section in view.
    var tocs = document.querySelectorAll('.toc');
    if (tocs.length) {
      var mq = window.matchMedia('(min-width: 901px)');
      var sync = function () { tocs.forEach(function (t) { t.open = mq.matches; }); };
      sync(); (mq.addEventListener ? mq.addEventListener('change', sync) : mq.addListener(sync));
      var links = {};
      document.querySelectorAll('.toc a[href^="#"]').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
      var heads = Array.prototype.filter.call(document.querySelectorAll('.prose h2[id], .prose h3[id]'), function (h) { return links[h.id]; });
      if ('IntersectionObserver' in window && heads.length) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (!e.isIntersecting) return;
            Object.keys(links).forEach(function (k) { links[k].classList.remove('on'); });
            links[e.target.id].classList.add('on');
          });
        }, { rootMargin: '-72px 0px -70% 0px' });
        heads.forEach(function (h) { io.observe(h); });
      }
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready); else ready();
})();
