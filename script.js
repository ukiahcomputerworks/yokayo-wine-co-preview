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

const cellarImage = document.querySelector('#cellar-view');
const cellarLabel = document.querySelector('#cellar-view-label span:last-child');
const cellarButtons = [...document.querySelectorAll('[data-cellar-view]')];

cellarButtons.forEach((button) => {
  const preload = new Image();
  preload.src = button.dataset.src;

  button.addEventListener('click', () => {
    if (!cellarImage || button.classList.contains('is-active')) return;

    cellarImage.classList.add('is-changing');
    cellarButtons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');

    window.setTimeout(() => {
      cellarImage.src = button.dataset.src;
      cellarImage.alt = button.dataset.alt;
      if (cellarLabel) cellarLabel.textContent = button.dataset.label;
      cellarImage.classList.remove('is-changing');
    }, 120);
  });
});

