(function() {
  'use strict';

  angular.module('app')
    .controller('expenseController', [expenseController]);

  function expenseController () {
    var vm = this; // ViewModel
    vm.activate = activate;
    vm.expenseItems = [];

    activate();

    function activate() {
      vm.expenseItems = [
        {title: 'Taxi', description: 'To airport', amount: 89.95},
        {title: 'Lunch', description: 'At airport', amount: 15.40},
        {title: 'Coffee', description: 'Starbucks', amount: 4.93}
      ];
    }
  }
}());