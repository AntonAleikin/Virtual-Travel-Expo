export default function overlay () {

    const body = document.querySelector('.body');

    const modal = document.createElement('div');
    modal.classList.add('overlay');
    modal.innerHTML = `

        <div class="overlay-content">

            <div class="overlay-header">Thank you for your interest!</div>

            <div class="overlay-text">
                Our manager will contact you shortly. 
                Please check your email, including the spam box.
            </div>

            <button class="overlay-button">OK</button>
        </div>
    `;
    document.documentElement.style.overflow = 'hidden';
    body.append(modal);

    const closeButton = document.querySelector('.overlay-button');
    closeButton.addEventListener("click", (e) => {
        e.preventDefault();

        document.documentElement.style.overflow = 'auto';
        modal.remove();
    });
}