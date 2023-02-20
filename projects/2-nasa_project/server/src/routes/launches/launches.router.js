const express = require('express');

const hgetAllLaunches = require('./launches.controller')

const launchesRouter = express.Router();

launchesRouter.get('/launches', hgetAllLaunches);

module.exports = {
    launchesRouter,
}