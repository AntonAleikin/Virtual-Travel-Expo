const sliders = (slides, speed, prev, next) =>
{
    const 
    items = document.querySelectorAll(slides); // Слайды из аргумента

    let slideIndex = 1; // Слайд, который показываем пользувателю


    // Ф-ция отвечает за перемещение слайдера внутри
    function showSlides (n)
    {
        if (n > items.length)
        {
            slideIndex = 1;
        }

        if (n < 1)
        {
            slideIndex = items.length;
        }


        // Скрываем все неактивные слайды
        items.forEach(slide => 
        {
            //slide.classlist.add('animated');
            slide.style.display = 'none';
        });

        // Показываем активный
        items[slideIndex - 1].style.display = 'block';
    }
    showSlides(slideIndex);


    // Ф-ция прокрутки слайдов. Вызываем кнопками или автоматически
    function changeSlides (n)
    {
        showSlides(slideIndex += n);
    }


    // Используем Try/catch, чтобы код не прекращал выполнятся, если нет кнопок
    try 
    {
        const
        prevBtn = document.querySelector(prev), // Кнопки
        nextBtn = document.querySelector(next);

        prevBtn.addEventListener("click", () =>
        {   
            changeSlides(-1); // Уменьшаем к-во слайдов на 1

            // У текущего элема меняем стили для создания анимации
            items[slideIndex - 1].classList.remove('animate__slideInLeft');
            items[slideIndex - 1].classList.add('animate__slideInRight');
        });

        nextBtn.addEventListener("click", () =>
        {
            changeSlides(1);
            items[slideIndex - 1].classList.remove('animate__slideInRight');
            items[slideIndex - 1].classList.add('animate__slideInLeft');
        });
    } 
    catch (error) {}


    // Автопрокрутка
    setInterval(() => 
    {
        if (window.scrollY == 0)
        {
            changeSlides(1);
            items[slideIndex - 1].classList.add('animate__slideInRight'); 
        }  
    }, speed);

};
export default sliders;