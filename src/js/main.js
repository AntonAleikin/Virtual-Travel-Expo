import smoothScroll from './modules/smooth-scroll';
import headerShadow from './modules/header';
import navMobile from './modules/nav-mobile';
import sliders from './modules/sliders';
import galerySlider from './modules/galery-slider';
require('fslightbox');

window.addEventListener("DOMContentLoaded", () =>
{
    "use strict";

    smoothScroll();
    headerShadow();
    navMobile();
    sliders('.accordeon__item','','','');
    galerySlider();
});