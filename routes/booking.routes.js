const router = require("express").Router();

const Booking = require('./../models/Booking.model');

router.post('/', (req, res, next) => {
    const { flightId, aircraftId, userId, fromDestination, toDestination, departureDate, returnDate, travellers, status } = req.body;

    Booking
        .create({ flightId, aircraftId, userId, fromDestination, toDestination, departureDate, returnDate, travellers, status })
        .then(() => res.sendStatus(201))
        .catch(err => next(err));
});

router.get("/", (req, res, next) => {
    Booking
        .find()
        .then(response => res.json(response))
        .catch(err => next(err));
});

router.get('/:bookingId', (req, res, next) => {
    const { bookingId } = req.params;

    Booking
        .findById(bookingId)
        .populate('flightId')
        .populate('aircraftId')
        .populate('userId')
        .then(booking => res.json(booking))
        .catch(err => next(err));
});


router.put('/:bookingId', (req, res, next) => {
    const { bookingId } = req.params;
    const { flightId, aircraftId, userId, fromDestination, toDestination, departureDate, returnDate, travellers, status } = req.body;

    Booking
        .findByIdAndUpdate(bookingId, { flightId, aircraftId, userId, fromDestination, toDestination, departureDate, returnDate, travellers, status })
        .then(() => res.sendStatus(204))
        .catch(err => next(err));
});


router.delete('/:bookingId', (req, res, next) => {
    const { bookingId } = req.params;

    Booking
        .findByIdAndDelete(bookingId)
        .then(() => res.sendStatus(204))
        .catch(err => next(err));
});

module.exports = router;
