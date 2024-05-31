const router = require("express").Router()

const Aircraft = require('./../models/Aircraft.model')
const Flight = require('./../models/Flight.model')


router.post('/', (req, res, next) => {

    const { model, manufacturer, mainImage, tailNumber, homeBase, capacity, range, cabinHeight, cabinWidth, hourlyRate, services, availability, description, imagesCarousel } = req.body

    Aircraft
        .create({ model, manufacturer, mainImage, tailNumber, homeBase, capacity, range, cabinHeight, cabinWidth, hourlyRate, services, availability, description, imagesCarousel })
        .then(newAircraft => res.sendStatus(201))
        .catch(err => next(err))

})


router.get('/', (req, res, next) => {

    Aircraft
        .find()
        .select()
        .then(allAircrafts => res.json(allAircrafts))
        .catch(err => next(err))
})


router.get('/:aircraftId', (req, res, next) => {

    const { aircraftId } = req.params

    Aircraft
        .findById(aircraftId)
        .then(oneAircraft => res.json(oneAircraft))
        .catch(err => next(err))
})


router.put('/:aircraftId', (req, res, next) => {

    const { aircraftId } = req.params
    const { model, manufacturer, mainImage, tailNumber, homeBase, capacity, range, cabinHeight, cabinWidth, hourlyRate, services, availability, description, imagesCarousel } = req.body

    Aircraft
        .findByIdAndUpdate(aircraftId, { model, manufacturer, mainImage, tailNumber, homeBase, capacity, range, cabinHeight, cabinWidth, hourlyRate, services, availability, description, imagesCarousel }, { runValidators: true })
        .then(updatedAircraft => res.sendStatus(204))
        .catch(err => next(err))
})


router.delete('/:aircraftId', (req, res, next) => {

    const { aircraftId } = req.params

    Aircraft
        .findByIdAndDelete(aircraftId)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
})


module.exports = router