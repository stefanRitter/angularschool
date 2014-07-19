
describe('Expense Objects', function () {

  var expenseItem, expense;

  beforeEach(function () {
    expenseItem = new ExpenseItem(100);
    expense = new Expense(expenseItem);
  });

  it('should be of type ExpenseItem', function () {
    expect(expense.expenseItem).toBe(expenseItem);
  });

  id('should have the correct expense amount', function () {
    expect(expenseItem.amount).toEqual(100);
  });
});
