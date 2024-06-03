const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    flightId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true
    },
    aircraftId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aircraft',
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
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
    }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
