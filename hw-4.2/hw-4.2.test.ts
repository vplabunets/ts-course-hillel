import { Calculator, Operations, CalculationError } from './hw-4.2';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should add two numbers', () => {
    expect(calculator.calculate(Operations.Add, 10, 20)).toBe(30);
  });

  test('should subtract two numbers', () => {
    expect(calculator.calculate(Operations.Subtract, 20, 10)).toBe(10);
  });

  test('should multiply two numbers', () => {
    expect(calculator.calculate(Operations.Multiply, 10, 20)).toBe(200);
  });

  test('should divide two numbers', () => {
    expect(calculator.calculate(Operations.Divide, 20, 10)).toBe(2);
  });

  test('should calculate percentage', () => {
    expect(calculator.calculate(Operations.Percent, 50, 10)).toBe(5);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => calculator.calculate(Operations.Divide, 10, 0)).toThrow(CalculationError);
  });

  test('should throw an error for invalid operation', () => {
    expect(() => calculator.calculate('invalid_operation' as Operations, 10, 20)).toThrow(CalculationError);
  });
});
