// About Page JavaScript

// Scroll-triggered animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add special animations for different elements
                if (entry.target.classList.contains('about-stat-item')) {
                    animateStatNumber(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animateElements = document.querySelectorAll('.about-section, .about-stat-item, .timeline-item');
    animateElements.forEach(el => observer.observe(el));
}

// Animate stat numbers with counting effect
function animateStatNumber(statItem) {
    const statNumber = statItem.querySelector('.about-stat-number');
    if (!statNumber) return;
    
    const finalNumber = statNumber.textContent;
    const isPercentage = finalNumber.includes('%');
    const isPlus = finalNumber.includes('+');
    const numericValue = parseInt(finalNumber.replace(/[^\d]/g, ''));
    
    if (isNaN(numericValue)) return;
    
    let currentNumber = 0;
    const increment = Math.ceil(numericValue / 30);
    const duration = 1500; // 1.5 seconds
    const stepTime = duration / (numericValue / increment);
    
    statNumber.textContent = '0';
    
    const counter = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= numericValue) {
            currentNumber = numericValue;
            clearInterval(counter);
        }
        
        let displayText = currentNumber.toString();
        if (isPercentage) displayText += '%';
        if (isPlus && currentNumber === numericValue) displayText += '+';
        
        statNumber.textContent = displayText;
    }, stepTime);
}

// Timeline animation
function setupTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    timelineItems.forEach((item, index) => {
        // Initially hide timeline items
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = `all 0.6s ease ${index * 0.2}s`;
        
        timelineObserver.observe(item);
    });
}

// Smooth scrolling for internal links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Performance optimizations
function optimizePerformance() {
    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', () => {
        const isHidden = document.hidden;
        const animatedElements = document.querySelectorAll('.about-section, .timeline-item');
        animatedElements.forEach(el => {
            if (el.style.animationName) {
                el.style.animationPlayState = isHidden ? 'paused' : 'running';
            }
        });
    });
}

// Handle image loading errors
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn(`Failed to load image: ${this.src}`);
        });
    });
}

// Initialize contact form interactions (if needed)
function setupContactInteractions() {
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', (e) => {
            // Add any tracking or analytics here if needed
            console.log('Contact button clicked');
        });
    }
}

// Initialize all about page functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('ℹ️ About page loaded');
    
    setupScrollAnimations();
    setupTimelineAnimation();
    setupSmoothScrolling();
    setupContactInteractions();
    handleImageErrors();
    optimizePerformance();
    
    // Add initial fade-in for hero section
    const heroContent = document.querySelector('.about-hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('fade-in');
        }, 300);
    }
});

// Handle window resize
window.addEventListener('resize', Utils.debounce(() => {
    // Recalculate any layout-dependent animations if needed
    console.log('About page: Window resized');
}, 250));