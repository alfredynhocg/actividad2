document.addEventListener('DOMContentLoaded', () => {

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
