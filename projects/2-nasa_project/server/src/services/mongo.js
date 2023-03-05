const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://nasa-api:4jNvIlTndydEdUSN@nasacluster.vkrtqnr.mongodb.net/nasa?retryWrites=true&w=majority';


mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) =>
console.error(err));

mongoose.set('strictQuery', false);

async function mongoConnect() {
    await mongoose.connect(MONGO_URL, {
        bufferMaxEntries: 0, // disable buffering
        bufferCommands: false, // disable command buffering
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
module.exports = {
    mongoConnect,
}