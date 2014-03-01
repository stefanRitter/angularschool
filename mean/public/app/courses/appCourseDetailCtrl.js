angular.module('app').controller('appCourseDetailCtrl', function ($scope, $routeParams, appCachedCourse) {
  $scope.course = appCachedCourse.get({id: $routeParams.id});
});