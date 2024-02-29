function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push("The Great " + magician);
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians: string[] = ["Merlin", "Gandalf", "Harry Houdini"];

// Create a copy of the original array
let greatMagicians: string[] = make_great([...magicians]);

// Display the original magicians
console.log("Original Magicians:");
show_magicians(magicians);

// Display the great magicians
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
