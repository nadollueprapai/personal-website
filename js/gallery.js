import { galleryData } from "./data/galleryData.js";

// Prepare the modal elements for the viewport.
const modal = document.querySelector("#gallery-modal");
const modalImage = modal.querySelector("#modal-image");
const modalTitle = modal.querySelector("#modal-title");
const modalIssuer = modal.querySelector("#modal-issuer");

const container = document.getElementById("gallery-list");

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

// Populate the gallery with items from the galleryData array.
galleryData.forEach(item => {
    const card = document.createElement("article");

    card.className = "gallery-item";

    card.innerHTML = `
        ${item.image
            ? `<img src="${item.image}" alt="${item.title}">`
            : `<h4> Image To Be Added </h4>`}

        <div>
            <h2>${item.title}</h2>

            ${item.issuer
                ? `<p class="gallery-item-issuer">${item.issuer}</p>`
                : ""}

            ${item.date
                ? `<p>${item.date}</p>`
                : ""}
        </div>
    `;

    // Add a click event.
    card.addEventListener("click", () => {
        openModal(item.image, item.title, item.issuer);
    });

    container.appendChild(card);
});

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