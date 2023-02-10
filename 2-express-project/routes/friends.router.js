const express = require('express');

const friendsController = require('./controllers/friends.controller');

const friendsRouter = express.Router();

friend

friendsRouter.post('/', friendsController.postFriends);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriendsId);

module.exports = friendsRouter;