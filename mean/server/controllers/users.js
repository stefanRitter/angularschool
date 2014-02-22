var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    encrypt = require('../utils/encryption.js');


exports.getUser = function (req, res) {
  User.find().exec(function (err, collection) {
    res.send(collection);
  });
};


exports.createUser = function (req, res, next) {
  var userBody = req.body;
  userBody.salt = encrypt.createSalt();
  userBody.password = encrypt.hashPwd(userBody.salt, userBody.password);

  User.create(userBody, function (err, user) {
    if (err) {
      if (err.toString().indexOf('E11000') > -1) {
        err = new Error('Dublicate Username');
      }
      
      res.satus(400);
      return res.send({reason: err.toString()});
    }

    req.logIn(user, function (err) {
      if (err) { return next(err); }
      res.send();
    });
  });
};
