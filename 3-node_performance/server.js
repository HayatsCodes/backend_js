const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
    res.send(`Performance example: ${process.pid}`);
});

function delay(duration) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {

    }
}

app.get('/timer', (req, res) => {
    delay(9000);
    res.send(`Ding ding ding! ${process.pid}`);
});


console.log('Worker process started');
app.listen(3000, () => {
    console.log('Server spinning at port 3000');
});


// Load balancing is the techinque used to distribute a sets of tasks to a set of resources
// The node cluster module is used to do load balancing of requests within a node server
// When a node server is started, a master process is created.
// With the cluster module, one can create multiple copies of the master process,
// called workers by calling the fork() function provided in the cluster module.
// The cluster module uses the Round-Robin approach to distribute requests to workers, thereby which each workers take turns to process requests.