'use strict';

describe('persisting expenses', function () {

  beforeEach(module('app'));

  describe('callbacks', function () {

    it('should call back when persisted', inject(function (expensesDataService) {
      var spyCallback = jasmine.createSpy('spyCallback');
      expensesDataService.persistExpenses(spyCallback);
      expect(spyCallback).toHaveBeenCalled();
    }));
  });
});
