function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!\n");
}

makeSandwich("ham", "cheese", "lettuce");
makeSandwich("turkey", "bacon", "avocado", "tomato");
makeSandwich("peanut butter", "jelly");
