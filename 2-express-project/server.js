const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Nikola Tesla',
    },
    {
        id: 1,
        name: 'Sir Issac Newton',
    },
    {
        id: 2,
        name: 'Albert Einstein',
    }
]

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends', (req, res) => {
    if(!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    }
    friends.push(newFriend);
    res.json(newFriend);
});

app.get('/friends', (req, res) => {
    res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend  = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'friend does not exist'
        })
    }
});

app.get('/messages', messagesController.getMessages);

app.post('/messages', messagesController.postMessages);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});




// Route
// the path to a resource in a server

// Route Handlers:
// Handles possible requests from the user

// Middleware:
// allows developers to add features to their express server
// they are special functions that runs between a request and a response coming out of an express api
// it uses the app.use function and a call back function that accepts three parameters, namely:
// req, res and next. Where req and res is used to process the request and the response coming fom an express api, while
// next is a function used to move to the next middlewrae
// example: app.use((req, res, next) => {})

// Middleware endpoint:
// This is the handler that matches the route the user is requesting
// it uses the app.method function rather than the app.use function, 
// where method are the common http methods like get, put e.t.c
// example: app.get(route, (req, res) => {})

// Model-View-Controller:
// This is a software design pattern used for developing user interfaces that divides the related program logic into three interconnected elements.
// Controller: This is used to manipulate the models in a server
// Model: This represents how the api sees data e.g (a function that queries users data in a data base)
// View: This is where the user gets a response to its request