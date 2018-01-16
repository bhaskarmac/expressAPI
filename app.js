var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/blocks', function (request, response) {
  var blocks = ['fixed', 'movable', 'rotating'];
  response.json(blocks);
});

app.get('/redirectme', function (request, response) {
  response.redirect('/newurl');
});

app.listen(3000, function () {
  console.log('Listening at localhost:3000');
});
