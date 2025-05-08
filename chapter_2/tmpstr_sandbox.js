// template strings
const title = 'How-To: Be a Silly Cat';
const author = 'Lieutenant Hams'
const likes = 30;

// concatination way
// let result = 'The Blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// template string way
// USES BACKTICKS IE THE KEY NEAR THE ESCAPE BUTTON ``
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`
console.log(html);