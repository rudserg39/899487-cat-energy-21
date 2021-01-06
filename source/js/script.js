const slider = document.querySelector('.slider');
const sliderImage = slider.querySelector('.slider__img');
const beforeButton = slider.querySelector('.slider__before');
const afterButton = slider.querySelector('.slider__after');
const sliderToggle = slider.querySelector('.slider__toggle-mark');

beforeButton.addEventListener('click', function () {
  sliderImage.src = './img/slider-img-before-mobile.png';
  sliderToggle.style.setProperty('left', '6px');
  sliderToggle.style.setProperty('transition-duration', '500ms');
});

afterButton.addEventListener('click', function () {
  sliderImage.src = './img/slider-img-after-mobile.png';
  sliderToggle.style.setProperty('left', '44px');
  sliderToggle.style.setProperty('transition-duration', '500ms');
});
