const express = require('express');
const cors = require('cors');
const { readFileSync, writeFile } = require('fs');
const app = express();
const PORT = 5000;


var whitelist = ["http://localhost:3000", "https://www.wscubetech.com"]
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(express.static("public"));
app.use(express.json());
app.use(cors(corsOptions));

app.get(
    "/",
    (req, res) => {
        const page = readFileSync("pages/index.html", 'utf-8');
        res.send(page);
    }
)
app.get(
    "/about",
    (req, res) => {
        const page = readFileSync("pages/about.html", 'utf-8');
        res.send(page);
    }
)
app.get(
    "/contact",
    (req, res) => {
        const page = readFileSync("pages/contact.html", 'utf-8');
        res.send(page);
    }
)

app.get(
    "/gallery",
    (req, res) => {
        const page = readFileSync("pages/gallery.html", 'utf-8');
        res.send(page);
    }
)
// blogs apis
app.post(
    "/blog/add-blog",
    (req, res) => {
        const data = req.body;
        try {
            const blogData = JSON.parse(readFileSync("data/blog.json", "utf-8"));
            blogData.push(data);
            writeFile(
                "data/blog.json",
                JSON.stringify(blogData),
                (err) => {
                    if (err) {
                        response = {
                            status: 0,
                            msg: "Unable to add data"
                        }
                    } else {
                        response = {
                            status: 1,
                            msg: "Data added successfully"
                        }
                    }
                    res.send(response);
                }
            )
        } catch (err) {
            response = {
                status: 0,
                msg: "Internal server error"
            }
            res.send(response);
        }
    }
)

app.delete(
    "/blog/delete-blog/:id/:status?",
    (req, res) => {
        const id = req.params.id;
        console.log(id);
        console.log(req.params);
        res.send("Hello");
    }
)



app.listen(
    PORT, () => console.log('Server started')
)