document.addEventListener('DOMContentLoaded', function () {
  const animateElements = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Staggered animation
        entry.target.style.animationDelay = (index * 0.1) + 's';
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  animateElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      item.classList.toggle('active');
    });
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Contact Form
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      form.reset();
    });
  }
  const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.createElement('button');
toggleBtn.className = 'toggle-btn';
toggleBtn.textContent = '☰';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

});