// get:
//  used to get information from a web server e.g get/messages, get/friends/15

// post:
// used to add new information to a web server e.g post/messages

// put:
// used to modify information in web server e.g put/messages/15

// delete:
// used to delete information in a web server e.g delete/friends/5

// The 4 parts of a http request:
// 1. Method: defines the operation that the browser wants to perform on the server e.g post/...
// 2. Path: defines the resource that the browser wants to access in the server. e.g .../messages/
// 3. Body: The data that is being sent to the server e.g {text:"hello", photo:"smile.jpg"}
// 4. Headers: defines meta data (extra info) for the data being sent

// The 3 parts of a http response:
// 1. Headers: defines meta data (extra info) for the data being retrieved e.g content-type: application/json
// 2. Body:  The data that is being retrieved from the server e.g {text:"hi", photo:"wave.jpg"}
// 3. Status Code: The status of the response e.g 200 for success