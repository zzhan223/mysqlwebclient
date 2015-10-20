var express = require('express');
var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  database: 'peoples'
});

var parser = require('body-parser');

var port = process.argv[2] || 3000;

var app = express();
app.use(express.static(__dirname + '/client'));
app.listen(process.env.PORT || 3000);

app.use(parser.json());

app.get('/', function(req, res){
  res.render('index');
})

app.post('/click', function(req, res){
  console.log(req.body);
  var query = req.body.stuff;
  dbConnection.query(query, function(err, rows, field){
    res.send(rows);
  });
});

