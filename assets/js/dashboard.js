/* Halyard Maritime Logistics - dashboard page behaviour.  MOCK SITE FOR TRAINING. */

(function () {
  'use strict';

  var session = HML.requireSession('dashboard.html');
  if (!session) { return; }

  var form = document.getElementById('track-form');
  var input = document.getElementById('track-q');
  var msg = document.getElementById('track-msg');
  var rows = document.querySelectorAll('#shipments tbody tr');

  if (!form) { return; }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var q = input.value.trim();
    var shown = 0;

    for (var i = 0; i < rows.length; i++) {
      var text = rows[i].textContent.toLowerCase();
      var match = q === '' || text.indexOf(q.toLowerCase()) !== -1;
      rows[i].hidden = !match;
      if (match) { shown++; }
    }

    // Show the user what they searched for.  FLAG{escape-what-you-echo}
    if (q === '') {
      msg.innerHTML = 'Showing all ' + shown + ' shipments.';
    } else {
      msg.innerHTML = 'Showing ' + shown + ' result(s) for <strong>' + q + '</strong>.';
    }
  });

  var reset = document.getElementById('track-reset');
  if (reset) {
    reset.addEventListener('click', function () {
      input.value = '';
      for (var i = 0; i < rows.length; i++) { rows[i].hidden = false; }
      msg.textContent = 'Showing all ' + rows.length + ' shipments.';
    });
  }
})();
