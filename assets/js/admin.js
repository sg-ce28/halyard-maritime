/* Halyard Maritime Logistics - admin page.  MOCK SITE FOR TRAINING. */

(function () {
  'use strict';

  var session = HML.requireSession('admin.html');
  if (!session) { return; }

  var page = document.getElementById('admin-page');
  var roleEl = document.getElementById('denied-role');

  // Only administrators may see this page.
  if (session.role === 'admin') {
    page.classList.remove('locked');
    if (window.KAPU) { KAPU.complete('never-trust-the-browser', 'admin'); }
  } else {
    page.classList.add('locked');
    if (roleEl) { roleEl.textContent = session.role; }
  }

  var buttons = document.querySelectorAll('[data-demo]');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (ev) {
      ev.preventDefault();
      var note = document.getElementById('admin-note');
      note.hidden = false;
      note.textContent = 'This is a training site. The "' + this.getAttribute('data-demo') + '" action does nothing.';
    });
  }
})();
