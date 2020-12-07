import contactOverlay from './contact-overlay';

const smoothScroll = () => 
{
    function scroll (hash, speed)
    {
        try
        {
            let 
            windowTop = window.scrollY,
            toBlock = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
    
            const step = (time) =>
            {
                if (start === null)
                {
                    start = time;
                }
    
                let 
                progress = time - start,
                // Узнаем, в какую сторону листать
                r = (toBlock < 0 ? Math.max(windowTop - progress / speed, windowTop + toBlock) : 
                    Math.min(windowTop + progress / speed, windowTop + toBlock));
    
                window.scrollTo(0, r);
    
                if (r != windowTop + toBlock)
                {
                    requestAnimationFrame(step);
                }
                else
                {
                    location.hash = hash;
                }
            };
            requestAnimationFrame(step);
        }
        catch(error){}
    }

    if (window.matchMedia("(min-width: 768px)").matches)
    {
        const links = document.querySelectorAll('[href^="#"]');
    
        links.forEach(link =>
        {
            if(link.dataset.modal == 'form')
            {   
                link.addEventListener("click", function(e) 
                {
                    e.preventDefault();
                    
                    if(window.scrollY >= 2760)
                    {
                        this.hash = 'contact';
                        scroll(this.hash, 0.8);
                    }
                    else
                    {
                        contactOverlay(); 
                    }
                });
            }
            else
            {
                link.addEventListener("click", function(e) 
                {
                    e.preventDefault();
        
                    scroll(this.hash, 0.8);
                });
            }
        });
    }

    if (window.matchMedia("(max-width: 767px)").matches)
    {
        const 
        sectionLink = document.querySelector('.section-link__link'),
        contact = document.querySelector('[data-modal="form"]');

        sectionLink.addEventListener("click", function(e) 
        {
            e.preventDefault();
            scroll(this.hash, 0.8);
        });

        contact.href = '#contact';
    }
};
export default smoothScroll;