const { getAlllaunches
 } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(Array.from(getAlllaunches()));
}

module.exports = httpGetAllLaunches;