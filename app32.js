"use strict";
let current_users = ['John', 'Jane', 'Doe', 'Alice', 'Bob'];
let new_users = ['Mary', 'John', 'Alice', 'Mike', 'Sara'];
for (let new_user of new_users) {
    let usernameExists = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
    if (usernameExists) {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_user}' is available.`);
    }
}
