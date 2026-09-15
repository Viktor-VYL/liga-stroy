document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('header');
  var burger = document.getElementById('burger');
  var nav = document.getElementById('main-nav');
  var headerContacts = document.querySelector('.header-contacts');
  var yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function onScroll() {
    if (window.scrollY > 8) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  function closeMenu() {
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    if (headerContacts) headerContacts.classList.remove('is-open');
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      if (headerContacts) headerContacts.classList.toggle('is-open', isOpen);
      burger.classList.toggle('is-open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }
});
