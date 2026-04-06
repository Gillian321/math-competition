// script.js — Math Competition page
// Currently handles subtle load animations.
// Add future features here (search, filters, modal details, etc.)

document.addEventListener('DOMContentLoaded', () => {
  // Fade-in cards one by one when the page loads
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.3s ease';
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 120);
  });
});
