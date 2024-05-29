const { Schema, model } = require("mongoose");

const flightSchema = new Schema(
    {
        fromDestination: {
            type: String,
            required: true,
            // enum: ['Madrid', 'Menorca', 'Ibiza', 'Malaga', 'Barcelona']
        },
        toDestination: {
            type: String,
            required: true,
            // enum: ['Madrid', 'Menorca', 'Ibiza', 'Malaga', 'Barcelona']
        },
        flightTime: {
            type: Number,
            required: true,
        },
        miles: {
            type: Number,
            required: true,
        },

        imageUrl: {
            type: String,
            required: true,
        },

        aircraftId: [{
            type: Schema.Types.ObjectId,
            ref: "Aircraft"
        }]
    },
    {
        timestamps: true
    }
);

const Flight = model("Flight", flightSchema);

module.exports = Flight;
