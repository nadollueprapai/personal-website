const taglines = [
    "I am a high school student.",
    "I can speak English.",
    "I am always seeking to be content.",
    "I can build websites."
];

const taglineElement = document.getElementById("tagline");

let currentTagline = 0;

if (taglineElement) {

    setInterval(() => {

        taglineElement.style.opacity = 0;

        setTimeout(() => {

            currentTagline++;

            if (currentTagline >= taglines.length) {
                currentTagline = 0;
            }

            taglineElement.textContent = taglines[currentTagline];

            taglineElement.style.opacity = 1;

        }, 300);

    }, 3000);

}