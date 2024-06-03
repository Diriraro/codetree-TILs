const fs = require("fs");
let a = fs.readFileSync(0).toString().split(' ');

let i = a[0]
let j = a[1]

console.log(`${j} ${i}`)