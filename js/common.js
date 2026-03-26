// Srotar Ashor - Common JavaScript Functions

// Load shared HTML includes (nav + footer)
async function loadIncludes() {
    const navEl = document.getElementById('site-nav');
    const footerEl = document.getElementById('site-footer');

    const [navRes, footerRes] = await Promise.all([
        navEl ? fetch('includes/nav.html').then(r => r.text()) : Promise.resolve(null),
        footerEl ? fetch('includes/footer.html').then(r => r.text()) : Promise.resolve(null)
    ]);

    if (navEl && navRes) {
        navEl.innerHTML = navRes;
        // Highlight active nav link based on current page
        const currentPage = location.pathname.split('/').pop() || 'index.html';
        navEl.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === 'index.html' && href === '#home')) {
                link.classList.add('active');
            }
        });
        setupMobileMenu();
    }

    if (footerEl && footerRes) {
        footerEl.innerHTML = footerRes;
    }
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        navLinks.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-link')) {
                navLinks.classList.remove('active');
            }
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-container')) {
                navLinks.classList.remove('active');
            }
        });
    }
}

// Smooth scrolling for anchor links
function setupSmoothScroll() {
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        const href = link.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
}

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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.album-card, .event-card').forEach(el => observer.observe(el));
}

// Performance optimization: Pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    const isHidden = document.hidden;
    document.querySelectorAll('.floating-orb, .wave-bar').forEach(el => {
        el.style.animationPlayState = isHidden ? 'paused' : 'running';
    });
});

// Initialize common functionality
document.addEventListener('DOMContentLoaded', async function() {
    await loadIncludes();
    setupSmoothScroll();
    setupLazyLoading();
    setupScrollAnimations();
});

// Utility functions
const Utils = {
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

    formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    },

    escapeHtml(text) {
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Utils, handleImageError };
}
