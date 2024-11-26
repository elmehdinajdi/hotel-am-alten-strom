// Hauptdatei für JavaScript-Funktionalitäten
document.addEventListener('DOMContentLoaded', () => {
    // Hier kommt der JavaScript-Code
    console.log('Website geladen');
    
    // Language translations
    const translations = {
        de: {
            'hotel': 'Hotel',
            'angebote': 'Angebote',
            'wellness': 'Wellness',
            'restaurants': 'Restaurants',
            'tagungen': 'Tagungen',
            'ausfluge': 'Ausflüge',
            'buchen': 'Jetzt buchen',
            'hero-title': 'Hotel Am alten Strom',
            'hero-subtitle': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'
        },
        en: {
            'hotel': 'Hotel',
            'angebote': 'Offers',
            'wellness': 'Wellness',
            'restaurants': 'Restaurants',
            'tagungen': 'Meetings',
            'ausfluge': 'Excursions',
            'buchen': 'Book now',
            'hero-title': 'Hotel Am alten Strom',
            'hero-subtitle': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        }
    };

    // Current language
    let currentLang = 'de';

    // Function to change language
    function changeLanguage(lang) {
        currentLang = lang;
        
        // Update all elements with data-lang attribute
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Initialize language
    changeLanguage('de');

    // Sprachauswahl Funktionalität
    const languageLinks = document.querySelectorAll('.language-select a');
    
    languageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Aktive Klasse von allen Links entfernen
            languageLinks.forEach(l => l.classList.remove('active'));
            
            // Aktive Klasse zum geklickten Link hinzufügen
            link.classList.add('active');
            
            // Hier könnte später die eigentliche Sprachänderung implementiert werden
            const language = link.textContent;
            console.log(`Sprache geändert zu: ${language}`);
            
            // Update language
            if (language === 'DE') {
                changeLanguage('de');
            } else if (language === 'EN') {
                changeLanguage('en');
            }
        });
    });

    // Hero Slider Functionality
    const slides = document.querySelectorAll('.slide');
    const slideNumber = document.querySelector('.slide-number');
    const slideTotal = document.querySelector('.slide-total');
    let currentSlide = 0;
    const slideCount = slides.length;

    // Initialize slider
    function initSlider() {
        // Set total number of slides
        slideTotal.textContent = String(slideCount).padStart(2, '0');
        // Show first slide
        showSlide(0);
        // Start automatic slideshow
        setInterval(nextSlide, 5000);
    }

    // Show specific slide
    function showSlide(n) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Reset slide number if we've reached the end or beginning
        currentSlide = n;
        if (currentSlide >= slideCount) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slideCount - 1;
        }
        
        // Add active class to current slide
        slides[currentSlide].classList.add('active');
        // Update slide number
        slideNumber.textContent = String(currentSlide + 1).padStart(2, '0');
    }

    // Next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Initialize slider
    initSlider();

    // Slide show functionality for hero section
    let heroCurrentSlide = 1;
    const heroTotalSlides = 4;

    function updateHeroSlideNumbers() {
        document.querySelectorAll('.slide-numbers div').forEach((div, index) => {
            if (index + 1 === heroCurrentSlide) {
                div.classList.add('active');
            } else {
                div.classList.remove('active');
            }
        });
    }

    function nextHeroSlide() {
        heroCurrentSlide = heroCurrentSlide === heroTotalSlides ? 1 : heroCurrentSlide + 1;
        updateHeroSlideNumbers();
        // Add logic to change hero background image
    }

    // Auto advance slides every 5 seconds
    setInterval(nextHeroSlide, 5000);

    // Initialize slide numbers
    updateHeroSlideNumbers();
});
