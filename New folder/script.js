document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });


    /* =========================
       SLIDER
    ========================= */

    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');

    if (slider && slides.length > 0 && dotsContainer) {

        let index = 0;

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            if (i === 0) dot.classList.add('active');

            dot.addEventListener('click', () => {
                index = i;
                updateSlider();
            });

            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dots span');

        function updateSlider() {
            slider.style.transform = `translateX(-${index * 100}%)`;

            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }

        function nextSlide() {
            index = (index + 1) % slides.length;
            updateSlider();
        }

        function prevSlide() {
            index = (index - 1 + slides.length) % slides.length;
            updateSlider();
        }

        if (next) next.addEventListener('click', nextSlide);
        if (prev) prev.addEventListener('click', prevSlide);

        setInterval(nextSlide, 5000);
    }


    /* =========================
       TESTIMONIAL AUTO SLIDE
    ========================= */

    const testimonials = document.querySelectorAll('.testimonial');

    if (testimonials.length > 0) {

        let testimonialIndex = 0;

        function showTestimonial() {
            testimonials.forEach(t => t.classList.remove('active'));
            testimonialIndex = (testimonialIndex + 1) % testimonials.length;
            testimonials[testimonialIndex].classList.add('active');
        }

        setInterval(showTestimonial, 5000);
    }

    const header = document.querySelector("header");
document.body.style.paddingTop = header.offsetHeight + "px";


});
