function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`${magician} the Great`);
    }
    return great_magicians;
}

let magicians: string[] = ["Merlin", "Gandalf", "Harry Houdini", "David Copperfield"];

let great_magicians: string[] = make_great(magicians);

show_magicians(great_magicians);
