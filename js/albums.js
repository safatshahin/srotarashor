// Albums Page JavaScript

// Album data (default/fallback). Will be overridden by content/albums.json if present.
let albumsData = {
    2016: {
        title: "Cultural Programs 2016",
        titleBengali: "সাংস্কৃতিক অনুষ্ঠান ২০১৬",
        description: "Memorable events from 2016 including Muhurto Gulo",
        photos: [
            'albums/2016/2016-Mar05-TPTM/tomar pore thekai matha.jpg',
            'events/20160806-Muhurtogulo.jpg',
            'events/20160205-TPTM-poster-web.jpg',
            'events/20160205-TPTM-poster.jpg',
            'events/20161105 - LGL.jpg'
        ],
        events: ['Muhurto Gulo', 'Tomar Pore Thekai Matha'],
        highlights: [
            { icon: '🎆', text: 'Anniversary celebrations' },
            { icon: '🎸', text: 'Live musical performances' },
            { icon: '📸', text: 'Professional photography' }
        ],
        facebook: "https://www.facebook.com/media/set/?set=a.1398339113527627.1073741838.206897322671818&type=1&l=3f3100b01a"
    },
    2015: {
        title: "Cultural Journey 2015",
        titleBengali: "সাংস্কৃতিক যাত্রা ২০১৫",
        description: "Beautiful programs including Phire Dekha Dosh Bocchor and Alor Pothojatri",
        photos: [
            'albums/2015/2015-Jun6-APJ/apj (16).jpg',
            'albums/2015/2015-Jun6-APJ/apj (9).jpg',
            'albums/2015/2015-Jun6-APJ/apj (20).jpg',
            'albums/2015/2015-Jun6-APJ/apj (5).jpg',
            'albums/2015/2015-Jun6-APJ/apj (4).jpg',
            'events/20150606-apj-poster.jpg',
            'events/20150214-FLBB-Poster-web.jpg',
            'events/20150214-FLBB-Poster.jpg'
        ],
        events: ['Phire Dekha Dosh Bocchor', 'Alor Pothojatri', 'Phagun Legechhe'],
        highlights: [
            { icon: '🍂', text: 'Autumn festival vibes' },
            { icon: '🎭', text: 'Cultural heritage showcase' },
            { icon: '🌹', text: 'Spring celebration' }
        ],
        facebook: "https://www.facebook.com/media/set/?set=a.1119407148087493.1073741835.206897322671818&type=3"
    },
    2014: {
        title: "Musical Celebrations 2014",
        titleBengali: "সাংস্কৃতিক উৎসব ২০১৪",
        description: "Memorable musical programs and cultural celebrations",
        photos: [
            'events/rongilare.png',
            'events/rongilareposter.jpg',
            'events/tgs.jpg',
            'events/tomaygaanshonabo.jpg',
            'events/ItiSA.jpg'
        ],
        events: ['Rongilare', 'Tomay Gaan Shonabo', 'Iti Shilpokalak'],
        highlights: [
            { icon: '🎵', text: 'Musical diversity' },
            { icon: '🎯', text: 'Artistic excellence' },
            { icon: '🎆', text: 'Community celebrations' }
        ],
        facebook: "https://www.facebook.com/media/set/?set=a.916632751698268.1073741832.206897322671818&type=3"
    },
    2013: {
        title: "Harmonious Year 2013",
        titleBengali: "সুরময় বছর ২০১৩",
        description: "Beautiful programs including Jugol Bondee Gaane Gaane",
        photos: [
            'albums/2013/2013-Jun22-JBGG/jbgg (24).jpg',
            'albums/2013/2013-Jun22-JBGG/jbgg (4).jpg',
            'albums/2013/2013-Jun22-JBGG/jbgg (12).jpg',
            'albums/2013/2013-Jun22-JBGG/jbgg (28).jpg',
            'albums/2013/2013-Jun22-JBGG/jbgg (8).jpg',
            'events/jugolbondee.jpg',
            'events/jugolbondeeposter.jpg'
        ],
        events: ['Jugol Bondee Gaane Gaane', 'Beje Uthuk Ponchomi Shur'],
        highlights: [
            { icon: '🎶', text: 'Harmonious collaborations' },
            { icon: '📜', text: 'Poetry and music fusion' },
            { icon: '🎯', text: 'Artistic achievements' }
        ],
        facebook: "https://www.facebook.com/media/set/?set=a.634372189924327.1073741827.206897322671818&type=1&l=4f84c00f6c"
    },
    2012: {
        title: "Golden Memories 2012",
        titleBengali: "স্বর্ণিম স্মৃতি ২০১২",
        description: "Celebrating four decades with Gane Gane Char Doshok",
        photos: [
            'events/ggcd.jpg',
            'events/ggcdposter.jpg',
            'events/bdpkf.jpg',
            'events/bdpkfposter.jpg',
            'events/bauliana.jpg'
        ],
        events: ['Gane Gane Char Doshok', 'Badol Diner Prothom Kodom Phool', 'Bauliana'],
        highlights: [
            { icon: '🏆', text: 'Four decades celebration' },
            { icon: '🌧️', text: 'Monsoon melodies' },
            { icon: '🎪', text: 'Folk traditions' }
        ],
        facebook: "https://www.facebook.com/media/set/?set=a.509779869050227.132307.206897322671818&type=1&l=c3233f8b5a"
    },
    2011: {
        title: "Beginning Journey 2011",
        titleBengali: "শুরুর যাত্রা ২০১১",
        description: "Fifth year anniversary with Koler Gaan and other classics",
        photos: [
            'events/kolergaan.jpg',
            'events/kolergaanposter.jpg',
            'events/fifthyear.jpg',
            'events/aohs.jpg'
        ],
        events: ['Koler Gaan', 'Fifth Year Anniversary', 'Amra Ora Hoyechi Shobar'],
        highlights: [
            { icon: '🎊', text: 'Fifth anniversary' },
            { icon: '🌅', text: 'New beginnings' },
            { icon: '🎆', text: 'Community building' }
        ],
        facebook: "https://www.facebook.com/media/set/?set=a.313256088702607.89413.206897322671818&type=1&l=167a6fe574"
    }
};

