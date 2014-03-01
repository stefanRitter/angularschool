
angular.module('app').controller('appCourseListCtrl', function ($scope, appCachedCourse) {
  $scope.courses = appCachedCourse.query();

  $scope.sortOptions = [{value: 'title', text: 'Sort by Title'},
    {vaue: 'published', text: 'Sort by Publish Date'}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});