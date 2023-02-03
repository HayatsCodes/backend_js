// V8 Engine:
// It executes basic javascript codes

// Node.js APIs:
// These are built-in node.js functions that are not part of the core javascript language

//  Node.js Bindings:
// This passes node.js APIs to libuv for executionn

// libuv:
// The implementations of the node.js API's can be found here

// Non-blocking functions:
// codes that runs Asynchronously

// Blocking functions:
// codes that run synchronously

// Single threaded:
// In this, functions share the same call stack

// Multi-threaded:
// functions or states share different call stacks

// Asynchronous I/O: It's a procees by which the V8 engine passes node.js APIs to libuv 
// while it continues to run other codes in the background.
// The asynchronous codes are placed in the event loop for execution and 
// When the results of the functions are ready, the event loop is notified.
// There are two main types of asynchronous I/O, which are the systems that helps get asynchronous code get done.
// they are:
// network: these are handled  by the OS
// file system: this is get done by the thread pool

// Thread Pool:
// This takes advantage of the multi-threaded libuv that's written in c++.
// It's executes code along side nodejs main thread which handles both the V8 engine and the event loop.
// It provides a minimum of 4 threads and a maximum of 8 threads with all of them waiting for file system asynchronous I/O codes.

// Event Phase Loop:
// This are the different phases of an event loop that's has their own call back queues.

// Event loop tick:
// This is one event loop cycle over all the event loop phases

// Timers:
// This is the first event loop phase that handles timing functions
// There are three types of timers:
// setTimeout: executes once in a specific time
// setInterval: executes multiple times between a specific time
// setImmediate: executes immediately

// I/O callbacks:
// This is the second event loop phase that handles I/O functions like files system, networks e.t.c

// setImmediate:
// This is the third event loop phase that gets executed after the I/O callbacks phase.

// Close Callbacks:
// This is the last event loop phase that handles closing of files or network connections

// Node.js is best at I/O heavy applications and is built for the web

// The Observer design Pattern:
// These are proven approaches to solving problems that appears more than once in programming/applications

// Event Emitters:
// This is used to create subjects which emits events that their observer can listen to.

// Observers:
// They listen for events on event emitters

const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on('race win', function() {
    console.log('Congratulations! You are the best!');
});

celebrity.emit('race win');