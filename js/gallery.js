import { galleryData } from "./data/galleryData.js";

// Prepare the modal elements for the viewport.
const modal = document.querySelector("#gallery-modal");
const modalImage = modal.querySelector("#modal-image");
const modalTitle = modal.querySelector("#modal-title");
const modalIssuer = modal.querySelector("#modal-issuer");

function openModal(image, title, issuer) {
    modalImage.src = image;
    modalImage.alt = title;
    
    modalTitle.textContent = title;
    modalIssuer.textContent = issuer;

    modal.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
}

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Populate the gallery with items from galleryData.
const container = document.getElementById("gallery-list");

galleryData.forEach(item => {

    const card = document.createElement("article");

    card.className = "gallery-item";

    card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">

        <div>
            <h2>${item.title}</h2>
            <p class="gallery-item-issuer">${item.issuer}</p>
            <p>${item.date}</p>
        </div>
    `;

    card.addEventListener("click", () => {
        openModal(item.image, item.title, item.issuer);
    });

    container.appendChild(card);

});

