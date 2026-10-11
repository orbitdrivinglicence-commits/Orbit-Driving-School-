
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const overlay = document.querySelector('.menu-overlay');
const closeButton = document.querySelector('.menu-close');

function openMenu() {
  nav.classList.add('open');
  overlay.classList.add('open');
  document.body.classList.add('menu-open');
  toggle.setAttribute('aria-expanded', 'true');
  overlay.setAttribute('aria-hidden', 'false');
}

function closeMenu() {
  nav.classList.remove('open');
  overlay.classList.remove('open');
  document.body.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded', 'false');
  overlay.setAttribute('aria-hidden', 'true');
}

toggle.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

