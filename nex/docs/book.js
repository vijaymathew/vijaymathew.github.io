/* Nex books: apply the saved site theme and add a theme toggle + home crumb. */
(function () {
  var root = document.documentElement;
  try { var t = localStorage.getItem('nex-theme'); if (t) root.dataset.theme = t; } catch (e) {}

  function ready() {
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
