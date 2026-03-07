// Srotar Ashor - Common JavaScript Functions

// Custom Cursor
class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        // Create cursor element if missing (ensures visibility on all pages)
        if (!this.cursor) {
            const el = document.createElement('div');
            el.id = 'cursor';
            el.className = 'cursor';
            document.body.appendChild(el);
            this.cursor = el;
        }
        this.posX = 0;
        this.posY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.half = 10;
        this.speed = 0.9; // higher = snappier (optimized)
        this.raf = null;
        this.visible = false;
        this.init();
    }

    init() {
        if (!this.cursor) return;

        // Disable custom cursor on touch / coarse pointers
        if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
            this.cursor.style.display = 'none';
            document.body.classList.remove('has-custom-cursor');
            document.body.style.cursor = 'auto';
            return;
        }

        this.half = (this.cursor.offsetWidth || 20) / 2;

        const onMove = (e) => {
            this.targetX = e.clientX - this.half;
            this.targetY = e.clientY - this.half;
            if (!this.visible) {
                this.posX = this.targetX;
                this.posY = this.targetY;
                this.visible = true;
                this.cursor.style.opacity = '1';
            }
        };

        document.addEventListener('mousemove', onMove, { passive: true });

        const animate = () => {
            // interpolate towards the target for smooth but snappy motion
            this.posX += (this.targetX - this.posX) * this.speed;
            this.posY += (this.targetY - this.posY) * this.speed;
            this.cursor.style.transform = `translate3d(${Math.round(this.posX)}px, ${Math.round(this.posY)}px, 0)`;
            this.cursor.style.opacity = '1';
            this.raf = requestAnimationFrame(animate);
        };

        cancelAnimationFrame(this.raf);
        this.raf = requestAnimationFrame(animate);

        // Mark as enabled (hide system cursor) only when active
        document.body.classList.add('has-custom-cursor');

        // Hover effect for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .nav-link, .btn-advanced');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => this.cursor.classList.add('hover'));
            element.addEventListener('mouseleave', () => this.cursor.classList.remove('hover'));
        });
    }
}

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-link')) {
                navLinks.classList.remove('active');
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-container')) {
                navLinks.classList.remove('active');
            }
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Image loading error handler
function handleImageError(img) {
    img.style.display = 'none';
    img.parentElement.style.background = 'linear-gradient(135deg, #1a1a1a, #2d2d2d)';
    img.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#666;font-size:2rem;">📸</div>';
}

// Lazy loading for images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }
}

// Animation on scroll
function setupScrollAnimations() {
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
    const animateElements = document.querySelectorAll('.album-card, .event-card');
    animateElements.forEach(el => observer.observe(el));
}

// Performance optimization: Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    const isHidden = document.hidden;
    const particles = document.querySelectorAll('.particle, .floating-orb, .wave-bar');
    particles.forEach(el => {
        el.style.animationPlayState = isHidden ? 'paused' : 'running';
    });
});

// Initialize common functionality
document.addEventListener('DOMContentLoaded', function() {
    setupLazyLoading();
    setupScrollAnimations();
});

// Utility functions
const Utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Format date
    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    },

    // Escape HTML
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }
};

// Initialize custom cursor
document.addEventListener('DOMContentLoaded', () => {
    const customCursor = new CustomCursor();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Utils, handleImageError };
}
