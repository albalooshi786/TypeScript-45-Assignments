let personName : string = '';

personName = prompt('What is your name?') || '';

let lowercase :string = personName.toLocaleLowerCase();
let uppercase :string = personName.toLocaleUpperCase();
let titlecase :string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()).join(' ');

if(personName !== null && personName !==''){
    alert(`Hello ${personName}, Here are your name in: 
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    TitleCase: ${titlecase}`)
}
else{
    alert('Please fill your name !')
}
