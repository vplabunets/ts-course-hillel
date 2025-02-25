import { AbstractEllipticalFigureClass } from './abstract-classes';

const PI = Math.PI;
const POWER_VALUE = 2;
const CIRCLE_PERIMETER_MULTIPLIER = 2;
const ELLIPSE_PERIMETER_MULTIPLIER = 4;
export class Circle extends AbstractEllipticalFigureClass {
  radius: number;

  constructor(color: string, radius: number) {
    super('Circle', color);
    this.radius = radius;
  }

  calculateArea(): number {
    return +(PI * Math.pow(this.radius, POWER_VALUE)).toFixed(2);
  }
  calculatePerimeter(): number {
    return +(CIRCLE_PERIMETER_MULTIPLIER * PI * this.radius).toFixed(2);
  }

  printInfo(): string {
    return `${this.color} ${this.name} with radius ${this.radius} has area: ${this.calculateArea()}  `;
  }
}

export class Ellipse extends AbstractEllipticalFigureClass {
  color: string;
  radius: number[];

  constructor(color: string, radius: number[]) {
    super('Ellipse', color);
    this.color = color;
    this.radius = radius;
  }

  calculateArea(): number {
    const [majorSemiAxis, minorSemiAxes] = this.radius;

    return +(PI * majorSemiAxis * minorSemiAxes).toFixed(2);
  }
  calculatePerimeter(): number {
    const [majorSemiAxis, minorSemiAxes] = this.radius;

    return (
      ELLIPSE_PERIMETER_MULTIPLIER *
      ((PI * majorSemiAxis * minorSemiAxes + Math.pow(majorSemiAxis + minorSemiAxes, POWER_VALUE)) /
        (majorSemiAxis + minorSemiAxes))
    );
  }

  printInfo(): string {
    return `${this.color} ${this.name} with radius ${this.radius} has area: ${this.calculateArea()}  `;
  }
}

export class EllipticalFigure extends AbstractEllipticalFigureClass {
  radius: number | number[];

  constructor(name: string, color: string, radius: number | number[]) {
    super(name, color);
    this.radius = radius;
  }

  calculateArea(): number {
    if (typeof this.radius === 'number') {
      return +(PI * Math.pow(this.radius, POWER_VALUE)).toFixed(2);
    } else {
      const [majorSemiAxis, minorSemiAxes] = this.radius;
      return +(PI * majorSemiAxis * minorSemiAxes).toFixed(2);
    }
  }
  calculatePerimeter(): number {
    if (typeof this.radius === 'number') {
      return +(CIRCLE_PERIMETER_MULTIPLIER * PI * this.radius).toFixed(2);
    } else {
      const [majorSemiAxis, minorSemiAxes] = this.radius;

      return (
        ELLIPSE_PERIMETER_MULTIPLIER *
        ((PI * majorSemiAxis * minorSemiAxes + Math.pow(majorSemiAxis + minorSemiAxes, POWER_VALUE)) /
          (majorSemiAxis + minorSemiAxes))
      );
    }
  }

  printInfo(): string {
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
