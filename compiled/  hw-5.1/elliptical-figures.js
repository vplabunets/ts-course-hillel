"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_classes_1 = require("./abstract-classes");
class Circle extends abstract_classes_1.AbstractEllipticalFigureClass {
    constructor(color, radius) {
        super('Circle', color);
        this.radius = radius;
    }
    calculateArea() {
        return +(Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    }
    calculatePerimeter() {
        return +(2 * Math.PI * this.radius).toFixed(2);
    }
    printInfo() {
        return `${this.color} ${this.name} with radius ${this.radius} has area: ${this.calculateArea()}  `;
    }
}
class Ellipse extends abstract_classes_1.AbstractEllipticalFigureClass {
    constructor(color, radius) {
        super('Ellipse', color);
        this.radius = radius;
    }
    calculateArea() {
        return +(Math.PI * this.radius[0] * this.radius[1]).toFixed(2);
    }
    calculatePerimeter() {
        return (4 *
            ((Math.PI * this.radius[0] * this.radius[1] + Math.pow(this.radius[0] + this.radius[1], 2)) /
                (this.radius[0] + this.radius[1])));
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
            return +(Math.PI * Math.pow(this.radius, 2)).toFixed(2);
        }
        else {
            return +(Math.PI * this.radius[0] * this.radius[1]).toFixed(2);
        }
    }
    calculatePerimeter() {
        if (typeof this.radius === 'number') {
            return +(2 * Math.PI * this.radius).toFixed(2);
        }
        else {
            return (4 *
                ((Math.PI * this.radius[0] * this.radius[1] + Math.pow(this.radius[0] + this.radius[1], 2)) /
                    (this.radius[0] + this.radius[1])));
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
