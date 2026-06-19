# Lightweight Zoom for Teaching (Screen‑share + Chat)

A minimal, browser‑only teaching tool that provides instant screen sharing and real‑time chat. It uses the public Jitsi Meet server (`meet.jit.si`) – no server code, no camera, no microphone.

## Features
- One‑click screen sharing (desktop capture)
- Persistent chat sidebar
- No video/audio capture (privacy‑first)
- Dark‑mode ready, glass‑morphism UI
- Deployable to GitHub Pages (static hosting)

## Quick start (local)
```bash
# From the project root
npx serve   # or any static‑file server, e.g. `python -m http.server 8000`
# Open http://localhost:3000 (or the port your server chose)
```

## Deploy to GitHub Pages
1. **Create a new repo on GitHub** (you already did: `screensharing-tool-real-`).
2. **Push the code** (the steps below will do this automatically).
3. **Enable GitHub Pages**
   - Go to **Settings → Pages** in your repository.
   - Under **Source**, select **`main` branch** (root) and click **Save**.
   - GitHub will publish the site at:
```
https://kabirbora.github.io/screensharing-tool-real-/
```

## Customization (optional)
- **Room name** – edit `roomName` in `script.js` to use a fixed, friendly name.
- **Branding** – replace `style.css` variables (`--primary`, fonts, etc.) or add a logo image.
- **Self‑hosted Jitsi** – change the `domain` constant in `script.js` to point at your own Jitsi server.

---
Enjoy teaching! 🚀
Deployed on 2026-06-19
