const http = require('http'); // package
const fs = require('fs');
// import http from "http";

const server = http.createServer(
    (req, res) => {
        let page = "<h1> 404 </h1>";
        if (req.url == "/") {
            page = fs.readFileSync("pages/index.html", "utf-8");
        } else if (req.url == "/about") {
            page = fs.readFileSync("pages/about.html", "utf-8");
        } else if (req.url == "/contact") {
            page = fs.readFileSync("pages/contact.html", "utf-8");
        } else if (req.url == "/gallery") {
            page = fs.readFileSync("pages/gallery.html", "utf-8");
        }
        res.end(page);
    }
)
// PORT = 5000;
server.listen(5000, () => { console.log("Server started") });