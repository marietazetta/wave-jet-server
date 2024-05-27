const router = require("express").Router()

const Flight = require('./../models/Flight.model')

router.post('/', (req, res, next) => {

    const { fromDestination, toDestination, flightTime, miles, timestamps, aircraftId } = req.body

    Flight
        .create({ fromDestination, toDestination, flightTime, miles, timestamps, aircraftId })
        .then(newFlight => res.sendStatus(201))
        .catch(err => next(err))
})


router.get("/", (req, res, next) => {

    Flight
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router


router.get('/:flightId', (req, res, next) => {

    const { flightId } = req.params

    Flight
        .findById(flightId)
        .populate(aircraftId)
        .then(flight => res.json(flight))
        .catch(err => next(err))
})


router.put('/:flightId', (req, res, next) => {

    const { flightId } = req.params
    const { fromDestination, toDestination, flightTime, miles, timestamps, aircraftId } = req.body

    Flight
        .findByIdAndUpdate(flightId, { fromDestination, toDestination, flightTime, miles, timestamps, aircraftId })
        .then(updateFlight => res.sendStatus(204))
        .catch(err => next(err))

})

router.delete('/:flightId', (req, res, next) => {

    const { flightId } = req.params

    Flight
        .findByIdAndDelete(flightId)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})

module.exports = router;