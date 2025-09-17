const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.previous-btn');

const slides = [...document.querySelectorAll('li')];
const dots = [...document.querySelectorAll('.dot')];
const dotsContainer = document.querySelector('.dots-container');

let currentActiveIndex;
let intervalId;

nextBtn.addEventListener('click', () => {
  for (const slide of slides) {
    if (slide.classList.contains('active-slide')) {
      const slideIndex = slides.indexOf(slide);
      loopAndKill();
      if (!slides[slideIndex + 1]) {
        currentActiveIndex = 0;
        selectIndex();
        break;
      }
      currentActiveIndex = slideIndex + 1;
      selectIndex();
      break;
    }
  }
});

prevBtn.addEventListener('click', () => {
  for (const slide of slides) {
    if (slide.classList.contains('active-slide')) {
      const slideIndex = slides.indexOf(slide);
      loopAndKill();
      if (!slides[slideIndex - 1]) {
        currentActiveIndex = slides.length - 1;
        selectIndex();
        break;
      }
      currentActiveIndex = slideIndex - 1;
      selectIndex();
      break;
    }
  }
});

dotsContainer.addEventListener('click', handleDotsClick);

function handleDotsClick(e) {
  if (
    e.target.classList.contains('dot') &&
    !e.target.classList.contains('active-dot')
  ) {
    loopAndKill();
    currentActiveIndex = dots.indexOf(e.target);
    selectIndex();
  }
}

intervalId = setInterval(() => {
  loopEachSecond();
}, 1000);

function restartSlideshow() {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    loopEachSecond();
  }, 5000);
}

function loopEachSecond() {
  for (const slide of slides) {
    if (slide.classList.contains('active-slide')) {
      const slideIndex = slides.indexOf(slide);
      loopAndKill();
      if (!slides[slideIndex + 1]) {
        currentActiveIndex = 0;
        selectIndex();
        break;
      }
      currentActiveIndex = slideIndex + 1;
      selectIndex();
      break;
    }
  }
}

//Helper Function

function selectIndex() {
  slides[currentActiveIndex].classList.add('active-slide');
  dots[currentActiveIndex].classList.add('active-dot');
  restartSlideshow();
}

function loopAndKill() {
  slides.forEach((slide) => {
    if (slide.classList.contains('active-slide'))
      slide.classList.remove('active-slide');
  });
  dots.forEach((dot) => {
    if (dot.classList.contains('active-dot'))
      dot.classList.remove('active-dot');
  });
}
