
var app = angular.module('app', [])
	.config(function($routeProvider){

    $routeProvider.when('/login', {
      templateUrl: 'login.html',
      controller: 'LoginController'
    });

    $routeProvider.otherwise({
      redirectTo: '/login'
    });

});

app.controller('LoginController', function() {}

);
