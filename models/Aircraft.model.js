const { Schema, model } = require("mongoose");

const aircraftSchema = new Schema(
    {
        model: {
            type: String,
            required: true,
        },
        tailNumber: {
            type: String,
            required: true,
        },
        homeBase: {
            type: String,
            required: true,
            enum: ['Madrid', 'Barcelona', 'Roma']
        },
        capacity: {
            type: Number,
            required: true,
        },
        range: {
            type: Number,
            required: true,

        },
        cabinHeight: {
            type: Number,
            required: true,

        },
        cabinWidth: {
            type: Number,
            required: true,

        },
        pricePerHour: {
            type: Number,
            required: true,

        },
        availability: {
            type: Boolean,
            required: true,

        },
        routeId: {
            type: String,
            required: true,

        }
    },
    {
        timestamps: true
    }
);

const Aircraft = model("Aircraft", aircraftSchema)

module.exports = Aircraft