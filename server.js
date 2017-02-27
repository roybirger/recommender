var express = require('express');

var app = express();
app.get('/', function(req, res, next){
  res.send(200);
});

app.post('/search', function(req, res, next){
  res.send(200);
});

app.listen(8000);
