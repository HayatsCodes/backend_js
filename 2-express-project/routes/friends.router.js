const express = require('express');

const friendsController = require('..controllers/');

const friendsRouter = express.Router();

friendsRouter.use((req, res) => {
    console.log(req.ip);
})

friendsRouter.post('/', friendsController.postFriends);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriendsId);

module.exports = friendsRouter;