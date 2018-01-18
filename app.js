var express = require('express');
var app = express();

app.use(express.static('public'));

var blocks = require('./routes/blocks');
app.use('/blocks', blocks);

app.get('/redirectme', function (request, response) {
  response.redirect('/newurl');
});

app.listen(3000, function () {
  console.log('Listening at localhost:3000');
});
