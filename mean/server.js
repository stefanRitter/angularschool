var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./server/config/config')[env];

var passport = require('passport'),
    mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy;


// setup express
var app = express();
require('./server/config/express.js')(app, config);

// setup datastore
require('./server/config/mongoose.js')(config);


// setup auth
var User = mongoose.model('User');
passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne({username: username}).exec(function (err, user) {
      if (user && user.authenticated(password)) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }
));

passport.serializeUser(function (user, done) {
  if (user) done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findOne({_id: id}).exec(function (err, user) {
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});


// setup routes
require('./server/config/routes.js')(app);


app.listen(config.port);
console.log('listening on port ' + config.port);
