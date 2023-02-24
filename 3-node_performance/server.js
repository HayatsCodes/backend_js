const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Performance example');
});

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {

    }
}

app.get('/timer', (req, res) => {
    delay(9000);
    res.send('Ding ding ding');
});

app.listen(3000, () => {
    console.log('Server spinning at port 3000');
});