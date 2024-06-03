const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
    fromDestination: {
        type: String,
        required: true
    },
    toDestination: {
        type: String,
        required: true
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
    bookingDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending'
    },
    flightId: {
        type: Schema.Types.ObjectId,
        ref: 'Flight',
        required: true
    },
    aircraftId: {
        type: Schema.Types.ObjectId,
        ref: 'Aircraft',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
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

const Booking = model('Booking', bookingSchema);
module.exports = Booking;
