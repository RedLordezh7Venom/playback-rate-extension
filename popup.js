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
              console.error(chrome.runtime.lastError.message);
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

  document.getElementById('toggle-side-panel').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0] && tabs[0].id) {
            chrome.tabs.sendMessage(tabs[0].id, { type: 'toggle_side_panel' }, response => {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError.message);
                }
            });
        }
    });
  });

  document.getElementById('view-saved').addEventListener('click', () => {
    const savedVideosList = document.getElementById('saved-videos-list');
    savedVideosList.innerHTML = ''; // Clear previous list

    const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];

    if (savedVideos.length > 0) {
        savedVideos.forEach((videoURL, index) => {
            const listItem = document.createElement('div');
            const link = document.createElement('a');
            link.href = videoURL;
            link.textContent = `Video ${index + 1}`;
            link.target = '_blank';
            listItem.appendChild(link);
            savedVideosList.appendChild(listItem);
        });
    } else {
        savedVideosList.textContent = 'No saved videos yet.';
    }
});
  