/* ===================================
   NAVIGATION SCROLL EFFECT
   =================================== */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* ===================================
   MOBILE MENU TOGGLE
   =================================== */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

/* ===================================
   SMOOTH SCROLL
   =================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/* ===================================
   SCROLL REVEAL ANIMATIONS
   =================================== */
const revealElements = document.querySelectorAll(
  '.reveal, .reveal-left, .reveal-right, .reveal-scale'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');

      // Animate skill bars when visible
      const skillBar = entry.target.querySelector('.skill-bar');
      if (skillBar) {
        setTimeout(() => {
          skillBar.style.width = skillBar.dataset.width;
        }, 300);
      }

      // Animate stat counters when visible
      const statNumber = entry.target.querySelector('.stat-number');
      if (statNumber && !statNumber.classList.contains('counted')) {
        statNumber.classList.add('counted');
        animateCounter(statNumber);
      }
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

/* ===================================
   COUNTER ANIMATION
   =================================== */
function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 1500;
  const increment = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, 16);
}

/* ===================================
   SKILL BAR OBSERVER (Alternative)
   =================================== */
const skillCards = document.querySelectorAll('.skill-card');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target.querySelector('.skill-bar');
      if (bar) {
        setTimeout(() => {
          bar.style.width = bar.dataset.width;
        }, 200);
      }
    }
  });
}, { threshold: 0.5 });

skillCards.forEach(card => skillObserver.observe(card));

/* ===================================
   HERO TYPING EFFECT (Subtitle)
   =================================== */
const heroSubtitle = document.querySelector('.hero-description');
if (heroSubtitle) {
  const text = heroSubtitle.textContent;
  heroSubtitle.textContent = '';
  heroSubtitle.style.opacity = '1';

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      heroSubtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    }
  }

  // Start typing after page load
  setTimeout(typeWriter, 800);
}

/* ===================================
   PARALLAX EFFECT ON HERO
   =================================== */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector('#hero');

  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    hero.style.opacity = 1 - scrolled / (window.innerHeight * 1.2);
  }
});

/* ===================================
   ACTIVE NAV LINK ON SCROLL
   =================================== */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

/* ===================================
   CONSOLE EASTER EGG (Professional)
   =================================== */
console.log('%c🚀 Alex Chen — Cloud & DevOps Engineer', 'font-size:16px;font-weight:bold;color:#0ea5e9;');
console.log('%cIf you\'re a recruiter: alex.chen@mit.edu', 'font-size:12px;color:#94a3b8;');
