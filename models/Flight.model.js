const { Schema, model } = require("mongoose");

const flightSchema = new Schema(
    {
        fromDestination: {
            type: String,
            required: true,
        },
        toDestination: {
            type: String,
            required: true,
        },
        flightTime: {
            type: Number,
            required: true,
        },
        miles: {
            type: Number,
            required: true,
        },
        aircraftId: [{
            type: Schema.Types.ObjectId,
            ref: "Aircraft"
        }],

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'Admin'
        }

    },
    {
        timestamps: true
    }
);

module.exports = model("Flight", flightSchema);
