const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const messageSchema = new Schema(
    {
        message: {
            type: String,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            refPath: 'ownerModel',
            required: true,
        },
        ownerModel: {
            type: String,
            enum: ['Admin', 'User'],
            required: true,
        },
        recipient: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true
    }
);

module.exports = model("Message", messageSchema);
