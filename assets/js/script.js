'use strict';
/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    if (backTopBtn) backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    if (backTopBtn) backTopBtn.classList.remove("active");
  }
});



  const switchInput = document.querySelector('.switch__input');

  // Load saved theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    switchInput.checked = true;
  }

  switchInput.addEventListener('change', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    );
  });


  /* ── Project Carousel – 3D stacked cards ── */
  const carousel = document.getElementById('projectCarousel');
  if (carousel) {
    const track = carousel.querySelector('.carousel-track');
    const cards = Array.from(track.querySelectorAll('.pr-card'));
    const prevBtn = carousel.querySelector('[data-carousel-prev]');
    const nextBtn = carousel.querySelector('[data-carousel-next]');
    const dotsContainer = document.getElementById('carouselDots');
    const currentSpan = carousel.querySelector('[data-carousel-current]');
    const totalSpan = carousel.querySelector('[data-carousel-total]');
    const total = cards.length;
    let current = 0;
    let isAnimating = false;

    totalSpan.textContent = total;

    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      dot.setAttribute('aria-label', 'Go to project ' + (i + 1));
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    function updateUI() {
      cards.forEach((card, i) => {
        card.classList.remove('carousel-active', 'carousel-prev', 'carousel-next');
        if (i === current) {
          card.classList.add('carousel-active');
        } else if (i === current - 1) {
          card.classList.add('carousel-prev');
        } else if (i === current + 1) {
          card.classList.add('carousel-next');
        }
      });

      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
      currentSpan.textContent = current + 1;

      prevBtn.classList.toggle('disabled', current === 0);
      nextBtn.classList.toggle('disabled', current === total - 1);
    }

    function goTo(index) {
      if (isAnimating || index === current || index < 0 || index >= total) return;
      isAnimating = true;
      current = index;
      updateUI();
      setTimeout(() => { isAnimating = false; }, 650);
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    document.addEventListener('keydown', (e) => {
      const rect = carousel.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === 'ArrowLeft') goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
    });

    let touchStartX = 0;
    carousel.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? goTo(current + 1) : goTo(current - 1);
      }
    }, { passive: true });

    updateUI();
  }

