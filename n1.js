// Backend code to create a simple HTTP server that serves an HTML page with some CSS styling and pseudo-selectors. The server listens on localhost at port 3001. When accessed, it responds with an HTML document that includes a styled container with a heading, a paragraph, and two buttons (one of which is a link). The CSS includes styles for the container, links, and buttons, as well as hover, visited, and active states for the links.
// console.log("Hello World");
const http = require("http");
const hostname = "127.0.0.1";
const port = 3001;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pseudo selectors & more designing</title>
    <style>
        .container{
            border: 2px solid red;
            background-color: rgb(223, 245, 201);
            padding: 34px;
            margin: 34px auto;
            width: 666px;
        }
        a{
            text-decoration: none;
            color: black;
        }
        a:hover{
            color: rgb(5, 0, 0);
            background-color: rgb(221, 166, 38);
        }
        a:visited{
            background-color: yellow;
        }
        a:active{
            background-color:darkblue;
        }
        .btn{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: bold;
            background-color: crimson;
            padding:6px;
            border: none;
            cursor:pointer;
            font-size: 13px;
            border-radius: 4px;
        }
        .btn:hover{
            color:darkgoldenrod;
            background-color:rgb(223, 245, 201);
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <div class="container" id="cont1">
        <h3>This is my heading</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, reprehenderit. Quam culpa eius aliquam id cumque saepe, provident odio sed eos quia nihil modi error voluptate vero autem quibusdam aperiam exercitationem! Quam, consequuntur velit.</p>
        <a href="https://yahoo.com" class="btn">Read more</a>
        <button class="btn">Contact us</button>
    </div>
</body>
</html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});