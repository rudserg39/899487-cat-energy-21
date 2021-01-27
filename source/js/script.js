// Burger-button

var burger = document.querySelector(".burger");

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

var navPanel = document.querySelector(".header__nav-panel");

navPanel.classList.remove("header__nav-panel_open");
navPanel.classList.add("header__nav-panel_close");

var toggleNavPanel = () => {
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

var SLIDER_IMG_BEFORE_WIDTH = 677;
var SLIDER_IMG_AFTER_WIDTH = 545;
var SCALE_WIDTH = 396;

var slider = document.querySelector(".slider");

var sliderImgBefore = slider.querySelector(".slider__img_before");
var sliderImgAfter = slider.querySelector(".slider__img_after");

var scaleMark = slider.querySelector(".slider__scale-mark");
var sliderToggle = slider.querySelector(".slider__toggle-mark");

var scaleMarkLineBoorders = {
  LEFT: 0,
  RIGHT: 396
};

var widthDifference = (Math.abs((SLIDER_IMG_BEFORE_WIDTH - SLIDER_IMG_AFTER_WIDTH )) / SLIDER_IMG_AFTER_WIDTH ) * 100;

var scaleStep = 396 / 100;


scaleMark.addEventListener("mousedown", function (evt) {
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

    scaleMark.style.left = scaleMark.offsetLeft + shift.x + "px";

    if (scaleMark.offsetLeft < scaleMarkLineBoorders.LEFT) {
      scaleMark.style.left = scaleMarkLineBoorders.LEFT + "px";
    }

    if (scaleMark.offsetLeft > scaleMarkLineBoorders.RIGHT) {
      scaleMark.style.left = scaleMarkLineBoorders.RIGHT + "px";
    }

    sliderImgBefore.style.width = 100 - (scaleMark.offsetLeft / 100) / scaleStep * 100 + "%";
    sliderImgAfter.style.width = (scaleMark.offsetLeft / 100) / scaleStep * 100 - widthDifference + "%";
  };

  var mouseUpHandler = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  document.addEventListener("mousemove", mouseMoveHandler);
  document.addEventListener("mouseup", mouseUpHandler);
});
