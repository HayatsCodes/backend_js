const express = require('express');

const { 
    httpGetAllLaunches,
    httpAddNewLaunch,
} = require('./launches.controller')

const launchesRouter = express.Router();

launchesRouter.get('/launches', httpGetAllLaunches);
launchesRouter.post('/')

module.exports = {
    launchesRouter,
}