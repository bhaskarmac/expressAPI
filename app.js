var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.write('Hello World endpoint');
  response.end();
});

app.listen(3000, function () {
  console.log('Listening at localhost:3000');
});
