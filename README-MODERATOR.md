Website Moderator Guide (Minimal Changes)

You can update images and content by changing only a few simple files. No coding or build is required. After you save changes and push to the repo, Cloudflare Pages deploys automatically.

1) Update Homepage Hero Slides

- Where to edit: content/hero.json (preferred and active)
- What to do: add/remove items under "slides". Each slide needs:
  - src: the image path (e.g., images/photo5.jpg)
  - alt: short description for accessibility
- What to do: add/remove items under "slides". Each slide needs:
  - src: the image path (e.g., images/photo5.jpg)
  - alt: short description for accessibility
- Example:
  {
    "slides": [
      { "src": "images/photo1.jpg", "alt": "Stage performance" },
      { "src": "images/photo2.jpg", "alt": "Audience" },
      { "src": "images/new-hero.jpg", "alt": "New hero image" }
    ]
  }
- Where to upload images: images/ (use Add file → Upload in GitHub web UI)

2) Update Events

- Where to edit: content/events.json (JS pages load this automatically)
- Add a new item inside the "events" array. Fields:
  - year: number (e.g., 2025)
  - title: text
  - bengali: text (Bengali script allowed)
  - date: YYYY-MM-DD
  - image: path to poster (e.g., events/20250315-new.jpg)
  - facebook: optional URL
  - youtube: optional URL
  - desc: optional short description
- Where to upload posters: events/
- Notes:
  - The Events page shows all; the homepage shows the most recent 6 automatically.

3) Update Albums (Year-based Galleries)

- Where to edit: content/albums.json
- Add a new object to the "albums" list for a new year (or edit an existing one). Fields:
  - year: number (e.g., 2025)
  - title: text
  - titleBengali: text
  - description: text
  - photos: a list of image paths (at least 1)
  - events: a short list of event names for that year
  - highlights: list of { icon, text }
  - facebook: optional album URL
- Where to upload images: keep the existing folder scheme (e.g., albums/2025/...) or reuse posters under events/.
- Notes:
  - Albums page automatically creates a Year button and a card for each new year.
  - The album card slideshow previews up to 5 photos; the modal shows all when you click "View All Photos".

4) Naming & Image Tips

- Use lowercase-dash names (e.g., 2025-new-program.jpg)
- Photos up to ~2560px width; JPG preferred (PNG only for transparent images)
- Keep paths consistent: images/, events/, albums/<year>/...

5) How to Edit via GitHub Web

- Navigate to a file (e.g., content/events.json)
- Click the pencil icon → make edits → "Commit changes"
- For images, open the target folder (e.g., events/) → "Add file" → "Upload files" → Commit
- Cloudflare Pages will publish a new deployment automatically; refresh the site to see updates

6) Upcoming Event (1–2 cards)

- Option A (JS): js/content-overrides.js → add 1–2 entries in `window.UPCOMING_EVENTS`.
- Option B (JSON): content/upcoming.json with `{ "events": [ ... ] }`.

7) Local Preview (optional)

- From the project root: cd srotar-ashor-website
- Start a simple server: python3 -m http.server 8080
- Open http://localhost:8080

Troubleshooting

- If an image doesn’t appear: ensure the path is correct and the file is committed in the right folder
- If text looks wrong: check commas/quotes in JSON; one small JSON error can prevent loading
- If updates don’t show: hard refresh (Ctrl/Cmd+Shift+R) — content files are served without cache
- UPCOMING EVENT details

- Where to edit: js/content-overrides.js (preferred) or content/upcoming.json
- Structure for JSON: `{ "events": [ { ... }, { ... } ] }`
  - List 1 or 2 entries inside the `events` array (more entries are ignored after 2)
  - To hide an event temporarily, set `"enabled": false` on that entry or remove it from the array
- Fields per event:
  - title, bengali (optional), description
  - start: ISO date-time, e.g., 2025-03-15T18:00:00+11:00
  - end: ISO date-time (optional; defaults to +2 hours if missing)
  - location: full address text (used for map & calendar)
  - mapsUrl: optional direct Google Maps link; otherwise one is generated from `location`
  - image: poster path (e.g., events/20250315-poster.jpg)
- What users will see for each entry:
  - Poster image, location link (opens Google Maps), formatted date/time
  - “Add to Google Calendar” button and a downloadable `.ics` file
