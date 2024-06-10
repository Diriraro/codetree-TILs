const fs = require("fs");
let input = fs.readFileSync(0).toString();

input = input.split('\n')

console.log(input[0] * input[1])