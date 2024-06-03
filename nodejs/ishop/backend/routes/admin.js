const { Router } = require('express');
const AdminController = require('../controller/admin.js');

const AdminRouter = Router();


AdminRouter.post(
    "/login",
    (req, res) => {
        const result = new AdminController().login(req.body);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error);
            }
        )
    }
)

module.exports = AdminRouter;