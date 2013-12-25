
var app = angular.module('app', [])
	.config(function($routeProvider){

    $routeProvider.when('/login', {
      templateUrl: 'login.html',
      controller: 'LoginController'
    });

    $routeProvider.when('/home', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    });

    $routeProvider.otherwise({
      redirectTo: '/login'
    });

});

app.controller('LoginController', function($scope, $location) {
  $scope.credentials = { username: "", password: ""};
  
  $scope.login = function() {
    if ($scope.credentials.username === 'blub') {
      $location.path('/home');
    }
  };
});


app.controller('HomeController', function($scope, $location) {
  $scope.title = 'Scoped Title';
  $scope.message = 'Mouse over these images...';

  $scope.logout = function() {
     $location.path('/login');
  };
});

app.directive('showsMessageWhenHovered', function() {
  return {
    restrict: 'A', // A = Attribute, C = Classname, E = Element, M = HTML Comment
    link: function (scope, element, attributes) {
      var originalMessage = scope.message;
      
      element.bind('mouseover', function() {
        scope.message = attributes.message;
        scope.$apply();
      });
      
      element.bind('mouseout', function() {
        scope.message = originalMessage;
        scope.$apply();
      });
    }
  };
});
