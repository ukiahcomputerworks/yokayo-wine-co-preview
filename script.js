const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-nav');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav?.classList.toggle('is-open', !open);
});

nav?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    toggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
});

