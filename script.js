// AmerayMusic — interacciones mínimas de la home

document.addEventListener('DOMContentLoaded', () => {

  // Menú móvil
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Cargar más crónicas
  const loadMoreBtn = document.getElementById('load-more');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      document.querySelectorAll('.hidden-card').forEach(card => {
        card.classList.remove('hidden-card');
      });
      loadMoreBtn.setAttribute('hidden', 'true');
    });
  }

  // Año automático en el footer
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
