var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

app.use(express.static('public'));

app.get('/blocks', function (request, response) {
  var blocks = ['fixed', 'movable', 'rotating'];
  if(request.query.limit >= 0){
    response.json(blocks.splice(0, request.query.limit));
  }else {
    response.json(blocks);
  }
});

var blocks = {
    'Fixed': 'This block is fixed',
    'Movable': 'This block is movable',
    'Rotating': 'This block is rotating'
};

app.param('name', function (request, response, next) {
  var name = request.params.name;
  var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
  request.blockName = block;

  next();
})

app.get('/blocks/:name', function (request, response) {
  var description = blocks[request.blockName];
  if(!description){
    response.status(404).json('No description found for ' + request.params.name);
  }else {
    response.json(description);
  }
});

app.get('/redirectme', function (request, response) {
  response.redirect('/newurl');
});

app.listen(3000, function () {
  console.log('Listening at localhost:3000');
});
