
angular.module('app').factory('appAuth', function ($http, $q, appIdentity) {
  return {
    authenticateUser: function (username, password) {
      var dfd = $q.defer();

      $http
        .post('/login', {username: username, password: password})
        .then(function (res) {
          if (res.data.success) {
            appIdentity.currentUser = res.data.user;
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
    }
  };
});