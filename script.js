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

const entryDoor = document.querySelector('.entry-door');
const enterCellar = document.querySelector('[data-enter-cellar]');

enterCellar?.addEventListener('click', () => {
  entryDoor?.classList.add('is-opening');
  document.body.classList.remove('splash-active');

  window.setTimeout(() => {
    entryDoor?.setAttribute('hidden', '');
    document.querySelector('.site-header a')?.focus({ preventScroll: true });
  }, 420);
});

