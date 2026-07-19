const http = require("http");
const fs = require("fs");
const filecontent = fs.readFileSync("java10.html");


const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(filecontent)

});
server.listen(80, "localhost", () => {
    console.log("Server is running on http://localhost:80");
});