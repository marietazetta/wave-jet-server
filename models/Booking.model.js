const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
    fromDestination: {
        type: String,
    },
    toDestination: {
        type: String,
    },
    departureDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date
    },
    travellers: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending'
    },
    aircraftId: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
},
    {
        timestamps: true
    }
);

module.exports = model('Booking', bookingSchema);