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
  
  userBody.username = userBody.username.toLowerCase();
  userBody.salt = encrypt.createSalt();
  userBody.password = encrypt.hashPwd(userBody.salt, userBody.password);

  User.create(userBody, function (err, user) {
    if (err) {
      if (err.toString().indexOf('E11000') > -1) {
        err = new Error('Dublicate Username');
      }
      
      res.status(400);
      return res.send({reason: err.toString()});
    }

    req.logIn(user, function (err) {
      if (err) { return next(err); }
      res.send();
    });
  });
};


exports.updateUser = function (req, res) {
  var userUpdates = req.body;

  if (req.user._id !== userUpdates._id && !req.user.hasRole('admin')) {
    res.status(403);
    return res.end();
  }

  req.user.firstName = userUpdates.firstName;
  req.user.lastName = userUpdates.lastName;
  req.user.username = userUpdates.username;
  if (userUpdates.password && userUpdates.password.length > 0) {
    req.user.salt = encrypt.createSalt();
    req.user.password = encrypt.hashPwd(req.user.salt, userUpdates.password);
  }

  req.user.save(function (err) {
    if (err) {
      res.status(400);
      return res.send({reason: err.toString()});
    }

    res.send(req.user.safe());
  });
};
