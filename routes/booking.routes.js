const router = require("express").Router()

const Booking = require('./../models/Booking.model')

const { isAuthenticated } = require("../middlewares/verifyToken")

router.post('/', (req, res, next) => {

    const { departureDate, returnDate, travellers, status, flightId } = req.body
    // const { _id: owner } = req.payload

    Booking
        .create({ departureDate, returnDate, travellers, status, flightId })
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
        .populate()
        .then(booking => res.json(booking))
        .catch(err => next(err))
})


router.put('/:bookingId', (req, res, next) => {

    const { bookingId } = req.params
    const { departureDate, returnDate, travellers, status, flightId } = req.body
    //const { _id: owner } = req.payload

    Booking
        .findByIdAndUpdate(bookingId, { departureDate, returnDate, travellers, status, flightId })
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
