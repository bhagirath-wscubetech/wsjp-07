const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer(
    (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        const parseUrl = url.parse(req.url, true);
        if (parseUrl.pathname == "/create-file" && req.method == "GET") {
            fs.writeFile(
                `data/${parseUrl.query.file_name}`, "",
                (err) => {
                    if (err) {
                        response = {
                            status: 0,
                            msg: "Internal server error"
                        }
                    } else {
                        response = {
                            status: 1,
                            msg: "File created successfully"
                        }
                    }
                    res.end(JSON.stringify(response));
                }
            )
        } else if (parseUrl.pathname == "/read-file" && req.method == "GET") {
            try {
                const data = fs.readFileSync(`data/${parseUrl.query.file_name}`, 'utf-8');
                response = {
                    entries: JSON.parse(data),
                    status: 1
                }
            } catch (err) {
                response = {
                    status: 0,
                    msg: "File not found"
                }
            }
            res.end(JSON.stringify(response));
        } else if (parseUrl.pathname == "/delete-file" && req.method == "DELETE") {
            try {
                fs.unlink(
                    `data/${[parseUrl.query.file_name]}`,
                    (err) => {
                        if (err) {
                            response = {
                                status: 0,
                                msg: "Unable to delete the file"
                            }
                        } else {
                            response = {
                                status: 1,
                                msg: "File deleted successfully"
                            }
                        }
                        res.end(JSON.stringify(response));
                    }
                );
            } catch (err) {
                response = {
                    status: 0,
                    msg: "Internal server error"
                }
                res.end(JSON.stringify(response));
            }
        } else if (parseUrl.pathname == "/add-blog" && req.method == "POST") {
            try {
                req.on(
                    "data",
                    (data) => {
                        const blogData = JSON.parse(data.toString());
                        const blogsJSON = fs.readFileSync("data/blog.json", "utf-8");
                        const blogs = JSON.parse(blogsJSON);
                        blogs.push(blogData);
                        fs.writeFile(
                            "data/blog.json",
                            JSON.stringify(blogs),
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
                                res.end(JSON.stringify(response));
                            }
                        )
                    }
                )
            } catch (err) {
                response = {
                    status: 0,
                    msg: "Internal server error"
                }
                res.end(JSON.stringify(response));
            }
        } else if (parseUrl.pathname == "/add-user" && req.method == "POST") {
            try {
                req.on(
                    "data",
                    (data) => {
                        const userData = JSON.parse(data.toString());
                        const usersJSON = fs.readFileSync("data/user.json", "utf-8");
                        const users = JSON.parse(usersJSON);
                        users.push(userData);
                        fs.writeFile(
                            "data/user.json",
                            JSON.stringify(users),
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
                                res.end(JSON.stringify(response));
                            }
                        )
                    }
                )
            } catch (err) {
                response = {
                    status: 0,
                    msg: "Internal server error"
                }
                res.end(JSON.stringify(response));
            }
        } else if (parseUrl.pathname == "/delete-user" && req.method == "DELETE") {
            const id = parseUrl.query.id;
            try {
                const userJson = fs.readFileSync("data/user.json", 'utf-8');
                const userData = JSON.parse(userJson);
                const newuserData = userData.filter(
                    (d) => {
                        if (d.id == id) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                )
                fs.writeFile(
                    "data/user.json",
                    JSON.stringify(newuserData),
                    (err) => {
                        if (err) {
                            response = {
                                status: 0,
                                msg: "Unable to delete the data"
                            }
                        } else {
                            response = {
                                status: 1,
                                msg: "Data deleted successfully"
                            }
                        }
                        res.end(JSON.stringify(response));
                    }
                )
            } catch (err) {
                console.log(err);
                response = {
                    status: 0,
                    msg: "Internal server error"
                }
                res.end(JSON.stringify(response));
            }
        } else if (parseUrl.pathname == "/delete-blog" && req.method == "DELETE") {
            const id = parseUrl.query.id;
            try {
                const blogJson = fs.readFileSync("data/blog.json", 'utf-8');
                const blogData = JSON.parse(blogJson);
                const newblogData = blogData.filter(
                    (d) => {
                        if (d.id == id) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                )
                fs.writeFile(
                    "data/blog.json",
                    JSON.stringify(newblogData),
                    (err) => {
                        if (err) {
                            response = {
                                status: 0,
                                msg: "Unable to delete the data"
                            }
                        } else {
                            response = {
                                status: 1,
                                msg: "Data deleted successfully"
                            }
                        }
                        res.end(JSON.stringify(response));
                    }
                )
            } catch (err) {
                console.log(err);
                response = {
                    status: 0,
                    msg: "Internal server error"
                }
                res.end(JSON.stringify(response));
            }
        } else if (parseUrl.pathname == "/update-user" && req.method == "PATCH") {
            const id = parseUrl.query.id;
            req.on(
                "data",
                (data) => {
                    const userData = JSON.parse(data.toString());
                    const userJSON = fs.readFileSync("data/user.json", "utf-8");
                    const users = JSON.parse(userJSON);
                    const newUsers = users.map(
                        (user) => {
                            if (user.id == id) {
                                return userData;
                                // object update
                            } else {
                                return user;
                                // same data
                            }
                        }
                    );
                    fs.writeFile(
                        "data/user.json",
                        JSON.stringify(newUsers),
                        (err) => {
                            if (err) {
                                response = {
                                    status: 0,
                                    msg: "Unable to update the data"
                                }
                            } else {
                                response = {
                                    status: 1,
                                    msg: "Data updated successfully"
                                }
                            }
                            res.end(JSON.stringify(response));
                        }
                    )

                }
            )
        } else {
            res.end("404");
        }
    }
)

server.listen(5000, () => console.log('Server started'));