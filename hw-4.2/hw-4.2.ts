// Вам необхідно створити інтерфейс і відповідний функціонал для реалізації простого калькулятора.

// Калькулятор працюватиме з базовими арифметичними операціями,

// а також забезпечить додаткову операцію для обчислення відсотка від числа.

// Створіть інтерфейс ICalculator, який описуватиме об'єкт-калькулятор.

// Цей інтерфейс має містити методи для виконання наступних операцій:

// add - додавання
// subtract - віднімання
// multiply - множення
// divide - ділення
// percent - обчислення відсотка
// Створіть клас Calculator, який реалізує ICalculator та дозволяє виконувати обчислення:

// Необхідно описати метод, що прийматиме "операцію" та необхідні параметри
// За потреби реалізувати перевантаження

export class CalculationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CalculationError';
  }
}

export enum Operations {
  Add = 'add',
  Subtract = 'subtract',
  Multiply = 'multiply',
  Divide = 'divide',
  Percent = 'percent',
}

type CalculateReturnType = number | never;

interface ICalculator {
  add(argument1: number, argument2: number): number;
  subtract(argument1: number, argument2: number): number;
  multiply(argument1: number, argument2: number): number;
  divide(argument1: number, argument2: number): number;
  percent(argument1: number, argument2: number): number;
  calculate(operation: Operations, argument1: number, argument2: number): CalculateReturnType;
}

export class Calculator implements ICalculator {
  add(argument1: number, argument2: number): number {
    return argument1 + argument2;
  }

  subtract(argument1: number, argument2: number): number {
    return argument1 - argument2;
  }

  multiply(argument1: number, argument2: number): number {
    return argument1 * argument2;
  }

  divide(argument1: number, argument2: number): CalculateReturnType {
    if (argument2 !== 0) {
      return argument1 / argument2;
    } else {
      throw new CalculationError('Division by 0 is forbidden');
    }
  }

  percent(argument1: number, argument2: number): number {
    return (argument1 * argument2) / 100;
  }

  calculate(operation: Operations, argument1: number, argument2: number): number {
    switch (operation) {
      case Operations.Add:
        return this.add(argument1, argument2);
      case Operations.Subtract:
        return this.subtract(argument1, argument2);
      case Operations.Multiply:
        return this.multiply(argument1, argument2);
      case Operations.Divide:
        return this.divide(argument1, argument2);
      case Operations.Percent:
        return this.percent(argument1, argument2);
      default:
        throw new CalculationError('Invalid operation');
    }
  }
}

const myCalculator = new Calculator();
console.log('10 * 20 = 200', myCalculator.calculate(Operations.Multiply, 10, 20));
console.log('10 + 20 = 30', myCalculator.calculate(Operations.Add, 10, 20));
console.log('10 - 20 = -10', myCalculator.calculate(Operations.Subtract, 10, 20));
console.log('10 / 20 = 0.5', myCalculator.calculate(Operations.Divide, 10, 20));
console.log('10 % 20 = ', myCalculator.calculate(Operations.Percent, 10, 20));
