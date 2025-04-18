// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form handling
  function setupForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за заполнение формы! Мы свяжемся с вами в ближайшее время.');
        this.reset();
      });
    });
  }
  
  // Run setup when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    setupForms();
    // Add more initialization code here
  });