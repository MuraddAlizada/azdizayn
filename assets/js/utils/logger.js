// Logger Utility - Error Handling
// Different log levels for production and development environments

const Logger = {
  // Flag for development environment
  isDevelopment: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
  
  // Log levels
  levels: {
    ERROR: 'error',
    WARN: 'warn',
    INFO: 'info',
    DEBUG: 'debug'
  },

  /**
   * Error log
   * @param {string} message - Error message
   * @param {Error|object} error - Error object (opsional)
   * @param {object} context - Additional contact info (opsional)
   */
  error(message, error = null, context = {}) {
    if (this.isDevelopment) {
      console.error(`[ERROR] ${message}`, error || '', context);
    } else {
      // In production, you can send to error tracking service
      // e.g.: Sentry, LogRocket, etc.
      this._sendToErrorTracking(message, error, context);
    }
  },

  /**
   * Warning log
   * @param {string} message - Warning message
   * @param {object} context - Context info (opsional)
   */
  warn(message, context = {}) {
    if (this.isDevelopment) {
      console.warn(`[WARN] ${message}`, context);
    }
    // Warnings are generally not logged in production
  },

  /**
   * Info log
   * @param {string} message - Info message
   * @param {object} context - Additional context info   (opsional)
   */
  info(message, context = {}) {
    if (this.isDevelopment) {
      console.log(`[INFO] ${message}`, context);
    }
  },

  /**
   * Debug log
   * @param {string} message - Debug mesajı
   * @param {object} context - Əlavə kontekst məlumatı (opsional)
   */
  debug(message, context = {}) {
    if (this.isDevelopment) {
      console.debug(`[DEBUG] ${message}`, context);
    }
  },

  /**
   * Sends to error tracking service in production environment
   * @private
   */
  _sendToErrorTracking(message, error, context) {
    // Here you can write the logic to send to error tracking service
    // e.g.:
    // if (window.Sentry) {
    //   window.Sentry.captureException(new Error(message), { extra: context });
    // }
    
    // Now we just store in localStorage (optional)
    try {
      const errors = JSON.parse(localStorage.getItem('app_errors') || '[]');
      errors.push({
        message,
        error: error?.toString(),
        context,
        timestamp: new Date().toISOString()
      });
      // Keep last 50 errors
      if (errors.length > 50) {
        errors.shift();
      }
      localStorage.setItem('app_errors', JSON.stringify(errors));
    } catch (e) {
      // localStorage error - ignore
    }
  }
};

// Global export
window.Logger = Logger;

