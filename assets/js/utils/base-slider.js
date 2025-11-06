// Base Slider Class - Removes repetitive code
// All sliders can inherit from this class

class BaseSlider {
  constructor(config) {
    // Required configuration
    this.sliderSelector = config.sliderSelector;
    this.wrapperSelector = config.wrapperSelector;
    this.slideSelector = config.slideSelector;
    
    // Opsional konfiqurasiya
    this.prevBtnSelector = config.prevBtnSelector || null;
    this.nextBtnSelector = config.nextBtnSelector || null;
    this.autoplayInterval = config.autoplayInterval || 3000;
    this.slideGap = config.slideGap || 20;
    this.threshold = config.threshold || 0.3; // Drag threshold
    this.cloneMode = config.cloneMode || 'end'; // 'end', 'both', 'none'
    this.startIndex = config.startIndex || 0;
    this.customGetSlideWidth = config.customGetSlideWidth || null; // Custom slide width calculator
    
    // DOM elements
    this.slider = null;
    this.wrapper = null;
    this.prevBtn = null;
    this.nextBtn = null;
    this.slides = [];
    this.allSlides = [];
    
    // State
    this.originalSlides = 0;
    this.totalSlides = 0;
    this.currentIndex = this.startIndex;
    this.isTransitioning = false;
    this.autoPlayInterval = null;
    this.isDragging = false;
    this.isHovering = false;
    this.dragOffset = 0;
    this.startX = 0;
    this.currentX = 0;
    this.touchStartX = 0;
    this.touchCurrentX = 0;
    this.touchDragging = false;
    
    // Store event listener handlers (for cleanup)
    this._boundHandlers = {};
    
    // Initialization
    this.init();
  }

  /**
   * Initialize slider
   */
  init() {
    // Find DOM elements
    this.slider = document.querySelector(this.sliderSelector);
    this.wrapper = document.querySelector(this.wrapperSelector);
    
    if (!this.slider || !this.wrapper) {
      if (typeof Logger !== 'undefined') {
        Logger.warn('Slider elements not found', {
          slider: this.sliderSelector,
          wrapper: this.wrapperSelector
        });
      } else {
        console.warn('Slider elements not found', this.sliderSelector, this.wrapperSelector);
      }
      return;
    }

    // Find buttons
    if (this.prevBtnSelector) {
      this.prevBtn = document.querySelector(this.prevBtnSelector);
    }
    if (this.nextBtnSelector) {
      this.nextBtn = document.querySelector(this.nextBtnSelector);
    }

    // Find slides
    this.slides = Array.from(this.slider.querySelectorAll(this.slideSelector));
    if (this.slides.length === 0) {
      if (typeof Logger !== 'undefined') {
        Logger.warn('Slides not found', { selector: this.slideSelector });
      } else {
        console.warn('Slides not found', this.slideSelector);
      }
      return;
    }

    // Create clones
    this._cloneSlides();
    
    // Add event listeners
    this._setupEventListeners();
    
    // Set initial state
    this.updateSliderPosition(false);
    
    // Start autoplay
    this.startAutoPlay();
  }

