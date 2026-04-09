// hover-video.js
// hover play/pause
// hover play/pause + special hover-lock behavior
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const video = card.querySelector('video');
  const isHoverLock = card.classList.contains('card-hover-lock');

  // hover → play once → freeze
  if (isHoverLock) {
    card.addEventListener('mouseenter', () => {
      // prevent re-trigger
      if (card.classList.contains('played')) return;

      card.classList.add('played');

      if (video) {
        video.currentTime = 0;
        video.play();

        // freeze on last frame
        video.addEventListener('ended', () => {
          video.pause();
        }, { once: true });
      }
    });

    return;
  }
  
  // play on hover
  card.addEventListener('mouseenter', () => video.play());
  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });

  // expand on click
  card.addEventListener('click', () => {
      // skip expansion if labeled
    if (card.classList.contains('no-expand')) return;
    
    card.classList.toggle('expanded');

    // pause video if collapsing
    if (!card.classList.contains('expanded')) {
      video.pause();
      video.currentTime = 0;
    }
  });

});
