const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;



app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());



app.use('/friends', friendsRouter);

app.use('/messages',messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});




// Route
// the path to a resource in a server

// Route Handlers:
// Handles possible requests from the user

// Middleware:
// allows developers to add features to their express server
// they are special functions that runs between a request and a response coming out of an express api
// it uses the app.use function and a call back function that accepts three parameters, namely:
// req, res and next. Where req and res is used to process the request and the response coming fom an express api, while
// next is a function used to move to the next middlewrae
// example: app.use((req, res, next) => {})

// Middleware endpoint:
// This is the handler that matches the route the user is requesting
// it uses the app.method function rather than the app.use function, 
// where method are the common http methods like get, put e.t.c
// example: app.get(route, (req, res) => {})

// Model-View-Controller:
// This is a software design pattern used for developing user interfaces that divides the related program logic into three interconnected elements.
// Controller: This is used to manipulate the models in a server
// Model: This represents how the api sees data e.g (a function that queries users data in a data base)
// View: This is where the user gets a response to its request

// Router:
// This sis a mini application that organizes routes in an application into smaller groups
// a router is created by using the express.Router() function

// REST:
// REpresentational State Transfer
// Representational and State:  How the server makes data available
// Transfer: How it's transffered back to the user
// Thus, REST is an api pattern that describes how  data are represented and how they're transferred back to the user.
// Some of this ideas includes:
// 1. The use of existing web standards (HTTP, JSON, URL);
// 2. Endpoints are collections of data and are named in plurals
// 3. Use GET, POST, PUT and DELETE functions to communicate what actions is being performed on the data
// 4. Enables communication between a client and a server
// 5. Requests are stateless and cacheable:
//  a. stateless: each request is not connected to any state in the client side
//  b. cacheable:

// RESTFUL APIS:
// This are the sets of APIS that follows the REST API pattern

