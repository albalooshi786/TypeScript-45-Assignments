"use strict";
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}
let magicians = ["Merlin", "Gandalf", "Harry Houdini", "David Copperfield"];
let great_magicians = make_great(magicians);
show_magicians(great_magicians);
