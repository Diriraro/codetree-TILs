const fs = require("fs");
let a = fs.readFileSync(0).toString().split(' ');

let i = Number(a[0])
let j = Number(a[1])

console.log(j, i)