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
// The asynchronous codes are placed in the event loop and 
// When the results of the functions are ready, the event loop is notified and gets ready to executes it.
// There are two main types of asynchronous I/O:
// file system: this is handled  by the OS
// network: 
