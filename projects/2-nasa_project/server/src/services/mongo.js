const mongoose = require('mongoose');



mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) =>
console.error(err));

mongoose.set('strictQuery', false);

async function mongoConnect() {
    await mongoose.connect(process.env, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
module.exports = {
    mongoConnect,
}