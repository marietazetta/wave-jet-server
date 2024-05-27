const router = require("express").Router()

const Flight = require('./../models/Flight.model')

router.post('/', (req, res, next) => {

    const { destination, flightTime, miles, fullCost, timestamps } = req.body

    Flight
        .create({ destination, flightTime, miles, fullCost, timestamps })
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
        .then(flight => res.json(flight))
        .catch(err => next(err))
})


router.put('/:flightId', (req, res, next) => {

    const { flightId } = req.params
    const { destination, flightTime, miles, fullCost, timestamps } = req.body

    Flight
        .findByIdAndUpdate(flightId, { destination, flightTime, miles, fullCost, timestamps })
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