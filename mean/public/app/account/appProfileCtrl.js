
angular.module('app').controller('appProfileCtrl', function ($scope, appAuth, appIdentity, appNotifier) {
  $scope.currentUser = angular.copy(appIdentity.currentUser);

  $scope.update = function () {
    appAuth.updateCurrentUser($scope.currentUser).then(function () {
      appNotifier.notify('Your account has been updated');
    }, function (reason) {
      appNotifier.error(reason);
    });
  };
});