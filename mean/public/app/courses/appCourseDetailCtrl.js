angular.module('app').controller('appCourseDetailCtrl', function ($scope, $routeParams, appCourse) {
  $scope.course = appCourse.get({_id: $routeParams.id});
});