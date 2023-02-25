const fs = require('fs');
const path = require('path');
const csv = require('csv-parse');
const planets = require('./planets.mongo');

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' &&
        planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

const habitablePlanets = [];

function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(csv.parse({
                comment: '#',
                columns: true,
            }))
            .on('data', async (data) => {
                if (isHabitablePlanet(data)) {
                    // TODO: Replace below create function with upsert
                    await planets.updateOne({
                        keplerName: data.kepler_name,
                    }, {
                        keplerName: data.kepler_name,
                    }, {
                        upsert: data.kepler_name,
                    }
                    );
                }
            })
            .on('error', (err) => {
                console(err);
                reject(err);
            })
            .on('end', () => {
                console.log(`${habitablePlanets.length} habitable planets found!`);
                resolve();
            });
    });
}

async function getAllPlanets() {
    return await planets.find({});
}

module.exports = {
    loadPlanetsData,
    getAllPlanets,
}