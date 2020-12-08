import fetchservice from '../services/fetch-service';
import overlay from './overlay';

const contactOverlay = () => 
{
    const body = document.querySelector('.body');

    const modal = document.createElement('div');
    modal.classList.add('contact-overlay');
    modal.innerHTML = `

        <div class="contact-overlay__close">
            <img src="assets/img/icons/exit-icon.svg" alt="exit icon" class="contact-overlay__close-img">
        </div>

        <div class="contact-overlay__content">

            <div class="contact-overlay__header">Become an Exhibitor</div>
            <div class="contact-overlay__text">
                Please fill and submit your company information. 
                We will contact you shortly to discuss your participation details.
            </div>

            <form action="#" class="form-overlay">
                <input required placeholder="Company name" name="companyName" type="text" 
                maxlength="30" class="form-overlay__input">

                <input required placeholder="Contact person" name="contactPerson" type="text" 
                maxlength="30" class="form-overlay__input">

                <input required placeholder="E-mail" name="email" type="email" class="form-overlay__input">

                <input required placeholder="Mobile" name="Phone" type="text" 
                maxlength="20" class="form-overlay__input">

                <button class="form-overlay__button">Submit</button>
            </form>
        </div>
    `;
    document.documentElement.style.overflow = 'hidden';
    body.append(modal);
    

    
    function close ()
    {
        const contactOverlayClose = document.querySelector('.contact-overlay__close');
        contactOverlayClose.addEventListener("click", () =>
        {
            document.documentElement.style.overflow = 'auto';
            modal.remove();
        });
    }
    close();

    function sendForm()
    {
        const formOverlay = document.querySelector('.form-overlay');
        formOverlay.addEventListener("submit", (e) => {
            e.preventDefault();
    
            const formData = new FormData(formOverlay);
    
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            }); 
    
            fetchservice('php/send-mail.php', formDataObject)
            .then(response => {
                if (response === true) 
                {
                    modal.remove();
        
                    setTimeout(() => {
                        formOverlay.reset();
                    }, 2000);
                    overlay();
                }
            });
        });
    }
    sendForm();
};
export default contactOverlay;