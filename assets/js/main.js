/**
 * Main Logic for asiddeen.github.io
 * Zero Trust Principle: Vanilla JS, No external dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Copyright Year (Maintenance-free)
    const yearSpan = document.getElementById('copyright');
    if (yearSpan) {
        yearSpan.innerHTML = `&copy; ${new Date().getFullYear()} Abubakar Sadiq Isa. All systems operational.`;
    }

    // 2. Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            // Toggle Hamburger Animation
            const spans = navToggle.querySelectorAll('span');
            spans[0].style.transform = navMenu.classList.contains('open') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            spans[1].style.opacity = navMenu.classList.contains('open') ? '0' : '1';
            spans[2].style.transform = navMenu.classList.contains('open') ? 'rotate(-45deg) translate(5px, -5px)' : 'none';
        });
    }

    // 3. Simple Typing Effect for Terminal
    const typeTarget = document.querySelector('.typing-effect');
    if (typeTarget) {
        const text = typeTarget.innerText;
        typeTarget.innerText = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                typeTarget.innerText += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100); // Speed of typing
            }
        }
        // Start typing after a brief delay
        setTimeout(typeWriter, 500);
    }
});

/**
 * Performance Optimization:
 * Intersection Observer for scroll animations instead of heavy libraries.
 */
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Run once
        }
    });
}, observerOptions);

// Target elements that need animation
document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});