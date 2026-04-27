import facebookIcon from "./assets/icons/facebook.svg";
import instagramIcon from "./assets/icons/instagram.svg";
import tiktokIcon from "./assets/icons/tiktok.svg";

export function renderContactPage() {
    const content = document.querySelector("#content");
    content.replaceChildren(); // clear content
    content.className = ''; // clear previous classes

    const contactUs = document.createElement("div");
    contactUs.classList.add("contact-header");
    contactUs.innerHTML = `
            <h1>Contact Us</h1>
            <p> Have a question, craving something specific, or planning a visit? <br> We'd love to hear from you.<p>`;
    content.appendChild(contactUs);

    const openingHours = document.createElement("div");
    openingHours.classList.add("contact-card");
    openingHours.innerHTML = `
        <div class="contact-wrapper">
            <p class="contact-heading">Opening Hours</p>
            <p class="contact-info">
                <strong>Monday - Thursday</strong>: 12:00 - 22:00
                <br>
                <strong>Friday - Saturday</strong>: 12:00 - 01:00
                <br>
                <strong>Sunday</strong>: Closed
            </p>
        </div>
    `;
    content.appendChild(openingHours);

    const phone = document.createElement("div");
    phone.classList.add("contact-card");
    phone.innerHTML = `
        <div class="contact-wrapper">
            <p class="contact-heading">Phone</p>
            <a href="tel:+3221234567">+32 2 123 45 67</a>
        </div>
    `;
    content.appendChild(phone);

    const email = document.createElement("div");
    email.classList.add("contact-card");
    email.innerHTML = `
        <div class="contact-wrapper">
            <p class="contact-heading">E-mail</p>
            <a href="mailto:info@primecuts.be">info@primecuts.be</a>
        </div>
    `;
    content.appendChild(email);

    const socialMedia = document.createElement("div");
    socialMedia.classList.add("contact-card");
    socialMedia.innerHTML = `
        <div class="contact-wrapper">
            <p class="contact-heading">Follow Us in Social Media</p>
            <div class="icons">
                <img src="${facebookIcon}">
                <img src="${instagramIcon}">
                <img src="${tiktokIcon}">
            </div>
        </div>
    `;
    content.appendChild(socialMedia);

    content.classList.add("white-bg");
}