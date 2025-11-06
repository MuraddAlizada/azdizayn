// Gallery Slider - Infinite Loop with Swipe/Drag
// Refactored using BaseSlider class

document.addEventListener('DOMContentLoaded', function() {
  if (typeof BaseSlider === 'undefined') {
    if (typeof Logger !== 'undefined') {
      Logger.error('BaseSlider class not found', null, { 
        file: 'gallery-slider.js' 
      });
    } else {
      console.error('BaseSlider class not found');
    }
    return;
  }

  const slider = new BaseSlider({
    sliderSelector: '.gallery-slider',
    wrapperSelector: '.gallery-wrapper',
    slideSelector: '.gallery-slide',
    prevBtnSelector: null, // Gallery slider has no buttons
    nextBtnSelector: null,
    autoplayInterval: 4000,
    slideGap: 15,
    threshold: 0.25, // Lower threshold for gallery
    cloneMode: 'both',
    startIndex: 0,
    // Custom slide width calculation for gallery
    customGetSlideWidth: function() {
      if (this.allSlides.length === 0) {
        return this.wrapper ? this.wrapper.offsetWidth / 3 : 300;
      }
      const firstSlide = this.allSlides[0];
      const slideWidth = firstSlide.offsetWidth;
      const gap = 15;
      return slideWidth + gap;
    }
  });

  window.gallerySlider = slider;
});
