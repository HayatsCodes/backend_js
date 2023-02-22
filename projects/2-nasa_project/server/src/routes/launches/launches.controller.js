const { 
    getAllLaunches,
    addNewLaunch,
 } = require('../../models/launches.model');

 const { getAllPlanets } = require('../../models/planets.model');
 const habitablePlanets = getAllPlanets();




function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch = req.body;

    const launchProperties = [
        {name: 'mission', value:launch.mission},
        {name: 'rocket', value: launch.rocket},
        {name: 'launchDate', value: launch.launchDate},
        {name: 'target', value: launch.target}
    ];

    for (let i = 0; i < launchProperties.length; i++) {
        if (launchProperties[i].name === 'target' && !launchProperties[i].value) {
            const randomIndex = Math.floor(Math.random() * habitablePlanets.length);
            const targetPlanet = habitablePlanets[randomIndex];

            launchProperties[i].value = targetPlanet;
        }
        else if (!launchProperties[i].value) {
            return res.status(400).json({
                error: `Missing required ${launchProperties[i].name} property`,
            });
        }
    }

    launch.launchDate = new Date(launch.launchDate);
    if (launch.launchDate.toString() === 'Invalid Date') {
        return res.status(400).json({
            error: 'Invalid launch date'
        });
    }

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
};