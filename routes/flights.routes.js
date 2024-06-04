const router = require("express").Router()

const Flight = require('./../models/Flight.model')

const { isAuthenticated } = require("../middlewares/verifyToken")

router.post('/', isAuthenticated, (req, res, next) => {

    const { fromDestination, toDestination, flightTime, miles, timestamps, aircraftId } = req.body
    const { _id: owner } = req.payload

    Flight
        .create({ fromDestination, toDestination, flightTime, miles, timestamps, aircraftId, owner })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
})


router.get("/", (req, res, next) => {

    Flight
        .find()
        .select()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get("/origin", (req, res, next) => {

    Flight
        .find()
        .select('fromDestination')
        .distinct('fromDestination')
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get("/destination", (req, res, next) => {

    Flight
        .find()
        .select('toDestination')
        .distinct('toDestination')
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get('/search', (req, res, next) => {

    const { fromDestination, toDestination } = req.query

    let flightsQuery = {}
    if (fromDestination) flightsQuery.fromDestination = fromDestination
    if (toDestination) flightsQuery.toDestination = toDestination

    Flight
        .find(flightsQuery)
        .populate('aircraftId')
        .then(flightResults => res.send(flightResults))
        .catch(err => next(err))
})


router.get('/:flightId', (req, res, next) => {

    const { flightId } = req.params

    Flight
        .findById(flightId)
        .populate('aircraftId')
        .then(flight => res.json(flight))
        .catch(err => next(err))
})


router.put('/:flightId', (req, res, next) => {

    const { flightId } = req.params
    const { fromDestination, toDestination, flightTime, miles, timestamps, aircraftId } = req.body

    Flight
        .findByIdAndUpdate(flightId, { fromDestination, toDestination, flightTime, miles, timestamps, aircraftId })
        .then(() => res.sendStatus(204))
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