const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log(`ip: ${req.ip}`);
    next();
})

friendsRouter.post('/', friendsController.postFriends);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriendsId);

module.exports = friendsRouter;