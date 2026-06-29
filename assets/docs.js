// Roompanda developer docs — SDK tab switch + mobile menu.
(function () {
  'use strict';

  /* ---- Mobile menu ---- */
  var menuBtn = document.getElementById('menuBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- SDK install tabs (npm / pip) ---- */
  var INSTALLS = { npm: 'npm install @roompanda/sdk', pip: 'pip install roompanda' };
  var ACTIVE = { border: '#3e9e63', bg: '#eaf4ee', color: '#2f7d4d' };
  var INACTIVE = { border: '#e3ddcf', bg: '#ffffff', color: '#85887e' };

  function styleTab(btn, active) {
    var s = active ? ACTIVE : INACTIVE;
    btn.style.border = '1px solid ' + s.border;
    btn.style.background = s.bg;
    btn.style.color = s.color;
  }

  var tabs = Array.prototype.slice.call(document.querySelectorAll('.sdktab'));
  var install = document.getElementById('sdkInstall');
  tabs.forEach(function (btn) {
    styleTab(btn, btn.dataset.sdk === 'npm');
    btn.addEventListener('click', function () {
      var id = btn.dataset.sdk;
      tabs.forEach(function (b) { styleTab(b, b.dataset.sdk === id); });
      if (install) install.textContent = INSTALLS[id] || INSTALLS.npm;
    });
  });
})();
