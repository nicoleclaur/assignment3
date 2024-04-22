// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', displayThankYouMessage);

function displayThankYouMessage() {
    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = "Thank you for your message!";
    thankYouMessage.style.fontSize = "24px";

    const contactPageContent = document.getElementById('contact-page');
    contactPageContent.innerHTML = '';contactPageContent.style.display = 'flex';
    contactPageContent.style.flexDirection = 'row';
    contactPageContent.style.alignItems = 'flex-start'; 
    contactPageContent.appendChild(thankYouMessage);
}
