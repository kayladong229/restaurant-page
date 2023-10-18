const content = document.getElementById('content');

export const contactLoad = () => {
    const contactInfo = document.createElement('div');
    content.appendChild(contactInfo);

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Info';
    contactInfo.appendChild(heading);

    const phoneHeading = document.createElement('h2');
    phoneHeading.textContent = "Call us at 123-456-7890 to place an order!";
    contactInfo.appendChild(phoneHeading);
}