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

/* // conditional statements
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

// logical NOT (!)
let user = false;

if(!user){
   console.log('You must be logged in to continue'); 
}
console.log(!true); // false
console.log(!false); // true

// break and continue
const scores = [50, 25, 0, 30, 100, 20, 10];
for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue; // a continue effectivly skips the current itteration.
    }

    console.log('your score: ', scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break; // a break will cease the for-loop's conditional firing when explicitly met.
    }
} */

// switch statements
/* syntax: 
 *      switch(what we're evaluating){
 *      case 'comparative value' :
 *              output;
 *      case 'comparitive value' :
 *              output;
 *      default:
 *              output;
 * }
 */

const grade = 'D';
switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
}

// variables & block level scope
/*
 *  Terms:
 *  Scope:
 *  The area in which  a variable value is relevant.
 * 
 *  Globale Scope:
 *  A variable that is defined in the root of the document...
 *  whether using 'let' || 'const'.
 *  
 * NO-NO: Don't use keyword 'var' as it will utterly disregard the block scope.
 */
let age = 30; // Global Scope
// let age = 40; // Cannot redeclare using 'let' inside the root.

if(true){
    // We are able to redefine a variable inside the code block.
    // the defined local scope is accessible within it's respective code block.
    let age = 24 + " " + "Year's old.";
    let name = 'Alexander Supertramp' 
    console.log('inside first code block: ', age, name);

    if(true){
        let age = 50;
        console.log('inside 2nd code block: ', age);
    }
}

console.log('outside code block: ', age);