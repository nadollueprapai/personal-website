class Rarity {
    constructor(name, chance) {
        this.name = name;
        this.chance = chance
    }
}

export const rngData = [
    new Rarity("Red", 2),
    new Rarity("Tomato", 20),
    new Rarity("Indian Red", 200),
    new Rarity("Maroon", 2000),
    new Rarity("Crimson", 20000),

    new Rarity("Green", 4),
    new Rarity("Forest Green", 40),
    new Rarity("Dark Green", 400),
    new Rarity("Olive", 4000),
    new Rarity("Sea Green", 40000),

    new Rarity("Blue", 8),
    new Rarity("Navy", 80),
    new Rarity("Powder Blue", 800),
    new Rarity("Royal Blue", 8000),
    new Rarity("Midnight Blue", 80000),

    new Rarity("Yellow", 16),
    new Rarity("Gold", 160),
    new Rarity("Khaki", 1600),
    new Rarity("Beige", 16000),
    new Rarity("Ivory", 160000),

    new Rarity("Purple", 32),
    new Rarity("Indigo", 320),
    new Rarity("Violet", 3200),
    new Rarity("Plum", 32000),
    new Rarity("Medium Orchid", 320000),

    new Rarity("Orange", 64),
    new Rarity("Coral", 640),
    new Rarity("Dark Orange", 6400),
    new Rarity("Chocolate", 64000),
    new Rarity("Sienna", 640000),

    new Rarity("Cyan", 128),
    new Rarity("Turquoise", 1280),
    new Rarity("Sky Blue", 12800),
    new Rarity("Light Sea Green", 128000),
    new Rarity("Dark Cyan", 1280000),

    new Rarity("Magenta", 256),
    new Rarity("Fuchsia", 2560),
    new Rarity("Hot Pink", 25600),
    new Rarity("Deep Pink", 256000),
    new Rarity("Medium Violet Red", 2560000),

    // Standalone "special" colors
    new Rarity("Lime", 345),
    new Rarity("Pink", 34),
    new Rarity("Teal", 2135),
    new Rarity("Lavender", 673),
    new Rarity("Salmon", 89),
    new Rarity("Silver", 6045),
    new Rarity("Tan", 32768),
    new Rarity("Thistle", 65536),
    new Rarity("Wheat", 131072),
    new Rarity("Mint Cream", 3421),
];