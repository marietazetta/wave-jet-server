const router = require("express").Router();
const Message = require('./../models/Message.model');
const User = require('./../models/User.model'); // Ensure the path is correct
const { isAuthenticated } = require("../middlewares/verifyToken");

router.post('/', isAuthenticated, (req, res, next) => {
    const { message } = req.body;
    const { _id: owner } = req.payload;

    Message
        .create({ message, owner })
        .then(message => Message.findById(message._id).populate('owner', 'username'))
        .then(populatedMessage => res.status(201).json(populatedMessage))
        .catch(err => next(err));
});

router.get("/", (req, res, next) => {
    Message
        .find()
        .populate('owner', 'username')
        .then(response => res.json(response))
        .catch(err => next(err));
});

router.get("/owner/:ownerId", (req, res, next) => {
    const { ownerId } = req.params;

    Message
        .find({ owner: ownerId })
        .populate('owner', 'username')
        .then(response => res.json(response))
        .catch(err => next(err));
});

router.get('/:messageId', (req, res, next) => {
    const { messageId } = req.params;

    Message
        .findById(messageId)
        .populate('owner', 'username')
        .then(elm => res.json(elm))
        .catch(err => next(err));
});

module.exports = router;
