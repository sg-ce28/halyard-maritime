/* Halyard Maritime Logistics - cosmetic motion only (KPI numbers count up on load).  MOCK SITE FOR TRAINING.
 * Purely visual: nothing here affects sign-in, roles, or data. */

(function () {
  'use strict';
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }

  var els = document.querySelectorAll('.kpi__value');
  for (var i = 0; i < els.length; i++) { countUp(els[i], i * 90); }

  function countUp(el, delay) {
    var text = el.textContent.trim();
    var m = text.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
    if (!m) { return; }
    var target = parseFloat(m[1].replace(/,/g, ''));
    var decimals = (m[1].split('.')[1] || '').length;
    var grouped = m[1].indexOf(',') !== -1;
    var suffix = m[2];
    var start = null;
    var duration = 900;

    function format(n) {
      var s = n.toFixed(decimals);
      if (grouped) { s = s.replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
      return s + suffix;
    }
    function step(ts) {
      if (start === null) { start = ts + delay; }
      var p = Math.min(1, Math.max(0, (ts - start) / duration));
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = format(target * eased);
      if (p < 1) { requestAnimationFrame(step); } else { el.textContent = text; }
    }
    el.textContent = format(0);
    requestAnimationFrame(step);
  }
})();
