export abstract class AbstractFigureClass {
  public readonly name: string;
  public readonly color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  calculateArea?(): number;
  abstract calculatePerimeter(): number;
  abstract printInfo(): string;
}

export abstract class AbstractEllipticalFigureClass extends AbstractFigureClass {
  abstract radius: number | number[];

  constructor(name: string, color: string) {
    super(name, color);
  }

  abstract calculateArea(): number;
  abstract calculatePerimeter(): number;
  abstract printInfo(): string;
}

export enum PolygonType {
  Triangle = 3,
  Quadrilateral = 4,
  Pentagon = 5,
  Hexagon = 6,
  Heptagon = 7,
  Octagon = 8,
  Nonagon = 9,
  Decagon = 10,
}

export abstract class AbstractPolygonFigureClass extends AbstractFigureClass {
  abstract sides: number[];

  constructor(name: string, color: string) {
    super(name, color);
  }

  getNumberOfSides(): number {
    return this.sides.length;
  }
  calculatePerimeter(): number {
    return this.sides.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
  }
  printPerimeterFormula(): string {
    return (
      'Perimeter formula: ' +
      this.sides.reduce((accumulator: string, _: number, index: number) => {
        if (index === this.sides.length - 1) {
          return accumulator + `side${index + 1}.`;
        }
        return accumulator + `side${index + 1} + `;
      }, '')
    );
  }
  abstract printAreaFormula(): string;
}
