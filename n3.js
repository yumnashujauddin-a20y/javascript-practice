// synchronous or blocking
// -line by line execution
// -callback will fire

// Asynchronous or non-blocking
// -line by line execution will not wait for the task to complete
// -callback will fire when the task is completed
  
const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8", (err, data) => {
    console.log(text);
});
console.log("This is a message");                                   