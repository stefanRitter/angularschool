var Course = require('mongoose').model('Course');

exports.getCourses = function (req, res) {
  Course.find({}).exec(function (err, collection) {
    res.send(collection);
  });
};

exports.getCourseById = function (req, res) {
  Course.findOne({_id: req.params.id}).exec(function (err, obj) {
    if (err) { res.send(404); }
    res.send(obj);
  });
};