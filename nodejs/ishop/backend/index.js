const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const CategoryRouter = require('./routes/category');
const ColorRouter = require('./routes/color');
const ProductRouter = require('./routes/product');
const UserRouter = require('./routes/user');
const OrderRouter = require('./routes/order');
const AdminRouter = require('./routes/admin');
const { adminAuth } = require('./middlewares/adminAuth');
const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/category", adminAuth, CategoryRouter);
app.use("/color", ColorRouter);
app.use("/product", ProductRouter);
app.use("/user", UserRouter);
app.use("/admin", AdminRouter);
app.use("/order", OrderRouter);


mongoose.connect(
    "mongodb://localhost:27017",
    {
        dbName: "ishop-wsjp07"
    }
).then(
    () => {
        console.log('db connected');
        app.listen(
            PORT,
            () => {
                console.log('server started');
            }
        )

    }
).catch(
    () => {
        console.log('Unable to connect the server');
    }
)