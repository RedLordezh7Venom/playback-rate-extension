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
    // Log the key pressed to debug
    console.log("Key pressed: " + event.key);

    // Check if the '>' key is pressed to increase playback speed
    if (event.key === '>') {
        playbackRate = Math.min(playbackRate + 0.25, 4);  // Increase rate but max out at 4
        const video = document.querySelector('video');  // Select the video element

        if (video) {
            video.playbackRate = playbackRate;  // Set playback rate
            console.log('New Playback Rate: ' + playbackRate + 'x');  // Log new playback rate
            showOverlay();  // Display the speed overlay
        } else {
            console.log('Video element not found!');
        }
    }

    // Check if the '<' key is pressed to decrease playback speed
    if (event.key === '<') {
        if (playbackRate > 2) {
            playbackRate = 2;  // Reset rate to 2 if it's above 2
        }
        playbackRate = Math.max(playbackRate - 0.25, 0.25);  // Decrease rate but min 0.25
        const video = document.querySelector('video');  // Select the video element

        if (video) {
            video.playbackRate = playbackRate;  // Set playback rate
            console.log('New Playback Rate: ' + playbackRate + 'x');  // Log new playback rate
            showOverlay();  // Display the speed overlay
        } else {
            console.log('Video element not found!');
        }
    }
    if (event.key === 'p') {
        const video = document.querySelector('video');
        if (video) {
            video.currentTime += 100; // Skip forward 20 seconds
        } else {
            console.log('Video element not found!');
        }
    }

    // Snap video (Shift + S)
    if (event.shiftKey && event.key === 'S') {
        const video = document.querySelector('video');
        if (video) {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataURL = canvas.toDataURL('image/png');
            const newTab = window.open();
            newTab.document.body.innerHTML = `<img src="${dataURL}" width="100%">`;
        } else {
            console.log('Video element not found!');
        }
    }

    // Save video (Shift + K)
    if (event.shiftKey && event.key === 'K') {
        const videoURL = window.location.href;
        let savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];
        if (!savedVideos.includes(videoURL)) {
            savedVideos.push(videoURL);
            localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
            alert('Video saved!');
        } else {
            alert('Video already saved!');
        }
    }
});

window.addEventListener('message', (event) => {
    if (event.data.type === 'apply_filter') {
        const video = document.querySelector('video');
        if (video) {
            video.style.filter = event.data.filter;
        }
    }
});

let sidePanel;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'toggle_side_panel') {
        if (sidePanel) {
            sidePanel.style.display = sidePanel.style.display === 'none' ? 'block' : 'none';
        } else {
            sidePanel = document.createElement('iframe');
            sidePanel.id = 'video-tools-side-panel';
            sidePanel.src = chrome.runtime.getURL('sidepanel.html');
            sidePanel.style.position = 'fixed';
            sidePanel.style.top = '0';
            sidePanel.style.right = '0';
            sidePanel.style.width = '350px';
            sidePanel.style.height = '100%';
            sidePanel.style.border = 'none';
            sidePanel.style.zIndex = '10001';
            document.body.appendChild(sidePanel);
        }
    }
});
