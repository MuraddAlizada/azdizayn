// BRANDS - Infinite Loop Slider
// Refactored using BaseSlider class

document.addEventListener('DOMContentLoaded', function() {
  if (typeof BaseSlider === 'undefined') {
    if (typeof Logger !== 'undefined') {
      Logger.error('BaseSlider class not found', null, { 
        file: 'brands-slider.js' 
      });
    } else {
      console.error('BaseSlider class not found');
    }
    return;
  }

  const slider = new BaseSlider({
    sliderSelector: '.brandSlider-track',
    wrapperSelector: '.brandSlider-wrapper',
    slideSelector: '.brandSlider-slide',
    prevBtnSelector: '.brandSlider-prev',
    nextBtnSelector: '.brandSlider-next',
    autoplayInterval: 2500,
    slideGap: 40, // 20px left + 20px right margin
    threshold: 0.3,
    cloneMode: 'both', // Clones at both beginning and end
    startIndex: 0, // BaseSlider automatically sets startIndex for cloneMode='both'
    // Custom slide width calculation for brands slider
    customGetSlideWidth: function() {
      if (this.allSlides.length === 0) return 180;
      const firstSlide = this.allSlides[0];
      const slideWidth = firstSlide.offsetWidth;
      const margin = 40; // 20px left + 20px right
      return slideWidth + margin;
    }
  });

  window.brandsSlider = slider;
});
