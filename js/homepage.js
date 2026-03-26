// Homepage JavaScript

// Carousel functionality (text overlay)
let currentSlide = 0;
const slides = [
    {
        title: "স্রোতার আশোর",
        description: "Where music flows like a river of memories"
    },
    {
        title: "Cultural Heritage", 
        description: "Preserving Bengali traditions through music"
    },
    {
        title: "Community Unity",
        description: "Bringing people together through shared melodies"
    },
    {
        title: "Musical Excellence",
        description: "Celebrating the art of Bengali folk music"
    }
];

// Flexible hero images: JSON-driven with graceful fallback
// If JSON is missing/invalid or all images fail to load, fall back to these known-good images.
const HERO_FALLBACK = [
    { src: 'assets/slides/photo1.jpg', alt: 'Hero 1' },
    { src: 'assets/slides/photo2.jpg', alt: 'Hero 2' },
    { src: 'assets/slides/photo3.jpg', alt: 'Hero 3' },
    { src: 'assets/slides/Photo4.jpg', alt: 'Hero 4' } // filename is capitalized in repo
];

function preload(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
    });
}

async function filterValidSlides(slides) {
    const results = await Promise.all(slides.map(s => preload(s.src)));
    return slides.filter((_, i) => results[i]);
}

async function loadHeroSlidesFromManifest() {
    let slidesFromJson = [];
    try {
        const res = await fetch('content/hero.json', { cache: 'no-store' });
        if (res.ok) {
            const data = await res.json();
            if (data && Array.isArray(data.slides) && data.slides.length) {
                slidesFromJson = data.slides;
            } else {
                console.warn('⚠️ Hero JSON has no slides array or it is empty');
            }
        } else {
            console.warn('⚠️ Failed to fetch hero.json:', res.status);
        }
    } catch (e) {
        console.warn('⚠️ Error fetching hero.json:', e);
    }

    // Validate images so we never show broken backgrounds
    const validJsonSlides = slidesFromJson.length ? await filterValidSlides(slidesFromJson) : [];
    if (validJsonSlides.length) {
        console.log('✅ Using hero slides from JSON:', validJsonSlides.length);
        return validJsonSlides;
    }

    // Fall back to known-good defaults
    const validFallback = await filterValidSlides(HERO_FALLBACK);
    if (validFallback.length) {
        console.log('ℹ️ Falling back to default hero slides:', validFallback.length);
        return validFallback;
    }
    console.warn('⚠️ No valid hero slides found. Showing gradient background only.');
    return [];
}

function buildHeroSlides(list) {
    const container = document.querySelector('.image-carousel');
    if (!container) return;
    container.innerHTML = '';

    list.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'carousel-slide' + (idx === 0 ? ' active' : '');
        const src = item && item.src ? item.src : '';
        const position = (item && typeof item.position === 'string' && item.position.trim())
            ? item.position.trim()
            : '50% 50%';
        const positionMobile = (item && typeof item.positionMobile === 'string' && item.positionMobile.trim())
            ? item.positionMobile.trim()
            : position;
        // keep gradient overlay similar to CSS
        div.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${src}')`;
        // Use `contain` for the photo layer so the full image is visible (no crop).
        div.style.backgroundSize = 'cover, contain';
        div.style.backgroundRepeat = 'no-repeat, no-repeat';
        div.style.backgroundColor = '#0a0a0a';
        div.dataset.posDesktop = position;
        div.dataset.posMobile = positionMobile;
        div.setAttribute('role', 'img');
        if (item && item.alt) div.setAttribute('aria-label', item.alt);
        container.appendChild(div);
    });

    applyHeroSlidePositions();
}

function applyHeroSlidePositions() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const slides = document.querySelectorAll('.image-carousel .carousel-slide');
    slides.forEach(slide => {
        const desktopPos = slide.dataset.posDesktop || '50% 50%';
        const mobilePos = slide.dataset.posMobile || desktopPos;
        slide.style.backgroundPosition = `center, ${isMobile ? mobilePos : desktopPos}`;
    });
}

function initCarousel() {
    const slideElements = document.querySelectorAll('.carousel-slide');
    const titleElement = document.querySelector('.carousel-title');
    const descElement = document.querySelector('.carousel-description');
    
    if (slideElements.length === 0) return;
    
    function showSlide(index) {
        // Hide all slides
        slideElements.forEach(slide => slide.classList.remove('active'));
        
        // Show current slide
        if (slideElements[index]) {
            slideElements[index].classList.add('active');
            
            // Update text content if elements exist
            if (titleElement && slides[index]) {
                titleElement.textContent = slides[index].title;
            }
            if (descElement && slides[index]) {
                descElement.textContent = slides[index].description;
            }
        }
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideElements.length;
        showSlide(currentSlide);
    }
    
    // Initialize first slide
    showSlide(0);
    
    // Auto-advance slides
    setInterval(nextSlide, 4000);
}


// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add special animations for specific elements
                if (entry.target.classList.contains('feature-card')) {
                    entry.target.style.animationDelay = '0.2s';
                }
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.feature-card, .content-section, .hero-content');
    animateElements.forEach(el => observer.observe(el));
}

// Magnetic button effect
function setupMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.btn-advanced.magnetic');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// Music visualization bars
function initMusicVisualization() {
    const musicViz = document.querySelector('.music-viz');
    if (!musicViz) return;
    
    const bars = musicViz.querySelectorAll('.wave-bar');
    
    setInterval(() => {
        bars.forEach((bar, index) => {
            const height = Math.random() * 30 + 10;
            bar.style.height = height + 'px';
            bar.style.animationDelay = (index * 0.1) + 's';
        });
    }, 1500);
}

// Performance optimization
function optimizePerformance() {
    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', () => {
        const isHidden = document.hidden;
        const animatedElements = document.querySelectorAll('.floating-orb, .wave-bar');
        animatedElements.forEach(el => {
            el.style.animationPlayState = isHidden ? 'paused' : 'running';
        });
    });
}

// Image Carousel for Hero Background
class ImageCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.currentSlide = 0;
        this.init();
    }

    init() {
        if (this.slides.length === 0) return;
        this.startCarousel();
    }

    nextSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
    }

    startCarousel() {
        setInterval(() => {
            this.nextSlide();
        }, 4000); // Change image every 4 seconds
    }
}

// Initialize all homepage functionality
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🏠 Homepage loaded');

    // Build hero slides dynamically (supports >4 slides)
    const heroSlides = await loadHeroSlidesFromManifest();
    buildHeroSlides(heroSlides);
    initCarousel();
    setupScrollAnimations();
    setupMagneticButtons();
    initMusicVisualization();

    // Render upcoming event (reads content/upcoming.json; hides if none)
    renderUpcomingEvent();

    // Performance optimizations
    optimizePerformance();
});

