// Menu toggle functionality
document.getElementById('menu-toggle').addEventListener('click', function() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
});

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    // Close menu after clicking on mobile
    const nav = document.getElementById('nav');
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
    }
  });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Show loading state
  const button = this.querySelector('button');
  const originalText = button.textContent;
  button.textContent = 'Sending...';
  button.disabled = true;
  
  // Simulate form submission
  setTimeout(() => {
    alert('Thank you! Your message has been sent.');
    this.reset();
    button.textContent = originalText;
    button.disabled = false;
  }, 1500);
});

// Animation on scroll
function checkScroll() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    const position = element.getBoundingClientRect();
    if (position.top < window.innerHeight - 100) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);