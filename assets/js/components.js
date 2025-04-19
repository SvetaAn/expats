document.addEventListener('DOMContentLoaded', function() {
  // Load navigation component
  fetch('/components/nav.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-container').innerHTML = data;
      // Reinitialize mobile menu functionality
      const mobileMenuButton = document.querySelector('.mobile-menu-button');
      const mobileMenu = document.querySelector('.mobile-menu');
      
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
          mobileMenu.classList.toggle('hidden');
        });
      }
    });
});