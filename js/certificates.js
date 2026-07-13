const certificateData = [
    {
        title: "CS50 Introduction to Programming with Python",
        issuer: "David J. Malan, Harvard University",
        date: "2026",
        image: "assets/certificates/CS50P.jpg"
    },
    {
        title: "'Best Speaker' for Economic and Social Council",
        issuer: "Anthony Giles, Conference Director, ISB Model United Nations",
        date: "2025",
        image: "assets/certificates/isbmun-best-speaker.jpg"
    },
];

const modal = document.getElementById("certificate-modal");
const modalImage = document.getElementById("modal-image");

function openModal(image, title) {
    modalImage.src = image;
    modalImage.alt = title;

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

const container = document.getElementById("certificate-list");

certificateData.forEach(certificate => {

    const card = document.createElement("article");

    card.className = "certificate";

    card.innerHTML = `
        <img src="${certificate.image}" alt="${certificate.title}">

        <div>
            <h2>${certificate.title}</h2>
            <p>${certificate.issuer}</p>
            <p>${certificate.date}</p>
        </div>
    `;

    card.addEventListener("click", () => {
        openModal(certificate.image, certificate.title);
    });

    container.appendChild(card);

});

