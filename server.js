var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/mult/:num', function (req, res) {
  res.send('Multiply!' + (req.params.num));
});

app.get('/hello', function (req, res) {
  res.send('<h1>Hello World Bigger!</h1>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
