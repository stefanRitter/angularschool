
angular.module('app').controller('appNavBarLoginCtrl', function ($scope, $location, appAuth, appNotifier, appIdentity) {
  
  $scope.identity = appIdentity;

  $scope.signin = function (username, password) {
    
    appAuth
      .authenticateUser(username, password)
      .then(function (success) {
        if (success) {
          appNotifier.notify('You have successfully logged in!');
        } else {
          appNotifier.notify('username/password combination incorrect');
        }
      });
  };

  $scope.signout = function () {
    appAuth.logoutUser().then(function() {
      $scope.username = $scope.password = '';
      appNotifier.notify('You are now logged out!');
      $location.path('/');
    });
  };
});
