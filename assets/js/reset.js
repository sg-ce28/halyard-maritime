/* Halyard Maritime Logistics - self-service password reset.  MOCK SITE FOR TRAINING.
 * TODO: move the question/answer check to the server before launch.
 */

(function () {
  'use strict';

  // Security questions and answers, per account.
  var QUESTIONS = {
    analyst:    { q: 'What is the name of the ops room whiteboard cat?', a: 'mochi' },
    dwhitfield: { q: 'What city were you born in?',                      a: 'hilo' },
    lakana:     { q: 'What is your favorite vessel in the fleet?',      a: 'kolea' },
    admin:      { q: 'What is your favorite vessel in the fleet?',      a: 'kolea' }
  };

  var form = document.getElementById('reset-form');
  var userEl = document.getElementById('reset-user');
  var qEl = document.getElementById('reset-question');
  var aEl = document.getElementById('reset-answer');
  var out = document.getElementById('reset-result');
  var step2 = document.getElementById('reset-step2');

  function normalise(s) {
    return String(s || '').toLowerCase()
      .replace(/^m\/?v\s+/, '')      // drop a leading "MV "
      .replace(/[Ā-ſ]/g, function (c) { // strip macrons (ō -> o)
        return { 'ō': 'o', 'ē': 'e', 'ā': 'a', 'ī': 'i', 'ū': 'u' }[c] || c;
      })
      .replace(/[^a-z0-9]/g, '');
  }

  userEl.addEventListener('change', showQuestion);
  userEl.addEventListener('blur', showQuestion);

  function showQuestion() {
    var u = userEl.value.trim().toLowerCase();
    var rec = QUESTIONS[u];
    out.hidden = true;
    if (rec) {
      qEl.textContent = rec.q;
      step2.hidden = false;
    } else if (u) {
      qEl.textContent = '';
      step2.hidden = true;
      out.hidden = false;
      out.className = 'alert alert--bad';
      out.textContent = 'No account named "' + u + '". Check the staff directory for usernames.';
    }
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var u = userEl.value.trim().toLowerCase();
    var rec = QUESTIONS[u];
    if (!rec) { showQuestion(); return; }
    out.hidden = false;
    if (normalise(aEl.value) === rec.a) {
      out.className = 'alert alert--ok';
      out.innerHTML = 'Identity confirmed for <strong>' + u + '</strong>. Temporary password: ' +
        '<code>Temp-' + u + '-1234</code> (training site, not a real credential). ' +
        '<code>FLAG{public-answers-are-not-secrets}</code>';
    } else {
      out.className = 'alert alert--bad';
      out.textContent = 'That answer does not match our records. Try again.';
    }
  });
})();
