const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.previous-btn');

const slides = [...document.querySelectorAll('li')];
const dots = [...document.querySelectorAll('.dot')];
const dotsContainer = document.querySelector('.dots-container');

let currentActiveIndex = 0;
let intervalId;

//Init
function initializeSlider() {
  nextSlide();
}

intervalId = setInterval(() => {
  initializeSlider();
}, 1000);

//Event Listeners

dotsContainer.addEventListener('click', handleDotsClick);
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

//Event Hanlder Functions

function nextSlide() {
  for (const slide of slides) {
    if (slide.classList.contains('active-slide')) {
      if (currentActiveIndex >= slides.length - 1) {
        currentActiveIndex = 0;
        showSlide();
        break;
      }
      currentActiveIndex++;
      showSlide();
      break;
    }
  }
}

function prevSlide() {
  for (const slide of slides) {
    if (slide.classList.contains('active-slide')) {
      if (currentActiveIndex === 0) {
        currentActiveIndex = slides.length - 1;
        showSlide();
        break;
      }
      currentActiveIndex--;
      showSlide();
      break;
    }
  }
}

function handleDotsClick(e) {
  if (
    e.target.classList.contains('dot') &&
    !e.target.classList.contains('active-dot')
  ) {
    currentActiveIndex = dots.indexOf(e.target);
    showSlide();
  }
}

//Helper Functions

function restartSlideshow() {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    initializeSlider();
  }, 5000);
}

function showSlide() {
  removeActiveSlide();
  slides[currentActiveIndex].classList.add('active-slide');
  dots[currentActiveIndex].classList.add('active-dot');
  restartSlideshow();
}

function removeActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active-slide');
  });
  dots.forEach((dot) => {
    dot.classList.remove('active-dot');
  });
}
