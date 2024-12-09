let playbackRate = 1;  // Starting playback rate

document.addEventListener('keydown', function(event) {
    // Log the key pressed to debug
    console.log("Key pressed: " + event.key);

    // Check if Shift key is pressed along with the period (.) key
    if (event.key === '>') {
        playbackRate = Math.min(playbackRate + 0.25, 4);  // Increase rate but max out at 4
        const video = document.querySelector('video');  // Select the video element
        
        if (video) {
            video.playbackRate = playbackRate;  // Set playback rate
            console.log('New Playback Rate: ' + playbackRate + 'x');  // Log new playback rate
        } else {
            console.log('Video element not found!');
        }
    }
    if (event.key === '<') {
        if(playbackRate > 2){
            playbackRate = 2;//reset rate to 1.75
        }
        playbackRate = Math.max(playbackRate - 0.25, 0.25);  // Decrease rate but min 0.25
        const video = document.querySelector('video');  // Select the video element
        
        if (video) {
            video.playbackRate = playbackRate;  // Set playback rate
            console.log('New Playback Rate: ' + playbackRate + 'x');  // Log new playback rate
        } else {
            console.log('Video element not found!');
        }
    }
});
