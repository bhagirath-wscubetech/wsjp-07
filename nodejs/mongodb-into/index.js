const express = require('express');
const mongoose = require('mongoose');
const UserRouter = require('./routes/user');
const BlogRouter = require('./routes/blog');
const CategoryRouter = require('./routes/category');

const app = express();
app.use(express.json());


app.use("/user", UserRouter);
app.use('/blog', BlogRouter);
app.use("/category", CategoryRouter);

mongoose.connect(
    "mongodb+srv://wscubetech:_37gmmBkQd9gUy6@cluster0.yloxsax.mongodb.net/?retryWrites=true&w=majority",
    {
        dbName: "blogs"
    }
).then(
    (success) => {
        app.listen(5000, () => {
            console.log('App listening on port 5000!');
        });
    }
).catch(
    (err) => {
        console.log('Unable to connect database');
    }
)



