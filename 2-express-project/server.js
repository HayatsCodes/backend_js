const express = require('express');

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
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>Helloo Albert!</li></ul>')
});

app.post('/messages', (req, res) => {
    console.log('Updating messages...');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// Middleware:
// allows developers to add features to their express server
// they are special functions that runs between a request and a response coming out of an express api
// it uses the app.use function and a call back function that accepts three parameters, namely:
// req, res and next. Where req and res is used to process the request and the response coming fom an express api, while
// next is used o move to the next middlewrae
// example: app.use()

// Middleware endpoint:
// This is the handler that matches the route the user is requesting
// it uses the app.method function rather than the app.use function, 
// where method are the common http methods like get, put e.t.c
// i