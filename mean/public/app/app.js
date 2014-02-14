angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  //$locationProvider.html5mode(true);

  $routeProvider
    .when('/', {templateUrl: '/partials/main', controller: 'mainCtrl'});
});

// temp
angular.module('app').controller('mainCtrl', function ($scope) {
  $scope.myVar = 'Hello angular';
});