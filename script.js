const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-nav');
const entryDoor = document.querySelector('.entry-door');
const enterCellar = document.querySelector('[data-enter-cellar]');
const homeBypassKey = 'yokayo-home-bypass';

if (document.body.classList.contains('room-home')) {
  try {
    if (window.sessionStorage.getItem(homeBypassKey) === 'true') {
      window.sessionStorage.removeItem(homeBypassKey);
      entryDoor?.setAttribute('hidden', '');
      document.body.classList.remove('splash-active');
    }
  } catch {
    // The entrance remains available when session storage is unavailable.
  }
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;

  const isHomeLink = link.classList.contains('brand') || link.textContent.trim() === 'Home';
  if (!isHomeLink) return;

  try {
    window.sessionStorage.setItem(homeBypassKey, 'true');
  } catch {
    // Navigation still works if session storage is unavailable.
  }
});

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

enterCellar?.addEventListener('click', () => {
  entryDoor?.classList.add('is-opening');
  document.body.classList.remove('splash-active');

  window.setTimeout(() => {
    entryDoor?.setAttribute('hidden', '');
    document.querySelector('.site-header a')?.focus({ preventScroll: true });
  }, 420);
});

