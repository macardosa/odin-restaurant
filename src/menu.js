import menuData from "./menu.json";

export function renderMenuPage() {
    const content = document.querySelector("#content");
    content.replaceChildren(); // clear content
    content.className = ''; // clear previous classes

    const h1 = document.createElement("h1");
    h1.textContent = "Our menu";
    content.appendChild(h1);

    // render the menu

    menuData.forEach(item => {
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("dish-container");

        const card = document.createElement("div");
        card.classList.add("dish");

        card.innerHTML = `
            <h3 class="name">${item.name}</h3>
            <p class="description">${item.description}</p>
            <p class="side">${item.side}</p>
        `;

        cardContainer.appendChild(card);

        const image = document.createElement("img");
        image.src = item.picture;
        image.alt = item.name;
        image.classList.add("picture");

        cardContainer.appendChild(image);

        content.appendChild(cardContainer);
    });
}