const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Performance example');
});

app.get('/timer', (req, res) => {
    const startTime = Date.now();
    while (Date.now() - startTime < durat)

    res.send('Ding ding ding');
});