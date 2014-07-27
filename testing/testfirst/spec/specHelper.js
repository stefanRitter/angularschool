var customMatchers = {
  toBeReasonableExpense: function () {
    return {
      compare: function (actual) {
        var pass = actual.isReasonable(),
            judgment = pass ? 'unreasonable' : 'reasonable';

        return {
          pass: pass,
          message: 'Expected expense to be a '+judgment+'expense'
        };
      }
    };
  }
};
