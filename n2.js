// Module: n2.js
const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
text = text.replace("This is dele.txt file", "This is n2.js file");
fs.writeFileSync("dele.txt", text);                         
console.log(text);
