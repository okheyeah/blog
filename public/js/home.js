const navbar = document.querySelector (
    '.navbar'
);

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      const gap = 50;
      if (window.scrollY > gap) {
        navbar.classList.add('active');
      } else {
        navbar.classList.remove('active');
      }
    });
  });