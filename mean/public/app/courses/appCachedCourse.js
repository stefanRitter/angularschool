angular.module('app').factory('appCachedCourse', function (appCourse) {
  var courseList = [];

  return {
    query: function () {
      if (courseList.length === 0) {
        courseList = appCourse.query();
      }
      return courseList;
    },
    
    get: function (obj) {
      var course;
      courseList.forEach(function (crs) {
        if (crs._id === obj.id) {
          course = crs;
        }
      });
      return !course ? appCourse.get({id: obj.id}) : course;
    }
  };
});