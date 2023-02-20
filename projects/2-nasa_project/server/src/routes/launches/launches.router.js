const express = require('express');
const getAllLaunches = require('')

const launchesRouter = express.Router();

launchesRouter.get('/launches', getAllLaunches);

module.exports = launchesRouter;