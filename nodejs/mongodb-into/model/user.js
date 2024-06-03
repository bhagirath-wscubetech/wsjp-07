const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxLength: 50
        },
        email: {
            type: String,
            required: true,
            unique: [true, 'The email already exists'],
            maxLength: 50
        },
        contact: {
            type: String,
            maxLength: 13
        },
        password: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: true // true: active, false: inactive
        }
    },
    { timestamps: true }
)

const User = mongoose.model("User", UserSchema);
module.exports = User;