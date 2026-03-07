# Srotar Ashor Website - Content Update Guidelines

## Overview
This guide provides instructions for updating content on the Srotar Ashor (শ্রোতার আসর) website.

## Project Structure
```
srotar-ashor-website/
├── index.html              # Homepage
├── events.html             # Events page
├── albums.html             # Albums page
├── about.html              # About page
├── css/
│   ├── common.css          # Shared styles
│   ├── homepage.css        # Homepage specific styles
│   ├── events.css          # Events page styles
│   └── albums.css          # Albums page styles
├── js/
│   ├── common.js           # Shared JavaScript
│   ├── homepage.js         # Homepage functionality
│   ├── events.js           # Events page functionality
│   └── albums.js           # Albums page functionality
├── images/                 # Image assets
└── events/                 # Event-specific images
```

## Content Update Instructions

### 1. Adding New Events

#### Method 1: Update JavaScript Data (Recommended)
1. Open `js/events.js` or `js/homepage.js` (for homepage events showcase)
2. Find the `eventsData` array
3. Add new event object:
```javascript
{
    year: 2024,
    title: "Event Title",
    bengali: "বাংলা শিরোনাম",
    desc: "Event description",
    image: "events/event-image.jpg",
    date: "2024-12-31"
}
```
4. Place event image in `events/` folder

#### Method 2: Direct HTML Update
1. Open `events.html`
2. Find the events grid section
3. Copy an existing event card and modify the content

### 2. Adding New Albums

1. Open `js/albums.js`
2. Find the `albumsData` array
3. Add new album object:
```javascript
{
    title: "Album Title",
    bengali: "অ্যালবাম শিরোনাম",
    year: 2024,
    desc: "Album description",
    image: "images/album-cover.jpg",
    songs: [
        { title: "Song 1", bengali: "গান ১" },
        { title: "Song 2", bengali: "গান ২" }
    ]
}
```
4. Place album cover image in `images/` folder

### 3. Updating Homepage Content

#### Hero Section
- Edit `index.html` lines 58-72
- Update title, subtitle, and description text

#### Events Showcase
- Automatically populated from `js/homepage.js` eventsData
- To modify: edit the eventsData array in `js/homepage.js`

#### Features Section
- Edit `index.html` lines 130-157
- Update feature cards content

### 4. Adding Images

#### Event Images
- Place in `events/` folder
- Recommended size: 800x600px or similar aspect ratio
- Supported formats: JPG, PNG
- Use descriptive filenames: `20241225-concert-name.jpg`

#### Album Covers
- Place in `images/` folder
- Recommended size: 400x400px (square)
- Format: JPG or PNG

#### Background Images
- Place in `images/` folder
- Large images for hero backgrounds: 1920x1080px or larger

### 5. Bengali Text Guidelines

#### Font Usage
- Bengali text uses `Noto Sans Bengali` font
- Apply class `bengali-text` to Bengali content:
```html
<p class="bengali-text">বাংলা টেক্সট</p>
```

#### Character Encoding
- Ensure files are saved in UTF-8 encoding
- Test Bengali text display across different browsers

### 6. Navigation Updates

To add new pages:
1. Create new HTML file following existing structure
2. Update navigation in all HTML files:
```html
<li><a href="new-page.html" class="nav-link">New Page</a></li>
```

### 7. Performance Considerations

#### Image Optimization
- Compress images before uploading
- Use WebP format when possible for better performance
- Implement lazy loading for new images:
```html
<img data-src="image.jpg" class="lazy" alt="Description">
```

#### Animation Performance
- Test on mobile devices
- Reduce particle count on small screens (handled automatically)

### 8. Testing Checklist

Before publishing updates:
- [ ] Test on desktop browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices
- [ ] Verify Bengali text displays correctly
- [ ] Check image loading and error handling
- [ ] Test navigation links
- [ ] Verify animations work smoothly
- [ ] Check responsive design

### 9. Common File Locations

#### Key Content Files
- **Homepage events**: `js/homepage.js` (eventsData array)
- **All events**: `js/events.js` (eventsData array)
- **Albums**: `js/albums.js` (albumsData array)
- **About page**: `about.html` (direct HTML editing)

#### Styling Files
- **Colors and themes**: `css/common.css` (CSS variables at top)
- **Homepage specific**: `css/homepage.css`
- **Events page**: `css/events.css`
- **Albums page**: `css/albums.css`

### 10. Backup Recommendations

- Keep backups of original files before major changes
- Test changes on a copy before updating live site
- Document any custom modifications for future reference

### 11. Contact Information

For technical issues or advanced modifications, contact the website developer:
- Website designed and developed by [Nuovix](https://nuovix.com/)

---

*Last updated: September 2025*