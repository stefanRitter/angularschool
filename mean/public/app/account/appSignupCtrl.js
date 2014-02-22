angular.module('app').controller(function ($scope, $location, appUser, appAuth, appNotifier) {

  $scope.signup = function () {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      fistName: $scope.fname,
      lastName: $scope.lname
    };

    appAuth.createUser(newUserData).then(function () {
      appNotifier.notify('User account created');
      $location.path('/');
    }, function (reason) {
      appNotifier.error(reason);
    });
  };
});