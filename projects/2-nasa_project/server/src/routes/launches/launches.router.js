const express = require('express');

const { 
    httpGetAllLaunches,
    httpAddNewLaunch,
} = require('./launches.controller')

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.delete('/:id', abortLaunch);

module.exports = {
    launchesRouter,
}