var mongoose = require('mongoose');

module.exports = function (config) {
  mongoose.connect(config.datastoreURI);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'db connection error...'));
  db.once('open', function() {
    console.log('db connection opened');
  });

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String
  });

  var User = mongoose.model('User', userSchema);
  User.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      User.create({firstName: 'Stefan', lastName: 'Ritter', username: 'stef'});
      User.create({firstName: 'Paul', lastName: 'Hammer', username: 'paul'});
      User.create({firstName: 'Jakob', lastName: 'Steiner', username: 'jakob'});
    }
  });
};
