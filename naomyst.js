// Scroll animation for my project section
ScrollReveal().reveal('.grid-item', {
    delay: 300,
    distance: '20px',
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 100
});
// Scroll animation for photography section
ScrollReveal().reveal('.photo-gallery img', {
    delay: 300,
    distance: '20px',
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 100
});

// hover for pictures 
document.querySelectorAll('.photo-gallery img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
