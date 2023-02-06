import Slide from "./slide.js";
const slide = new Slide('.slide', 'div.slide-wrapper');
slide.init();
slide.changeSlide(3);
console.log(slide);