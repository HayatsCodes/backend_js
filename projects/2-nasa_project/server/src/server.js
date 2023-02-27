const http = require('http');
const mongoose = require('mongoose');

const { app } = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);



mongoose.set('strictQuery', false);

async function startServer() {
    await 
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

startServer();
// console.log(PORT);