// Hero Slider with Progress Indicators
$(document).ready(function () {
  const $slider = $(".hero-slider");
  if ($slider.length === 0) {
    return;
  }

  if ($slider.hasClass("slick-initialized")) {
    $slider.slick("unslick");
  }

  const autoplaySpeed = 5000; // 5 seconds per slide

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false, // We'll control autoplay manually
    fade: true,
    speed: 1000,
    cssEase: "ease-in-out",
    arrows: false,
    dots: false,
    pauseOnHover: false, // Never pause
    pauseOnFocus: false, // Never pause
    swipe: true,
    touchMove: true,
    adaptiveHeight: false,
    accessibility: true,
    waitForAnimate: true,
  });

  let progressAnimation;

  function startProgressAnimation(slideIndex) {
    // Clear any existing progress animation
    if (progressAnimation) {
      clearTimeout(progressAnimation);
      progressAnimation = null;
    }

    const indicators = $(".hero-indicator");
    const activeIndicator = indicators.eq(slideIndex);
    const progressBar = activeIndicator.find(".hero-indicator-progress");

    // Check if progress bar exists
    if (progressBar.length === 0) {
      if (typeof Logger !== 'undefined') {
        Logger.warn("Progress bar not found for slide", { slideIndex });
      } else {
        console.warn("Progress bar not found for slide", slideIndex);
      }
      return;
    }

    // Reset all progress bars
    indicators.find(".hero-indicator-progress").each(function() {
      $(this).css({
        width: "0%",
        transition: "none"
      });
    });

    // Remove active class from all indicators
    indicators.removeClass("active");

    // Add active class to current indicator
    activeIndicator.addClass("active");

    // Small delay to ensure DOM updates are complete
    setTimeout(() => {
      // Reset and prepare for animation
      progressBar.css({
        width: "0%",
        transition: "none"
      });

      // Force reflow
      void progressBar[0].offsetWidth;

      // Start the progress animation
      requestAnimationFrame(() => {
        progressBar.css({
          width: "0%",
          transition: `width ${autoplaySpeed}ms linear`
        });

        // Trigger the animation by setting width to 100%
        requestAnimationFrame(() => {
          progressBar.css("width", "100%");
        });
      });

      // Schedule next slide change
      progressAnimation = setTimeout(() => {
        $slider.slick("slickNext");
      }, autoplaySpeed);
    }, 50);
  }

  function updateIndicators(currentSlide) {
    const indicators = $(".hero-indicator");
    let slideIndex = currentSlide !== undefined ? currentSlide : 0;

    slideIndex = slideIndex % 3;
    if (slideIndex < 0) slideIndex = 0;

    // Start progress animation for the new slide
    startProgressAnimation(slideIndex);
  }

  $slider.on("init", function (event, slick) {
    // Small delay to ensure DOM is fully ready
    setTimeout(() => {
      updateIndicators(0);
    }, 50);
  });

  $slider.on("afterChange", function (event, slick, currentSlide) {
    updateIndicators(currentSlide);
  });

  // Fallback: Ensure animation starts even if init event doesn't trigger properly
  setTimeout(() => {
    if ($slider.hasClass("slick-initialized")) {
      const currentSlide = $slider.slick("slickCurrentSlide");
      // Only start if progress bar is at 0% (hasn't started)
      const activeIndicator = $(".hero-indicator.active");
      const progressBar = activeIndicator.find(".hero-indicator-progress");
      if (progressBar.length > 0) {
        const currentWidth = progressBar.css("width");
        if (currentWidth === "0px" || currentWidth === "0%") {
          updateIndicators(currentSlide);
        }
      }
    }
  }, 200);

  $(".hero-indicator").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const slideIndex = parseInt($(this).attr("data-slide") || $(this).index());

    if ($slider.hasClass("slick-initialized")) {
      // Clear any existing timeout
      if (progressAnimation) {
        clearTimeout(progressAnimation);
      }
      // Go to the clicked slide
      $slider.slick("slickGoTo", slideIndex);
      // The afterChange event will trigger updateIndicators which will restart the animation
    }
  });
});

