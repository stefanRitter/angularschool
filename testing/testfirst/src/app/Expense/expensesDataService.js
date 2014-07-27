(function(){
  'use strict';
  angular.module('app')
    .factory('expensesDataService', ['$http', expensesDataService]);

  function expensesDataService ($http) {
    var service = {
      getExpenses: function () {
        return [
          new ExpenseItem('Taxi', 'To airport', 89.95),
          new ExpenseItem('Lunch', 'At airport', 15.40),
          new ExpenseItem('Coffee', 'Starbucks', 4.93)
        ];
      },

      persistExpenses: function (reportExpenses) {
        reportExpenses();
      },

      reportExpenses: function () {
        
      }
    };

    return service;
  }
}());