import smoothScroll from './modules/smooth-scroll';
import headerShadow from './modules/header';
import navMobile from './modules/nav-mobile';
import sliders from './modules/sliders';
import videoPlayer from './modules/video-player';
import galerySlider from './modules/galery-slider';
import sendForm from './modules/send-form';
require('fslightbox');

window.addEventListener("DOMContentLoaded", () =>
{
    "use strict";

    smoothScroll();
    headerShadow();
    navMobile();
    sliders('.accordeon__item', 4200,'','');
    videoPlayer();
    //galerySlider();
    sendForm();
});