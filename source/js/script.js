// Burger-button

const burger = document.querySelector(".burger");

burger.classList.remove("burger_invisible");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger_active");
});

burger.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 13) {
    burger.classList.toggle("burger_active");
  }
});

// Burger-menu

const navPanel = document.querySelector(".header__nav-panel");

navPanel.classList.remove("header__nav-panel_open");
navPanel.classList.add("header__nav-panel_close");

cons = toggleNavPanel = () => {
  if (navPanel.classList.contains("header__nav-panel_close")) {
    navPanel.classList.remove("header__nav-panel_close");
    navPanel.classList.add("header__nav-panel_open");
    
  } else {
    navPanel.classList.remove("header__nav-panel_open");
    navPanel.classList.add("header__nav-panel_close");
  }
};

burger.addEventListener("click", () => {
  toggleNavPanel();
});

burger.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 13) {
    toggleNavPanel();
  }
});


// Slider

const slider = document.querySelector(".slider");
// const sliderImage = slider.querySelector(".slider__img");
// const beforeButton = slider.querySelector(".slider__before");
// const afterButton = slider.querySelector(".slider__after");
// const sliderToggle = slider.querySelector(".slider__toggle-mark");

// beforeButton.addEventListener("click", () => {
//   sliderImage.src = "./img/slider-before-mobile@1x.png";
//   sliderImage.srcset = "./img/slider-before-mobile@2x.png 2x";
//   sliderToggle.style.setProperty("left", "6px");
//   sliderToggle.style.setProperty("transition-duration", "500ms");
// });

// afterButton.addEventListener("click", () => {
//   sliderImage.src = "./img/slider-after-mobile@1x.png";
//   sliderImage.srcset = "./img/slider-after-mobile@2x.png 2x";
//   sliderToggle.style.setProperty("left", "44px");
//   sliderToggle.style.setProperty("transition-duration", "500ms");
// });


const SLIDER_IMG_BEFORE_WIDTH = 677;
const SLIDER_IMG_AFTER_WIDTH = 545;
const SCALE_WIDTH = 396;

const sliderImgBefore = slider.querySelector(".slider__img_before");
const sliderImgAfter = slider.querySelector(".slider__img_after");
const scaleMark = slider.querySelector(".slider__scale-mark");

const scaleMarkLineBoorders = {
  LEFT: 0,
  RIGHT: 396
};


const widthDifference = (Math.abs((SLIDER_IMG_BEFORE_WIDTH - SLIDER_IMG_AFTER_WIDTH )) / SLIDER_IMG_AFTER_WIDTH ) * 100;

const scaleStep = 396 / 100;


scaleMark.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX
  };

  var mouseMoveHandler = function (moveEvt) {
    moveEvt.preventDefault();

    var shift = {
      x: moveEvt.clientX - startCoords.x
    };

    startCoords = {
      x: moveEvt.clientX
    };


    scaleMark.style.left = scaleMark.offsetLeft + shift.x + 'px';

    
    if (scaleMark.offsetLeft < scaleMarkLineBoorders.LEFT) {
      scaleMark.style.left = scaleMarkLineBoorders.LEFT + 'px';
    }

    if (scaleMark.offsetLeft > scaleMarkLineBoorders.RIGHT) {
      scaleMark.style.left = scaleMarkLineBoorders.RIGHT + 'px';
    }

    sliderImgAfter.style.width = (scaleMark.offsetLeft / 100 - widthDifference) / scaleStep * 100 + '%';
    sliderImgBefore.style.width = 100 - (scaleMark.offsetLeft / 100) / scaleStep * 100 + '%';
  };

  var mouseUpHandler = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
});
