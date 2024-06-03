const express = require('express');
const BlogRouter = express.Router();

BlogRouter.get("/blog/:id?");
BlogRouter.post("/blog/create");
BlogRouter.delete("/blog/delete/:id");
BlogRouter.patch("/blog/change-status/:id/:status");
BlogRouter.patch("/blog/edit/:id/");

module.exports = BlogRouter;