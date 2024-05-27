const router = require("express").Router()

const Aircraft = require('./../models/Aircraft.model')
const Flight = require('./../models/Flight.model')


//POST one aircraft
router.post('/', (req, res, next) => {

    const { model, manufacturer, mainImage, images, tailNumber, homeBase, capacity, range, cabinHeight, cabinWidth, hourlyRate, services, availability, flightId } = req.body

    Aircraft
        .create({ model, manufacturer, mainImage, images, tailNumber, homeBase, capacity, range, cabinHeight, cabinWidth, hourlyRate, services, availability, flightId })
        .then(newAircraft => res.sendStatus(201))
        .catch(err => next(err))

})


//GET all aircrafts

router.get('/', (req, res, next) => {

    Aircraft
        .find()
        .then(allAircrafts => res.json(allAircrafts))
        .catch(err => next(err))
})

//GET one aircraft

router.get('/:aircraftId', (req, res, next) => {

    const { aircraftId } = req.params

    Aircraft
        .findById(aircraftId)
        .populate('flightId')
        .then(oneAircraft => res.json(oneAircraft))
        .catch(err => next(err))

})

// PUT - Edits one aircraft

router.put('/:aircraftId', (req, res, next) => {

    const { aircraftId } = req.params
    const { model, manufacturer, mainImage, images, tailNumber, homeBase, capacity, range, cabinHeight, cabinWidth, hourlyRate, services, availability, flightId } = req.body


    Aircraft
        .findByIdAndUpdate(aircraftId, { model, manufacturer, mainImage, images, tailNumber, homeBase, capacity, range, cabinHeight, cabinWidth, hourlyRate, services, availability, flightId })
        .then(updatedAircraft => res.sendStatus(204))
        .catch(err => next(err))

})


// DELETE - one aircraft

router.delete('/:aircraftId', (req, res, next) => {

    const { aircraftId } = req.params

    Aircraft
        .findByIdAndDelete(aircraftId)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})


module.exports = router