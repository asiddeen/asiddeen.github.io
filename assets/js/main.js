/**
 * Main Logic - Enterprise Edition
 * Optimized for performance and strictly typed logic principles.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Copyright
    const yearElement = document.getElementById('copyright');
    if(yearElement) {
        yearElement.innerHTML = `&copy; ${new Date().getFullYear()} Abubakar Sadiq Isa. All rights reserved.`;
    }

    // 2. Mobile Navigation Toggle (Zero Dependency)
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    if(toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            
            // Hamburger Animation
            const bars = toggle.querySelectorAll('.bar');
            if (menu.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // 3. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                if(menu.classList.contains('active')) {
                    toggle.click();
                }
            }
        });
    });

    // 4. Contact Form Handler (Zero Trust Validation)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // NOTE: If using Formspree, you can remove this preventDefault 
            // OR use AJAX to submit. For now, we'll just show a visual state.
            
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            // Visual feedback state
            btn.innerHTML = '<span>Sending...</span>';
            btn.style.opacity = '0.7';
            
            // This is where you'd normally await fetch()
            // e.preventDefault(); // Uncomment if handling via AJAX
        });
    }
});