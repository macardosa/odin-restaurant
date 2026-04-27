import beefDishImage from "./assets/images/beef-dish.jpg";

export function renderHomePage() {
    const content = document.querySelector("#content");
    content.replaceChildren(); // clear content
    content.className = ''; // clear previous classes

    const h1 = document.createElement("h1");
    h1.textContent = "Flame & Flavor Grill";
    content.appendChild(h1);

    const image = document.createElement("img");
    image.src = beefDishImage;
    image.classList.add("hero-image");
    content.appendChild(image);

    const para1 = document.createElement("p");
    para1.textContent = `
At Flame & Flavor Grill, we believe great food starts with fire. Our chefs bring together premium cuts of meat, bold marinades, and expert grilling techniques to create dishes that are smoky, juicy, and unforgettable.
`;
    content.appendChild(para1);

    const para2 = document.createElement("p");
    para2.textContent = `
Whether you're here for a quick bite or a full dining experience, every plate is crafted with care and served with passion.
`;
    content.appendChild(para2);
}