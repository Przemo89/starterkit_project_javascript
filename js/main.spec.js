'use strict';

describe('calculator module tests', function () {
  it('should add two numbers', function () {
    // given
    var a = 4, b = 5, properResult = 9, result;

    // when
    result = calculator.add(a, b);

    // then
    expect(result).toBe(properResult);
  });

  it('should throw error when passing anything else than number as argument to add function', function () {
    // given
    var a = 'asd', b = 'afds';

    // when then
    expect(function () {calculator.add(a, b); }).toThrow(new Error("Function needs two numbers as arguments."));
  });

  it('should throw error when passing less than two arguments to add function', function () {
    // given
    var a = 5;

    // when then
    expect(function () {calculator.add(a); }).toThrow(new Error("Function needs two numbers as arguments."));
  });

  it('should substract two numbers', function () {
    // given
    var a = 4, b = 5, properResult = -1, result;

    // when
    result = calculator.substract(a, b);

    // then
    expect(result).toBe(properResult);
  });

  it('should throw error when passing anything else than number as argument to substract function', function () {
    // given
    var a = 'asd', b = 'afds';

    // when then
    expect(function () {calculator.substract(a, b); }).toThrow(new Error("Function needs two numbers as arguments."));
  });

  it('should throw error when passing less than two arguments to substract function', function () {
    // given
    var a = 5;

    // when then
    expect(function () {calculator.substract(a); }).toThrow(new Error("Function needs two numbers as arguments."));
  });

  it('should multiply two numbers', function () {
    // given
    var a = 4, b = 5, properResult = 20, result;

    // when
    result = calculator.multiply(a, b);

    // then
    expect(result).toBe(properResult);
  });

  it('should throw error when passing anything else than number as argument to multiply function', function () {
    // given
    var a = 'asd', b = 'afds';

    // when then
    expect(function () {calculator.multiply(a, b); }).toThrow(new Error("Function needs two numbers as arguments."));
  });

  it('should throw error when passing less than two arguments to multiply function', function () {
    // given
    var a = 5;

    // when then
    expect(function () {calculator.multiply(a); }).toThrow(new Error("Function needs two numbers as arguments."));
  });

  it('should divide two numbers', function () {
    // given
    var a = 20, b = 5, properResult = 4, result;

    // when
    result = calculator.divide(a, b);

    // then
    expect(result).toBe(properResult);
  });

  it('should throw error when passing anything else than number as argument to divide function', function () {
    // given
    var a = 'asd', b = 'afds';

    // when then
    expect(function () {calculator.divide(a, b); }).toThrow(new Error("Function needs two numbers as arguments."));
  });

  it('should throw error when passing less than two arguments to divide function', function () {
    // given when then
    expect(function () {calculator.divide(); }).toThrow(new Error("Function needs two numbers as arguments."));
  });

  it('should throw error when trying to divide by 0', function () {
    // given
    var a = 520, b = 0;

    // when then
    expect(function () {calculator.divide(a, b); }).toThrow(new Error("Cannot divide by 0."));
  });

  it('should calculate factorial for given number', function () {
    // given
    var a = 5, properResult = 120, result;

    // when
    result = calculator.factorial(a);

    // then
    expect(result).toBe(properResult);
  });

  it('should throw error when passing anything else than number as argument to factorial function', function () {
    // given
    var a = 'asd';

    // when then
    expect(function () {calculator.factorial(a); }).toThrow(new Error("Factorial function needs positive number as argument."));
  });

  it('should throw error when passing less than one argument to factorial function', function () {
    // given when then
    expect(function () {calculator.factorial(); }).toThrow(new Error("Factorial function needs positive number as argument."));
  });

  it('should throw error when passing number less than 1 as argument to factorial function', function () {
    // given
    var a = 0;

    // when then
    expect(function () {calculator.factorial(a); }).toThrow(new Error("Factorial function needs numeric value >= 1."));
  });
});
