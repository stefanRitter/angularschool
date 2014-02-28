angular.module('app').factory('appCourse', function ($resource) {
  var courseResource = $resource('/api/courses/:id', {_id: "@id"}, {
    update: {method: 'PUT', isArray: false}
  });
  return courseResource;
});