// Scroll Reveal
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
});
document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// Theme Toggle
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Auto-close nav on link click (mobile)
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navLinks.classList.remove('show');
    }
  });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to top when clicked
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");

  document.addEventListener("mousemove", (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    ring.style.left = `${e.clientX}px`;
    ring.style.top = `${e.clientY}px`;
  });