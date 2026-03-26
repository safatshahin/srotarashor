// Events Page JavaScript

// Events data (default/fallback). Will be overridden by content/events.json if present.
let eventsData = [
    {
        year: 2016,
        title: "Muhurto Gulo",
        bengali: "মুহূর্তগুলো",
        date: "2016-08-06",
        image: "events/20160806-Muhurtogulo.jpg",
        facebook: "https://www.facebook.com/media/set/?set=a.1398339113527627.1073741838.206897322671818&type=1&l=3f3100b01a",
        youtube: "",
        desc: "A memorable evening capturing beautiful moments through music and community gathering"
    },
    {
        year: 2016,
        title: "Tomar Pore Thekai Matha",
        bengali: "তোমার পরে থেকে মাথা",
        date: "2016-03-05",
        image: "events/20160205-TPTM-poster-web.jpg",
        facebook: "https://www.facebook.com/media/set/?set=a.1334444286583777.1073741837.206897322671818&type=1&l=8e7a1a3a2d",
        youtube: "",
        desc: "An intimate musical performance exploring themes of love and separation through Bengali folk songs"
    },
    {
        year: 2015,
        title: "Alor Pothojatri",
        bengali: "আলোর পথযাত্রী", 
        date: "2015-06-06",
        image: "events/20150606-apj-poster.jpg",
        facebook: "https://www.facebook.com/media/set/?set=a.1119407148087493.1073741835.206897322671818&type=3",
        youtube: "",
        desc: "A journey of light through music, celebrating hope and spiritual awakening"
    },
    {
        year: 2015,
        title: "Phire Dekha Dosh Bocchor",
        bengali: "ফিরে দেখা দশ বছর",
        date: "2015-10-10",
        image: "events/20151010-FDDB-Poster.JPG",
        facebook: "https://www.facebook.com/media/set/?set=a.1183482771679930.1073741836.206897322671818&type=3",
        youtube: "",
        desc: "Looking back at ten years of musical journey and community building"
    },
    {
        year: 2015,
        title: "Phagun Legechhe Bone Bone",
        bengali: "ফাগুন লেগেছে বনে বনে",
        date: "2015-02-14",
        image: "events/20150214-FLBB-Poster-web.jpg",
        facebook: "https://www.facebook.com/media/set/?set=a.1034851699876372.1073741834.206897322671818&type=1&l=9f8e8d7e5b",
        youtube: "",
        desc: "Celebrating the arrival of spring with traditional Bengali folk melodies"
    },
    {
        year: 2014,
        title: "Rongilare",
        bengali: "রঙিলারে",
        date: "2014-06-21",
        image: "events/rongilare.jpg",
        facebook: "https://www.facebook.com/media/set/?set=a.916632751698268.1073741832.206897322671818&type=3",
        youtube: "",
        desc: "A colorful evening filled with joyful Bengali folk songs and dance performances"
    },
    {
        year: 2014,
        title: "Tomay Gaan Shonabo",
        bengali: "তোমায় গান শোনাবো",
        date: "2014-03-15",
        image: "events/tomaygaanshonabo.jpg",
        facebook: "https://www.facebook.com/media/set/?set=a.781800541848157.1073741829.206897322671818&type=1",
        youtube: "",
        desc: "An intimate musical evening dedicated to sharing beautiful melodies with the audience"
    },
    {
        year: 2013,
        title: "Jugol Bondee Gaane Gaane",
        bengali: "যুগল বন্দী গানে গানে",
        date: "2013-06-22",
        image: "events/jugolbondee.jpg",
        facebook: "https://www.facebook.com/media/set/?set=a.634372189924327.1073741827.206897322671818&type=1&l=4f84c00f6c",
        youtube: "",
        desc: "A harmonious celebration of duet performances and collaborative musical artistry"
    },
    {
        year: 2013,
        title: "Beje Uthuk Ponchomi Shur Gaane O Kobitay",
        bengali: "বেজে উঠুক পঞ্চমী সুর গানে ও কবিতায়",
        date: "2013-03-02",
        image: "events/bupsgok.jpg",
        facebook: "https://www.facebook.com/media/set/?set=a.580893195272227.1073741826.206897322671818&type=1&l=7e279811a8",
        youtube: "",
        desc: "A unique blend of music and poetry celebrating the essence of Bengali literature"
    },
    {
        year: 2012,
        title: "Gane Gane Char Doshok",
        bengali: "গানে গানে চার দশক",
        date: "2012-10-03",
        image: "events/ggcd.jpg",
        facebook: "https://www.facebook.com/media/set/?set=a.509779869050227.132307.206897322671818&type=1&l=c3233f8b5a",
        youtube: "",
        desc: "Four decades of Bengali music celebrated through memorable songs and performances"
    },
    {
        year: 2012,
        title: "Badol Diner Prothom Kodom Phool",
        bengali: "বাদল দিনের প্রথম কদম ফুল",
        date: "2012-06-23",
        image: "events/bdpkf.jpg",
        facebook: "https://www.facebook.com/media/set/?set=a.462197377141810.118358.206897322671818&type=1&l=9f877fb064",
        youtube: "",
        desc: "The first kadamba flower of the rainy season - a poetic musical evening"
    },
    {
        year: 2011,
        title: "Koler Gaan",
        bengali: "কলের গান",
        date: "2011-10-15",
        image: "events/kolergaan.jpg",
        facebook: "https://www.facebook.com/media/set/?set=a.313256088702607.89413.206897322671818&type=1&l=167a6fe574",
        youtube: "",
        desc: "Traditional work songs celebrating the rhythm of daily life and community spirit"
    },
	{
        year: 2010,
        title: "Ekobingsho",
        bengali: "",
        date: "2010-09-25",
        image: "events/ekobingsho.jpg",
        facebook: "https://www.facebook.com/media/set/?set=a.313256088702607.89413.206897322671818&type=1&l=167a6fe574",
        youtube: "",
        desc: ""
    },
	{
        year: 2010,
        title: "Pach Bochor Purti Utshob",
        bengali: "",
        date: "2010-03-27",
        image: "events/fifthyear.jpg",
        facebook: "https://www.facebook.com/media/set/?set=a.313256088702607.89413.206897322671818&type=1&l=167a6fe574",
        youtube: "",
        desc: "Celebrating five years of Srotar Ashor"
    }
];

