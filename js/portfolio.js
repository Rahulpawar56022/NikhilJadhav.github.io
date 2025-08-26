// Fade-in animation for highlights
const cards = document.querySelectorAll('.highlight-card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
});
