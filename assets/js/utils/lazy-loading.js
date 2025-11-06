// Lazy Loading Utility - Image Optimization
// Lazy loads images using Intersection Observer API

const LazyLoader = {
  observer: null,
  loadedImages: new Set(),

  /**
   * Initialize lazy loading
   */
  init() {
    // For browsers supporting Intersection Observer
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this._loadImage(entry.target);
              this.observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px', // Load 50px before
          threshold: 0.01
        }
      );

      // Observe all lazy load images
      this._observeImages();
    } else {
      // Fallback for old browsers - load immediately
      this._loadAllImages();
    }
  },

  /**
   * Find and observe images with lazy load attribute
   * @private
   */
  _observeImages() {
    const lazyImages = document.querySelectorAll('img[data-src], img[loading="lazy"]');
    
    lazyImages.forEach((img) => {
      // If data-src attribute exists, replace src with placeholder
      if (img.dataset.src && !img.src) {
        img.src = this._getPlaceholder(img.dataset.src);
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s';
      }
      
      this.observer.observe(img);
    });
  },

  /**
   * Load image
   * @private
   */
  _loadImage(img) {
    if (this.loadedImages.has(img)) {
      return; // Already loaded
    }

    this.loadedImages.add(img);

    if (img.dataset.src) {
      const newImage = new Image();
      
      newImage.onload = () => {
        img.src = img.dataset.src;
        img.style.opacity = '1';
        img.classList.add('loaded');
        img.removeAttribute('data-src');
        
        // For blur-to-sharp effect
        if (img.classList.contains('lazy-blur')) {
          img.style.filter = 'blur(0px)';
        }
      };

      newImage.onerror = () => {
        if (typeof Logger !== 'undefined') {
          Logger.warn('Image could not be loaded', { src: img.dataset.src });
        } else {
          console.warn('Image could not be loaded', img.dataset.src);
        }
        img.src = this._getErrorPlaceholder();
        img.style.opacity = '1';
      };

      newImage.src = img.dataset.src;
    } else if (img.hasAttribute('loading') && img.loading === 'lazy') {
      // If native lazy loading is supported, no longer needed
      img.style.opacity = '1';
    }
  },

  /**
   * Load all images for old browsers
   * @private
   */
  _loadAllImages() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => {
      this._loadImage(img);
    });
  },

  /**
   * Create placeholder image (blur/base64)
   * @private
   */
  _getPlaceholder(originalSrc) {
    // Simple 1x1 transparent PNG
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E';
  },

  /**
   * Error placeholder
   * @private
   */
  _getErrorPlaceholder() {
    return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999"%3EImage could not be loaded%3C/text%3E%3C/svg%3E';
  },

  /**
   * Force load image (e.g., hero images)
   */
  loadImmediate(img) {
    if (img.dataset.src) {
      this._loadImage(img);
    }
  }
};

// Initialize on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => LazyLoader.init());
} else {
  LazyLoader.init();
}

// Global export
window.LazyLoader = LazyLoader;

