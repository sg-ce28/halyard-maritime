/* Halyard Maritime Logistics - Operations Dashboard
 * Shared session + login logic.  MOCK SITE FOR TRAINING.
 *
 * NOTE (Marcus, IT): auth is handled here in the browser for now. The vendor
 * said a proper server-side login is "phase 2". Keep the user list below in
 * sync with the spreadsheet.
 */

var HML = (function () {
  'use strict';

  var SESSION_KEY = 'hml_session';
  var REMEMBER_KEY = 'hml_remember';

  // User accounts.  flag{secrets-in-javascript}
  var USERS = [
    { user: 'analyst',    pass: 'Halyard2024!', role: 'viewer', name: 'Ops Analyst (shared)' },
    { user: 'dwhitfield', pass: 'Halyard2024!', role: 'viewer', name: 'Dana Whitfield' },
    { user: 'lakana',     pass: 'Kolea#2019',   role: 'viewer', name: 'Leilani Akana' },
    { user: 'admin',      pass: 'admin',        role: 'admin',  name: 'System Administrator' }
  ];

  function readSession() {
    try {
      var raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function writeSession(s) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(s));
  }

  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  function findUser(user, pass) {
    for (var i = 0; i < USERS.length; i++) {
      if (USERS[i].user === user && USERS[i].pass === pass) { return USERS[i]; }
    }
    return null;
  }

  // Called by every app page. Sends visitors without a session back to the login page.
  function requireSession(activeNav) {
    var s = readSession();
    if (!s) {
      location.replace('index.html');
      return null;
    }
    var who = document.getElementById('who');
    if (who) { who.textContent = s.name + ' (' + s.role + ')'; }

    var chip = document.getElementById('chip-name');
    if (chip) { chip.textContent = s.name; }
    var avatar = document.getElementById('chip-avatar');
    if (avatar) { avatar.textContent = s.name.charAt(0).toUpperCase(); }

    var since = document.getElementById('since');
    if (since && s.loginAt) {
      since.textContent = 'Signed in ' + new Date(s.loginAt).toLocaleString();
    }

    // Admin link is only shown to administrators.
    if (s.role === 'admin') {
      var adminLinks = document.querySelectorAll('.nav__admin');
      for (var i = 0; i < adminLinks.length; i++) { adminLinks[i].hidden = false; }
    }

    if (activeNav) {
      var links = document.querySelectorAll('.nav a');
      for (var j = 0; j < links.length; j++) {
        if (links[j].getAttribute('href') === activeNav) { links[j].classList.add('is-active'); }
      }
    }

    var logout = document.getElementById('logout');
    if (logout) {
      logout.addEventListener('click', function (ev) {
        ev.preventDefault();
        clearSession();
        location.href = 'index.html';
      });
    }
    return s;
  }

  // Login page wiring.
  function initLogin() {
    var form = document.getElementById('login-form');
    if (!form) { return; }
    var userEl = document.getElementById('username');
    var passEl = document.getElementById('password');
    var remEl = document.getElementById('remember');
    var err = document.getElementById('login-error');

    // Restore a remembered login.
    try {
      var saved = JSON.parse(localStorage.getItem(REMEMBER_KEY) || 'null');
      if (saved) {
        userEl.value = saved.user || '';
        passEl.value = saved.pass || '';
        remEl.checked = true;
      }
    } catch (e) { /* ignore */ }

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var u = findUser(userEl.value.trim(), passEl.value);
      if (!u) {
        err.hidden = false;
        err.textContent = 'Incorrect username or password. (Tip: the ops password is the company name + year + !)';
        return;
      }
      if (remEl.checked) {
        // Remember me: store the login so the form is pre-filled next time.
        localStorage.setItem(REMEMBER_KEY, JSON.stringify({ user: u.user, pass: u.pass }));
      } else {
        localStorage.removeItem(REMEMBER_KEY);
      }
      writeSession({ user: u.user, name: u.name, role: u.role, loginAt: new Date().toISOString() });
      location.href = 'dashboard.html';
    });
  }

  return {
    requireSession: requireSession,
    readSession: readSession,
    initLogin: initLogin,
    clearSession: clearSession
  };
})();
