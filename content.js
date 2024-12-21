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

    
});
