angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
  //$locationProvider.html5mode(true);

  $routeProvider
    .when('/', {templateUrl: '/partials/main/main', controller: 'appMainCtrl'});
});