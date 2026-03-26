Website Moderator Guide (Minimal Changes)

You can update this site without coding. Edit JSON files in `content/`, upload media files to the right folders, and commit your changes. Cloudflare Pages deploys automatically.

## Source of truth
- Primary content source: `content/*.json`
- Fallback only: `js/content-overrides.js` (keep empty unless emergency fallback is needed)

## 1) Update Homepage Hero Slides
- File: `content/hero.json`
- Each slide needs:
  - `src` (example: `assets/slides/photo5.jpg`)
  - `alt` (short accessibility text)
  - `position` (optional desktop focal point, example: `50% 52%`)
  - `positionMobile` (optional mobile focal point, example: `48% 56%`)
- Example:
  ```json
  {
    "slides": [
      { "src": "assets/slides/photo1.jpg", "alt": "Stage performance", "position": "50% 52%", "positionMobile": "48% 56%" },
      { "src": "assets/slides/photo2.jpg", "alt": "Audience", "position": "50% 50%", "positionMobile": "50% 54%" },
      { "src": "assets/slides/photo5.jpg", "alt": "New hero image", "position": "50% 52%", "positionMobile": "50% 55%" }
    ]
  }
  ```
- Upload hero images to: `assets/slides/`

## 2) Update Upcoming Event (Homepage, max 2 cards)
- File: `content/upcoming.json`
- Structure:
  - `{ "events": [ { ... }, { ... } ] }`
- Fields per event:
  - `title`, `bengali` (optional), `description`
  - `start`: ISO datetime (example: `2025-03-15T18:00:00+11:00`)
  - `end`: ISO datetime (optional; defaults to +2 hours if omitted)
  - `location`: full address text
  - `mapsUrl`: optional explicit Google Maps URL
  - `image`: poster path (example: `events/20250315-poster.jpg`)
  - `enabled`: optional boolean (`false` hides the event)
- What users see:
  - Poster, location link, formatted date/time, Google Calendar link, and downloadable `.ics`

## 3) Update Events Page
- File: `content/events.json`
- Add/update entries in `events` array with:
  - `year`, `title`, `bengali`, `date`, `image`, `facebook`, `youtube`, `desc`
- Upload posters to: `events/`
- Notes:
  - Events page shows all items.
  - Year filter buttons are generated automatically from data.

## 4) Update Albums / Media Data (for later use)
- File: `content/albums.json`
- Add/update yearly album objects with:
  - `year`, `title`, `titleBengali`, `description`, `photos`, `events`, `highlights`, `facebook`
- Upload photos to: `albums/<year>/` (or reuse `events/`)
- Notes:
  - Media page/data is maintained now.
  - Media is currently not shown in the top navigation and will be enabled later.

## 5) Naming and Media Tips
- Prefer lowercase-dash names (example: `2025-new-program.jpg`)
- JPG preferred for photos; PNG for transparency-only cases
- Keep paths consistent with existing folders: `assets/slides/`, `events/`, `albums/<year>/`

## 6) Edit via GitHub Web
- Open a file (example: `content/events.json`)
- Click pencil icon, edit, then commit
- For uploads: open target folder, use Add file -> Upload files -> Commit
- Wait for Cloudflare Pages deployment, then refresh site

## 7) Local Preview (optional)
- From project root:
  - `python3 -m http.server 8080`
- Open:
  - `http://localhost:8080`

## Troubleshooting
- Image missing: verify file path and confirm file is committed in correct folder
- Content not updating: hard refresh (`Ctrl/Cmd+Shift+R`)
- JSON errors: check commas/quotes; one syntax issue can block loading
