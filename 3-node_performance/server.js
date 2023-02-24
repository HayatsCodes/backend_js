const express = require('express');
const cluster = require('cluster');

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


// When a node server is started, a master process is created.
// With the cluster module, one can create multiple copies of the master process,
// called workers by calling the fork() function provided in the cluster module.
// The cluster module uses the Round robin approach to distribute requests to workers, thereby which each workers take turns to process requests.