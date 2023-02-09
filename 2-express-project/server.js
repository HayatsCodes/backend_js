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

app.get('/messages', (req, res) => {
    res.send('<ul><li>Helloo Albert!</li></ul>')
});

app.post('/messages', (req, res) => {
    console.log('Updating messages...');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});