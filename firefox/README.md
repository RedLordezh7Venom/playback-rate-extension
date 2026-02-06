# Video Playback Speed Controller - Firefox Extension

This is the Firefox-compatible version of the Video Playback Speed Controller extension.

## Features

- Control video playback speed with keyboard shortcuts
- Increase speed by 0.25x
- Decrease speed by 0.25x
- Reset to normal speed (1.0x)
- Works on all websites with HTML5 video players

## Installation

1. Navigate to `about:debugging#/runtime/this-firefox` in Firefox
2. Click "Load Temporary Add-on"
3. Select the `manifest.json` file from this directory
4. The extension will be loaded temporarily (will be removed when Firefox closes)

## Keyboard Shortcuts

- **,** or **<** : Decrease speed by 0.25x (minimum 0.25x)
- **=** or **+** : Reset to normal speed (1.0x)
- **.** or **>** : Increase speed by 0.25x (maximum 2.0x)

## Supported Video Players

Works with any HTML5 `<video>` element, including:
- YouTube (HTML5 player)
- Netflix
- Vimeo
- And more

## Files

- `manifest.json` - Extension configuration (Firefox Manifest V2 format)
- `content.js` - Content script that handles keyboard input
- `popup.html` - Popup UI
- `popup.js` - Popup script
- `background.js` - Background script
- `icon.png` - Extension icon