window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const title = document.querySelector('.parallax-title');

  // Limiter le déplacement à un maximum de 800px
  const translateY = Math.min(scrollY * 1, 800);

  title.style.transform = `translateY(${translateY}px)`;
});

const section = document.querySelector('.parallax-section');
let latestScrollY = 0;
let ticking = false;

// Valeur maximale de déplacement en pixels
const maxTranslateY = 800;

window.addEventListener('scroll', () => {
  latestScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Limiter le déplacement à maxTranslateY
      const translateY = Math.min(latestScrollY * 1, maxTranslateY);
      section.style.transform = `translateY(${translateY}px)`;
      ticking = false;
    });
    ticking = true;
  }
});