"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_classes_1 = require("./abstract-classes");
const PI = Math.PI;
const POWER_VALUE = 2;
const CIRCLE_PERIMETER_MULTIPLIER = 2;
const ELLIPSE_PERIMETER_MULTIPLIER = 4;
class Circle extends abstract_classes_1.AbstractEllipticalFigureClass {
    constructor(color, radius) {
        super('Circle', color);
        this.radius = radius;
    }
    calculateArea() {
        return +(PI * Math.pow(this.radius, POWER_VALUE)).toFixed(2);
    }
    calculatePerimeter() {
        return +(CIRCLE_PERIMETER_MULTIPLIER * PI * this.radius).toFixed(2);
    }
    printInfo() {
        return `${this.color} ${this.name} with radius ${this.radius} has area: ${this.calculateArea()}  `;
    }
}
class Ellipse extends abstract_classes_1.AbstractEllipticalFigureClass {
    constructor(color, radius) {
        super('Ellipse', color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        const [majorSemiAxis, minorSemiAxes] = this.radius;
        return +(PI * majorSemiAxis * minorSemiAxes).toFixed(2);
    }
    calculatePerimeter() {
        const [majorSemiAxis, minorSemiAxes] = this.radius;
        return (ELLIPSE_PERIMETER_MULTIPLIER *
            ((PI * majorSemiAxis * minorSemiAxes + Math.pow(majorSemiAxis + minorSemiAxes, POWER_VALUE)) /
                (majorSemiAxis + minorSemiAxes)));
    }
    printInfo() {
        return `${this.color} ${this.name} with radius ${this.radius} has area: ${this.calculateArea()}  `;
    }
}
class EllipticalFigure extends abstract_classes_1.AbstractEllipticalFigureClass {
    constructor(name, color, radius) {
        super(name, color);
        this.radius = radius;
    }
    calculateArea() {
        if (typeof this.radius === 'number') {
            return +(PI * Math.pow(this.radius, POWER_VALUE)).toFixed(2);
        }
        else {
            const [majorSemiAxis, minorSemiAxes] = this.radius;
            return +(PI * majorSemiAxis * minorSemiAxes).toFixed(2);
        }
    }
    calculatePerimeter() {
        if (typeof this.radius === 'number') {
            return +(CIRCLE_PERIMETER_MULTIPLIER * PI * this.radius).toFixed(2);
        }
        else {
            const [majorSemiAxis, minorSemiAxes] = this.radius;
            return (ELLIPSE_PERIMETER_MULTIPLIER *
                ((PI * majorSemiAxis * minorSemiAxes + Math.pow(majorSemiAxis + minorSemiAxes, POWER_VALUE)) /
                    (majorSemiAxis + minorSemiAxes)));
        }
    }
    printInfo() {
        return `${this.color} ${this.name} with radius ${this.radius} has area: ${this.calculateArea()}  `;
    }
}
const myCircle = new Circle('red', 2);
console.log(myCircle.calculateArea());
console.log(myCircle.printInfo());
const myEllipse = new Ellipse('blue', [2, 2]);
console.log(myEllipse.calculateArea());
console.log(myEllipse.printInfo());
const myCircle2 = new EllipticalFigure('Circle', 'blue', 2);
console.log(myCircle2.calculateArea());
console.log(myCircle2.printInfo());
const myEllipse2 = new EllipticalFigure('Ellipse', 'blue', [2, 2]);
console.log(myEllipse2.calculateArea());
console.log(myEllipse2.printInfo());
