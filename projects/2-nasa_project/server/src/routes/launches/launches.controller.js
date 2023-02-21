const { 
    getAlllaunches,
    addNewLaunch,
 } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(Array.from(getAlllaunches()));
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    launch.launchDate = new Date

    addNewLaunch(launch);
}

module.exports = httpGetAllLaunches;