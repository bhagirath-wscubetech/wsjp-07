const mongoose = require('mongoose');

// Define the schema for the transaction
const transactionSchema = new mongoose.Schema(
    {
        order_id: {
            type: mongoose.Schema.ObjectId,
            ref:'Order',
            required: true
        },
        razorpay_order_id: {
            type: String,
            required: true
        },
        amount: {
            type: Number
        },
        razorpay_payment_id: {
            type: String,
            required: true
        },
        payment_status: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

// Create the Transaction model
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
