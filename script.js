/* script.js */
/* Initializes a Jitsi Meet session with only screen‑share and chat enabled */

// Domain of the public Jitsi Meet server
const domain = "meet.jit.si";
// Random room name – you can replace with a fixed one if desired
const roomName = "TeachingRoom-" + Math.random().toString(36).substring(2, 10);

// Options passed to JitsiMeetExternalAPI
const options = {
  roomName: roomName,
  parentNode: document.querySelector('#jitsi-container'),
  // Disable local media (camera & mic)
  configOverwrite: {
    startWithAudioMuted: true,
    startWithVideoMuted: true,
    disableDeepLinking: true,
    // Hide the Invite button and many UI pieces we don’t need
    hideConferenceSubject: true,
    prejoinPageEnabled: false,
    enableWelcomePage: false
  },
  // Fine‑tune the UI – keep only chat and the screen‑share button
  interfaceConfigOverwrite: {
    // Hide all toolbar buttons we don’t need
    TOOLBAR_BUTTONS: [
      "chat",
      "desktop", // screen‑share
    ],
    // Remove the participants pane, filmstrip, and other clutter
    HIDE_INVITE_MORE_HEADER: true,
    SHOW_JITSI_WATERMARK: false,
    SHOW_WATERMARK_FOR_GUESTS: false,
    SHOW_BRAND_WATERMARK: false,
    SHOW_POWERED_BY: false,
    // Enable a dark theme for consistency with our CSS
    DEFAULT_BACKGROUND: "#0a0a0a",
    TOOLBAR_ALWAYS_VISIBLE: false,
    SETTINGS_SECTIONS: [],
    VIDEO_LAYOUT_FIT: "both",
    // Ensure the chat sidebar opens automatically when a message is sent
    SHOW_CHROME_EXTENSION_BANNER: false,
  },
  userInfo: {
    displayName: "Teacher"
  }
};

// Create the Jitsi Meet instance
let api = new JitsiMeetExternalAPI(domain, options);

// When the user clicks our custom "Share Screen" button, trigger Jitsi's screen‑share
document.getElementById('share-screen').addEventListener('click', () => {
  // The Jitsi API method to start/stop desktop sharing
  api.executeCommand('toggleShareScreen');
});

// Optional: keep the chat panel always visible on the right
api.addEventListener('videoConferenceJoined', () => {
  // Open the chat drawer after joining
  api.executeCommand('toggleChat');
});

// Clean up when the page unloads
window.addEventListener('beforeunload', () => {
  api.dispose();
});
