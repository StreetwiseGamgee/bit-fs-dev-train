alert('Hello, User');

// strings
console.log('hello, chat.')

let emailDebug = 'example@example.com';
console.log(emailDebug);

// string concatination
let firstName = 'Crispy';
let lastName = 'McChicken';

let fullName = firstName+ ' ' + lastName;
console.log(fullName);

// getting characters
// Square-bracket-notation allows us to pull a singluar value.
console.log(fullName[2]); // Java is a zero-based lang.

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result, fullName);

let index = emailDebug.indexOf('@'); 
// When passing a value into a method, it is considered an argument.
console.log(index);

// common string methods.
let email = 'recursivlyNull@example.com';

// let result = email.lastIndexOf('i');

/* slice */
// Args: where we want to slice from, and where we're going until.
let resultSliced = email.slice(10, 15);

/* substr */
// Args: where we want to start, and how many characters we want therafter.
let resultSubbed = email.substr(10, 15);

/* replace */
// Args: What string value we want to replace, and what we're replacing it with.
let resultReplaced = email.replace('Null', 'Numb');

console.log(resultSliced, resultSubbed, resultReplaced);
