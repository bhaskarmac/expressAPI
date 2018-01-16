var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.get('/blocks', function (request, response) {
  var blocks = ['fixed', 'movable', 'rotating'];
  response.send(blocks);
});

app.get('/redirectme', function (request, response) {
  response.redirect('/newurl');
});

app.listen(3000, function () {
  console.log('Listening at localhost:3000');
});