// Make albumsData globally available
window.albumsData = albumsData;

// Album themes
const albumThemes = {
    2016: { icon: '🎤' },
    2015: { icon: '🍂' },
    2014: { icon: '🎵' },
    2013: { icon: '🎭' },
    2012: { icon: '🎻' },
    2011: { icon: '🏆' }
};

let currentFilter = 'all';

// Try to load dynamic albums from JSON manifest
async function loadAlbumsFromManifest() {
    try {
        const res = await fetch('content/albums.json', { cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            // Support both array (preferred) and object keyed by year
            if (Array.isArray(data.albums)) {
                const keyed = {};
                data.albums.forEach(item => {
                    if (item && item.year) keyed[item.year] = item;
                });
                if (Object.keys(keyed).length) {
                    albumsData = keyed;
                    console.log('✅ Loaded albums from content/albums.json');
                }
            }
        }
    } catch (e) {
        console.warn('⚠️ Using fallback albumsData. Could not load content/albums.json');
    }
}

// Create album card
function createAlbumCard(year, album, index) {
    const photoCount = album.photos.length;
    const theme = albumThemes[year] || { icon: '🎵' };

    const card = document.createElement('div');
    card.className = 'album-card slide-up';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <div class="album-hero">
            <div class="album-year-badge">${year}</div>
            <div class="album-hero-title">
                <div class="album-hero-year">${year}</div>
                <div class="album-hero-subtitle">Cultural Album</div>
            </div>
            <div class="album-stats">
                <span>🎵 ${album.events.length} Events</span>
            </div>
        </div>
        <div class="album-content">
            <h3 class="album-title">${album.title}</h3>
            <p class="album-title-bengali bengali-text">${album.titleBengali}</p>
            <p class="album-description">${album.description}</p>
            
            <div class="album-visual">
                <div class="album-slideshow" id="slideshow-${year}">
                    ${album.photos.slice(0, 5).map((photo, i) => `
                        <div class="album-slide ${i === 0 ? 'active' : ''}">
                            <img src="${photo}" alt="Album photo ${i + 1}" 
                                 onerror="handleImageError(this)">
                        </div>
                    `).join('')}
                </div>
                <div class="album-overlay">
                    <div class="album-icon">${theme.icon}</div>
                </div>
                <div class="album-stats-visual">${photoCount} Photos</div>
                <div class="slideshow-indicator" id="indicator-${year}">
                    ${album.photos.slice(0, 5).map((_, i) => `
                        <div class="indicator-dot ${i === 0 ? 'active' : ''}"></div>
                    `).join('')}
                </div>
            </div>
            
            <div class="album-highlights">
                ${album.highlights.map(highlight => `
                    <div class="highlight-item">
                        <span>${highlight.icon}</span>
                        <span>${highlight.text}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="event-list">
                ${album.events.map(event => `
                    <span class="event-tag">${event}</span>
                `).join('')}
            </div>
            
            <div class="album-actions">
                <button class="view-album-btn" data-year="${year}" id="viewBtn-${year}">
                    View All Photos
                </button>
                <div class="social-links">
                    ${album.facebook ? `
                        <a href="${album.facebook}" target="_blank" rel="noopener noreferrer" class="social-link facebook-link" title="View on Facebook">
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;

    // Start slideshow if more than 1 photo
    if (album.photos.length > 1) {
        setTimeout(() => startSlideshow(year, Math.min(album.photos.length, 5)), 1000);
    }

    // Add event listener for the View All Photos button
    const button = card.querySelector('.view-album-btn');
    if (button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            viewFullAlbum(year);
        });
        
        // Ensure button is clickable
        button.style.position = 'relative';
        button.style.zIndex = '9999';
        button.style.pointerEvents = 'auto';
        
        // Also ensure Facebook links are clickable
        const facebookLink = card.querySelector('.facebook-link');
        if (facebookLink) {
            facebookLink.style.position = 'relative';
            facebookLink.style.zIndex = '9999';
            facebookLink.style.pointerEvents = 'auto';
        }
    }

    return card;
}

// Start slideshow
function startSlideshow(year, totalSlides) {
    let currentSlide = 0;
    
    const interval = setInterval(() => {
        const slides = document.querySelectorAll(`#slideshow-${year} .album-slide`);
        const indicators = document.querySelectorAll(`#indicator-${year} .indicator-dot`);
        
        if (slides.length === 0) {
            clearInterval(interval);
            return;
        }
        
        // Hide current slide and indicator
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % totalSlides;
        
        // Show next slide and indicator
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }, 3000);
}

// Render albums
function renderAlbums() {
    const grid = document.getElementById('albumsGrid');
    grid.innerHTML = '';

    let yearsToShow;
    if (currentFilter === 'all') {
        yearsToShow = Object.keys(albumsData).sort((a, b) => parseInt(b) - parseInt(a));
    } else {
        yearsToShow = [currentFilter];
    }

    yearsToShow.forEach((year, index) => {
        const album = albumsData[year];
        const card = createAlbumCard(year, album, index);
        grid.appendChild(card);
    });
}

// Setup year navigation
function setupYearNavigation() {
    const yearNav = document.getElementById('yearNav');
    if (!yearNav) return;

    // Wire up existing "All Years" button
    const allBtn = yearNav.querySelector('[data-year="all"]');
    if (allBtn) {
        allBtn.addEventListener('click', () => filterByYear('all'));
    }

    // Add year buttons
    const years = Object.keys(albumsData).sort((a, b) => parseInt(b) - parseInt(a));
    years.forEach(year => {
        const button = document.createElement('button');
        button.className = 'year-btn';
        button.textContent = year;
        button.setAttribute('data-year', year);
        button.addEventListener('click', () => filterByYear(year));
        yearNav.appendChild(button);
    });
}

// Filter albums by year
function filterByYear(year) {
    currentFilter = year;
    
    // Update active button
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-year') === year) {
            btn.classList.add('active');
        }
    });
    
    renderAlbums();
    scrollAlbumsIntoView();
}

