// main.js

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'block';
    navMenu.style.display = isOpen ? 'none' : 'block';
});

// Optional: Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            window.scrollTo({
                top: targetEl.offsetTop - 60, // adjust for fixed header
                behavior: 'smooth'
            });
        }

        // Close mobile menu after clicking
        if (window.innerWidth <= 780) {
            navMenu.style.display = 'none';
        }
    });
});

// Optional: Close menu if window resizes above mobile breakpoint
window.addEventListener('resize', () => {
    if (window.innerWidth > 780) {
        navMenu.style.display = '';
    }
});
