const taglines = [
    "I am a high school student.",
    "I can speak English.",
    "I am always seeking to be content.",
    "I can build websites.",
    "Why don't we work together?",
    "Looking for something?",
];

const taglineElement = document.getElementById("tagline");

let currentTagline = 0;

if (taglineElement) {

    function changeTagline() {

        taglineElement.style.opacity = 0;

        setTimeout(() => {

            currentTagline = (currentTagline + 1) % taglines.length;

            taglineElement.textContent = taglines[currentTagline];

            taglineElement.style.opacity = 1;

            setTimeout(changeTagline, 2700);

        }, 300);
    }

    setTimeout(changeTagline, 3000);
}