// AUTO SLIDER (Keramoqranit) - Infinite Loop with Swipe/Drag
// Refactored using BaseSlider class

document.addEventListener('DOMContentLoaded', function() {
  if (typeof BaseSlider === 'undefined') {
    if (typeof Logger !== 'undefined') {
      Logger.error('BaseSlider class not found', null, { 
        file: 'keramoqranit-slider.js' 
      });
    } else {
      console.error('BaseSlider class not found');
    }
    return;
  }

  const slider = new BaseSlider({
    sliderSelector: '.keramoqranit .slider',
    wrapperSelector: '.keramoqranit .slider-wrapper',
    slideSelector: '.slide',
    prevBtnSelector: '#autoPrev',
    nextBtnSelector: '#autoNext',
    autoplayInterval: 3000,
    slideGap: 20,
    threshold: 0.3,
    cloneMode: 'end',
    startIndex: 0
  });

  window.keramoqranitSlider = slider;
});
