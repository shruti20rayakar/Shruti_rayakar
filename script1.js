// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60, // Adjust for navbar height if needed
        behavior: 'smooth'
      });
    }
  });
});

// Console greeting
console.log("Welcome to Shruti Rayakar's Portfolio!");
