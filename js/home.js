/**
 * home.js
 * Hero image slider for the index.html home page.
 */

export function initHomeSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;

    let current = 0;
    slides[0].classList.add('active');

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000);
}
