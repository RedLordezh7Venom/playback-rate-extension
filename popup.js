document.getElementById('reset-speed').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].id) {
        // Execute the script on the active tab
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            function: resetSpeed
          },
          (result) => {
            // Optional: Handle the result or log errors
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
            }
          }
        );
      }
    });
  });
  
  function resetSpeed() {
    const video = document.querySelector('video');
    if (video) {
      video.playbackRate = 1.0;  // Reset the playback speed to 1x
    } else {
      console.log('No video element found on this page.');
    }
  }
  