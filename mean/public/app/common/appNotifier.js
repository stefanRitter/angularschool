angular.module('app').value('appToastr', toastr);

angular.module('app').factory('appNotifier', function (appToastr) {
  return {
    notify: function (msg) {
      appToastr.success(msg);
      console.log(msg);
    },
    error: function (msg) {
      appToastr.error(msg);
      console.log(msg);
    }
  };
});
