// Product Detail Page Script
// Reads product data from URL parameters and populates the page

(function () {
  'use strict';

  // Products database
  const products = {
    'seramik-1': {
      title: 'Premium Seramik Döşəmə',
      category: 'Seramik',
      categoryLink: './seramik.html',
      description: 'Yüksək keyfiyyətli seramik döşəmə materialı, müasir interyerlər üçün ideal seçim.',
      country: 'azerbaycan',
      brand: 'brand1',
      surface: 'mat',
      size: '60x60',
      fullDescription: `
        <p>
          Premium Seramik Döşəmə müasir interyerdə ən populyar döşəmə materiallarından biridir.
          Yüksək keyfiyyətli materialdan hazırlanmış bu məhsul uzun müddət gözəlliyini qoruyur.
        </p>
        <p>
          Bu seramik döşəmə müxtəlif otaqlarda istifadə oluna bilər: mətbəx, qonaq otağı,
          yataq otağı və hətta hamam. Onun əsas üstünlükləri asan qulluq, davamlılıq və
          geniş dizayn imkanlarıdır.
        </p>
      `,
      images: [
        '../assets/products/seramik.webp',
        '../assets/products/seramik.webp',
        '../assets/products/seramik.webp'
      ],
      features: [
        'Yüksək keyfiyyət',
        'Davamlı material',
        'Müasir dizayn',
        'Asan qulluq',
        'Nəmə davamlı',
        'Yanğın təhlükəsizliyi'
      ],
      specifications: {
        'Ölçü': '60x60 sm',
        'Qalınlıq': '10 mm',
        'Çəki': '15 kq/m²',
        'Rəng': 'Ağ, Bej, Boz',
        'Səth': 'Mat, Parlaq',
        'İstifadə sahəsi': 'Daxili və xarici'
      },
      application: `
        <p>
          Bu məhsul müxtəlif interyer və eksteryer layihələrdə istifadə oluna bilər.
          Düzgün quraşdırma və qulluq ilə uzun illər problem yaratmadan işləyir.
        </p>
        <h4>Quraşdırma Tövsiyələri:</h4>
        <ul>
          <li>Düzgün hazırlanmış səth üzərində quraşdırılmalıdır</li>
          <li>Peşəkar usta tərəfindən quraşdırılması tövsiyə olunur</li>
          <li>Qulluq üçün nəmlə təmizləmə kifayətdir</li>
        </ul>
      `
    },
    'keramoqranit-1': {
      title: 'Keramoqranit Döşəmə',
      category: 'Keramoqranit',
      categoryLink: './keramoqranit.html',
      description: 'Davamlı və gözəl keramoqranit döşəmə materialı.',
      country: 'turkiye',
      brand: 'brand2',
      surface: 'parlaq',
      size: '80x80',
      fullDescription: `
        <p>
          Keramoqranit döşəmələr yüksək temperaturda bişirilmiş materiallardır ki,
          bu da onlara xüsusi davamlılıq verir.
        </p>
      `,
      images: [
        '../assets/products/seramik.webp'
      ],
      features: [
        'Yüksək davamlılıq',
        'Müasir dizayn',
        'Asan qulluq'
      ],
      specifications: {
        'Ölçü': '120x60 sm',
        'Qalınlıq': '12 mm'
      },
      application: `
        <p>Keramoqranit döşəmələr müxtəlif sahələrdə istifadə oluna bilər.</p>
      `
    }
  };

  // Reads product ID from URL parameters
  function getProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'seramik-1';
  }

  // Loads product data to the page
  function loadProduct() {
    const productId = getProductId();
    const product = products[productId];

    if (!product) {
      // If product not found, show default product
      const defaultProduct = products['seramik-1'];
      displayProduct(defaultProduct);
      return;
    }

    displayProduct(product);
  }

  // Displays product on the page
  function displayProduct(product) {
    // Title
    const titleElement = document.getElementById('product-title');
    if (titleElement) {
      titleElement.textContent = product.title;
    }

    // Breadcrumb
    const breadcrumbCategory = document.getElementById('product-breadcrumb-category');
    if (breadcrumbCategory) {
      breadcrumbCategory.textContent = product.category;
    }

    const breadcrumbTitle = document.getElementById('product-breadcrumb-title');
    if (breadcrumbTitle) {
      breadcrumbTitle.textContent = product.title;
    }

    // Back link
    const backLink = document.getElementById('product-back-link');
    if (backLink && product.categoryLink) {
      backLink.href = product.categoryLink;
    }

    // Kateqoriya
    const categoryElement = document.getElementById('product-category');
    if (categoryElement) {
      categoryElement.innerHTML = `<i class="fa-solid fa-tag"></i> ${product.category}`;
    }

    // Description
    const descriptionElement = document.getElementById('product-description');
    if (descriptionElement) {
      descriptionElement.innerHTML = `<p>${product.description}</p>`;
    }

    // Images
    const mainImageElement = document.getElementById('product-main-image');
    if (mainImageElement && product.images && product.images.length > 0) {
      mainImageElement.src = product.images[0];
      mainImageElement.alt = product.title;
    }

    // Thumbnails
    const thumbnailsContainer = document.getElementById('product-thumbnails');
    if (thumbnailsContainer && product.images) {
      thumbnailsContainer.innerHTML = '';
      product.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'product-thumbnail' + (index === 0 ? ' active' : '');
        thumbnail.innerHTML = `<img src="${image}" alt="${product.title}">`;
        thumbnail.addEventListener('click', () => {
          mainImageElement.src = image;
          document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
          thumbnail.classList.add('active');
        });
        thumbnailsContainer.appendChild(thumbnail);
      });
    }

    // Xüsusiyyətlər
    const featuresElement = document.getElementById('product-features');
    if (featuresElement && product.features) {
      const featuresList = featuresElement.querySelector('ul');
      if (featuresList) {
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
          const li = document.createElement('li');
          li.innerHTML = `<i class="fa-solid fa-check"></i> ${feature}`;
          featuresList.appendChild(li);
        });
      }
    }

    // Full description
    const fullDescriptionElement = document.getElementById('product-full-description');
    if (fullDescriptionElement && product.fullDescription) {
      fullDescriptionElement.innerHTML = product.fullDescription;
    }

    // Specifications table
    const specificationsTbody = document.getElementById('specifications-tbody');
    if (specificationsTbody && product.specifications) {
      specificationsTbody.innerHTML = '';
      Object.entries(product.specifications).forEach(([key, value]) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${key}</td>
          <td>${value}</td>
        `;
        specificationsTbody.appendChild(tr);
      });
    }

    // Application
    const applicationElement = document.getElementById('product-application');
    if (applicationElement && product.application) {
      applicationElement.innerHTML = product.application;
    }

    // WhatsApp link
    const whatsappBtn = document.querySelector('.product-whatsapp-btn');
    if (whatsappBtn) {
      const message = encodeURIComponent(`Salam! "${product.title}" məhsulu haqqında məlumat istəyirəm.`);
      whatsappBtn.href = `https://wa.me/994703443146?text=${message}`;
    }


  // Tab functionality
  function initTabs() {
    const tabButtons = document.querySelectorAll('.product-tab-btn');
    const tabPanes = document.querySelectorAll('.product-tab-pane');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Add active class to clicked button and corresponding pane
        button.classList.add('active');
        const targetPane = document.getElementById(`tab-${targetTab}`);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }

  // Load product when page loads
  document.addEventListener('DOMContentLoaded', function () {
    loadProduct();
    initTabs();
  });
})();

