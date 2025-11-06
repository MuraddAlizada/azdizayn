// Contact Form Handler
// Handles form submission for contact forms

(function () {
  'use strict';

  function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
      return; // Form doesn't exist on this page
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const phone = formData.get('phone') || '';
      const message = formData.get('message') || '';

      // Basic validation
      if (!name.trim() || !message.trim()) {
        const errorMsg = window.Translator 
          ? window.Translator.translate('contact-form-error', window.Translator.getCurrentLanguage())
          : 'Zəhmət olmasa, bütün məcburi sahələri doldurun.';
        if (typeof Logger !== 'undefined') {
          Logger.warn('Contact form validation failed', { name, message });
        }
        alert(errorMsg);
        return;
      }

      // You can add form submission logic here
      // For example, send data to a server or open WhatsApp
      const successMsg = window.Translator 
        ? window.Translator.translate('contact-form-success', window.Translator.getCurrentLanguage())
        : 'Mesajınız göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.';
      
      alert(successMsg);
      contactForm.reset();
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
  } else {
    initContactForm();
  }
})();

