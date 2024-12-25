"use strict";
class AbstractFigureClass {
}
class Circle extends AbstractFigureClass {
    constructor(color, radius) {
        super();
        this.name = 'Circle';
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.round(2 * Math.PI * Math.pow(this.radius, 2));
    }
    printInfo() {
        return `${this.color} ${this.name} with radius ${this.radius} has area: ${this.calculateArea()}  `;
    }
}
const myCircle = new Circle('red', 2);
console.log(myCircle.calculateArea());
console.log(myCircle.printInfo());
