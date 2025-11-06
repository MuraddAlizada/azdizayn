// Blog Detail Page Script
// Reads article data from URL parameters and populates the page

(function () {
  'use strict';

  // Blog articles database
  const blogPosts = {
    'laminat-dosemeler': {
      title: 'Laminat Döşəmələr – Gözəllik, Rahatlıq və Davamlılıq Bir Arada',
      image: '../assets/img/blog/1760941439_sdddddddvf.jpg',
      date: '15 Yanvar 2024',
      content: `
        <p>
          Laminat döşəmələr müasir interyerdə ən populyar döşəmə
          materiallarından biridir. Onlar təbii ağacın gözəlliyini
          birləşdirir, lakin daha davamlı və qulluq tələb etməyən
          xüsusiyyətlərə malikdir.
        </p>

        <h2>Laminat Döşəmələrin Üstünlükləri</h2>
        <p>
          Laminat döşəmələrin əsas üstünlükləri onların davamlılığı,
          asan qulluğu və geniş dizayn imkanlarıdır. Bu material
          müxtəlif otaqlarda istifadə oluna bilər və uzun müddət
          gözəlliyini qoruyur.
        </p>

        <h3>Davamlılıq və Keyfiyyət</h3>
        <p>
          Yüksək keyfiyyətli laminat döşəmələr yüksək yüklərə tab gətirir
          və uzun müddət istifadə oluna bilər. Onlar nəmliyə və
          günəş işığına davamlıdır, bu da onları mətbəx və qonaq
          otaqları üçün ideal seçim edir.
        </p>

        <h3>Dizayn İmkanları</h3>
        <p>
          Müasir laminat döşəmələr müxtəlif rənglər, naxışlar və
          fakturalar təklif edir. Təbii ağacdan tutmuş daş və
          keramikaya qədər geniş çeşid mövcuddur.
        </p>

        <h2>Seçim Tövsiyələri</h2>
        <p>
          Laminat döşəmə seçərkən otağın funksiyasına, gündəlik
          istifadə intensivliyinə və dizayn üslubuna diqqət yetirmək
          vacibdir. Yüksək keyfiyyətli materiallar investisiya kimi
          düşünülməlidir.
        </p>

        <p>
          AzDizayn Group olaraq, biz müştərilərimizə geniş laminat
          döşəmə çeşidini təklif edirik. Məsləhət üçün bizimlə
          əlaqə saxlayın.
        </p>
      `
    },
    'xirdavat-mehsullari': {
      title: 'Xırdavat məhsulları – Usta işinin görünməyən qəhrəmanları',
      image: '../assets/img/blog/1760597420_hirdavat.jpg',
      date: '12 Yanvar 2024',
      content: `
        <p>
          Xırdavat məhsulları hər bir tikinti və təmir işində vacib rol oynayır.
          Bu kiçik görünən, lakin çox vacib olan materiallar işin keyfiyyətini
          və davamlılığını təmin edir.
        </p>

        <h2>Xırdavat Məhsullarının Əhəmiyyəti</h2>
        <p>
          Xırdavat məhsulları müxtəlif növlərdə olur: vintlər, düymələr,
          qarmaqlar, bərkidicilər və s. Hər biri öz funksiyasını yerinə yetirir
          və işin keyfiyyətini təmin edir.
        </p>

        <h3>Keyfiyyətli Materialların Seçimi</h3>
        <p>
          Keyfiyyətli xırdavat məhsulları seçmək çox vacibdir. Düzgün seçilmiş
          materiallar işin davamlılığını və təhlükəsizliyini təmin edir.
        </p>
      `
    },
    'santexnika-mehsullari': {
      title: 'Santexnika Məhsullarını Seçərkən Nələrə Diqqət Etmək Lazımdır?',
      image: '../assets/img/blog/1759749177_ekran-kli-2025-10-06-150934.png',
      date: '10 Yanvar 2024',
      content: `
        <p>
          Santexnika məhsulları evin rahatlığı və funksionallığı üçün çox vacibdir.
          Düzgün seçilmiş santexnika məhsulları uzun illər problem yaratmadan
          işləyir.
        </p>

        <h2>Seçim Tövsiyələri</h2>
        <p>
          Santexnika məhsulları seçərkən keyfiyyət, dizayn və funksionallığa
          diqqət yetirmək lazımdır. Məsləhət üçün mütəxəssislərlə məsləhətləşin.
        </p>
      `
    }
  };

  // Reads article ID from URL parameters
  function getBlogPostId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'laminat-dosemeler';
  }

  // Loads article data to the page
  function loadBlogPost() {
    const postId = getBlogPostId();
    const post = blogPosts[postId];

    if (!post) {
      // If article not found, show default article
      const defaultPost = blogPosts['laminat-dosemeler'];
      displayPost(defaultPost);
      return;
    }

    displayPost(post);
  }

  // Displays article on the page
  function displayPost(post) {
    // Title
    const titleElement = document.getElementById('blog-title');
    if (titleElement) {
      titleElement.textContent = post.title;
    }

    // Breadcrumb
    const breadcrumbElement = document.getElementById('blog-breadcrumb-title');
    if (breadcrumbElement) {
      breadcrumbElement.textContent = post.title;
    }

    // Image
    const imageElement = document.getElementById('blog-featured-image');
    if (imageElement) {
      imageElement.src = post.image;
      imageElement.alt = post.title;
    }

    // Tarix
    const dateElement = document.getElementById('blog-date');
    if (dateElement) {
      dateElement.innerHTML = `<i class="fa-solid fa-calendar"></i> ${post.date}`;
    }

    // Content
    const contentElement = document.getElementById('blog-content');
    if (contentElement) {
      contentElement.innerHTML = post.content;
    }

    // Update share links
    updateShareLinks(post.title);
  }

  // Updates share links
  function updateShareLinks(title) {
    const currentUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(title);

    const shareButtons = document.querySelectorAll('.blog-share-btn');
    shareButtons.forEach((btn) => {
      if (btn.classList.contains('facebook')) {
        btn.href = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
      } else if (btn.classList.contains('twitter')) {
        btn.href = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareText}`;
      } else if (btn.classList.contains('linkedin')) {
        btn.href = `https://www.linkedin.com/shareArticle?url=${currentUrl}&title=${shareText}`;
      } else if (btn.classList.contains('whatsapp')) {
        btn.href = `https://wa.me/?text=${shareText} ${currentUrl}`;
      }
    });
  }

  // Load article when page loads
  document.addEventListener('DOMContentLoaded', function () {
    loadBlogPost();
  });
})();

