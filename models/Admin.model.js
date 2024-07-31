const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Email is required.'],
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, 'Password is required.']
        },
        username: {
            type: String,
            required: [true, 'User is required'],
            minlength: [3, '3 characters minimum']
        },
        role: {
            type: String,
            default: "Admin"
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("Admin", adminSchema);
