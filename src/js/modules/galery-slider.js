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

    if (window.matchMedia('(max-width: 790px)').matches)
    {
        swiperButtons.forEach(button =>
        {
            button.style.display = 'none';
        });
    }

    function removeBtn ()
    {
        if (window.matchMedia('(min-width: 768px)').matches)
        {
            swiperButtons.forEach(button =>
            {
                button.style.display = 'none';
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
                        button.style.display = 'block';
                    });
                });
    
                overlayClose.addEventListener("click", () =>
                {
                    swiperButtons.forEach(button =>
                    {
                        button.style.display = 'block';
                    });
                });
            },30);
        }
    }


    function setWidth ()
    {
        swiperWrapper.style.width = window.getComputedStyle(swiperSlideImg[0]).width;    
    }


    function defImgLoad ()
    {
        if ((window.scrollY >= galerySection.getBoundingClientRect().top - 150 ||
            galerySection.getBoundingClientRect().top == 0) &&
            swiperSlideImg[0].src != location.origin + '/' + swiperSlideImg[0].dataset.src)
        {
            galerySection.classList.add('galery-section-bg');

            swiperSlideImg.forEach(img => 
            {
                if (img.src != location.origin + '/' + img.dataset.src)
                {
                    img.src = location.origin + '/' + img.dataset.src;  
                    
                    img.addEventListener("click", () =>
                    {
                        removeBtn();
                    });
                }
            });

            swiperSlides.forEach(slide =>
            {
                slide.addEventListener("click", () =>
                {
                    removeBtn();
                });
            });

            setTimeout(() => 
            {
                setWidth();
            }, 250);
        }
    }

    window.addEventListener("DOMContentLoaded", () =>
    {
        window.addEventListener("scroll", defImgLoad);
    }); 
    
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