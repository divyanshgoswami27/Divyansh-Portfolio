// Hamburger menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
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
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(this);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  // Show loading state
  const button = this.querySelector('button');
  const originalText = button.textContent;
  button.textContent = 'Sending...';
  button.disabled = true;

fetch('http://localhost:3000/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})

  .then(response => response.json())
  .then(result => {
    if (result.success) {
      alert('Message sent successfully!');
      this.reset(); // Clear the form
    } else {
      alert('Error: ' + result.error);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  })
  .finally(() => {
    // Reset button
    button.textContent = originalText;
    button.disabled = false;
  });
});
// Smooth scroll reveal
window.addEventListener("scroll", function() {
  document.querySelectorAll("section").forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});
