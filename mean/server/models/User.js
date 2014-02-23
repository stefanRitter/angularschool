var mongoose = require('mongoose'),
    encrypt = require('../utils/encryption.js'),
    userSchema, User;


userSchema = mongoose.Schema({
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

User = mongoose.model('User', userSchema);

// seed users
exports.createDefaultUsers = function () {
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
