const fs = require("fs");

let fileReader = fs.readFileSync("test.c");
console.log("Reading file sync-buffer");
console.log(fileReader);

let fileReaderEncoded = fs.readFileSync("test.c", "utf-8");
console.log("Reading file sync-encoded");
console.log(fileReaderEncoded);
