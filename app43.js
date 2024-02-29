"use strict";
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push("The Great " + magician);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ["Merlin", "Gandalf", "Harry Houdini"];
// Create a copy of the original array
let greatMagicians = make_great([...magicians]);
// Display the original magicians
console.log("Original Magicians:");
show_magicians(magicians);
// Display the great magicians
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
