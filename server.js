// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORT = 7000;
var PORTtwo = 7500;
// Here we create a generic function to handle requests and responses
function handleRequestOne(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("Looking good!");
};

function handleRequestTwo(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("Hit the gym fatty!");
};

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORT, function() {

  console.log("Server listening on: http:localhost:%s", PORT);

});

serverTwo.listen(PORTtwo, function() {

  console.log("Server listening on: http:localhost:%s", PORTtwo);

});
