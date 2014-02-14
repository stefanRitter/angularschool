var express = require('express');
var stylus = require('stylus');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = 3030;

function compile (str, path) {
  return stylus(str).set('filename', path);
}

var app = express();


app.configure(function() {
  app.set('views', __dirname + '/server/views');
  app.set('view engine', 'jade');

  app.use(express.logger('dev'));

  app.use(express.bodyParser());

  app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
  }));

  app.use(express.static(__dirname + '/public'));
});

app.get('/partials/:partialPath', function (req, res) {
  res.render('partials/' + req.params.partialPath);
});

app.get('*', function (req, res) {
  res.render('index');
});

app.listen(port);
console.log('listening on port ' + port);