let currentFilter = 'all';

function normalizeUpcomingEvents(data) {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.events)) return data.events;
    if (data.enabled === undefined || data.enabled === true) return [data];
    return [];
}

function escapeHtml(text) {
    return String(text || '').replace(/[&<>"']/g, function(ch) {
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return map[ch];
    });
}

async function renderFeaturedUpcomingEvent() {
    const section = document.getElementById('featuredUpcoming');
    const container = document.getElementById('featuredUpcomingContainer');
    if (!section || !container) return;

    let events = [];
    try {
        const res = await fetch('content/upcoming.json', { cache: 'no-store' });
        if (res.ok) {
            const json = await res.json();
            events = normalizeUpcomingEvents(json);
        }
    } catch (e) {
        console.warn('⚠️ Could not load featured upcoming event from content/upcoming.json', e);
    }

    const featured = events.find(evt => evt && (evt.enabled === undefined || evt.enabled === true));
    if (!featured) {
        section.hidden = true;
        return;
    }

    const start = featured.start ? new Date(featured.start) : null;
    const end = featured.end ? new Date(featured.end) : null;
    const dateFmt = new Intl.DateTimeFormat(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
    const timeFmt = new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' });

    const dateText = start && !Number.isNaN(start.getTime()) ? dateFmt.format(start) : 'Date TBA';
    const timeText = start && !Number.isNaN(start.getTime())
        ? (end && !Number.isNaN(end.getTime()) ? `${timeFmt.format(start)} – ${timeFmt.format(end)}` : timeFmt.format(start))
        : 'Time TBA';
    const locationText = featured.location || 'Location TBA';
    const mapsUrl = featured.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationText)}`;

    container.innerHTML = `
        <article class="featured-upcoming-card fade-in">
            <div class="featured-upcoming-media">
                <img src="${escapeHtml(featured.image)}" alt="${escapeHtml(featured.title || 'Upcoming event')}" onerror="handleImageError(this)">
                <span class="featured-upcoming-badge">Upcoming</span>
            </div>
            <div class="featured-upcoming-content">
                <p class="featured-upcoming-kicker">Next Program</p>
                <h2 class="featured-upcoming-title">${escapeHtml(featured.title || 'Upcoming Event')}</h2>
                ${featured.bengali ? `<p class="featured-upcoming-title-bengali bengali-text">${escapeHtml(featured.bengali)}</p>` : ''}
                ${featured.description ? `<p class="featured-upcoming-description">${escapeHtml(featured.description)}</p>` : ''}
                <div class="featured-upcoming-meta">
                    <p><strong>Date</strong> ${escapeHtml(dateText)}</p>
                    <p><strong>Time</strong> ${escapeHtml(timeText)}</p>
                    <p><strong>Location</strong> <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(locationText)}</a></p>
                </div>
            </div>
        </article>
    `;
    section.hidden = false;
}

// Try to load dynamic events from JSON manifest
async function loadEventsFromManifest() {
    try {
        const res = await fetch('content/events.json', { cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data.events) && data.events.length) {
                eventsData = data.events;
                console.log('✅ Loaded events from content/events.json');
            }
        }
    } catch (e) {
        console.warn('⚠️ Using fallback eventsData. Could not load content/events.json');
    }
}

// Generate event cards
function generateEventCards(events = eventsData) {
    const eventsGrid = document.getElementById('eventsGrid');
    if (!eventsGrid) return;
    
    eventsGrid.innerHTML = '';
    
    if (events.length === 0) {
        eventsGrid.innerHTML = '<div class="loading">No events found for the selected year.</div>';
        return;
    }
    
    events.forEach((event, index) => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card slide-up';
        eventCard.style.animationDelay = `${index * 0.1}s`;
        
        eventCard.innerHTML = `
            <div class="event-image-container">
                <img src="${event.image}" alt="${event.title}" class="event-image" 
                     onerror="handleImageError(this)">
                <div class="event-overlay">
                    <div class="event-overlay-icon">🎵</div>
                </div>
            </div>
            <div class="event-content">
                <div class="event-date">${Utils.formatDate(event.date)}</div>
                <h3 class="event-title">${event.title}</h3>
                <p class="event-title-bengali bengali-text">${event.bengali}</p>
                <p class="event-description">${event.desc}</p>
                <div class="event-actions">
                    ${event.facebook ? `
                        <a href="${event.facebook}" target="_blank" rel="noopener noreferrer" class="event-btn facebook-btn">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Facebook
                        </a>
                    ` : ''}
                    ${event.youtube ? `
                        <a href="${event.youtube}" target="_blank" rel="noopener noreferrer" class="event-btn youtube-btn">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            YouTube
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        eventsGrid.appendChild(eventCard);
    });
    
    // Update stats
    updateEventStats(events);
}

// Update event statistics
function updateEventStats(events) {
    const totalEvents = events.length;
    const years = [...new Set(events.map(event => event.year))].length;
    const withFacebook = events.filter(event => event.facebook).length;
    const withYoutube = events.filter(event => event.youtube).length;
    
    // Update stat cards if they exist
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 4) {
        statNumbers[0].textContent = totalEvents;
        statNumbers[1].textContent = years;
        statNumbers[2].textContent = withFacebook;
        statNumbers[3].textContent = withYoutube;
    }
}

// Setup filter navigation
function setupFilters() {
    const filterNav = document.getElementById('filterNav');
    if (!filterNav) return;
    
    // Get unique years
    const years = [...new Set(eventsData.map(event => event.year))].sort((a, b) => b - a);
    
    // Add "All" filter
    filterNav.innerHTML = '<button class="filter-btn active" data-year="all">All Years</button>';
    
    // Add year filters
    years.forEach(year => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.textContent = year;
        button.setAttribute('data-year', year);
        button.addEventListener('click', (e) => filterEvents(year, e));
        filterNav.appendChild(button);
    });
    
    // Add "All" filter click handler
    filterNav.querySelector('[data-year="all"]').addEventListener('click', (e) => filterEvents('all', e));
}

// Filter events by year
function filterEvents(year, clickEvent) {
    currentFilter = year;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (clickEvent && clickEvent.target) {
        clickEvent.target.classList.add('active');
    }
    
    // Filter and display events
    if (year === 'all') {
        generateEventCards(eventsData);
    } else {
        // Convert year to number for comparison
        const yearNum = parseInt(year);
        const filteredEvents = eventsData.filter(eventItem => eventItem.year === yearNum);
        generateEventCards(filteredEvents);
    }
    
    // Scroll to events grid
    const eventsGrid = document.getElementById('eventsGrid');
    if (eventsGrid) {
        eventsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


// Initialize events page
document.addEventListener('DOMContentLoaded', async () => {
    console.log('📅 Events page loaded');

    await renderFeaturedUpcomingEvent();
    await loadEventsFromManifest();

    setupFilters();
    generateEventCards();

    // Setup scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.event-card, .featured-upcoming-card');
    animateElements.forEach(el => observer.observe(el));
});
