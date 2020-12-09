import Swiper from 'swiper';
import {Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const galerySlider = () =>
{
    const 
    galerySection = document.querySelector('.galery-section'),
    swiperWrapper = document.querySelector('.swiper-wrapper'),
    swiperSlides = document.querySelectorAll('.swiper-slide'),
    swiperSlideImg = document.querySelectorAll('.swiper-slide__img'),
    swiperButtons = document.querySelectorAll('.swiper-button');


    function removeBtn ()
    {
        if (window.matchMedia('(min-width: 768px)').matches)
        {
            swiperButtons.forEach(button =>
            {
                button.style.display = 'none';
                document.documentElement.style.overflow = 'hidden';
            });
    
            setTimeout(() => 
            {
                const 
                overlay = document.querySelector('.fslightbox-absoluted'),
                overlayClose = document.querySelector('[title="Close"]');
    
                overlay.addEventListener("click", () =>
                {
                    swiperButtons.forEach(button =>
                    {
                        document.documentElement.style.overflow = 'auto';
                        button.style.display = 'block';
                    });
                });
    
                overlayClose.addEventListener("click", () =>
                {
                    swiperButtons.forEach(button =>
                    {
                        document.documentElement.style.overflow = 'auto';
                        button.style.display = 'block';
                    });
                });
            },30);
        }
    }


    // Убираем кнопки для тачскринов
    if (window.matchMedia('(max-width: 790px)').matches)
    {
        swiperButtons.forEach(button =>
        {
            button.style.display = 'none';
        });
    }

    // Убираем кнопки после клика на бока для десктопов
    swiperSlides.forEach(slide =>
    {
        slide.addEventListener("click", () =>
        {
            removeBtn();
        });
    });

    // Убираем кнопки после клика для десктопов
    swiperSlideImg.forEach(img => 
    {
        img.addEventListener("click", () =>
        {
            removeBtn();
        });
    });
    

    function setWidth ()
    {
        swiperWrapper.style.width = window.getComputedStyle(swiperSlideImg[0]).width;    
    }

    function defImgLoad ()
    {
        if (swiperSlideImg[0].getBoundingClientRect().top < (window.innerHeight + window.scrollY) &&
            swiperSlideImg[0].classList.contains('lazy-load') && 
            !galerySection.classList.contains('galery-section-bg'))
        {
            galerySection.classList.add('galery-section-bg');

            swiperSlideImg.forEach(img => 
            {
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
            });

            setTimeout(() => 
            {
                setWidth();
            }, 300);
            
            window.removeEventListener("scroll", defImgLoad);
        }
    }

    // Вызываем отложенную загрузку изображений
    window.addEventListener("DOMContentLoaded", () =>
    {
        window.addEventListener("scroll", defImgLoad);
    }); 


    // Вызываем отложенную загрузку изображений для моб устройств
    if (window.matchMedia("(max-width: 767px)").matches)
    {
        const galeryLink = document.querySelector('[href="#stands"]');
        galeryLink.addEventListener("click", () =>
        {
            defImgLoad();
        });
    }
    

    const mySwiper = new Swiper('.swiper-container', 
    {    
        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};
export default galerySlider();