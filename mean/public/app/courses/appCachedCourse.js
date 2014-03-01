angular.module('app').factory('appCachedCourse', function (appCourse) {
  var courseList;

  return {
    query: function () {
      if (!courseList) {
        courseList = appCourse.query();
      }
      return courseList;
    }
  };
});