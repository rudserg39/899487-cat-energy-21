// Burger-button

const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
});


// Burger-menu

const navPanel = document.querySelector('.header__nav-panel');

burger.addEventListener('click', () => {
  if (navPanel.classList.contains('header__nav-panel_close')) {
    navPanel.classList.remove('header__nav-panel_close');
    navPanel.classList.add('header__nav-panel_open');
  } else {
    navPanel.classList.remove('header__nav-panel_open');
    navPanel.classList.add('header__nav-panel_close');
  }
});

// Slider

const slider = document.querySelector('.slider');
const sliderImage = slider.querySelector('.slider__img');
const beforeButton = slider.querySelector('.slider__before');
const afterButton = slider.querySelector('.slider__after');
const sliderToggle = slider.querySelector('.slider__toggle-mark');

beforeButton.addEventListener('click', () => {
  sliderImage.src = './img/slider-before-mobile@1x.png';
  sliderToggle.style.setProperty('left', '6px');
  sliderToggle.style.setProperty('transition-duration', '500ms');
});

afterButton.addEventListener('click', () => {
  sliderImage.src = './img/slider-after-mobile@1x.png';
  sliderToggle.style.setProperty('left', '44px');
  sliderToggle.style.setProperty('transition-duration', '500ms');
});