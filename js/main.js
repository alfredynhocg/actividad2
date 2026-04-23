document.addEventListener('DOMContentLoaded', () => {

  // Header: sombra al hacer scroll
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // Barra de anuncio: cerrar y recordar en sesión
  const announceBar = document.getElementById('announce-bar');
  const announceClose = document.getElementById('announce-close');
  if (sessionStorage.getItem('announce-dismissed')) {
    announceBar.classList.add('hidden');
  }
  announceClose.addEventListener('click', () => {
    announceBar.classList.add('hidden');
    sessionStorage.setItem('announce-dismissed', '1');
  });

  // Menú hamburguesa (móvil)
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobileMenu.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });

  // Nav: highlight del link según sección visible
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach((section) => observer.observe(section));

  // Formulario de contacto (fake submit)
  window.handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✅ Mensaje enviado';
      e.target.reset();
      setTimeout(() => {
        btn.textContent = 'Enviar mensaje';
        btn.disabled = false;
      }, 3000);
    }, 1200);
  };

});
