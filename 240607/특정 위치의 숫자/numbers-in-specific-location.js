const fs = require("fs");
let n = fs.readFileSync(0).toString();

n = n.split(' ');

let answer = 0;

for (let i = 0; i<n.length; i++) {
    if (i == 2 || i == 4 || i == 9)
    answer = (answer + Number(n[i]));
}

console.log(answer);