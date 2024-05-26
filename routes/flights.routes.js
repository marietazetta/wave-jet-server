const router = require("express").Router()

// const Aircraft = require('./../models/Aircraft.model')

router.get("/", (req, res, next) => {
    res.send('Funciono')

    // Aircraft
    //     .find()
    //     .then(response => res.json(response))
    //     .catch(err => next(err))
})

module.exports = router