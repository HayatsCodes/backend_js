"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
http.createServer(function (req, res) {
    res.end('Hello world');
})
    .listen(8080, function () {
    console.log('Server started at port 8080');
});
