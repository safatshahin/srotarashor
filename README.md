# Srotar Ashor Website – Content Update Guide

This site is static (Cloudflare Pages). Non‑technical updates happen by editing a few JSON files and uploading images. JS has sensible fallbacks and will not break if a file is missing.

## Project Structure (key paths)
```
srotar-ashor-website/
├── index.html                 # Homepage
├── events.html                # Events page
├── albums.html                # Albums page
├── about.html                 # About page
├── content/                   # JSON manifests (edit these)
│   ├── hero.json              # Homepage hero slides
│   ├── upcoming.json          # 1–2 upcoming events (optional)
│   ├── events.json            # Events list (page data)
│   └── albums.json            # Albums by year (page data)
├── js/
│   ├── common.js
│   ├── homepage.js            # Reads content/*.json with fallbacks
│   ├── events.js              # Reads content/events.json (falls back to built‑in)
│   ├── albums.js              # Reads content/albums.json (falls back to built‑in)
│   └── content-overrides.js   # Optional JS overrides (can be left empty)
├── images/                    # General images (hero, backgrounds)
├── events/                    # Event posters
└── albums/<year>/             # Album images
```

## How to Update (minimal steps)

1) Homepage Hero Slides
- Edit `content/hero.json` and list your slides:
  ```json
  {
    "slides": [
      { "src": "images/hero-1.jpg", "alt": "Stage performance" },
      { "src": "images/hero-2.jpg", "alt": "Audience" }
    ]
  }
  ```
- If a listed image can’t be loaded, the site falls back to a safe default set.

2) Upcoming Event (1–2 cards)
- Preferred: edit `content/upcoming.json`:
  ```json
  { "events": [
    {
      "title": "Event Title",
      "bengali": "বাংলা শিরোনাম",
      "start": "2025-11-09T18:00:00+11:00",
      "end": "2025-11-09T21:00:00+11:00",
      "location": "Venue, City",
      "mapsUrl": "https://...",
      "image": "events/20251109-poster.png",
      "description": "Short description"
    }
  ]}
  ```
- Optional (JS): add entries to `window.UPCOMING_EVENTS` in `js/content-overrides.js`.
- The homepage shows at most 2 events.

3) Events Page
- Edit `content/events.json` (the page reads from this manifest). Posters go under `events/`.

4) Albums Page (year‑based galleries)
- Edit `content/albums.json`. Images can live under `albums/<year>/` or reuse `events/` posters.

## Bengali Text
- Bangla renders with `Noto Sans Bengali`. Use `class="bengali-text"` when needed.

## Local Preview
- Serve the folder to avoid browser file‑protocol limits:
  - `python3 -m http.server 8080` then visit `http://localhost:8080`

## Caching Notes
- `_headers` sets `no-cache` for `/content/*`, `/js/*`, and `/css/*` so changes show on refresh.

---

Last updated: October 2025
