
describe('expensesDataService', function () {

  beforeEach(module('app'));

  it('should return three expense items', inject(function (expensesDataService) {
    expect(expensesDataService.getExpenses().length).toBe(3);
  }));

  it('should contain a Taxi ExpenseItem', inject(function (expensesDataService) {
    var expenses = expensesDataService.getExpenses(),
        expenseItem = new ExpenseItem('Taxi', 'To airport', 89.95);

    expect(expenses).toContain(expenseItem);
  }));

  describe('reasonable expenses', function () {
    var taxi, dinner;

    beforeEach(function () {
      jasmine.addMatchers(customMatchers);
    });

    beforeEach(function () {
      taxi = new ExpenseItem('taxi', 'To airport', 89.95);
      dinner = new ExpenseItem('dinner', 'Dinner with John and Ward', 189.95);
    });

    it('Taxi should be a reasonable expense', function () {
      expect(taxi).toBeReasonableExpense();
    });

    it('Dinner should not be a reasonable expense', function () {
      expect(dinner).not.toBeReasonableExpense();
    });
  });
});
