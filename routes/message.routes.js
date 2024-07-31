const router = require("express").Router();
const Message = require('./../models/Message.model');
const User = require('./../models/User.model');
const Admin = require('./../models/Admin.model');
const { isAuthenticated } = require("../middlewares/verifyToken");

router.post('/', isAuthenticated, (req, res, next) => {
    const { message, recipient } = req.body;
    const { _id: owner, role: ownerModel } = req.payload;

    Message
        .create({ message, owner, ownerModel, recipient })
        .then(message => Message.findById(message._id)
            .populate('owner', 'username')
            .populate('recipient', 'username'))
        .then(populatedMessage => res.status(201).json(populatedMessage))
        .catch(err => next(err));
});

router.get("/", isAuthenticated, (req, res, next) => {
    Message
        .find()
        .populate('owner', 'username')
        .populate('recipient', 'username')
        .then(response => res.json(response))
        .catch(err => next(err));
});

router.get("/user/:userId", isAuthenticated, (req, res, next) => {
    const { userId } = req.params;
    const { _id: adminId } = req.payload;

    Message
        .find({
            $or: [
                { owner: userId, ownerModel: 'User', recipient: adminId },
                { owner: adminId, ownerModel: 'Admin', recipient: userId }
            ]
        })
        .populate('owner', 'username')
        .populate('recipient', 'username')
        .then(response => res.json(response))
        .catch(err => next(err));
});

router.get('/:messageId', isAuthenticated, (req, res, next) => {
    const { messageId } = req.params;

    Message
        .findById(messageId)
        .populate('owner', 'username')
        .populate('recipient', 'username')
        .then(elm => res.json(elm))
        .catch(err => next(err));
});

module.exports = router;
