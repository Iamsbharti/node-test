const fs = require("fs");

let fileReader = fs.readFileSync("test.c");
console.log("Reading file sync");
console.log(fileReader);
