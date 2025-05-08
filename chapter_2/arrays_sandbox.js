let legends = ['Master Chief', 'Arbiter', 'Noble 6'];

// legends[1] = 'Sgt Johnson';
// console.log(legends[1]);

// let ages = [20, 25, 30, 25];
// console.log(ages[2]);

// let random = ['wort wort wort', 'pozole', 'GREETINGS', 117, 343];
// console.log(random);

// console.log(legends.length);

// array methods
// let result = legends.join(', ');
// let result = legends.indexOf('Arbiter');
// let result = legends.concat(['Emile-239', 'Jorge-052']); // ADDS VALUES
let result = legends.push('Sgt Johnson'); // Returns the length of the new array.
result = legends.pop(); // Takes off the end value.
console.log(result);