// Upcoming Event renderer
async function renderUpcomingEvent() {
    const container = document.getElementById('upcomingContainer');
    if (!container) return;

    // Prefer JSON first, then optional JS override fallback, then hidden
    const normalize = (data) => {
        if (!data) return [];
        if (Array.isArray(data)) return data;
        if (Array.isArray(data.events)) return data.events;
        if (data.enabled === undefined || data.enabled === true) return [data];
        return [];
    };

    let events = [];
    try {
        const res = await fetch('content/upcoming.json', { cache: 'no-store' });
        if (res.ok) {
            const json = await res.json();
            events = normalize(json);
            if (events.length) console.log('✅ Loaded upcoming events from JSON:', events.length);
        }
    } catch (e) {
        console.warn('⚠️ Failed to load upcoming events from JSON:', e);
    }

    if (events.length === 0) {
        events = normalize(window.UPCOMING_EVENTS);
        if (events.length) {
            console.log('ℹ️ Loaded upcoming events from JS override fallback:', events.length);
        }
    }

    const normalized = events
        .filter(evt => evt && (evt.enabled === undefined || evt.enabled === true))
        .slice(0, 2);

    if (normalized.length === 0) {
        const section = document.getElementById('upcoming');
        if (section) section.style.display = 'none';
        return;
    }

    // Helpers
    const toCalDate = (iso) => {
        // Convert ISO to YYYYMMDDTHHMMSSZ for Google/ICS (UTC)
        const d = new Date(iso);
        if (Number.isNaN(d.getTime())) return '';
        const pad = (n) => String(n).padStart(2, '0');
        const yyyy = d.getUTCFullYear();
        const mm = pad(d.getUTCMonth() + 1);
        const dd = pad(d.getUTCDate());
        const hh = pad(d.getUTCHours());
        const mi = pad(d.getUTCMinutes());
        const ss = pad(d.getUTCSeconds());
        return `${yyyy}${mm}${dd}T${hh}${mi}${ss}Z`;
    };

    const encode = (s) => encodeURIComponent(s || '');

    const cards = normalized.map((data, index) => {
        const startCal = toCalDate(data.start);
        const endCal = data.end ? toCalDate(data.end) : (data.start ? toCalDate(new Date(new Date(data.start).getTime() + 2 * 60 * 60 * 1000).toISOString()) : '');

        const gcalUrl = startCal
            ? `https://www.google.com/calendar/render?action=TEMPLATE&text=${encode(data.title)}&dates=${startCal}%2F${endCal}&location=${encode(data.location)}&details=${encode(data.description || '')}`
            : '#';

        const uid = `sa-${Date.now()}-${index}@srotarashor`;
        const ics = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Srotar Ashor//Upcoming Event//EN',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            'BEGIN:VEVENT',
            `UID:${uid}`,
            `DTSTAMP:${toCalDate(new Date().toISOString())}`,
            startCal ? `DTSTART:${startCal}` : '',
            endCal ? `DTEND:${endCal}` : '',
            `SUMMARY:${(data.title || '').replace(/\n/g, ' ')}`,
            `DESCRIPTION:${(data.description || '').replace(/\n/g, ' ')}`,
            `LOCATION:${(data.location || '').replace(/\n/g, ' ')}`,
            'END:VEVENT',
            'END:VCALENDAR'
        ].filter(Boolean).join('\r\n');
        const icsBlob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
        const icsUrl = URL.createObjectURL(icsBlob);

        const mapsUrl = data.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encode(data.location)}`;

        const start = data.start ? new Date(data.start) : null;
        const end = data.end ? new Date(data.end) : null;
        const dateFmt = new Intl.DateTimeFormat(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
        const timeFmt = new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' });
        const dateStr = start ? dateFmt.format(start) : '';
        const timeStr = start ? (end ? `${timeFmt.format(start)} – ${timeFmt.format(end)}` : `${timeFmt.format(start)}`) : '';

        return `
      <article class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch upcoming-card">
        <div class="col-span-1 relative rounded-xl overflow-hidden shadow-lg border border-orange-600/30 bg-gradient-to-br from-orange-500/10 to-orange-600/5 min-h-64">
          <span class="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 text-black text-xs font-extrabold tracking-wider uppercase">
            Upcoming
          </span>
          <img src="${data.image || ''}" alt="${data.title || 'Upcoming Event'}" class="w-full h-full object-cover block" onerror="this.style.display='none'" />
        </div>
        <div class="col-span-2 p-6 rounded-xl shadow-lg border border-orange-600/30 bg-gradient-to-br from-zinc-900 to-zinc-800/60">
          <p class="text-orange-200 text-xs font-bold uppercase tracking-[0.18em] mb-2">Next Program</p>
          <div class="flex items-center justify-between mb-3 gap-3 flex-wrap">
            <h2 class="text-2xl md:text-3xl font-bold text-white">${data.title || 'Upcoming Event'}</h2>
            ${dateStr ? `
            <span class="inline-flex items-center gap-2 text-orange-300 text-sm md:text-base">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2v2H5a2 2 0 0 0-2 2v2h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm14 8H3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10zM5 14h6v6H5v-6z"/></svg>
              <span>${dateStr}</span>
            </span>` : ''}
          </div>

          ${data.bengali ? `<p class="bengali-text text-orange-300 mb-2 text-xl">${data.bengali}</p>` : ''}
          ${data.description ? `<p class="text-gray-300 mb-4">${data.description}</p>` : ''}

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${data.location ? `
            <div class="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" class="text-orange-400 mt-0.5" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
              <div>
                <div class="text-sm text-gray-400">Location</div>
                <a href="${mapsUrl}" target="_blank" rel="noopener" class="text-white hover:text-orange-300 underline">${data.location}</a>
              </div>
            </div>` : ''}
            ${dateStr ? `
            <div class="flex items-start gap-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" class="text-orange-400 mt-0.5" aria-hidden="true"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10z"/></svg>
              <div>
                <div class="text-sm text-gray-400">Time</div>
                <div class="text-white">${dateStr}${timeStr ? ` • ${timeStr}` : ''}</div>
                <div class="mt-2 flex flex-wrap gap-2">
                  ${startCal ? `<a href="${gcalUrl}" target="_blank" rel="noopener" class="px-3 py-1 rounded-md bg-orange-600/80 hover:bg-orange-600 text-white text-sm">Add to Google Calendar</a>` : ''}
                  ${startCal ? `<a href="${icsUrl}" download="${(data.title || 'event').replace(/\s+/g,'-')}.ics" class="px-3 py-1 rounded-md bg-zinc-700 hover:bg-zinc-600 text-white text-sm">Download .ics</a>` : ''}
                </div>
              </div>
            </div>` : ''}
          </div>
        </div>
      </article>`;
    });

    container.innerHTML = cards.join('\n');
}

// Handle window resize
window.addEventListener('resize', Utils.debounce(() => {
    applyHeroSlidePositions();
    optimizePerformance();
}, 250));
