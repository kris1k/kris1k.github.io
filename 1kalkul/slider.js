const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const indicators = document.querySelectorAll('.indicators div');

let currentIndex = 0;
const totalSlides = slideImages.length;
const slideWidth = slideImages[0].clientWidth;


// Функция для перехода к следующему слайду
function goToSlide(index) {
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
    currentIndex = index;
    updateIndicators();
}

// Функция для обновления индикаторов
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Событие на кнопки
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    goToSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    goToSlide(currentIndex);
});

// Событие на индикаторы
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Автоматическая прокрутка
setInterval(() => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    goToSlide(currentIndex);
}, 3000); // Прокрутка каждые 3 секунды