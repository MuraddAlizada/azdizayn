// Translation System
// Simple and effective translation system

(function () {
  'use strict';

  // Translations database
  const translations = {
    az: {
      // Navigation
      'nav-company': 'Şirkət',
      'nav-about': 'Haqqımızda',
      'nav-employees': 'Əməkdaşlar',
      'nav-career': 'Karyera',
      'nav-brands': 'Brendlər',
      'nav-director-message': 'Şirkət Rəhbərinin Müraciəti',
      'nav-certificates': 'Sertifikatlar',
      'nav-products': 'Məhsullar',
      'nav-services': 'Xidmətlər',
      'nav-partners': 'Partnyorlar',
      'nav-catalogs': 'Kataloqlar',
      'nav-blog': 'Bloq',
      'nav-contact': 'Əlaqə',
      // Common
      'back': 'Geriyə qayıt',
      'home': 'Ana səhifə',
      'read-more': 'Daha oxu',
      'get-quote': 'Qiymət təklifi al',
      'subscribe': 'ABUNƏ OL',
      'email-placeholder': 'Email ünvanınızı daxil edin',
      // Footer
      'footer-products': 'Məhsullarımız',
      'footer-about': 'Haqqımızda',
      'footer-social': 'Sosial Mediada Biz',
      'footer-copyright': '© Copyright 2023 Azdizayn Group',
      // Hero
      'hero-title-1': 'Keyfiyyətli məhsullar, peşəkar xidmət',
      'hero-title-2': 'Tikinti materiallarında lider',
      'hero-title-3': 'Hər yerdə, hər zaman xidmətinizdə',
      'hero-button': 'Daha Ətraflı',
      // Sections
      'section-products': 'Məhsullar',
      'section-brands': 'Brendlər',
      'section-blog': 'Bloq',
      'section-gallery': 'Qalereya',
      'section-new-products': 'Yeni Məhsullar',
      'section-more': 'Daha Ətraflı',
      // Products
      'product-ceramic': 'Seramik',
      'product-natural-stones': 'Təbii Daşlar',
      'product-construction-chemicals': 'Tikinti Kimyəviləri',
      'product-accessories': 'Aksesuarlar',
      'product-pool': 'Hovuz',
      'product-plumbing': 'Santexnika',
      'product-catalog': 'Kataloq',
      'product-insulation-materials': 'İzolyasiya Materialları',
      'product-joint-fillers': 'Derz Dolguları',
      'product-adhesives': 'Yapışdırıcılar',
      'product-repair-mixtures': 'Təmir Qarışımları',
      'product-travertine': 'Travertin',
      'product-marble': 'Mərmər',
      'product-granite': 'Qranit',
      'product-level-adjuster': 'Səviyyə Ayarlayıcı',
      'product-hardware': 'Xırdavatlar',
      'product-keramogranite': 'Keramoqranit',
      'product-tile': 'Kafel',
      'product-metlax': 'Metlax',
      'product-heyet-stone': 'Heyət Daşı',
      'product-facade-covering': 'Fasad Örtüyü',
      'product-granite-piles': 'Qranit Pilekenler',
      // Info Cards
      'info-wide-range': 'Geniş məhsul spektri',
      'info-wide-range-desc': 'İldən ilə daha geniş xidmət-məhsul çeşidi ilə portfelimizi artırırıq',
      'info-since-2019': '2019-cu ildən etibarən',
      'info-since-2019-desc': '2019-cu ildən fasiləsiz olaraq müştərilərimizə xidmət göstəririk',
      'info-big-projects': 'Böyük layihələrdə təcrübə',
      'info-big-projects-desc': 'Bir çox layihələrdə qüsursuz və uzunmüddətli əməkdaşlıq',
      // Footer Subscribe
      'footer-subscribe-text': 'Azdizayn kampaniyaları haqqında tez xəbərdar olmaq üçün abunə olun',
      // Pages
      'page-catalogs': 'Kataloqlar',
      'page-partners': 'Partnyorlar',
      'page-services': 'Xidmətlər',
      'page-certificates': 'Sertifikatlar',
      'page-director-message': 'Şirkət Rəhbərinin Müraciəti',
      'page-brands': 'Brendlər',
      'page-career': 'Karyera',
      'page-employees': 'Əməkdaşlar',
      'page-vacancies': 'Vakansiyalar',
      'page-all': 'Hamısı',
      'page-services-title': 'Xidmətlər',
      // Career
      'career-driver': 'Sürücü (Yük avtomobili olan)',
      'career-presenter': 'Təqdimatçı',
      'career-sales-specialist': 'Korpotativ satış mütəxəssisi',
      'career-location-baku': 'Bakı',
      'career-location-azerbaijan': 'Azərbaycan',
      'career-more-details': 'DAHA ƏTRAFLI',
      // Services
      'service-filtration': 'Filtirasiya və dekorasiya xidməti',
      'service-concrete': 'Beton və qazma işləri xidməti',
      'service-pool': 'Hər növ hovuzların qurulması xidməti',
      'service-interior': 'İnteryer dizayn xidməti',
      'service-master': 'Usta xidməti',
      // Quote
      'get-quote': 'Qiymət təklifi al',
      'get-quote-title': 'İndividual qiymət təklifinə ehtiyacınız var?',
      'get-quote-subtitle': 'Bir kliklə WhatsApp üzərindən qiymət təklifi alın',
      // Products dropdown
      'product-construction-chemicals': 'Tikinti Kimyəviləri',
      'product-insulation-materials': 'İzolyasiya Materialları',
      'product-joint-fillers': 'Derz Dolguları',
      'product-adhesives': 'Yapışdırıcılar',
      'product-repair-mixtures': 'Təmir Qarışımları',
      'product-natural-stones': 'Təbii Daşlar',
      'product-travertine': 'Travertin',
      'product-marble': 'Mərmər',
      'product-granite': 'Qranit',
      'product-accessories': 'Aksesuarlar',
      'product-level-adjuster': 'Səviyyə Ayarlayıcı',
      'product-ceramic': 'Seramik',
      'product-pool': 'Hovuz',
      'product-plumbing': 'Santexnika',
      'product-hardware': 'Xırdavatlar',
      // Employees page
      'page-employees-title': 'Əməkdaşlar',
      'employee-filter-all': 'Hamısı',
      'employee-filter-marketing': 'Marketing',
      'employee-filter-management': 'RƏHBƏRLİK',
      'employee-filter-finance': 'Maliyyə departamenti',
      'employee-filter-audit': 'Daxili nəzarət şöbəsi',
      'employee-filter-sales': 'Satış Şöbəsi',
      'employee-filter-procurement': 'Satınalma üzrə mütəxəssis',
      'employee-filter-master': 'Usta',
      'employee-position-director': 'Direktor',
      'employee-position-deputy-director': 'Direktor müavini',
      'employee-position-marketing-manager': 'Marketing rəhbəri',
      'employee-position-sales-manager': 'Satış Müdiri',
      'employee-position-finance-director': 'Maliyyə şöbəsinin direktoru',
      'employee-position-audit-manager': 'Daxili nəzarət şöbəsinin müdiri',
      'employee-position-smm': 'SMM',
      'employee-position-finance-specialist': 'Maliyyə mütəxəssisi',
      'employee-position-sales-specialist': 'Satış mütəxəssisi',
      'employee-position-procurement-specialist': 'Satınalma üzrə mütəxəssis',
      'employee-position-driver': 'Sürücü',
      'employee-position-master': 'Usta',
      // About page
      'page-about-title': 'Haqqımızda',
      'about-section-title': 'Haqqımızda',
      'about-mission-title': 'Missiyamız',
      'about-vision-title': 'Vizyon',
      'about-text': '"AZDIZAYN GROUP" MMC bir idxalçı və topdan satıcı şirkət olaraq Azərbaycanda 2019-cu ildən etibarən fəaliyyətə başlayıb. Şirkətimiz keyfiyyətli məhsulları ilə qısa müddət ərzində ölkə bazarlarında öz mövqeyini tutub, müştərilərinin güvənc yerinə çevrilib. Biz bu gün ötən illərdə olduğu kimi müştərilərimizə böyük zövq və yüksək dəqiqliklə peşəkar xidmət göstərməyə davam edirik. Şirkətimizin əsas istiqamətləri santexnika, xırdavat, kafel-metlax və keramika məhsullarının, tikinti kimyəvilərinin, hovuz məhsullarının təbii və travertin daşlarının, hamam məhsulları və aksesuarlarının idxalı, həmçinin topdan və pərakəndə satışından ibarətdir.',
      'about-mission-text': 'Missiyamız, müştərilərimizi yüksək keyfiyyətli kafel-metlax və keramika məhsulları ilə təmin etmək, onların estetik funksional ehtiyaclarını ödəmək və yaşayış sahələrini gözəlləşdirməkdir. Hədəf nöqtəmiz müştəri məmnuniyyətini təmin edərək geniş məhsul çeşidimizlə müştərilərimizin gözləntilərini daim yüksək tutmaqdır. Eyni zamanda, ətraf mühitin təmizliyini də hər zaman düşünür, cəmiyyətə və təbiətə qarşı üzərimizə düşən məsuliyyəti yerinə yetiririk. Bizim fərqliliyimiz məhsullarımızın keyfiyyəti, münasib qiymətlərimiz və çox çeşidli məhsullar təklif etməyimizdir.',
      'about-vision-text': 'Azərbaycan Respublikasının sosial-iqtisadi və dayanıqlı inkişafı üçün dəyər yaradan, ölkəmizdə və regionda etibar qazanmış müasir şirkətlər qrupu olmaq gələcək planımızdır. İnnovasiya, keyfiyyət və müştəri diqqəti prinsiplərini əsas götürərək, sektor üçün lider bir mövqe qazanmaq və uzunmüddətli müştəri əlaqələri qurmaq öncəliyimizdir.',
      // Contact page
      'page-contact-title': 'Bizimlə Əlaqə',
      'contact-hotline': 'Qaynar xətt',
      'contact-write-us': 'Bizə yazın',
      'contact-address': 'Ünvan',
      'contact-phone': 'Telefonlar',
      'contact-social-media': 'Sosial media hesabları',
      'contact-form-title': 'Əlaqə Formu',
      'contact-form-name': 'Adınız',
      'contact-form-phone': 'Telefon nömrəniz',
      'contact-form-email': 'Email adresiniz',
      'contact-form-message': 'Mesajınız',
      'contact-form-submit': 'Göndər',
      'contact-form-success': 'Mesajınız göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.',
      'contact-form-error': 'Zəhmət olmasa, bütün məcburi sahələri doldurun.',
      // Mobile menu
      'mobile-menu-home': 'Ana Səhifə',
      'mobile-menu-news': 'Xəbərlər'
    },
    en: {
      // Navigation
      'nav-company': 'Company',
      'nav-about': 'About Us',
      'nav-employees': 'Employees',
      'nav-career': 'Career',
      'nav-brands': 'Brands',
      'nav-director-message': "Director's Message",
      'nav-certificates': 'Certificates',
      'nav-products': 'Products',
      'nav-services': 'Services',
      'nav-partners': 'Partners',
      'nav-catalogs': 'Catalogs',
      'nav-blog': 'Blog',
      'nav-contact': 'Contact',
      // Common
      'back': 'Back',
      'home': 'Home',
      'read-more': 'Read More',
      'get-quote': 'Get Quote',
      'subscribe': 'SUBSCRIBE',
      'email-placeholder': 'Enter your email address',
      // Footer
      'footer-products': 'Our Products',
      'footer-about': 'About Us',
      'footer-social': 'Follow Us',
      'footer-copyright': '© Copyright 2023 Azdizayn Group',
      // Hero
      'hero-title-1': 'Quality products, professional service',
      'hero-title-2': 'Leader in construction materials',
      'hero-title-3': 'Everywhere, anytime at your service',
      'hero-button': 'Learn More',
      // Sections
      'section-products': 'Products',
      'section-brands': 'Brands',
      'section-blog': 'Blog',
      'section-gallery': 'Gallery',
      'section-new-products': 'New Products',
      'section-more': 'Learn More',
      // Products
      'product-ceramic': 'Ceramic',
      'product-natural-stones': 'Natural Stones',
      'product-construction-chemicals': 'Construction Chemicals',
      'product-accessories': 'Accessories',
      'product-pool': 'Pool',
      'product-plumbing': 'Plumbing',
      'product-insulation-materials': 'Insulation Materials',
      'product-joint-fillers': 'Joint Fillers',
      'product-adhesives': 'Adhesives',
      'product-repair-mixtures': 'Repair Mixtures',
      'product-travertine': 'Travertine',
      'product-marble': 'Marble',
      'product-granite': 'Granite',
      'product-level-adjuster': 'Level Adjuster',
      'product-hardware': 'Hardware',
      'product-keramogranite': 'Keramogranite',
      'product-tile': 'Tile',
      'product-metlax': 'Metlax',
      'product-heyet-stone': 'Heyet Stone',
      'product-facade-covering': 'Facade Covering',
      'product-granite-piles': 'Granite Piles',
      // Pages
      'page-catalogs': 'Catalogs',
      'page-partners': 'Partners',
      'page-services': 'Services',
      'page-certificates': 'Certificates',
      'page-director-message': "Director's Message",
      'page-brands': 'Brands',
      'page-career': 'Career',
      'page-employees': 'Employees',
      'page-vacancies': 'Vacancies',
      'page-all': 'All',
      // Quote
      'get-quote': 'Get Quote',
      'get-quote-title': 'Need an individual quote?',
      'get-quote-subtitle': 'Get a quote via WhatsApp with one click',
      // Products dropdown
      'product-construction-chemicals': 'Construction Chemicals',
      'product-insulation-materials': 'Insulation Materials',
      'product-joint-fillers': 'Joint Fillers',
      'product-adhesives': 'Adhesives',
      'product-repair-mixtures': 'Repair Mixtures',
      'product-natural-stones': 'Natural Stones',
      'product-travertine': 'Travertine',
      'product-marble': 'Marble',
      'product-granite': 'Granite',
      'product-accessories': 'Accessories',
      'product-level-adjuster': 'Level Adjuster',
      'product-ceramic': 'Ceramic',
      'product-pool': 'Pool',
      'product-plumbing': 'Plumbing',
      'product-hardware': 'Hardware',
      'product-catalog': 'Catalog',
      // Info Cards
      'info-wide-range': 'Wide product range',
      'info-wide-range-desc': 'We expand our portfolio year by year with a wider range of services and products',
      'info-since-2019': 'Since 2019',
      'info-since-2019-desc': 'We have been serving our customers continuously since 2019',
      'info-big-projects': 'Experience in large projects',
      'info-big-projects-desc': 'Flawless and long-term cooperation in many projects',
      // Footer Subscribe
      'footer-subscribe-text': 'Subscribe to stay informed about Azdizayn campaigns',
      // Pages
      'page-services-title': 'Services',
      // Career
      'career-driver': 'Driver (with cargo vehicle)',
      'career-presenter': 'Presenter',
      'career-sales-specialist': 'Corporate Sales Specialist',
      'career-location-baku': 'Baku',
      'career-location-azerbaijan': 'Azerbaijan',
      'career-more-details': 'MORE DETAILS',
      // Services
      'service-filtration': 'Filtration and decoration service',
      'service-concrete': 'Concrete and drilling works service',
      'service-pool': 'Construction of all types of pools service',
      'service-interior': 'Interior design service',
      'service-master': 'Master service',
      // Employees page
      'page-employees-title': 'Employees',
      'employee-filter-all': 'All',
      'employee-filter-marketing': 'Marketing',
      'employee-filter-management': 'MANAGEMENT',
      'employee-filter-finance': 'Finance Department',
      'employee-filter-audit': 'Internal Audit Department',
      'employee-filter-sales': 'Sales Department',
      'employee-filter-procurement': 'Procurement Specialist',
      'employee-filter-master': 'Master',
      'employee-position-director': 'Director',
      'employee-position-deputy-director': 'Deputy Director',
      'employee-position-marketing-manager': 'Marketing Manager',
      'employee-position-sales-manager': 'Sales Manager',
      'employee-position-finance-director': 'Finance Department Director',
      'employee-position-audit-manager': 'Internal Audit Manager',
      'employee-position-smm': 'SMM',
      'employee-position-finance-specialist': 'Finance Specialist',
      'employee-position-sales-specialist': 'Sales Specialist',
      'employee-position-procurement-specialist': 'Procurement Specialist',
      'employee-position-driver': 'Driver',
      'employee-position-master': 'Master',
      // About page
      'page-about-title': 'About Us',
      'about-section-title': 'About Us',
      'about-mission-title': 'Our Mission',
      'about-vision-title': 'Vision',
      'about-text': '"AZDIZAYN GROUP" LLC has been operating in Azerbaijan since 2019 as an importer and wholesale seller. Our company has quickly established its position in the country\'s markets with quality products and has become a trusted place for its customers. Today, as in previous years, we continue to serve our customers with great pleasure and high precision. The main directions of our company include the import and wholesale and retail sale of plumbing, hardware, tile-metlax and ceramic products, construction chemicals, pool products, natural and travertine stones, bath products and accessories.',
      'about-mission-text': 'Our mission is to provide our customers with high-quality tile-metlax and ceramic products, meet their aesthetic functional needs and beautify living spaces. Our goal is to ensure customer satisfaction and keep our customers\' expectations high at all times with our wide product range. At the same time, we always think about the cleanliness of the environment and fulfill our responsibility to society and nature. Our difference is the quality of our products, our reasonable prices and our offering of very diverse products.',
      'about-vision-text': 'Our future plan is to be a modern group of companies that creates value for the socio-economic and sustainable development of the Republic of Azerbaijan and has gained trust in our country and region. Our priority is to gain a leading position for the sector and establish long-term customer relationships by taking innovation, quality and customer attention as principles.',
      // Contact page
      'page-contact-title': 'Contact Us',
      'contact-hotline': 'Hotline',
      'contact-write-us': 'Write to Us',
      'contact-address': 'Address',
      'contact-phone': 'Phones',
      'contact-social-media': 'Social Media Accounts',
      'contact-form-title': 'Contact Form',
      'contact-form-name': 'Your Name',
      'contact-form-phone': 'Your Phone Number',
      'contact-form-email': 'Your Email Address',
      'contact-form-message': 'Your Message',
      'contact-form-submit': 'Send',
      'contact-form-success': 'Your message has been sent! We will contact you soon.',
      'contact-form-error': 'Please fill in all required fields.',
      // Mobile menu
      'mobile-menu-home': 'Home',
      'mobile-menu-news': 'News'
    },
    ru: {
      // Navigation
      'nav-company': 'Компания',
      'nav-about': 'О нас',
      'nav-employees': 'Сотрудники',
      'nav-career': 'Карьера',
      'nav-brands': 'Бренды',
      'nav-director-message': 'Обращение директора',
      'nav-certificates': 'Сертификаты',
      'nav-products': 'Продукция',
      'nav-services': 'Услуги',
      'nav-partners': 'Партнеры',
      'nav-catalogs': 'Каталоги',
      'nav-blog': 'Блог',
      'nav-contact': 'Контакты',
      // Common
      'back': 'Назад',
      'home': 'Главная',
      'read-more': 'Читать далее',
      'get-quote': 'Получить предложение',
      'subscribe': 'ПОДПИСАТЬСЯ',
      'email-placeholder': 'Введите ваш email',
      // Footer
      'footer-products': 'Наша продукция',
      'footer-about': 'О нас',
      'footer-social': 'Мы в соцсетях',
      'footer-copyright': '© Copyright 2023 Azdizayn Group',
      // Hero
      'hero-title-1': 'Качественная продукция, профессиональный сервис',
      'hero-title-2': 'Лидер в строительных материалах',
      'hero-title-3': 'Везде, всегда к вашим услугам',
      'hero-button': 'Подробнее',
      // Sections
      'section-products': 'Продукция',
      'section-brands': 'Бренды',
      'section-blog': 'Блог',
      'section-gallery': 'Галерея',
      'section-new-products': 'Новая продукция',
      'section-more': 'Подробнее',
      // Products
      'product-ceramic': 'Керамика',
      'product-natural-stones': 'Природный камень',
      'product-construction-chemicals': 'Строительная химия',
      'product-accessories': 'Аксессуары',
      'product-pool': 'Бассейн',
      'product-plumbing': 'Сантехника',
      'product-insulation-materials': 'Материалы для изоляции',
      'product-joint-fillers': 'Затирки для швов',
      'product-adhesives': 'Клеи',
      'product-repair-mixtures': 'Ремонтные смеси',
      'product-travertine': 'Травертин',
      'product-marble': 'Мрамор',
      'product-granite': 'Гранит',
      'product-level-adjuster': 'Регулятор уровня',
      'product-hardware': 'Мелкая фурнитура',
      'product-keramogranite': 'Керамогранит',
      'product-tile': 'Плитка',
      'product-metlax': 'Метлах',
      'product-heyet-stone': 'Хейет камень',
      'product-facade-covering': 'Фасадное покрытие',
      'product-granite-piles': 'Гранитные плитки',
      // Pages
      'page-catalogs': 'Каталоги',
      'page-partners': 'Партнеры',
      'page-services': 'Услуги',
      'page-certificates': 'Сертификаты',
      'page-director-message': 'Обращение директора',
      'page-brands': 'Бренды',
      'page-career': 'Карьера',
      'page-employees': 'Сотрудники',
      'page-vacancies': 'Вакансии',
      'page-all': 'Все',
      // Quote
      'get-quote': 'Получить предложение',
      'get-quote-title': 'Нужно индивидуальное предложение?',
      'get-quote-subtitle': 'Получите предложение через WhatsApp одним кликом',
      // Products dropdown
      'product-construction-chemicals': 'Строительная химия',
      'product-insulation-materials': 'Материалы для изоляции',
      'product-joint-fillers': 'Затирки для швов',
      'product-adhesives': 'Клеи',
      'product-repair-mixtures': 'Ремонтные смеси',
      'product-natural-stones': 'Природный камень',
      'product-travertine': 'Травертин',
      'product-marble': 'Мрамор',
      'product-granite': 'Гранит',
      'product-accessories': 'Аксессуары',
      'product-level-adjuster': 'Регулятор уровня',
      'product-ceramic': 'Керамика',
      'product-pool': 'Бассейн',
      'product-plumbing': 'Сантехника',
      'product-hardware': 'Мелкие детали',
      'product-catalog': 'Каталог',
      // Info Cards
      'info-wide-range': 'Широкий спектр продукции',
      'info-wide-range-desc': 'С каждым годом мы расширяем наш портфель более широким ассортиментом услуг и продукции',
      'info-since-2019': 'С 2019 года',
      'info-since-2019-desc': 'С 2019 года мы непрерывно обслуживаем наших клиентов',
      'info-big-projects': 'Опыт в крупных проектах',
      'info-big-projects-desc': 'Безупречное и долгосрочное сотрудничество во многих проектах',
      // Footer Subscribe
      'footer-subscribe-text': 'Подпишитесь, чтобы быть в курсе кампаний Azdizayn',
      // Pages
      'page-services-title': 'Услуги',
      // Career
      'career-driver': 'Водитель (с грузовым автомобилем)',
      'career-presenter': 'Презентатор',
      'career-sales-specialist': 'Специалист по корпоративным продажам',
      'career-location-baku': 'Баку',
      'career-location-azerbaijan': 'Азербайджан',
      'career-more-details': 'ПОДРОБНЕЕ',
      // Services
      'service-filtration': 'Услуга фильтрации и декорации',
      'service-concrete': 'Услуга бетонных и буровых работ',
      'service-pool': 'Услуга строительства всех типов бассейнов',
      'service-interior': 'Услуга дизайна интерьера',
      'service-master': 'Услуга мастера',
      // Employees page
      'page-employees-title': 'Сотрудники',
      'employee-filter-all': 'Все',
      'employee-filter-marketing': 'Маркетинг',
      'employee-filter-management': 'РУКОВОДСТВО',
      'employee-filter-finance': 'Финансовый отдел',
      'employee-filter-audit': 'Отдел внутреннего контроля',
      'employee-filter-sales': 'Отдел продаж',
      'employee-filter-procurement': 'Специалист по закупкам',
      'employee-filter-master': 'Мастер',
      'employee-position-director': 'Директор',
      'employee-position-deputy-director': 'Заместитель директора',
      'employee-position-marketing-manager': 'Руководитель маркетинга',
      'employee-position-sales-manager': 'Менеджер по продажам',
      'employee-position-finance-director': 'Директор финансового отдела',
      'employee-position-audit-manager': 'Менеджер отдела внутреннего контроля',
      'employee-position-smm': 'SMM',
      'employee-position-finance-specialist': 'Финансовый специалист',
      'employee-position-sales-specialist': 'Специалист по продажам',
      'employee-position-procurement-specialist': 'Специалист по закупкам',
      'employee-position-driver': 'Водитель',
      'employee-position-master': 'Мастер',
      // About page
      'page-about-title': 'О нас',
      'about-section-title': 'О нас',
      'about-mission-title': 'Наша миссия',
      'about-vision-title': 'Видение',
      'about-text': 'ООО "AZDIZAYN GROUP" работает в Азербайджане с 2019 года как импортер и оптовый продавец. Наша компания быстро заняла свое место на рынках страны качественной продукцией и стала надежным местом для своих клиентов. Сегодня, как и в предыдущие годы, мы продолжаем обслуживать наших клиентов с большим удовольствием и высокой точностью. Основные направления нашей компании включают импорт, оптовую и розничную продажу сантехники, мелочей, плитки-метлакс и керамических изделий, строительной химии, продукции для бассейнов, натурального и травертинового камня, банных принадлежностей и аксессуаров.',
      'about-mission-text': 'Наша миссия - обеспечить наших клиентов высококачественной плиткой-метлакс и керамическими изделиями, удовлетворить их эстетические функциональные потребности и украсить жилые пространства. Наша цель - обеспечить удовлетворенность клиентов и всегда поддерживать высокие ожидания наших клиентов благодаря нашему широкому ассортименту продукции. В то же время мы всегда думаем о чистоте окружающей среды и выполняем нашу ответственность перед обществом и природой. Наше отличие - качество нашей продукции, разумные цены и предложение очень разнообразной продукции.',
      'about-vision-text': 'Наш будущий план - стать современной группой компаний, создающей ценность для социально-экономического и устойчивого развития Азербайджанской Республики и завоевавшей доверие в нашей стране и регионе. Наш приоритет - занять лидирующую позицию в секторе и установить долгосрочные отношения с клиентами, взяв за принципы инновации, качество и внимание к клиентам.',
      // Contact page
      'page-contact-title': 'Свяжитесь с нами',
      'contact-hotline': 'Горячая линия',
      'contact-write-us': 'Напишите нам',
      'contact-address': 'Адрес',
      'contact-phone': 'Телефоны',
      'contact-social-media': 'Аккаунты в социальных сетях',
      'contact-form-title': 'Форма обратной связи',
      'contact-form-name': 'Ваше имя',
      'contact-form-phone': 'Ваш номер телефона',
      'contact-form-email': 'Ваш адрес электронной почты',
      'contact-form-message': 'Ваше сообщение',
      'contact-form-submit': 'Отправить',
      'contact-form-success': 'Ваше сообщение отправлено! Мы свяжемся с вами в ближайшее время.',
      'contact-form-error': 'Пожалуйста, заполните все обязательные поля.',
      // Mobile menu
      'mobile-menu-home': 'Главная',
      'mobile-menu-news': 'Новости'
    }
  };

  // Current language
  let currentLang = 'az';

  // Reads language code from localStorage
  function getStoredLanguage() {
    const stored = localStorage.getItem('azdizayn-language');
    return stored || 'az';
  }

  // Writes language code to localStorage
  function setStoredLanguage(lang) {
    localStorage.setItem('azdizayn-language', lang);
  }

  // Reads language code from URL
  function getLanguageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || getStoredLanguage();
  }

  // Translation function
  function translate(key, lang) {
    return translations[lang] && translations[lang][key]
      ? translations[lang][key]
      : translations['az'][key] || key;
  }

  // Translates texts on the page
  function translatePage(lang) {
    currentLang = lang;
    setStoredLanguage(lang);

    // Translate elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach((element) => {
      const key = element.getAttribute('data-translate');
      const translation = translate(key, lang);
      
      if (element.tagName === 'INPUT' && element.type === 'text' || element.type === 'email') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update language dropdown
    updateLanguageDropdown(lang);
  }

  // Updates language dropdown
  function updateLanguageDropdown(lang) {
    const langDropdowns = document.querySelectorAll('.language-dropdown');
    const langData = {
      az: { img: 'aze.png', text: 'AZ', path: './assets/img/language/' },
      en: { img: 'united-kingdom.png', text: 'EN', path: './assets/img/language/' },
      ru: { img: 'rus.png', text: 'RU', path: './assets/img/language/' }
    };

    // Path fix - pages use ../assets
    const isPage = window.location.pathname.includes('/pages/') || window.location.pathname.endsWith('.html');
    const basePath = isPage ? '../assets/img/language/' : './assets/img/language/';
    
    langData.az.path = basePath;
    langData.en.path = basePath;
    langData.ru.path = basePath;

    langDropdowns.forEach((dropdown) => {
      const btn = dropdown.querySelector('.language-dropbtn');
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      
      if (!btn || !dropdownContent) return;

      // Active language data
      const activeLang = langData[lang] || langData.az;
      
      // Update button - keep only flag and text
      const btnIcon = btn.querySelector('i');
      
      // Clear button content and recreate
      btn.innerHTML = '';
      
      // Add image
      const img = document.createElement('img');
      img.src = activeLang.path + activeLang.img;
      img.alt = activeLang.text;
      btn.appendChild(img);
      
      // Add text
      const textNode = document.createTextNode(' ' + activeLang.text);
      btn.appendChild(textNode);
      
      // Add icon (if exists)
      if (btnIcon) {
        btn.appendChild(btnIcon);
      } else {
        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-angle-down';
        btn.appendChild(icon);
      }

      // Clear dropdown content
      dropdownContent.innerHTML = '';

      // Add other languages to dropdown
      Object.keys(langData).forEach((key) => {
        if (key !== lang) {
          const langItem = langData[key];
          const link = document.createElement('a');
          link.href = '#';
          link.setAttribute('data-lang', key); // Add data attribute for easier identification
          link.innerHTML = `
            <img src="${langItem.path}${langItem.img}" alt="${langItem.text}" />
            ${langItem.text}
          `;
          dropdownContent.appendChild(link);
        }
      });
    });
  }

  // Language change
  function changeLanguage(lang) {
    translatePage(lang);
    
    // Add (or change) lang parameter to URL
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);
  }

  // Add event listener to language links
  function initLanguageSwitcher() {
    // Remove any existing listener to avoid duplicates
    if (window._languageSwitcherHandler) {
      document.removeEventListener('click', window._languageSwitcherHandler);
    }
    
    // Dropdown links - use event delegation
    window._languageSwitcherHandler = function(e) {
      // Check if clicked element is a link or inside a link
      const link = e.target.closest('.language-dropdown a');
      if (link) {
        e.preventDefault();
        e.stopPropagation();
        
        // First try to get language from data-lang attribute (most reliable)
        let lang = link.getAttribute('data-lang');
        
        // If no data-lang, extract from text or image alt
        if (!lang || !['az', 'en', 'ru'].includes(lang)) {
          lang = 'az';
          const linkText = link.textContent.trim().toUpperCase();
          const img = link.querySelector('img');
          const imgAlt = img ? img.alt.toUpperCase() : '';
          
          // Check text content or image alt
          if (linkText.includes('EN') || imgAlt.includes('EN') || imgAlt.includes('İNGİLİS')) {
            lang = 'en';
          } else if (linkText.includes('RU') || imgAlt.includes('RU') || imgAlt.includes('RUS')) {
            lang = 'ru';
          } else if (linkText.includes('AZ') || imgAlt.includes('AZ') || imgAlt.includes('AZƏRBAYCAN')) {
            lang = 'az';
          }
        }
        
        if (typeof Logger !== 'undefined') {
          Logger.debug('Language switch clicked', { selectedLang: lang, link: link });
        } else {
          console.log('Language switch clicked', { selectedLang: lang, link: link });
        }
        
        changeLanguage(lang);
      }
    };
    
    document.addEventListener('click', window._languageSwitcherHandler);
  }

  // On page load
  function initTranslations() {
    const lang = getLanguageFromURL();
    translatePage(lang);
    initLanguageSwitcher();
  }

  // Initialize immediately if DOM is ready, otherwise wait for DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTranslations);
  } else {
    // DOM is already loaded
    initTranslations();
  }

  // Global function - for use from other scripts
  window.Translator = {
    translate: translate,
    changeLanguage: changeLanguage,
    getCurrentLanguage: () => currentLang
  };
})();

