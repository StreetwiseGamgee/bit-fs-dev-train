// for-loops:

// Syntax: "for(initialization variable; condtion; final expression) {}"

/* The initial variable acts as a baseline value, 
 * The conditional checks to see if the value exceeds what's defined
 * The final expression is what's carried out while the conditional remains untriggered. */
/* for(let i = 0; i < 5; i++) {
    console.log('in loop:', i);
}

console.log('loop finished'); */

// Displaying an array through a for loop.
const names = ['tony hawk', 'bam margera', 'alec ross'];

// Displays the const's numerics which are tied too the array values.
/* for( let i = 0; i < names.length; i++){
    console.log(i);
} */

// Displays the const's string values within the array.
/* for( let i = 0; i < names.length; i++){
    console.log(names[i]);
} */

// Creates an html template for each name.
for( let i = 0; i < names.length; i++){
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}




