// script.js - mobile menu toggle and simple form handler
document.addEventListener('DOMContentLoaded', function(){
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  menuToggle && menuToggle.addEventListener('click', () => {
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.background = 'linear-gradient(90deg, rgba(13,71,161,0.95), rgba(25,118,210,0.95))';
    nav.style.position = 'absolute';
    nav.style.right = '20px';
    nav.style.top = '66px';
    nav.style.padding = '12px';
    nav.style.borderRadius = '8px';
  });

  // Simple contact form behavior (client-side only)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      alert('Thanks ' + (name || '') + '! Your message was received (demo).\nPlease configure form handling on your server or using a service like Formspree.');
      form.reset();
    });
  }
});
