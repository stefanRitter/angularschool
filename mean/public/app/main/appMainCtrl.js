angular.module('app').controller('appMainCtrl', function ($scope, appCachedCourse) {
  $scope.courses = appCachedCourse.query();
});
