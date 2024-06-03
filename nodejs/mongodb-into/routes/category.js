const express = require('express');
const CategoryRouter = express.Router();

CategoryRouter.get("/category/:id?");
CategoryRouter.post("/category/create");
CategoryRouter.delete("/category/delete/:id");
CategoryRouter.patch("/category/change-status/:id/:status");
CategoryRouter.patch("/category/edit/:id/");

module.exports = CategoryRouter;