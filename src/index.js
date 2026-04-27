import "./styles.css";
import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import { renderContactPage } from "./contact.js";

renderHomePage();

document.querySelector('.home-btn')
    .addEventListener('click', (e) => {
        renderHomePage();
    });

document.querySelector('.menu-btn')
    .addEventListener('click', (e) => {
        renderMenuPage();
    });

document.querySelector('.contact-btn')
    .addEventListener('click', (e) => {
        renderContactPage();
    });