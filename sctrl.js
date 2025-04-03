document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonials-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialCount = testimonials.length;
    let currentIndex = 0;
    const slideInterval = 5000; // Time in milliseconds between slides (e.g., 5 seconds)
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % testimonialCount;
      updateSliderPosition();
    }
  
    function updateSliderPosition() {
      const translateValue = -currentIndex * 100 + '%';
      slider.style.transform = 'translateX(' + translateValue + ')';
    }
  
    // Start the automatic sliding
    setInterval(nextSlide, slideInterval);
  });