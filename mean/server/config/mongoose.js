var mongoose = require('mongoose'),
    encrypt = require('../utils/encryption.js');

module.exports = function (config) {
  mongoose.connect(config.datastoreURI);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'db connection error...'));
  db.once('open', function() {
    console.log('db connection opened');
  });

  // seed users
  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    salt: String,
    password: String,
    roles: [String]
  });

  // remove sensitive data
  userSchema.methods.safe = function () {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      roles: this.roles
    };
  };

  userSchema.methods.authenticated = function (passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.password;
  };

  var User = mongoose.model('User', userSchema);
  User.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      var salt = encrypt.createSalt();
      var pwd = encrypt.hashPwd(salt, 'test');

      User.create({firstName: 'Stefan', lastName: 'Ritter', username: 'stef', salt: salt, password: pwd, roles: ['admin']});
      User.create({firstName: 'Paul', lastName: 'Hammer', username: 'paul', salt: salt, password: pwd, roles: []});
      User.create({firstName: 'Jakob', lastName: 'Steiner', username: 'jakob', salt: salt, password: pwd});
    }
  });
};
