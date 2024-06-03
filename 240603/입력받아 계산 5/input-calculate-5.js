const fs = require("fs");
let a = fs.readFileSync(0).toString().split(' ');

let sum = Number(a[0]) + Number(a[1]);

console.log(sum)