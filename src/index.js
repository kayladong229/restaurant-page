import { homepageLoad } from './homepage.js';
import { menuLoad } from './menu.js';
import { contactLoad } from './contact.js'

const content = document.getElementById('content');
const homeLink = document.getElementById('home');
const menuLink = document.getElementById('menu');
const contactLink = document.getElementById('contact');

homepageLoad();

homeLink.addEventListener('click', () => {
    content.textContent = "";
    homepageLoad();
})

menuLink.addEventListener('click', () => {
    content.textContent = "";
    menuLoad();
})

contactLink.addEventListener('click', () => {
    content.textContent = "";
    contactLoad();
})