const { Schema, model } = require("mongoose");

const aircraftSchema = new Schema(
    {
        model: {
            type: String,
            required: true,
        },
        manufacturer: {
            type: String,
            required: true,
        },

        manufacturerDescription: {
            type: String,
            required: true,
        },

        mainImage: {
            type: String,
            required: true,
        },
        imagesCarousel: {
            type: [String],
            required: false,
        },
        tailNumber: {
            type: String,
            required: true,
            unique: true
        },
        homeBase: {
            type: String,
            required: true,
            default: 'LEMD'
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
        hourlyRate: {
            type: Number,
            required: true,

        },
        services: {
            type: Object,


        },
        availability: {
            type: Boolean,
            required: true,

        },
        description: {
            type: String,
            required: true,
        }
    },

    {
        timestamps: true
    }
)

module.exports = model("Aircraft", aircraftSchema)