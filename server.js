const express = require('express');
const bodyParser = require('body-parser');
const trainingLogic = require('./training');

const net = trainingLogic.train();

var app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res, next) {


});

app.post('/search', function (req, res, next) {
    var user = {
        age: req.body.age,
        gender: req.body.gender
    };

    res.json(trainingLogic.getResult(user, net));

});

app.listen(8000);
