function print(data) {
    console.log(data);
}
const parser = require('csv-parse');
print((parser));
const fs = require('fs');

const results = [];

// fs.createReadStream('kepler_data.csv')
//     .pipe(parser({
//         comment: '#',
//         colums: true,
//     }))
//     .on('data', (data) => {
//         results.push(data);
//     })
//     .on('error', (err) => {
//         console.log(err);
//     })
//     .on('end', () => {
//         console.log(results);
//         console.log('done');
//     });
    