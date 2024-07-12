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
            refPath: 'ownerModel'
        },
        ownerModel: {
            type: String,
            required: true,
            enum: ['Admin', 'User']
        }
    },
    {
        timestamps: true
    }
);

module.exports = model("Message", messageSchema);
