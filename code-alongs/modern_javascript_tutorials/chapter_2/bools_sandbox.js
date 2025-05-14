// boolean & comparisons
console.log(true, false, "true", "false");

// methods can return booleans
let email = 'example@example.com';
let names = ['Sierra-117', 'Noble-6', 'Arby'];

// let emails = email.includes('!');
//let result = names.includes('Wort Wort Wort');
//console.log(result);

// comparison operators
let age = 25;
let name = 'gandalf';
console.log(age == 25); // true
console.log(age != 25); // false
console.log(age == 30); // false
console.log(age != 30); // true
console.log(age > 20); // true
console.log(age < 20); // false
console.log(age >= 20); // true
console.log(age <= 20); // false

// loose comparison
console.log(age == '25'); // true
console.log(age != '25'); // false

// strict comparison
console.log(age === 25); // true
console.log(age === '25'); // false
console.log(age !== 25); // false
console.log(age !== '25'); // true

console.log(name == 'gandalf'); // true
console.log(name == 'Gandalf'); // false

// Earlier letters in the alphabet are greater than letters further on. 
console.log(name > 'frodo'); // true

// lower-case letters are considered GREATER than upper-case letters.
console.log(name > 'Gandalf'); // true

// Despite techically coming before g, seeing as it's a capital in this instance...
// The lower-case name is deemed greater than 'Frodo'.
console.log(name > 'Frodo'); // true
