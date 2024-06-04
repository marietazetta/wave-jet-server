const router = require("express").Router()

const Booking = require('./../models/Booking.model')

const { isAuthenticated } = require("../middlewares/verifyToken")

router.post('/', isAuthenticated, (req, res, next) => {

    const { fromDestination, toDestination, departureDate, returnDate, travellers, bookingDate, status, flightId, aircraftId, userId, timestamps } = req.body
    const { _id: owner } = req.payload

    Booking
        .create({ fromDestination, toDestination, departureDate, returnDate, travellers, bookingDate, status, flightId, aircraftId, userId, timestamps, owner })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})


router.get("/", (req, res, next) => {

    Booking
        .find()
        .select()
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get('/:bookingId', (req, res, next) => {

    const { bookingId } = req.params

    Booking
        .findById(bookingId)
        .populate('aircraftId')
        .populate('flightId')
        .populate('userId')
        .then(booking => res.json(booking))
        .catch(err => next(err))
})


router.put('/:bookingId', (req, res, next) => {

    const { bookingId } = req.params
    const { fromDestination, toDestination, departureDate, returnDate, travellers, bookingDate, status, flightId, aircraftId, userId, timestamps } = req.body
    const { _id: owner } = req.payload

    Booking
        .findByIdAndUpdate(bookingId, { fromDestination, toDestination, departureDate, returnDate, travellers, bookingDate, status, flightId, aircraftId, userId, timestamps, owner })
        .then(() => res.sendStatus(204))
        .catch(err => next(err))

})

router.delete('/:bookingId', (req, res, next) => {

    const { bookingId } = req.params

    Booking
        .findByIdAndDelete(bookingId)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})

module.exports = router;
