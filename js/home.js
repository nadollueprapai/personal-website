const date = new Date();

const taglines = [
    "I am a high school student.",
    "I can speak English.",
    "I am always seeking to be content.",
    "I can build websites.",
    "Why don't we work together?",
    "Looking for something?",
    "Thanks for stopping by :).",
    "Take your time.",
    "No rush.",
    "Cast away your worries.",
    "Bored? Check out the Fun Stuff section.",
    `${date.toDateString()} might be a good day...`,
];

const taglineA = document.getElementById("tagline-a");
const taglineB = document.getElementById("tagline-b");

let currentTaglineIndex = 0;
let showingA = true;

setInterval(
    () => {
        // Randomize a tagline index without repeating the same tagline.
        let nextIndex;

        do {
            nextIndex = Math.floor(Math.random() * taglines.length);
        } while (nextIndex === currentTaglineIndex);

        currentTaglineIndex = nextIndex;

        // Determine the currently visible and hidden taglines.
        showingA = taglineA.classList.contains("active");
        const visible = showingA ? taglineA : taglineB;
        const hidden = showingA ? taglineB : taglineA;

        // Change the text content of the currently hidden tagline.
        hidden.textContent = taglines[currentTaglineIndex];

        // Hide the currently visible tagline.
        visible.classList.remove("active");

        // Wait split-second.
        setTimeout(
            () => {
                // Show the currently hidden tagline.
                hidden.classList.add("active");
            },
            250,
        )

    },
    5000,
);