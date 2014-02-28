
angular.module('app').controller('appCourseListCtrl', function ($scope, appCourse) {
  $scope.courses = appCourse.query();

  $scope.sortOptions = [{value: 'title', text: 'Sort by Title'},
    {vaue: 'published', text: 'Sort by Publish Date'}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});