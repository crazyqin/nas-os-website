// NAS-OS — minimal JS

// Nav scroll shadow
const nav = document.querySelector('.nav');
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      nav.style.boxShadow = window.scrollY > 8 ? '0 1px 0 rgba(0,0,0,.06)' : 'none';
      ticking = false;
    });
    ticking = true;
  }
});

// Smooth scroll (for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior:'smooth' }); }
  });
});
