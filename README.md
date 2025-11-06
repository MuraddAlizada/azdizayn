# AzDizayn - Veb Sayt

AzDizayn şirkətinin rəsmi veb saytı. Tikinti materialları, seramik, təbii daşlar və digər məhsulların satışı üçün hazırlanmış veb platforma.

## 📁 Proyekt Strukturu

```
AzDizayn/
├── assets/
│   ├── css/          # CSS faylları
│   │   ├── common.css
│   │   ├── style.css
│   │   ├── about.css
│   │   └── contact.css
│   ├── js/           # JavaScript modulları
│   │   ├── navigation.js          # Mobil menyu və header scroll
│   │   ├── hero-slider.js         # Hero slider (Slick ilə)
│   │   ├── translations.js        # Çoxdilli tərcümə sistemi
│   │   ├── contact-form.js        # Əlaqə formu
│   │   ├── yeni-mehsullar-slider.js  # Yeni məhsullar slider
│   │   ├── brands-slider.js       # Brendlər slider
│   │   ├── keramoqranit-slider.js # Keramoqranit slider
│   │   ├── gallery-slider.js      # Qalereya slider
│   │   ├── product-detail.js      # Məhsul detalları
│   │   ├── blog-detail.js         # Bloq detalları
│   │   ├── products-sort.js       # Məhsul sıralama
│   │   ├── employees-filter.js    # Əməkdaş filtri
│   │   └── utils/                  # Utility modulları
│   │       ├── base-slider.js     # Base slider class
│   │       ├── lazy-loading.js    # Lazy loading
│   │       └── logger.js          # Error logging
│   ├── img/          # Şəkillər
│   └── products/     # Məhsul şəkilləri
├── pages/
│   ├── about.html     # Haqqımızda səhifəsi
│   └── contact.html   # Əlaqə səhifəsi
└── index.html         # Ana səhifə
```

## 🚀 Xüsusiyyətlər

- ✅ Responsive dizayn (mobil, planşet, desktop)
- ✅ Çoxsaylı infinite loop slider-lər
- ✅ Touch/swipe dəstəyi
- ✅ Auto-play funksiyası
- ✅ Mobil menyu
- ✅ Header scroll effekti
- ✅ Hero slider progress göstəriciləri
- ✅ Çoxdilli dəstək (Azərbaycan, İngilis, Rus)
- ✅ Dinamik dil dəyişdirmə sistemi
- ✅ SEO optimallaşdırılmış meta tag-lər
- ✅ Lazy loading şəkillər
- ✅ Performance optimallaşdırılmış scroll event-lər

## 🛠️ Texnologiyalar

- **HTML5** - Struktur
- **CSS3** - Stilizasiya
- **JavaScript (Vanilla)** - Funksionallıq
- **jQuery** - DOM manipulyasiyası
- **Slick Carousel** - Hero slider üçün

## 📦 JavaScript Modulları

### navigation.js

Mobil menyu və header scroll funksionallığını idarə edir.

### hero-slider.js

Slick carousel istifadə edərək hero slider-i idarə edir. Progress göstəriciləri ilə.

### yeni-mehsullar-slider.js

Yeni məhsullar üçün infinite loop slider. Touch/swipe və auto-play dəstəyi.

### brands-slider.js

Brendlər slider-i. Infinite loop, touch/swipe dəstəyi.

### keramoqranit-slider.js

Keramoqranit məhsulları üçün slider.

### gallery-slider.js

Qalereya slider-i. 3 slide göstərir.

## 🎯 İstifadə

1. Proyekti klonlayın və ya yükləyin
2. `index.html` faylını brauzerdə açın
3. Bütün funksiyalar işləməlidir

## 📝 Qeydlər

- Bütün slider-lər infinite loop rejimində işləyir
- Touch və mouse drag dəstəyi aktivdir
- Auto-play hover zamanı dayandırılır
- Bütün modullar müstəqil işləyir

## 🛠️ Utility Modulları

### utils/logger.js
Error handling və logging üçün. Development və production mühitləri üçün fərqli log səviyyələri.

**İstifadə:**
```javascript
Logger.error('Error mesajı', errorObject, { context: 'data' });
Logger.warn('Warning mesajı', { context: 'data' });
Logger.info('Info mesajı', { context: 'data' });
Logger.debug('Debug mesajı', { context: 'data' });
```

### utils/lazy-loading.js
Şəkilləri lazy load edir. Intersection Observer API istifadə edir.

**HTML-də istifadə:**
```html
<!-- data-src atributu ilə -->
<img data-src="./path/to/image.jpg" src="placeholder" alt="Description" loading="lazy" />

<!-- və ya native lazy loading -->
<img src="./path/to/image.jpg" alt="Description" loading="lazy" />
```

### utils/base-slider.js
Bütün slider-lər üçün base class. Kod təkrarlarını azaldır.

**İstifadə:**
```javascript
const slider = new BaseSlider({
  sliderSelector: '.slider',
  wrapperSelector: '.slider-wrapper',
  slideSelector: '.slide',
  prevBtnSelector: '#prevBtn',
  nextBtnSelector: '#nextBtn',
  autoplayInterval: 3000,
  slideGap: 20,
  threshold: 0.3,
  cloneMode: 'end', // 'end', 'both', 'none'
  startIndex: 0
});
```

### translations.js
Çoxdilli tərcümə sistemi. 3 dil dəstəyi: Azərbaycan, İngilis, Rus.

**HTML-də istifadə:**
```html
<h1 data-translate="nav-about">Haqqımızda</h1>
<button data-translate="get-quote">Qiymət təklifi al</button>
```

**JavaScript-də istifadə:**
```javascript
// Dil dəyişdirmə
window.Translator.changeLanguage('en');

// Tərcümə almaq
const text = window.Translator.translate('nav-about', 'en');

// Cari dil
const currentLang = window.Translator.getCurrentLanguage();
```

## ✅ Tətbiq Edilmiş Təkmilləşdirmələr

- ✅ Base slider class yaradılmışdır - kod təkrarları azaldılmışdır
- ✅ Error handling sistemi (Logger utility) - development və production üçün
- ✅ Lazy loading sistemi - performans optimallaşdırılmışdır
- ✅ Kod modulları yaxşı təşkil edilmişdir
- ✅ Çoxdilli tərcümə sistemi - 3 dil dəstəyi (AZ, EN, RU)
- ✅ Dinamik dil dəyişdirmə - localStorage və URL parametrləri ilə
- ✅ SEO optimallaşdırılması - meta tags, Open Graph, Twitter Cards
- ✅ Performance optimallaşdırılması - scroll event throttling
- ✅ Accessibility yaxşılaşdırılması - alt text-lər, semantic HTML
- ✅ Contact form centralizasiyası - təkrarlanan kodlar aradan qaldırılmışdır

## 🔧 Gələcək Təkmilləşdirmələr

- [ ] ES6 modullarına keçid
- [ ] Image optimization (WebP formatı)
- [ ] Service Worker cache strategiyası
- [ ] Analytics inteqrasiyası

© 2023 AzDizayn Group. Bütün hüquqlar qorunur.
