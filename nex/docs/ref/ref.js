/* Search box for the Nex reference: queries search.json (next to this file). */
(function () {
  var input = document.getElementById('ref-q'), box = document.getElementById('ref-results');
  if (!input || !box) return;
  var index = null, loading = null;

  function load() {
    if (index) return Promise.resolve(index);
    if (!loading) loading = fetch('search.json').then(function (r) { return r.json(); })
      .then(function (d) { index = d; return d; }).catch(function () { index = []; return index; });
    return loading;
  }
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function mark(text, words) {
    var out = esc(text);
    words.forEach(function (w) {
      out = out.replace(new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
    });
    return out;
  }
  function snippet(text, words) {
    var low = text.toLowerCase(), at = -1;
    words.forEach(function (w) { var i = low.indexOf(w); if (i >= 0 && (at < 0 || i < at)) at = i; });
    var from = Math.max(0, at - 40), s = text.slice(from, from + 110).replace(/\s+/g, ' ');
    return (from > 0 ? '… ' : '') + s + (from + 110 < text.length ? ' …' : '');
  }
  function run() {
    var words = input.value.toLowerCase().split(/\s+/).filter(function (w) { return w.length > 1; });
    if (!words.length) { box.classList.remove('on'); return; }
    load().then(function (d) {
      var hits = d.filter(function (e) {
        var hay = ((e.title || '') + ' ' + (e.section || '') + ' ' + (e.text || '')).toLowerCase();
        return words.every(function (w) { return hay.indexOf(w) >= 0; });
      }).slice(0, 8);
      box.innerHTML = hits.length ? hits.map(function (e) {
        var head = (e.section || e.title || e.href).replace(/<[^>]*>/g, '');
        return '<a href="' + esc(e.href) + '"><b>' + mark(head, words) + '</b><span>' + mark(snippet(e.text || '', words), words) + '</span></a>';
      }).join('') : '<p>No matches.</p>';
      box.classList.add('on');
    });
  }
  input.addEventListener('input', run);
  input.addEventListener('focus', run);
  input.addEventListener('keydown', function (e) { if (e.key === 'Escape') { box.classList.remove('on'); input.blur(); } });
  document.addEventListener('click', function (e) { if (!e.target.closest('.ref-search')) box.classList.remove('on'); });
})();
