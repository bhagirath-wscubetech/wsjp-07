const { razorpayInstance, verifySignature } = require("../helper");
const Cart = require("../model/cart");
const Order = require("../model/order");
const Transaction = require("../model/transaction");


class OrderController {
    create({ product_details, user_id, order_total, user_details }) {
        return new Promise(
            (res, rej) => {
                try {
                    const order = new Order({
                        product_details,
                        shipping_details: user_details,
                        user_id,
                        order_total,
                        order_payment_type: user_details.paymentMode
                    })
                    order.save()
                        .then(
                            (success) => {
                                Cart.deleteMany({ user_id: user_id })
                                    .then(
                                        () => {
                                            if (user_details.paymentMode == 1) {
                                                res({
                                                    msg: "Order placed",
                                                    status: 1,
                                                    order_id: order._id
                                                })
                                            } else {
                                                const options = {
                                                    amount: order_total * 100,  // amount in the smallest currency unit
                                                    currency: "INR",
                                                    receipt: order._id
                                                };
                                                razorpayInstance.orders.create(
                                                    options,
                                                    function (err, razorpayOrder) {
                                                        if (err) {
                                                            rej({
                                                                msg: "Unable to place order.",
                                                                status: 0
                                                            })
                                                        } else {
                                                            Order.updateOne(
                                                                { _id: order._id },
                                                                { razorpay_order_id: razorpayOrder.id }
                                                            ).then(
                                                                () => {
                                                                    res({
                                                                        msg: "Order placed",
                                                                        status: 1,
                                                                        order_id: order._id,
                                                                        razorpayOrder
                                                                    })
                                                                }
                                                            ).catch(
                                                                () => {
                                                                    rej({
                                                                        msg: "Unable to place order.",
                                                                        status: 0
                                                                    })
                                                                }
                                                            )
                                                        }
                                                    }
                                                );
                                            }

                                        }
                                    ).catch(
                                        () => {

                                        }
                                    )

                            }
                        ).catch(
                            (error) => {
                                console.log(error);
                                rej({
                                    msg: "Unable to place order",
                                    status: 0
                                })
                            }
                        )
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    orderDetails(order_id) {
        return new Promise(
            async (res, rej) => {
                try {
                    const order = await Order.findById(order_id);
                    res({
                        msg: "Order found",
                        order,
                        status: 1
                    })
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }

    read(id) {
        return new Promise(
            (res, rej) => {
                try {
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    updateStatus(id) {
        return new Promise(
            (res, rej) => {
                try {
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    edit(id, data) {
        return new Promise(
            (res, rej) => {
                try {
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    delete(id) {
        return new Promise(
            (res, rej) => {
                try {
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }

    handlerTransaction({ amount, razorpay_response, order_id }) {
        return new Promise(
            (res, rej) => {
                try {
                    if (razorpay_response.razorpay_signature) {
                        const isValid = verifySignature(
                            razorpay_response.razorpay_order_id,
                            razorpay_response.razorpay_payment_id,
                            razorpay_response.razorpay_signature,
                        )
                        if (isValid) {
                            const transaction = new Transaction({
                                order_id: order_id,
                                razorpay_order_id: razorpay_response.razorpay_order_id,
                                razorpay_payment_id: razorpay_response.razorpay_payment_id,
                                amount: amount / 100,
                                payment_status: true
                            })
                            transaction.save()
                                .then(
                                    () => {
                                        Order.updateOne(
                                            { _id: order_id },
                                            {
                                                razorpay_transaction_id: razorpay_response.razorpay_payment_id,
                                                transaction_id: transaction._id,
                                                order_status: 2
                                            }
                                        ).then(
                                            () => {
                                                res({
                                                    msg: "Payment success",
                                                    status: 1,
                                                    order_id
                                                })
                                            }
                                        ).catch(
                                            (err) => {
                                                rej({
                                                    msg: "Internal server error",
                                                    status: 0
                                                })
                                            }
                                        )
                                    }
                                ).catch(
                                    () => {
                                        console.log('tran', err.message);
                                        rej({
                                            msg: "Internal server error",
                                            status: 0
                                        })
                                    }
                                )
                        } else {
                            rej({
                                msg: "Payment not verified",
                                status: 0
                            })
                        }
                    } else {
                        console.log("razorpay_response", razorpay_response);
                        const transaction = new Transaction({
                            order_id: order_id,
                            razorpay_order_id: razorpay_response.order_id,
                            razorpay_payment_id: razorpay_response.payment_id,
                            amount: amount / 100,
                            payment_status: false
                        })
                        transaction.save()
                            .then(
                                () => {
                                    Order.updateOne(
                                        { _id: order_id },
                                        {
                                            razorpay_transaction_id: razorpay_response.payment_id,
                                            transaction_id: transaction._id
                                        }
                                    ).then(
                                        () => {
                                            res({
                                                msg: "Payment Failed",
                                                status: 0,
                                                order_id
                                            })
                                        }
                                    ).catch(
                                        (err) => {
                                            console.log("order err", err.message);
                                            rej({
                                                msg: "Internal server error",
                                                status: 0
                                            })
                                        }
                                    )
                                }
                            ).catch(
                                (err) => {
                                    console.log("transaction err", err.message);
                                    rej({
                                        msg: "Internal server error",
                                        status: 0
                                    })
                                }
                            )
                    }

                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }


    readTransactions(id) {
        return new Promise(
            async (res, rej) => {
                try {
                    let data = [];
                    if (id) {
                        data = await Transaction.findById(id);
                    } else {
                        data = await Transaction.find();
                    }
                    res({
                        data,
                        status: 1
                    })
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    readOrder(query) {
        return new Promise(
            async (res, rej) => {
                try {
                    const dbQuery = {};
                    if (query.order_id) {
                        dbQuery._id = query.order_id;
                    }
                    if (query.user_id) {
                        dbQuery.user_id = query.user_id
                    }
                    const dateFilter = {};
                    if (query.start && query.end) {
                        const startDate = new Date(query.start);
                        const endDate = new Date(query.end);
                        dateFilter.startDate = startDate;
                        dateFilter.endDate = endDate;
                    }
                    if (query.pricestart && query.priceend) {
                        dbQuery.order_total = {
                            $gte: query.pricestart,
                            $lte: query.priceend,
                        }
                    }
                    const order_data = await Order.find(dbQuery).populate(['user_id', 'transaction_id']);
                    res({
                        order_data,
                        status: 1
                    })
                } catch (err) {
                    console.log(err.message);
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
}

module.exports = OrderController;