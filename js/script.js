import { SlideNav } from "./slide.js";
const slide = new SlideNav('.slide', 'div.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');