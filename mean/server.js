var express = require('express'),
    stylus = require('stylus'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3030;
var datastoreURI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/app-test';

function compile (str, path) {
  return stylus(str).set('filename', path);
}


// setup server
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


// setup datastore
mongoose.connect(datastoreURI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error...'));
db.once('open', function() {
  console.log('db connection opened');
});

var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function (err, obj) {
  mongoMessage = obj.message;
});


// routes
app.get('/partials/:partialPath', function (req, res) {
  res.render('partials/' + req.params.partialPath);
});

app.get('*', function (req, res) {
  res.render('index', {
    mongoMessage: mongoMessage
  });
});

app.listen(port);
console.log('listening on port ' + port);
