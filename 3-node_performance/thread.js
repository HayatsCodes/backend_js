const { isMainThread, Worker } = require('worker_threads');

if (isMainThread) {
    console.log(`Main! Process ID: ${process.pid}`);
    new Worker(__filename, );
    new Worker(__filename);
} else {
    console.log(`Worker! Process ID: ${process.pid}`);
}