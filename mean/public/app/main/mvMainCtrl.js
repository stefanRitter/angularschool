angular.module('app').controller('mvMainCtrl', function ($scope) {
  $scope.courses = [
    {name: 'featured course', featured: true, published: new Date()},
    {name: 'not featured course', featured: false, published: new Date()}
  ];
});
