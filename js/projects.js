import { projectsData } from "./data/projectsData.js";

const container = document.getElementById("projects-list");

projectsData.forEach(project => {
    // Create a new article card element for each project.
    const card = document.createElement("article");

    card.className = "project-item";

    card.innerHTML = `
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
                    ${project.linkText ?? "View Project"} →
                </a>
                `
                : ""}
        </div>
    `;
    
    // Append the card to the container.
    container.appendChild(card);
});