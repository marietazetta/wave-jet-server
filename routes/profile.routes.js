const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile.model');
const { isAuthenticated } = require("../middlewares/verifyToken");

router.get("/", (req, res, next) => {
    Profile
        .find()
        .populate('userId')
        .then(response => res.json(response))
        .catch(err => next(err));
});

router.get('/:profileId', (req, res, next) => {
    const { profileId } = req.params;

    Profile
        .findById(profileId)
        .then(oneProfile => res.json(oneProfile))
        .catch(err => next(err));
});

router.get("/owner/:ownerId", (req, res, next) => {
    const { ownerId } = req.params;

    Profile
        .find({ owner: ownerId })
        .then(response => res.json(response))
        .catch(err => next(err));
});

router.post('/', isAuthenticated, (req, res, next) => {
    const { mobile, fullName, favAirport, specialDiet } = req.body;
    const { _id: owner } = req.payload;

    Profile
        .create({ mobile, fullName, favAirport, specialDiet, owner })
        .then(() => res.sendStatus(201))
        .catch(err => next(err));
});

router.put('/:profileId', (req, res, next) => {
    const { profileId } = req.params;
    const { mobile, fullName, favAirport, specialDiet } = req.body;

    Profile
        .findByIdAndUpdate(profileId, { mobile, fullName, favAirport, specialDiet })
        .then(() => res.sendStatus(204))
        .catch(err => next(err));
});

module.exports = router;
