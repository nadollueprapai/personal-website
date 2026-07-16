import { rngData } from "./data/rngData.js";

// Key used to store the game in localStorage.
const STORAGE_KEY = "rngGame";

// Maximum number of rolls allowed.
const MAX_ROLLS = 10;

// Load the saved game or create a new one if none exists.
const game = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {
    rolls: 0,
    inventory: {}
};

// Cache the DOM elements used by the game.
const rollButton = document.getElementById("roll-button");
let onCooldown = false;
const resetButton = document.getElementById("reset-button");
const rollResult = document.getElementById("roll-result");
const inventoryList = document.getElementById("inventory-list");

// Save the current game state to localStorage.
function saveGame() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(game)
    );
}

// Convert a display name such as "Royal Blue" into the CSS color "royalblue".
function toCssColor(name) {
    return name.replace(/\s+/g, "").toLowerCase();
}

// Roll an item from rngData using the inverse chance system.
function rollItem() {

    // Find every item that successfully passes its chance.
    const successful = rngData.filter(item => {
        return Math.random() < (1 / item.chance);
    });

    // If nothing succeeds, return the most common item.
    if (successful.length === 0) {
        return rngData[0];
    }

    // Return the rarest successful item.
    return successful.reduce((rarest, current) =>
        current.chance > rarest.chance ? current : rarest
    );

}

// Update the roll button to reflect how many rolls remain.
function updateRollButton() {

    if (game.rolls >= MAX_ROLLS) {

        rollButton.disabled = true;
        rollButton.textContent = "Out of Rolls";

    } else {

        rollButton.disabled = onCooldown;
        rollButton.textContent = `Roll (${MAX_ROLLS - game.rolls} left)`;

    }

}

// Add an item to the player's inventory.
function addToInventory(item) {

    game.inventory[item.name] = (game.inventory[item.name] ?? 0) + 1;

    saveGame();
    renderInventory();

}

// Render the inventory onto the page.
function renderInventory() {

    // Clear the current inventory display.
    inventoryList.innerHTML = "";

    // Sort the inventory from most common to rarest.
    Object.entries(game.inventory)
        .sort(([nameA], [nameB]) => {

            const chanceA = rngData.find(item => item.name === nameA).chance;
            const chanceB = rngData.find(item => item.name === nameB).chance;

            return chanceA - chanceB;

        })
        .forEach(([name, amount]) => {

            // Look up the item's data.
            const item = rngData.find(item => item.name === name);

            // Create the inventory entry.
            const entry = document.createElement("p");

            // Display the item's name, rarity and quantity.
            entry.innerHTML = `
                <span class="item-name">${name}</span>

                <span class="item-info">
                    1/${item.chance} • ×${amount}
                </span>
            `;

            // Colour only the item name.
            entry.querySelector(".item-name").style.color = toCssColor(item.name);

            // Add the entry to the inventory.
            inventoryList.appendChild(entry);

        });

}

// Play the roll animation.
function animateRollResult() {

    // Remove the animation class so it can be replayed.
    rollResult.classList.remove("roll-animation");

    // Force a browser reflow.
    void rollResult.offsetWidth;

    // Replay the animation.
    rollResult.classList.add("roll-animation");

}

// Handle the roll button click.
rollButton.addEventListener("click", () => {

    // Stop if the player has used all of their rolls.
    if (game.rolls >= MAX_ROLLS) {
        return;
    }

    if (onCooldown) {
        return;
    }

    onCooldown = true;
    updateRollButton();

    // Roll a random item.
    const item = rollItem();

    // Display the rolled item.
    rollResult.textContent = item.name;
    rollResult.style.color = toCssColor(item.name);

    // Play the animation.
    animateRollResult();

    // Add the item to the inventory.
    addToInventory(item);

    // Count the roll.
    game.rolls++;

    // Save the updated game.
    saveGame();

    // Refresh the button text.
    updateRollButton();

    // Re-enable the button after one second if rolls remain.
    setTimeout(() => {

        onCooldown = false;
        updateRollButton();

    }, 1000);

});

// Handle resetting the game.
resetButton.addEventListener("click", () => {

    // Reset the game state.
    game.rolls = 0;
    game.inventory = {};

    // Save the now resetted game.
    saveGame();

    // Reset the result display.
    rollResult.textContent = "...";
    rollResult.style.color = "";

    // Refresh the UI.
    renderInventory();
    updateRollButton();

});

// Initialise the page.
renderInventory();
updateRollButton();