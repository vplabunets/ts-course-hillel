import { AbstractEllipticalFigureClass, AbstractPolygonFigureClass } from './abstract-classes';

class TestEllipse extends AbstractEllipticalFigureClass {
  radius: number[];

  constructor(color: string, radius: number[]) {
    super('Ellipse', color);
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius[0] * this.radius[1];
  }

  calculatePerimeter(): number {
    return 2 * Math.PI * Math.sqrt((this.radius[0] ** 2 + this.radius[1] ** 2) / 2);
  }

  printInfo(): string {
    return `${this.color} ${this.name} with radius ${this.radius} has area: ${this.calculateArea().toFixed(2)}`;
  }
}

class TestPolygon extends AbstractPolygonFigureClass {
  sides: number[];

  constructor(name: string, color: string, sides: number[]) {
    super(name, color);
    this.sides = sides;
  }

  printInfo(): string {
    return `${this.color} ${this.name} with sides ${this.sides.join(', ')} has perimeter: ${this.calculatePerimeter()}`;
  }

  printAreaFormula(): string {
    return `Area formula for ${this.name} is specific to the shape.`;
  }
}

describe('AbstractEllipticalFigureClass', () => {
  let ellipse: TestEllipse;

  beforeEach(() => {
    ellipse = new TestEllipse('red', [5, 3]);
  });

  test('should calculate area correctly', () => {
    expect(ellipse.calculateArea()).toBeCloseTo(Math.PI * 5 * 3);
  });

  test('should calculate perimeter correctly', () => {
    expect(ellipse.calculatePerimeter()).toBeCloseTo(2 * Math.PI * Math.sqrt((5 ** 2 + 3 ** 2) / 2));
  });

  test('should print correct info', () => {
    expect(ellipse.printInfo()).toBe(`red Ellipse with radius 5,3 has area: ${(Math.PI * 5 * 3).toFixed(2)}`);
  });
});

describe('AbstractPolygonFigureClass', () => {
  let polygon: TestPolygon;

  beforeEach(() => {
    polygon = new TestPolygon('xxx', 'blue', [3, 4, 5]);
  });

  test('should get correct number of sides', () => {
    expect(polygon.getNumberOfSides()).toBe(3);
  });

  test('should calculate perimeter correctly', () => {
    expect(polygon.calculatePerimeter()).toBe(3 + 4 + 5);
  });

  test('should print correct perimeter formula', () => {
    expect(polygon.printPerimeterFormula()).toBe('Perimeter formula: side1 + side2 + side3.');
  });
});
