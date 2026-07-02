// Roompanda landing page — small bits of UI state.
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
    // close after tapping a link
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- API code tabs (cURL / Node / Python) ---- */
  var ACTIVE = { bg: '#1b1e20', color: '#7fd6a0' };
  var INACTIVE = { bg: 'transparent', color: '#7d8079' };

  function styleCodeTab(btn, active) {
    btn.style.background = active ? ACTIVE.bg : INACTIVE.bg;
    btn.style.color = active ? ACTIVE.color : INACTIVE.color;
  }

  var codeTabs = Array.prototype.slice.call(document.querySelectorAll('.codetab'));
  var codeSamples = Array.prototype.slice.call(document.querySelectorAll('.code-sample'));
  codeTabs.forEach(function (btn) {
    styleCodeTab(btn, btn.dataset.codetab === 'curl');
    btn.addEventListener('click', function () {
      var id = btn.dataset.codetab;
      codeTabs.forEach(function (b) { styleCodeTab(b, b.dataset.codetab === id); });
      codeSamples.forEach(function (s) { s.classList.toggle('active', s.dataset.code === id); });
    });
  });

  /* ---- Pricing billing toggle (Monthly / Annual) ---- */
  var mBtn = document.getElementById('billMonthly');
  var aBtn = document.getElementById('billAnnual');
  var wasEl = document.getElementById('hostedWas');
  var subEl = document.getElementById('hostedSub');

  var SEL = { background: '#ffffff', color: '#2a2c28', shadow: '0 2px 6px -2px rgba(0,0,0,0.18)' };
  var OFF = { background: 'transparent', color: '#85887e', shadow: 'none' };

  function applyBtn(btn, s) {
    btn.style.background = s.background;
    btn.style.color = s.color;
    btn.style.boxShadow = s.shadow;
  }

  function setBilling(annual) {
    applyBtn(mBtn, annual ? OFF : SEL);
    applyBtn(aBtn, annual ? SEL : OFF);
    if (annual) {
      wasEl.textContent = '$33';
      subEl.textContent = 'Free during early access — normally $390/yr';
    } else {
      wasEl.textContent = '$39';
      subEl.textContent = 'Free during early access — no card needed';
    }
  }

  if (mBtn && aBtn) {
    mBtn.addEventListener('click', function () { setBilling(false); });
    aBtn.addEventListener('click', function () { setBilling(true); });
  }
})();
