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

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

This extension uses simple JavaScript and Chrome APIs to control video playback speed. It was created for personal use and improved to offer more flexibility for YouTube and other video platforms.

---

Feel free to add additional features or improvements by contributing!
# playback-rate-extension
Bypass the normal 2x limit for playback, current range : [0.0625,16]
skip ads : ) 
