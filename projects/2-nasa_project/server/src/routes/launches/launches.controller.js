const { 
    getAllLaunches,
    scheduleNewLaunch,
    existLaunchWithId,
    deletedLaunch,
    abortLaunchById,
 } = require('../../models/launches.model');

 const {
    getPagination
 } = require('../../services/query');

 const { getAllPlanets } = require('../../models/planets.model');
 const habitablePlanets = getAllPlanets();

async function httpGetAllLaunches(req, res) {
    const { skip, limit } = getPagination(req.query);
    const allLaunches = await getAllLaunches(skip, limit);
    return await res.status(200).json(allLaunches);
}

async function httpAddNewLaunch(req, res) {
    const launch = req.body;

    const launchProperties = [
        {name: 'mission', value:launch.mission},
        {name: 'rocket', value: launch.rocket},
        {name: 'launchDate', value: launch.launchDate},
        {name: 'target', value: launch.target},
    ];

    for (let i = 0; i < launchProperties.length; i++) {
        if (!launchProperties[i].value) {
            return res.status(400).json({
                error: `Missing required ${launchProperties[i].name} property`,
            });
        }
    }

    // const randomIndex = Math.floor(Math.random() * habitablePlanets.length);
    // const targetPlanet = habitablePlanets[randomIndex].kepler_name;

    // launch.target = targetPlanet;

    launch.launchDate = new Date(launch.launchDate);
    if (launch.launchDate.toString() === 'Invalid Date') {
        return res.status(400).json({
            error: 'Invalid launch date'
        });
    }

    await scheduleNewLaunch(launch);
    return res.status(201).json(launch);
}

async function httpAbortLaunch(req, res) {
    const launchId = +req.params.id;

    

    const existLaunch = await existLaunchWithId(launchId);
    const isDeleted = await deletedLaunch(launchId)

    if(!existLaunch) {
        return res.status(404).json({
            error: `Launch not found`,
        });
    }


    if(isDeleted) {
        return res.status(400).json({
            message: "The launch has already been deleted"
        })
    }

    const aborted = await abortLaunchById(launchId);

    if (!aborted) {
        return res.status(404).json({
            error: 'Launch not aborted'
        });
    }
    return res.status(200).json({
        ok: true,
    });

}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
};
