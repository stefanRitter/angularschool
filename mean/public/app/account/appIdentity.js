angular.module('app').factory('appIdentity', function ($window, appUser) {
  var currentUser;
  
  if (!!$window.bootstrappedUser) {
    currentUser = new appUser();
    angular.extend(currentUser, $window.bootstrappedUser);
  }

  return {
    currentUser: currentUser,
    isAuthenticated: function () {
      return !!this.currentUser;
    },
    isAuthorized: function (role) {
      return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }
  };
});