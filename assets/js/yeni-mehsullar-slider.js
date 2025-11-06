// YENI MEHSULLAR - Infinite Auto Slider with Swipe/Drag
// Refactored using BaseSlider class

document.addEventListener('DOMContentLoaded', function() {
  // BaseSlider and Logger must be loaded
  if (typeof BaseSlider === 'undefined') {
    if (typeof Logger !== 'undefined') {
      Logger.error('BaseSlider class not found', null, { 
        file: 'yeni-mehsullar-slider.js' 
      });
    } else {
      console.error('BaseSlider class not found');
    }
    return;
  }

  const slider = new BaseSlider({
    sliderSelector: '.yeni-mehsullar .slider',
    wrapperSelector: '.yeni-mehsullar .slider-wrapper',
    slideSelector: '.slide',
    prevBtnSelector: '#prevBtn',
    nextBtnSelector: '#nextBtn',
    autoplayInterval: 3000,
    slideGap: 20,
    threshold: 0.3,
    cloneMode: 'end',
    startIndex: 0
  });

  // For global access (if needed)
  window.yeniMehsullarSlider = slider;
});
