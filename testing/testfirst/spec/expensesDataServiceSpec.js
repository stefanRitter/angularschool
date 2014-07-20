
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
});
