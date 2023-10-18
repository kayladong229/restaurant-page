import { homepageLoad } from './homepage.js';
import { menuLoad } from './menu.js';

const content = document.getElementById('content');
const homeLink = document.getElementById('home');
const menuLink = document.getElementById('menu');

homepageLoad();

homeLink.addEventListener('click', () => {
    content.textContent = "";
    homepageLoad();
})

menuLink.addEventListener('click', () => {
    content.textContent = "";
    menuLoad();
})