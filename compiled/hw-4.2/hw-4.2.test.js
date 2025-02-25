"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hw_4_2_1 = require("./hw-4.2");
describe('Calculator', () => {
    let calculator;
    beforeEach(() => {
        calculator = new hw_4_2_1.Calculator();
    });
    test('should add two numbers', () => {
        expect(calculator.calculate(hw_4_2_1.Operations.Add, 10, 20)).toBe(30);
    });
    test('should subtract two numbers', () => {
        expect(calculator.calculate(hw_4_2_1.Operations.Subtract, 20, 10)).toBe(10);
    });
    test('should multiply two numbers', () => {
        expect(calculator.calculate(hw_4_2_1.Operations.Multiply, 10, 20)).toBe(200);
    });
    test('should divide two numbers', () => {
        expect(calculator.calculate(hw_4_2_1.Operations.Divide, 20, 10)).toBe(2);
    });
    test('should calculate percentage', () => {
        expect(calculator.calculate(hw_4_2_1.Operations.Percent, 50, 10)).toBe(5);
    });
    test('should throw an error when dividing by zero', () => {
        expect(() => calculator.calculate(hw_4_2_1.Operations.Divide, 10, 0)).toThrow(hw_4_2_1.CalculationError);
    });
    test('should throw an error for invalid operation', () => {
        expect(() => calculator.calculate('invalid_operation', 10, 20)).toThrow(hw_4_2_1.CalculationError);
    });
});
