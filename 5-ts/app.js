"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
(0, http_1.createServer)(function (req, res) {
    res.end('Hello world');
})
    .listen(8080, function () {
    console.log('Server started at port 8080');
});
