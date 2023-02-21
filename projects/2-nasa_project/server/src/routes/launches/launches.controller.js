const { 
    getAlllaunches,
    addNewLaunch,
 } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(Array.from(getAlllaunches()));
}

function httpAddNewLaunch()

module.exports = httpGetAllLaunches;