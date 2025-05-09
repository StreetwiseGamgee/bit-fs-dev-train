// for-loops:
// Syntax: "for(initialization variable; condtion; final expression) {}"

/* 
 * The initial variable acts as a baseline value, 
 * The conditional checks to see if the value exceeds what's defined
 * The final expression is what's carried out while the conditional remains untriggered. 
 */

/* for(let i = 0; i < 5; i++) {
    console.log('in loop:', i);
}
console.log('loop finished'); */

// Displaying an array through a for loop.
// const names = ['tony hawk', 'bam margera', 'alec ross'];

// Displays the const's numerics which are tied too the array values.
/* for( let i = 0; i < names.length; i++){
    console.log(i);
} */

// Displays the const's string values within the array.
/* for( let i = 0; i < names.length; i++){
    console.log(names[i]);
} */

// Creates an html template for each name.
/* for( let i = 0; i < names.length; i++){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
} */

// while loops
// Syntax: "while(conditional) {}"

/* let i = 0; // HAVE-TO: Declare ini-var prior to the loop.
while (i < 5){
    console.log('in loop: ', i);
    i++;
} */

// Cycles through names
/* while(i < names.length){
    console.log(names[i]);
    i++;
} */

// do-while loops
/* Syntax:
 * do {
     exec-code
 * } while(condition);
 */

/* let i = 3;
do{
    console.log('Value of i is: ', i);
    i++;
} while(i < 5); */

// conditional statements
const powerLevel = 10000;
if(powerLevel > 9000){
    console.log('The scouter indicates their power level IS OVER 9000!!!');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
if(ninjas.length > 4){ // Will NOT fire as it's not greater than four.
    console.log("That's alot of ninjas");
}

const password = 'user@';
if(password.length >= 12 && password.includes('@')){ // logical operator: &&.
    console.log('MEETS_STRONG_INTEGRITY');
} else if(password.length >= 8 || password.includes('@') && password.length > 5){ // logical operator: ||
    console.log('MEETS_BASIC_INTEGRITY');
} else {
    console.log("FAILED_PASSWORD_INTEGRITY");
}


