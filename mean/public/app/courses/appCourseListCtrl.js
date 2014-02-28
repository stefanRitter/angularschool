
angular.module('app').controller('appCourseListCtrl', function ($scope, appCourse) {
  $scope.courses = appCourse.query();
});