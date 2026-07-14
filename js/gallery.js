const galleryData = [
    {
        title: "CS50 Introduction to Programming with Python",
        issuer: "David J. Malan, Harvard University",
        date: "May 25 2026",
        image: "assets/certificates/CS50P.jpg",
    },
    {
        title: "'Best Speaker' for Economic and Social Council ISBMUN 2025",
        issuer: "Anthony Giles, Conference Director, ISB Model United Nations",
        date: "2025",
        image: "assets/certificates/isbmun-best-speaker.jpg",
    },
    {
        title: "'Honorable Mention' for Economic and Social Council IPSMUN 2025",
        issuer: "Maria Louise Pante Hizon, IPSMUN Advisor",
        date: "April 26 2025",
        image: "assets/certificates/ipsmun-ecosoc-honorable-mention.jpg",
    },
    {
        title: "Work Experience Weekend for Surgery & Medical Ethics",
        issuer: "Osama Al-Jibury",
        date: "May 29 2026",
        image: "assets/certificates/premed-projects-work-experience-weekend.jpg",
    },
    {
        title: "freeCodeCamp Python Certification",
        issuer: "Quincy Larson, Executive Director, freeCodeCamp.org",
        date: "May 1 2026",
        image: "assets/certificates/freecodecamp-python.png",
    },
];

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

