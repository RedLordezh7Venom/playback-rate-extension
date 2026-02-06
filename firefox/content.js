// Listen for keyboard events
document.addEventListener('keydown', function(event) {
  const video = document.querySelector('video');
  if (!video) return;

  // Get current playback rate
  let currentRate = video.playbackRate;

  // Adjust playback rate based on key pressed
  switch(event.key) {
    case '>':
    case '.':
      event.preventDefault();
      video.playbackRate = Math.min(currentRate + 0.25, 2.0);
      console.log('Playback rate increased to: ' + video.playbackRate);
      break;
    case '<':
    case ',':
      event.preventDefault();
      video.playbackRate = Math.max(currentRate - 0.25, 0.25);
      console.log('Playback rate decreased to: ' + video.playbackRate);
      break;
    case '=':
    case '+':
      event.preventDefault();
      video.playbackRate = 1.0;
      console.log('Playback rate reset to: ' + video.playbackRate);
      break;
  }
});

// Also send current playback rate to popup
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const video = document.querySelector('video');
  if (video) {
    sendResponse({playbackRate: video.playbackRate});
  } else {
    sendResponse({playbackRate: null});
  }
});