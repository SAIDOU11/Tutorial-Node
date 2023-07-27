const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
const third = readFileSync("./content/result-sync.txt", "utf-8");

writeFileSync(
  "./content/result2.txt",
  `Here is the 3 sentences : 
  ${first}, 
  ${second}, 
  ${third}.`,
  { flag: "a" }
);
