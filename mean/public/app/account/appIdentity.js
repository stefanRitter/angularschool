angular.module('app').factory('appIdentity', function ($window) {
  var currentUser = $window.bootstrappedUser || undefined;

  return {
    currentUser: currentUser,
    isAuthenticated: function () {
      return !!this.currentUser;
    }
  };
});