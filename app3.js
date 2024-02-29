"use strict";
let personName = '';
personName = prompt('What is your name?') || '';
let lowercase = personName.toLocaleLowerCase();
let uppercase = personName.toLocaleUpperCase();
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()).join(' ');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, Here are your name in: 
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    TitleCase: ${titlecase}`);
}
else {
    alert('Please fill your name !');
}
