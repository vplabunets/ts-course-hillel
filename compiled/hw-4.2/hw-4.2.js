"use strict";
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
    constructor(message) {
        super(message);
        this.name = 'calculationError';
    }
}
var Operations;
(function (Operations) {
    Operations["Add"] = "add";
    Operations["Subtract"] = "subtract";
    Operations["Multiply"] = "multiply";
    Operations["Divide"] = "divide";
    Operations["Percent"] = "percent";
})(Operations || (Operations = {}));
class Calculator {
    add(argument1, argument2) {
        return argument1 + argument2;
    }
    subtract(argument1, argument2) {
        return argument1 - argument2;
    }
    multiply(argument1, argument2) {
        return argument1 * argument2;
    }
    divide(argument1, argument2) {
        if (argument2 !== 0) {
            return argument1 / argument2;
        }
        else {
            throw new calculationError('Division by 0 is forbidden');
        }
    }
    percent(argument1, argument2) {
        return (argument1 * argument2) / 100;
    }
    calculate(operation, argument1, argument2) {
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
                throw new calculationError('Invalid operation');
        }
    }
}
const myCalculator = new Calculator();
console.log('10 * 20 = 200', myCalculator.calculate(Operations.Multiply, 10, 20));
console.log('10 + 20 = 30', myCalculator.calculate(Operations.Add, 10, 20));
console.log('10 - 20 = -10', myCalculator.calculate(Operations.Subtract, 10, 20));
console.log('10 / 20 = 0.5', myCalculator.calculate(Operations.Divide, 10, 20));
console.log('10 % 20 = ', myCalculator.calculate(Operations.Percent, 10, 20));
