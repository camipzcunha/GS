let currentSlide = 0;

        function showSlide(index) {
            const slides = document.querySelectorAll('.goal-card');
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }
            slides.forEach((slide, i) => {
                slide.style.opacity = (i === currentSlide) ? '1' : '0';
                slide.style.zIndex = (i === currentSlide) ? '1' : '0';
            });
        }

        function moveSlide(step) {
            showSlide(currentSlide + step);
        }

        document.addEventListener('DOMContentLoaded', () => {
            showSlide(currentSlide);
        });

   
        