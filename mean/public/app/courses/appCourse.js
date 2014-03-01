angular.module('app').factory('appCourse', function ($resource) {
  var courseResource = $resource('/api/courses/:id', {_id: "@id"});
  return courseResource;
});