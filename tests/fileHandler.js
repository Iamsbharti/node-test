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
console.log("Read Directory sync");
let dirReaderSync = fs.readdirSync("../tests");
console.log("dir", dirReaderSync);

/**Read Directory async */
console.log("Read Directory Async");
fs.readdir("../tests", (error, dir) => {
  if (error) {
    console.log("Error reading directory", error.message);
  } else {
    console.log("Direcory", dir);
    console.log("Directory Read ops done");
  }
});
console.log(Math.random());

/**Write to file sync */
console.log("Write to file sync");
let contentSync = "Hi there --keep going you can do it,you will have to do it";
fs.writeFileSync("testFileWrite.txt", contentSync);
console.log("Writing file finished");

/**write to file async */
console.log("Write to file async");
let contentAsync = "I have overwritten the file contents";
fs.writeFile("testFileWrite.txt", contentAsync, () => {
  console.log("File async write done");
});
console.log("OPs", Math.random() * 1000);
