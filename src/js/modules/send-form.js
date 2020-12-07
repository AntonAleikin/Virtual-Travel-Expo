import fetchservice from '../services/fetch-service';
import overlay from './overlay';

const sendForm = () => 
{
    const form = document.querySelector('.form');

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        }); 

        fetchservice('php/send-mail.php', formDataObject)
        .then(response => {
            if (response === true) {
                setTimeout(() => {
                    form.reset();
                }, 2000);
                overlay();
            }
        });
    });  
};
export default sendForm;