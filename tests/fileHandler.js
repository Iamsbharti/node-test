const fs = require("fs");

/**Read file in sync and provided buffer*/
let fileReader = fs.readFileSync("test.c");
console.log("Reading file sync-buffer");
//console.log(fileReader);

/**Read file in sync and provided actual content*/
let fileReaderEncoded = fs.readFileSync("test.c", "utf-8");
console.log("Reading file sync-encoded");
//console.log(fileReaderEncoded);

/**Read file  async (wrong implementation of async as sync method)
 * gives error cb not defined ERR_INVALID_CALLBACK
 */
/*
console.log("Reading File");
let fileReadAsyncError = fs.readFile("test.py");
console.log("Reading File finished");
console.log("File.", fileReadAsyncError);
*/
/**Read file  async correct implementation*/
console.log("read file async");
fs.readFile("test.py", "utf-8", (error, file) => {
  if (error) {
    console.log("Error in reading file async");
  } else {
    console.log("File Read Async", file);
    console.log("File reading done");
  }
});
console.log("Random ops", Math.random());

/**Read Directory sync */
let dirReaderSync = fs.readdirSync("../tests");
console.log("dir", dirReaderSync);
