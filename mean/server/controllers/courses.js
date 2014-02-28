var Couse = require('mongoose').model('Course');

exports.getCourses = function (req, res) {
  Couse.find({}).exec(function (err, collection) {
    res.send(collection);
  });
};