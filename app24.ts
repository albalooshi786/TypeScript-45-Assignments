// Tests for equality and inequality with strings
let string1 = 'hello';
let string2 = 'world';

console.log("Is 'hello' equal to 'hello'? I predict True.");
console.log(string1 === 'hello');

console.log("Is 'hello' not equal to 'world'? I predict True.");
console.log(string1 !== string2);

// Tests using the lower case function
let uppercaseString = 'HELLO';
let lowercaseString = 'hello';

console.log("Is 'HELLO' equal to 'hello' after converting to lowercase? I predict True.");
console.log(uppercaseString.toLowerCase() === lowercaseString);

// Numerical tests
let number1 = 5;
let number2 = 10;

console.log("Is 5 less than 10? I predict True.");
console.log(number1 < number2);

console.log("Is 10 greater than or equal to 5? I predict True.");
console.log(number2 >= number1);

// Tests using "and" and "or" operators
let trueValue = true;
let falseValue = false;

console.log("Is true and false? I predict False.");
console.log(trueValue && falseValue);

console.log("Is true or false? I predict True.");
console.log(trueValue || falseValue);

// Test whether an item is in an array
let array = ['apple', 'banana', 'cherry'];

console.log("Is 'banana' in the array? I predict True.");
console.log(array.includes('banana'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the array? I predict True.");
console.log(!array.includes('grape'));
