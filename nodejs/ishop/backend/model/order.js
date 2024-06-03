const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the orders collection
const orderSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        order_total: {
            type: Number,
            required: true
        },
        shipping_details: {
            type: Object,
            required: true,
        },
        product_details: {
            type: Array,
            required: true
        },
        transaction_id: {
            type: mongoose.Schema.ObjectId,
            ref: 'Transaction',
            default: null
        },
        razorpay_order_id: {
            type: String,
            default: null
        },
        razorpay_transaction_id: {
            type: String,
            default: null
        },
        order_payment_type: {
            type: Number,
            enum: [1, 2]
            // 1: COD , 2: Online -> Razorpay
        },
        order_status: {
            type: Number,
            enum: [1, 2, 3, 4, 5, 6, 7],
            // 1: Payment pending, 2: Payment Done (Order Placed), 3: Shipped, 4: Delivered, 5: Cancelled, 6: Return, 7: Refund
            default: 1
        },
    },
    {
        timestamps: true
    }
);

// Create the model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
