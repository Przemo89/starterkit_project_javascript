'use strict';

var notANumberProvidedException,notANumberInFactorialProvidedException, negativeNumberProvidedException, divideByZeroException, calculator;
notANumberProvidedException = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Function needs two numbers as arguments.");
  }
};

notANumberInFactorialProvidedException = function (a) {
  if (typeof a !== 'number') {
    throw new Error("Factorial function needs positive number as argument.");
  }
};

negativeNumberProvidedException = function (a) {
  if (a < 1) {
    throw new Error("Factorial function needs numeric value >= 1.");
  }
};

divideByZeroException = function (b) {
  if (b === 0) {
    throw new Error("Cannot divide by 0.");
  }
};

calculator = (function () {
  return {
    add: function (a, b) {
      notANumberProvidedException(a, b);
      return a + b;
    },
    substract: function (a, b) {
      notANumberProvidedException(a, b);
      return a - b;
    },
    divide: function (a, b) {
      notANumberProvidedException(a, b);
      divideByZeroException(b);
      return a / b;
    },
    multiply: function (a, b) {
      notANumberProvidedException(a, b);
      return a * b;
    },
    factorial: function (a) {
      var i = 1, result = 1;
        notANumberInFactorialProvidedException(a);
        negativeNumberProvidedException(a);
      for (i; i <= a; i++) {
        result = result * i;
      }
      return result;
    }
  }
})();
