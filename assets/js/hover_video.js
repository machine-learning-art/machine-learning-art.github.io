// hover-video.js
// hover play/pause
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const video = card.querySelector('video');

  // play on hover
  card.addEventListener('mouseenter', () => video.play());
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });

  // expand on click
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');

    // pause video if collapsing
    if (!card.classList.contains('expanded')) {
      video.pause();
      video.currentTime = 0;
    }
  });

  cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});
  
});
