# Srotar Ashor Website – Content Update Guide

This is a static site (Cloudflare Pages). Most updates happen by editing JSON files in `content/` and uploading images to existing folders.

## Project Structure (key paths)
```text
srotarashor/
├── index.html                  # Homepage
├── events.html                 # Events page
├── albums.html                 # Media/Albums page (currently not in top nav)
├── about.html                  # About page
├── includes/
│   ├── nav.html                # Shared navigation include
│   └── footer.html             # Shared footer include
├── content/                    # Primary content source (edit these)
│   ├── hero.json               # Homepage hero slides
│   ├── upcoming.json           # Homepage upcoming event cards (max 2)
│   ├── events.json             # Events page data
│   └── albums.json             # Albums/media data by year
├── js/
│   ├── common.js
│   ├── homepage.js
│   ├── events.js
│   ├── albums.js
│   └── content-overrides.js    # Fallback-only overrides (normally empty)
├── assets/slides/              # Hero slide images
├── events/                     # Event posters and shared media images
└── albums/<year>/              # Album photos by year
```

## Content Source of Truth
1. `content/*.json` is the primary source for site content.
2. `js/content-overrides.js` is fallback-only and should usually stay empty.

## How to Update (minimal steps)

1) Homepage Hero Slides
- Edit `content/hero.json`:
  ```json
  {
    "slides": [
      { "src": "assets/slides/photo1.jpg", "alt": "Stage performance", "position": "50% 52%", "positionMobile": "48% 56%" },
      { "src": "assets/slides/photo2.jpg", "alt": "Audience", "position": "50% 50%", "positionMobile": "50% 54%" }
    ]
  }
  ```
- Use valid image paths under `assets/slides/` (or another existing folder).
- Optional: add `position` (`x% y%`) for desktop and `positionMobile` for mobile to control focal framing when `cover` crops an image.

2) Upcoming Events (Homepage)
- Edit `content/upcoming.json`:
  ```json
  {
    "events": [
      {
        "title": "Event Title",
        "bengali": "বাংলা শিরোনাম",
        "start": "2025-11-09T18:00:00+11:00",
        "end": "2025-11-09T21:00:00+11:00",
        "location": "Venue, City",
        "mapsUrl": "https://...",
        "image": "events/20251109-poster.jpg",
        "description": "Short description"
      }
    ]
  }
  ```
- The homepage renders at most 2 upcoming items.

3) Events Page
- Edit `content/events.json`.
- Upload new posters to `events/` and reference them as `events/<filename>.jpg`.

4) Albums/Media Data (kept for later use)
- Edit `content/albums.json`.
- Upload photos to `albums/<year>/` or reuse `events/` images.
- Note: this page exists and data is maintained, but Media is currently not shown in top navigation.

## Bengali Text
- Bangla text renders with `Noto Sans Bengali`.
- Use `class="bengali-text"` for Bangla-heavy text blocks.

## Local Preview
- Run:
  - `python3 -m http.server 8080`
- Open:
  - `http://localhost:8080`

## Caching Notes
- `_headers` sets `no-cache` for `/content/*`, `/js/*`, and `/css/*`.
- Assets under `/assets/*` are long-cached.

---
Last updated: March 2026
