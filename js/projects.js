import { projectsData } from "./data/projectsData.js";

const container = document.getElementById("projects-list");

projectsData.forEach(project => {
    // Create a new article card element for each project.
    const card = document.createElement("article");

    card.className = "project-item";

    card.innerHTML = `
        ${project.image
        ? `<img class="project-image" src="${project.image}" alt="${project.title}">`
        : ""}

        <div class="project-content">
            <h2>${project.title}</h2>

            <p class="project-description">
                ${project.description}
            </p>

            ${project.date
                ? `<p class="project-date">${project.date}</p>`
                : ""}

            ${project.resource
                ? `
                <a
                    class="project-resource"
                    href="${project.resource}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ${project.resourceText ?? "View Project"} →
                </a>
                `
                : ""}
        </div>
    `;

    // Append the card to the container.
    container.appendChild(card);
});