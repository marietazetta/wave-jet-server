const router = require("express").Router();
const Message = require('./../models/Message.model');
const { isAuthenticated } = require("../middlewares/verifyToken");

router.post('/', isAuthenticated, (req, res, next) => {
    const { message } = req.body;
    const { _id: owner } = req.payload;

    Message
        .create({ message, owner })
        .then(() => res.sendStatus(201))
        .catch(err => next(err));
});

router.get("/", (req, res, next) => {
    Message
        .find()
        .then(response => res.json(response))
        .catch(err => next(err));
});

router.get("/owner/:ownerId", (req, res, next) => {
    const { ownerId } = req.params;

    Message
        .find({ owner: ownerId })
        .then(response => res.json(response))
        .catch(err => next(err));
});

router.get('/:messageId', (req, res, next) => {
    const { messageId } = req.params;

    Message
        .findById(messageId)
        .populate()
        .then(elm => res.json(elm))
        .catch(err => next(err));
});

module.exports = router;
