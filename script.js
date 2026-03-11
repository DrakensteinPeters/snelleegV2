/* ============================================================
   SNELLEEG.NL — JavaScript
   ============================================================ */

/** Mobiel hamburger menu */
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

/** FAQ accordion */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/** Scroll-animaties */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

/** Nav schaduw bij scrollen */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 40
      ? '0 4px 24px rgba(0,0,0,0.1)'
      : '0 2px 16px rgba(0,0,0,0.05)';
  }
});
