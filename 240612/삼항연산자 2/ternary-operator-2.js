const fs = require('fs');
let input = fs.readFileSync(0).toString();

let a = Number(input);

console.log( a == 1 ? 't' : 'f')