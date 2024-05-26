const { Schema, model } = require("mongoose");

const flightSchema = new Schema(
    {
        destination: {
            type: String,
            required: true,
            enum: ['Mallorca', 'Ibiza', 'Dubrovnik', 'Barcelona']
        },
        hoursOfFlight: {
            type: Number,
            required: true,
        },
        miles: {
            type: String,
            required: true,
        },
        fullCost: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

const Flight = model("Flight", flightSchema)

module.exports = Flight