// Smoothly scroll the albums section into view after filtering
function scrollAlbumsIntoView() {
    const target = document.getElementById('yearNav') || document.getElementById('albumsGrid');
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const offset = window.pageYOffset + rect.top - 90; // account for fixed nav height
    window.scrollTo({ top: Math.max(offset, 0), behavior: 'smooth' });
}

// View full album function
function viewFullAlbum(year) {
    const album = albumsData[year];
    if (!album) {
        console.error('❌ No album found for year:', year);
        return;
    }

    // Get modal elements
    const modal = document.getElementById('photoGalleryModal');
    const galleryTitle = document.getElementById('galleryTitle');
    const gallerySubtitle = document.getElementById('gallerySubtitle');
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (!modal || !galleryTitle || !gallerySubtitle || !galleryGrid) {
        console.error('❌ Required modal elements not found');
        return;
    }

    // Update modal title
    galleryTitle.textContent = album.title;
    gallerySubtitle.textContent = album.titleBengali;

    // Clear and populate gallery grid
    galleryGrid.innerHTML = '';

    album.photos.forEach((photo, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.onclick = () => openLightbox(photo, `${album.title} - Photo ${index + 1}`);

        galleryItem.innerHTML = `
            <img src="${photo}" alt="${album.title} - Photo ${index + 1}" 
                 onerror="handleImageError(this)">
            <div class="gallery-item-overlay">
                <div class="gallery-item-info">Photo ${index + 1}</div>
            </div>
        `;

        galleryGrid.appendChild(galleryItem);
    });

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close photo gallery
function closePhotoGallery() {
    document.getElementById('photoGalleryModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Open single photo in lightbox
function openLightbox(src, alt) {
    document.getElementById('lightboxImage').src = src;
    document.getElementById('lightboxImage').alt = alt;
    document.getElementById('photoLightbox').classList.add('active');
}

// Close lightbox
function closeLightbox() {
    document.getElementById('photoLightbox').classList.remove('active');
}

// Make viewFullAlbum available globally
window.viewFullAlbum = viewFullAlbum;

// Setup modal event listeners
function setupModalEvents() {
    // Close modal when clicking outside
    document.getElementById('photoGalleryModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoGalleryModal') {
            closePhotoGallery();
        }
    });

    document.getElementById('photoLightbox').addEventListener('click', (e) => {
        if (e.target.id === 'photoLightbox') {
            closeLightbox();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('photoLightbox').classList.contains('active')) {
                closeLightbox();
            } else if (document.getElementById('photoGalleryModal').classList.contains('active')) {
                closePhotoGallery();
            }
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    await loadAlbumsFromManifest();
    setupYearNavigation();
    renderAlbums();
    setupModalEvents();
});
