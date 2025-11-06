// Products Page Sort Functionality
// Filters products by country, brand, surface, size

(function () {
  'use strict';

  // Sort function
  function initSortFilters() {
    const sortSelects = document.querySelectorAll('.sort-select');
    const productsGrid = document.getElementById('products-grid');
    
    if (!productsGrid) return;

    // Store all product cards
    const allProducts = Array.from(productsGrid.querySelectorAll('.product-card-page'));

    sortSelects.forEach(select => {
      select.addEventListener('change', () => {
        filterProducts(allProducts, productsGrid);
      });
    });
  }

  // Filters products
  function filterProducts(allProducts, productsGrid) {
    const country = document.getElementById('sort-country')?.value || '';
    const brand = document.getElementById('sort-brand')?.value || '';
    const surface = document.getElementById('sort-surface')?.value || '';
    const size = document.getElementById('sort-size')?.value || '';

    // Hide all products
    allProducts.forEach(product => {
      product.style.display = 'none';
    });

    // Show products matching filters
    const filteredProducts = allProducts.filter(product => {
      let matches = true;

      if (country && product.getAttribute('data-country') !== country) {
        matches = false;
      }
      if (brand && product.getAttribute('data-brand') !== brand) {
        matches = false;
      }
      if (surface && product.getAttribute('data-surface') !== surface) {
        matches = false;
      }
      if (size && product.getAttribute('data-size') !== size) {
        matches = false;
      }

      return matches;
    });

    // Show matching products
    filteredProducts.forEach(product => {
      product.style.display = 'block';
    });

    // If no products found, show message
    if (filteredProducts.length === 0) {
      showNoResultsMessage(productsGrid);
    } else {
      hideNoResultsMessage(productsGrid);
    }
  }

  // Shows "No results found" message
  function showNoResultsMessage(productsGrid) {
    let noResultsMsg = productsGrid.querySelector('.no-results-message');
    if (!noResultsMsg) {
      noResultsMsg = document.createElement('div');
      noResultsMsg.className = 'no-results-message';
      noResultsMsg.innerHTML = `
        <p style="grid-column: 1 / -1; text-align: center; padding: 40px; font-size: 18px; color: #666;">
          <i class="fa-solid fa-search" style="margin-right: 10px;"></i>
          No products found matching the selected filters.
        </p>
      `;
      productsGrid.appendChild(noResultsMsg);
    }
    noResultsMsg.style.display = 'block';
  }

  // Hides "No results found" message
  function hideNoResultsMessage(productsGrid) {
    const noResultsMsg = productsGrid.querySelector('.no-results-message');
    if (noResultsMsg) {
      noResultsMsg.style.display = 'none';
    }
  }

  // On page load
  document.addEventListener('DOMContentLoaded', function () {
    initSortFilters();
  });
})();

