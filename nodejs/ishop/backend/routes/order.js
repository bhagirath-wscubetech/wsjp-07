const { Router } = require('express');
const OrderController = require('../controller/order');

const OrderRouter = Router();

OrderRouter.post(
    "/create-order",
    (req, res) => {
        const result = new OrderController().create(req.body);
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
OrderRouter.get(
    "/order-details/:order_id",
    (req, res) => {
        const result = new OrderController().orderDetails(req.params.order_id);
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

OrderRouter.post(
    "/razorpay-transaction-handle",
    (req, res) => {
        const result = new OrderController().handlerTransaction(req.body);
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

OrderRouter.get(
    "/transactions/:id?",
    (req, res) => {
        const result = new OrderController().readTransactions(req.params.id);
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

OrderRouter.get(
    "/get-data",
    (req, res) => {
        const result = new OrderController().readOrder(req.query);
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

module.exports = OrderRouter;