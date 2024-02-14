'use strict';

$(function () {
  $('.hmb-btn').on('click', function () {
    $(this).toggleClass('open');
    $('.navi').stop().fadeToggle(500);
  });
});

/*hamburger.addEventListener('click', () => {
  document.querySelector('.hmb-btn').src = "image/hmb-1.png";
});

hamburger.addEventListener('click', () => {

  if (nav.classList.contains('header__nav-active')){
      document.querySelector('.yourAnotherImg').src = "image/hmb-2.png";
  }else{
      document.querySelector('.yourBrandLogoImg').src = "image/hmb-2.png";
}});*/

const btn = document.querySelector('.hmb-btn');
const burger = document.querySelector('.burger');

btn.addEventListener('click', function () {
  this.classList.toggle('active');

  if (this.classList.contains('active')) {
    burger.src = 'image/hmb-bitten.png';
  } else {
    burger.src = 'image/hmb-1.png';
  }
});
