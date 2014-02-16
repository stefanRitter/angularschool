
angular.module('app').factory('appAuth', function ($http, $q, appIdentity, appUser) {
  return {
    authenticateUser: function (username, password) {
      var dfd = $q.defer();

      $http
        .post('/login', {username: username, password: password})
        .then(function (res) {
          if (res.data.success) {
            var user = new appUser();
            angular.extend(user, res.data.user);
            appIdentity.currentUser = user;
            dfd.resolve(true);
          } else {
            dfd.resolve(false);
          }
        });

      return dfd.promise;
    },

    logoutUser: function () {
      var dfd = $q.defer();

      $http
        .post('/logout', {logout: true})
        .then(function (res) {
          appIdentity.currentUser = undefined;
          dfd.resolve(true);
        });

      return dfd.promise;
    },

    authorizeCurrentUserForRoute: function (role) {
      if (appIdentity.isAuthorized('admin')) {
        return true;
      }
      return $q.reject('not authorized');
    }
  };
});