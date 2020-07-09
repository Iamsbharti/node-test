const fs = require("fs");

/**Read file in sync and provided buffer*/
let fileReader = fs.readFileSync("test.c");
console.log("Reading file sync-buffer");
console.log(fileReader);

/**Read file in sync and provided actual content*/
let fileReaderEncoded = fs.readFileSync("test.c", "utf-8");
console.log("Reading file sync-encoded");
console.log(fileReaderEncoded);

/**Read file  async (wrong implementation of async as sync method)
 * gives error cb not defined ERR_INVALID_CALLBACK
 */
console.log("Reading File");
let fileReadAsyncError = fs.readFile("test.py");
console.log("Reading File finished");
console.log("File.", fileReadAsyncError);

/**Read file  async correct implementation*/
console.log("read file async");
