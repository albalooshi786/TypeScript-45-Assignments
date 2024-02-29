"use strict";
let array = [1, 2, 3];
console.log(array[3]); // Accessing index 3, which is out of bounds (valid indices are 0, 1, 2)
array[3] = 4; // Trying to assign a value to index 3
console.log(array[3]); // This line will never be reached due to the error above
// Correcting the error
array[2] = 5; // Correcting the assignment to index 2
console.log(array[2]); // Output: 5
