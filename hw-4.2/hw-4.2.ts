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

class calculationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'calculationError';
  }
}

enum Operations {
  Add = 'add',
  Subtract = 'subtract',
  Multiply = 'multiply',
  Divide = 'divide',
  Percent = 'percent',
}

type CalculateReturnType = number | never;

interface ICalculator {
  argument1: number;
  argument2: number;
  result: CalculateReturnType;
  reset(): void;
  add(): number;
  subtract(): number;
  multiply(): number;
  divide(): number;
  percent(): number;
  calculate(operation: Operations, argument1: number, argument2: number): CalculateReturnType;
}

class Calculator implements ICalculator {
  argument1: number;
  argument2: number;
  calculation: number = 0;

  constructor(argument1: number = 0, argument2: number = 0) {
    this.argument1 = argument1;
    this.argument2 = argument2;
  }

  get result(): number | never {
    return this.calculation;
  }

  reset(): void {
    this.argument1 = 0;
    this.argument2 = 0;
    this.calculation = 0;
  }

  add(): number {
    this.calculation = this.argument1 + this.argument2;
    return this.calculation;
  }

  subtract(): number {
    this.calculation = this.argument1 - this.argument2;
    return this.calculation;
  }

  multiply(): number {
    this.calculation = this.argument1 * this.argument2;
    return this.calculation;
  }

  divide(): CalculateReturnType {
    if (this.argument2 !== 0) {
      this.calculation = this.argument1 / this.argument2;
      return this.calculation;
    } else {
      throw new calculationError('Division by 0 is forbidden');
    }
  }

  percent(): number {
    this.calculation = (this.argument1 * this.argument2) / 100;
    return this.calculation;
  }

  calculate(operation: Operations, argument1: number, argument2: number): number {
    this.argument1 = argument1;
    this.argument2 = argument2;

    switch (operation) {
      case Operations.Add:
        return this.add();
      case Operations.Subtract:
        return this.subtract();
      case Operations.Multiply:
        return this.multiply();
      case Operations.Divide:
        return this.divide();
      case Operations.Percent:
        return this.percent();
      default:
        throw new calculationError('Invalid operation');
    }
  }
}

const myCalculator = new Calculator();
console.log(myCalculator.calculate(Operations.Multiply, 10, 20));
console.log(myCalculator.result);
