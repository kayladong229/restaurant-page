const content = document.getElementById('content');

export const homepageLoad = () => {
    const headline = document.createElement('h1');
    headline.textContent = `Ming's Dumplings`;

    const image = document.createElement('img');
    image.style.height = '250px';
    image.style.width = '400px';
    image.setAttribute('src', 'https://i.pinimg.com/originals/bc/aa/a9/bcaaa95462e6f6f8d911d5d628a2907c.jpg')
    image.setAttribute('alt', 'dumplings');

    const info = document.createElement('p');
    info.textContent = `For over 20 years, Ming's has provided an authentic taste of China.
    Whether you're craving chow mein or our popular soup dumplings, we have something
    for everyone to enjoy!`

    content.appendChild(headline);
    content.appendChild(image);
    content.appendChild(info);
}