  /**
   * Clone slides
   * @private
   */
  _cloneSlides() {
    this.originalSlides = this.slides.length;
    this.totalSlides = this.originalSlides;

    if (this.cloneMode === 'end') {
      // Add clones only to the end
      this.slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        this.slider.appendChild(clone);
      });
      this.currentIndex = 0;
    } else if (this.cloneMode === 'both') {
      // Add clones to both beginning and end
      // To end
      this.slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        this.slider.appendChild(clone);
      });
      // To beginning (in reverse order)
      this.slides.slice().reverse().forEach(slide => {
        const clone = slide.cloneNode(true);
        this.slider.insertBefore(clone, this.slider.firstChild);
      });
      this.currentIndex = this.originalSlides; // Starting index
    }

    this.allSlides = this.slider.querySelectorAll(this.slideSelector);
  }

  /**
   * Calculate slide width
   * @returns {number}
   */
  getSlideWidth() {
      // Use custom calculator if available
    if (this.customGetSlideWidth && typeof this.customGetSlideWidth === 'function') {
      return this.customGetSlideWidth.call(this);
    }
    
    if (this.allSlides.length === 0) {
      return 400; // Default
    }
    const firstSlide = this.allSlides[0];
    const slideWidth = firstSlide.offsetWidth;
    return slideWidth + this.slideGap;
  }

  /**
   * Update slider position
   * @param {boolean} smooth - Smooth transition
   */
  updateSliderPosition(smooth = true) {
    if (!this.slider) return;
    
    if (!smooth) {
      this.slider.style.transition = 'none';
    } else {
      this.slider.style.transition = 'transform 0.5s ease';
    }
    
    const slideWidth = this.getSlideWidth();
    const offset = this.currentIndex * slideWidth + this.dragOffset;
    this.slider.style.transform = `translateX(-${offset}px)`;
  }

  /**
   * Reset for infinite loop
   */
  checkAndReset() {
    if (!this.slider) return;
    
    if (this.cloneMode === 'end') {
      // If only end clones exist
      if (this.currentIndex >= this.totalSlides) {
        this.slider.style.transition = 'none';
        this.currentIndex = this.currentIndex - this.totalSlides;
        this.updateSliderPosition(false);
        void this.slider.offsetWidth; // Force reflow
        this.slider.style.transition = 'transform 0.5s ease';
      } else if (this.currentIndex < 0) {
        this.slider.style.transition = 'none';
        this.currentIndex = this.totalSlides + this.currentIndex;
        this.updateSliderPosition(false);
        void this.slider.offsetWidth;
        this.slider.style.transition = 'transform 0.5s ease';
      }
    } else if (this.cloneMode === 'both') {
      // If clones exist at both beginning and end
      if (this.currentIndex >= this.totalSlides * 2) {
        this.slider.style.transition = 'none';
        this.currentIndex = this.currentIndex - this.totalSlides;
        this.updateSliderPosition(false);
        void this.slider.offsetWidth;
        this.slider.style.transition = 'transform 0.5s ease';
      } else if (this.currentIndex < this.totalSlides) {
        this.slider.style.transition = 'none';
        this.currentIndex = this.currentIndex + this.totalSlides;
        this.updateSliderPosition(false);
        void this.slider.offsetWidth;
        this.slider.style.transition = 'transform 0.5s ease';
      }
    }
  }

  /**
   * Go to next slide
   */
  nextSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    
    if (this.cloneMode === 'both' && this.currentIndex >= this.totalSlides * 2) {
      this.checkAndReset();
    } else if (this.cloneMode === 'end' && this.currentIndex >= this.totalSlides) {
      this.checkAndReset();
    }
    
    this.currentIndex++;
    this.updateSliderPosition();
    
    setTimeout(() => {
      this.checkAndReset();
      this.isTransitioning = false;
      
      if (!this.isDragging && !this.touchDragging && !this.autoPlayInterval) {
        this.startAutoPlay();
      }
    }, 500);
  }

  /**
   * Go to previous slide
   */
  prevSlide() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    
    if (this.cloneMode === 'both' && this.currentIndex <= this.totalSlides) {
      this.currentIndex = this.totalSlides * 2;
      this.checkAndReset();
    } else if (this.cloneMode === 'end' && this.currentIndex <= 0) {
      this.currentIndex = this.totalSlides;
      this.checkAndReset();
    }
    
    this.currentIndex--;
    this.updateSliderPosition();
    
    setTimeout(() => {
      this.checkAndReset();
      this.isTransitioning = false;
    }, 500);
  }

  /**
   * Start autoplay
   */
  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      if (!this.isDragging && !this.touchDragging && !this.isHovering && !this.isTransitioning) {
        this.nextSlide();
      }
    }, this.autoplayInterval);
  }

  /**
   * Stop autoplay
   */
  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  /**
   * Setup event listeners
   * @private
   */
  _setupEventListeners() {
    // Buttons
    if (this.prevBtn) {
      this._boundHandlers.prevBtnClick = () => {
        this.stopAutoPlay();
        this.prevSlide();
        this.startAutoPlay();
      };
      this.prevBtn.addEventListener('click', this._boundHandlers.prevBtnClick);
    }

    if (this.nextBtn) {
      this._boundHandlers.nextBtnClick = () => {
        this.stopAutoPlay();
        this.nextSlide();
        this.startAutoPlay();
      };
      this.nextBtn.addEventListener('click', this._boundHandlers.nextBtnClick);
    }

    // Touch events
    this._boundHandlers.touchstart = (e) => {
      this.touchStartX = e.touches[0].clientX;
      this.touchDragging = true;
      this.isDragging = true;
      this.stopAutoPlay();
      this.slider.style.transition = 'none';
    };
    this.wrapper.addEventListener('touchstart', this._boundHandlers.touchstart, { passive: true });

    this._boundHandlers.touchmove = (e) => {
      if (!this.touchDragging) return;
      this.touchCurrentX = e.touches[0].clientX;
      this.dragOffset = this.touchStartX - this.touchCurrentX;
      this.updateSliderPosition(false);
    };
    this.wrapper.addEventListener('touchmove', this._boundHandlers.touchmove, { passive: true });

    this._boundHandlers.touchend = () => {
      if (!this.touchDragging) return;
      this._handleDragEnd();
    };
    this.wrapper.addEventListener('touchend', this._boundHandlers.touchend, { passive: true });

    // Mouse events
    this._boundHandlers.mousedown = (e) => {
      this.isDragging = true;
      this.startX = e.clientX;
      this.stopAutoPlay();
      this.slider.style.transition = 'none';
      e.preventDefault();
    };
    this.wrapper.addEventListener('mousedown', this._boundHandlers.mousedown);

    this._boundHandlers.mousemove = (e) => {
      if (!this.isDragging) return;
      this.currentX = e.clientX;
      this.dragOffset = this.startX - this.currentX;
      this.updateSliderPosition(false);
    };
    this.wrapper.addEventListener('mousemove', this._boundHandlers.mousemove);

    this._boundHandlers.mouseup = () => {
      if (!this.isDragging) return;
      this._handleDragEnd();
    };
    this.wrapper.addEventListener('mouseup', this._boundHandlers.mouseup);

    // Hover events
    this._boundHandlers.mouseenter = () => {
      this.isHovering = true;
      this.stopAutoPlay();
    };
    this.wrapper.addEventListener('mouseenter', this._boundHandlers.mouseenter);

    // Mouseleave - for both drag and hover
    this._boundHandlers.mouseleave = () => {
      // For drag
      if (this.isDragging) {
        this.isDragging = false;
        this.dragOffset = 0;
        this.updateSliderPosition();
        this.startAutoPlay();
      }
      // For hover
      this.isHovering = false;
      if (!this.isDragging && !this.touchDragging) {
        this.startAutoPlay();
      }
    };
    this.wrapper.addEventListener('mouseleave', this._boundHandlers.mouseleave);

    // Window resize
    this._boundHandlers.resize = () => {
      this.updateSliderPosition(false);
    };
    window.addEventListener('resize', this._boundHandlers.resize);
  }

  /**
   * Handle when drag ends
   * @private
   */
  _handleDragEnd() {
    this.touchDragging = false;
    this.isDragging = false;
    
    const slideWidth = this.getSlideWidth();
    const threshold = slideWidth * this.threshold;
    
    if (Math.abs(this.dragOffset) > threshold) {
      if (this.dragOffset > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    } else {
      this.dragOffset = 0;
      this.updateSliderPosition();
    }
    
    this.dragOffset = 0;
    this.startAutoPlay();
  }

  /**
   * Destroy slider (cleanup)
   */
  destroy() {
    this.stopAutoPlay();
    
    // Remove event listeners
    if (this.prevBtn && this._boundHandlers.prevBtnClick) {
      this.prevBtn.removeEventListener('click', this._boundHandlers.prevBtnClick);
    }
    
    if (this.nextBtn && this._boundHandlers.nextBtnClick) {
      this.nextBtn.removeEventListener('click', this._boundHandlers.nextBtnClick);
    }
    
    if (this.wrapper) {
      // Touch events
      if (this._boundHandlers.touchstart) {
        this.wrapper.removeEventListener('touchstart', this._boundHandlers.touchstart);
      }
      if (this._boundHandlers.touchmove) {
        this.wrapper.removeEventListener('touchmove', this._boundHandlers.touchmove);
      }
      if (this._boundHandlers.touchend) {
        this.wrapper.removeEventListener('touchend', this._boundHandlers.touchend);
      }
      
      // Mouse events
      if (this._boundHandlers.mousedown) {
        this.wrapper.removeEventListener('mousedown', this._boundHandlers.mousedown);
      }
      if (this._boundHandlers.mousemove) {
        this.wrapper.removeEventListener('mousemove', this._boundHandlers.mousemove);
      }
      if (this._boundHandlers.mouseup) {
        this.wrapper.removeEventListener('mouseup', this._boundHandlers.mouseup);
      }
      if (this._boundHandlers.mouseenter) {
        this.wrapper.removeEventListener('mouseenter', this._boundHandlers.mouseenter);
      }
      if (this._boundHandlers.mouseleave) {
        this.wrapper.removeEventListener('mouseleave', this._boundHandlers.mouseleave);
      }
    }
    
    // Window resize
    if (this._boundHandlers.resize) {
      window.removeEventListener('resize', this._boundHandlers.resize);
    }
    
    // Clear state
    this.slider = null;
    this.wrapper = null;
    this.prevBtn = null;
    this.nextBtn = null;
    this.slides = [];
    this.allSlides = [];
    this._boundHandlers = {};
  }
}

// Global export
window.BaseSlider = BaseSlider;

