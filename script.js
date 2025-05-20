// Scroll-based fade-in animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll('section').forEach((section) => {
  section.classList.add('fade-in');
  observer.observe(section);
});

// Smooth scroll to top on page load
window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Ripple effect on clickable blog links
document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);

    const rect = this.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});

// Optional: Animate social icons on load
window.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.social-icons a');
  icons.forEach((icon, i) => {
    setTimeout(() => {
      icon.classList.add('pop-in');
    }, i * 200);
  });
});
