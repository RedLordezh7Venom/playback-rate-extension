# Video Playback Speed Controller - Chrome Extension

This Chrome extension allows you to control the playback speed of videos on web pages (including YouTube) using simple keyboard shortcuts. You can increase or decrease the playback speed, reset it back to the normal rate, and skip ahead in the video. The extension also bypasses the usual speed limits set by platforms like YouTube, giving you more control over video playback.

---

## Features
- **Increase Playback Speed**: Press the `>` key to increase the playback speed by 0.25x (up to 4x).
- **Decrease Playback Speed**: Press the `<` key to decrease the playback speed by 0.25x (down to 0.25x, with a reset to 2x when the rate exceeds 2x).
- **Skip Ahead**: Press the `p` key to skip ahead by 100 seconds.
- **Speed Overlay**: A small overlay shows the current playback speed on the screen.
- **Reset Speed**: A button in the popup to reset the playback speed back to 1.0x.
- **Bypass YouTube's Speed Limit**: The extension allows playback rates above YouTube's usual limits (up to 4x).

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/video-playback-speed-controller.git
   ```

2. **Load the extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" in the top right.
   - Click on "Load unpacked" and select the folder where you cloned the project.

---

## Files

### `content.js`

This script is injected into the web page. It handles the playback speed control and overlay display.

```javascript
let playbackRate = 1;  // Starting playback rate

// Create an overlay element to display the playback rate
const overlay = document.createElement('div');
overlay.style.position = 'absolute';
overlay.style.top = '20px';
overlay.style.left = '20px';
overlay.style.padding = '10px';
overlay.style.fontSize = '18px';
overlay.style.fontWeight = 'bold';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
overlay.style.color = 'white';
overlay.style.borderRadius = '5px';
overlay.style.zIndex = '10000';
overlay.style.opacity = '0';
document.body.appendChild(overlay);

// Function to show the overlay with the current playback rate
function showOverlay() {
    overlay.innerText = `Speed: ${playbackRate.toFixed(2)}x`;
    overlay.style.opacity = '1';
    // Hide the overlay after 1.5 seconds
    setTimeout(() => {
        overlay.style.opacity = '0';
    }, 1500);
}

document.addEventListener('keydown', function(event) {
    console.log("Key pressed: " + event.key);

    if (event.key === '>') {
        playbackRate = Math.min(playbackRate + 0.25, 4);
        const video = document.querySelector('video');
        if (video) {
            video.playbackRate = playbackRate;
            console.log('New Playback Rate: ' + playbackRate + 'x');
            showOverlay();
        }
    }

    if (event.key === '<') {
        if (playbackRate > 2) playbackRate = 2;
        playbackRate = Math.max(playbackRate - 0.25, 0.25);
        const video = document.querySelector('video');
        if (video) {
            video.playbackRate = playbackRate;
            console.log('New Playback Rate: ' + playbackRate + 'x');
            showOverlay();
        }
    }

    if (event.key === 'p') {
        const video = document.querySelector('video');
        if (video) {
            video.currentTime += 100; // Skip forward 100 seconds
        }
    }
});
```

### `manifest.json`

This file defines the extension's metadata and permissions.

```json
{
    "manifest_version": 3,
    "name": "Video Playback Speed Controller",
    "version": "1.0",
    "description": "Change video playback speed with keys.",
    "permissions": [
      "activeTab",
      "scripting"
    ],
    "background": {
      "service_worker": "background.js"
    },
    "content_scripts": [
      {
        "matches": ["<all_urls>"],
        "js": ["content.js"]
      }
    ],
    "action": {
      "default_popup": "popup.html",
      "default_icon": {
        "16": "icon.png",
        "48": "icon.png",
        "128": "icon.png"
      }
    },
    "icons": {
      "16": "icon.png",
      "48": "icon.png",
      "128": "icon.png"
    }
}
```

### `popup.js`

Handles the popup UI for the extension, including the button to reset playback speed.

```javascript
document.getElementById('reset-speed').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].id) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id },
            function: resetSpeed
          },
          (result) => {
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
```

### `popup.html`

Simple HTML for the popup interface to reset the video speed.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Speed Controller</title>
</head>
<body>
    <button id="reset-speed">Reset Playback Speed</button>
</body>
</html>
```

### `icon.png`

You can use any icon image here, for example, a simple play/pause icon. This image will be shown in the Chrome toolbar.

---

## Usage

1. **Increase Playback Speed**: Press the `>` key.
2. **Decrease Playback Speed**: Press the `<` key.
3. **Skip Forward**: Press the `p` key.
4. **Reset Playback Speed**: Click the "Reset Playback Speed" button in the extension popup.
5. **Bypass YouTube Speed Limits**: You can increase the playback speed beyond the default limits on YouTube (up to 4x).

---

## Contributing

1. Fork the repository.
2. Create a new branch for your changes.
3. Make the necessary changes and submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

This extension uses simple JavaScript and Chrome APIs to control video playback speed. It was created for personal use and improved to offer more flexibility for YouTube and other video platforms.

---

Feel free to add additional features or improvements by contributing!
# playback-rate-extension
Bypass the normal 2x limit for playback, current range : [0.0625,16]
skip ads : ) 
