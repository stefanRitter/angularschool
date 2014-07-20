
describe('expenseController', function () {

  var $controllerConstructor,
      scope;

  beforeEach(module('app'));
  beforeEach(inject(function ($controller, $rootScope) {
    $controllerConstructor = $controller;
    scope = $rootScope.$new();
  }));

  it('should have three expense items', function () {
    var ctrl = $controllerConstructor('expenseController', {$scope: scope});
    expect(ctrl.expenseItems.length).toBe(3);
  });

});
