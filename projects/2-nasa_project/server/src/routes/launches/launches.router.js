const express = require('express');

const launchesRouter = express.Router();

launchesRouter.get('/launches', getAllLaunches);