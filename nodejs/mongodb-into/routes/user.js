const express = require('express');
const UserController = require('../controllers/user');
const UserRouter = express.Router();

//const d =  new Date()
UserRouter.post(
    "/create",
    (req, res) => {
        const uc = new UserController();
        const result = uc.create(req.body);
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

UserRouter.get(
    "/:id?",
    (req, res) => {
        const result = new UserController().read(req.params.id);
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

UserRouter.delete(
    "/delete/:id",
    async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (user != null) {
                User.deleteOne({ _id: req.params.id })
                    .then(
                        (success) => {
                            res.send(
                                {
                                    msg: "Data deleted",
                                    status: 1
                                }
                            )
                        }
                    )
                    .catch(
                        (err) => {
                            res.send(
                                {
                                    msg: "Unable to deleted the data",
                                    status: 0
                                }
                            )
                        }
                    )
            } else {
                res.send(
                    {
                        msg: "User not found",
                        status: 0
                    }
                )
            }
        } catch (error) {
            res.send(
                {
                    status: 0,
                    msg: "Internal server error"
                }
            )
        }
    }
)

UserRouter.patch(
    "/change-status/:id/:new_status",
    (req, res) => {
        try {
            User.updateOne({ _id: req.params.id }, { status: req.params.new_status })
                .then(
                    (success) => {
                        res.send(
                            {
                                msg: "Status changed successfully",
                                status: 1
                            }
                        )
                    }
                )
                .catch(
                    (err) => {
                        res.send(
                            {
                                msg: "Unable to change the status",
                                status: 0
                            }
                        )
                    }
                )
        } catch (error) {
            res.send(
                {
                    status: 0,
                    msg: "Internal server error"
                }
            )
        }

    }
)

UserRouter.patch(
    "/edit/:id",
    (req, res) => {
        try {
            User.updateOne({ _id: req.params.id }, req.body)
                .then(
                    (success) => {
                        res.send(
                            {
                                msg: "Data updated",
                                status: 1
                            }
                        )
                    }
                )
                .catch(
                    (err) => {
                        res.send(
                            {
                                msg: "Unable to update the data",
                                status: 0
                            }
                        )
                    }
                )
        } catch (error) {
            res.send(
                {
                    status: 0,
                    msg: "Internal server error"
                }
            )
        }
    }
)


module.exports = UserRouter;