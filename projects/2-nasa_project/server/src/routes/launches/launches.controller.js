const { launches } = require('../../models/launches.model');
console.log(Array.from(launches.values()));


function getAllLaunches(req, res) {
    return res.status(200).json();
}

module.exports = getAllLaunches;