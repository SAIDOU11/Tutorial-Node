const { readFileSync, writeFileSync } = require("fs");
console.log("Start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync("./content/third.txt", `Here is the third text file`);

console.log("done with this task.");
console.log("Starting the next one.");
