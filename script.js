/* ===============================
   SMOOTH SCROLL (NAVBAR)
================================ */
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);

    if (!targetEl) return;

    e.preventDefault();
    targetEl.scrollIntoView({ behavior: 'smooth' });
  });
});

/* ===============================
   AGE CALCULATION
================================ */
function calculateAge() {
  // Month is 0-based: June = 5
  const birthDate = new Date(2004, 5, 6);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  const ageSpan = document.getElementById('age');
  if (ageSpan) {
    ageSpan.textContent = age;
  }
}

/* ===============================
   NAVBAR ACTIVE LINK ON SCROLL
================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

function updateActiveNav() {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

/* ===============================
   PDF MODE HELPERS
================================ */
function enablePdfMode() {
  document.body.classList.add('pdf-mode');
}

function disablePdfMode() {
  document.body.classList.remove('pdf-mode');
}

/* ===============================
   AUTO AGE UPDATE (SAFE)
   (runs once every hour)
================================ */
setInterval(calculateAge, 1000 * 60 * 60);

/* ===============================
   INIT
================================ */
document.addEventListener('DOMContentLoaded', () => {
  calculateAge();
  updateActiveNav();
});

window.addEventListener('scroll', updateActiveNav);
