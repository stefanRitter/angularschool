
angular.module('app').controller('appAdminUsersCtrl', function ($scope, appUser) {
  $scope.users = appUser.query();
});