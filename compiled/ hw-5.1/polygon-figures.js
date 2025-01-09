"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonType = void 0;
const utils_1 = require("./utils");
const abstract_classes_1 = require("./abstract-classes");
var QuadrilateralType;
(function (QuadrilateralType) {
    QuadrilateralType["Rectangle"] = "Rectangle";
    QuadrilateralType["Square"] = "Square";
})(QuadrilateralType || (QuadrilateralType = {}));
var PolygonType;
(function (PolygonType) {
    PolygonType["Triangle"] = "Triangle";
    PolygonType["Pentagon"] = "Pentagon";
    PolygonType["Hexagon"] = "Hexagon";
    PolygonType["Heptagon"] = "Heptagon";
    PolygonType["Octagon"] = "Octagon";
    PolygonType["Nonagon"] = "Nonagon";
    PolygonType["Decagon"] = "Decagon";
})(PolygonType || (exports.PolygonType = PolygonType = {}));
class Rectangle extends abstract_classes_1.AbstractPolygonFigureClass {
    constructor(color, sides) {
        super(QuadrilateralType.Rectangle, color);
        this.sides = sides;
    }
    printInfo() {
        return `${this.color} ${this.name} with sides ${this.sides} has perimeter: ${this.calculatePerimeter()}  `;
    }
    printAreaFormula() {
        return `Area of ${this.name} = side1 * side2`;
    }
}
const myRectangle = new Rectangle('yellow', [2, 4, 2, 4]);
console.log('Rectangle has', myRectangle.getNumberOfSides());
console.log('Rectangle perimeter:', myRectangle.calculatePerimeter());
console.log(myRectangle.printPerimeterFormula());
console.log('Rectangle info:', myRectangle.printInfo());
class Square extends abstract_classes_1.AbstractPolygonFigureClass {
    constructor(color, sides) {
        super(QuadrilateralType.Square, color);
        this.sides = sides;
    }
    printInfo() {
        return `${this.color} ${this.name} with sides ${this.sides} has perimeter: ${this.calculatePerimeter()}  `;
    }
    printAreaFormula() {
        return `Area of ${this.name} = side1^2`;
    }
}
const mySquare = new Square('yellow', [2, 2, 2, 2]);
console.log('Square has', mySquare.getNumberOfSides(), ' sides');
console.log('Square perimeter:', mySquare.calculatePerimeter());
console.log(mySquare.printPerimeterFormula());
console.log('Square info:', mySquare.printInfo());
class Triangle extends abstract_classes_1.AbstractPolygonFigureClass {
    constructor(color, sides) {
        super('Triangle', color);
        this.triangleType = '';
        if ((0, utils_1.isTriangle)(sides)) {
            this.sides = sides;
        }
        else
            throw new Error('Triangle with such side do not exist.');
    }
    printInfo() {
        return `${this.color} ${this.name} with sides ${this.sides} has perimeter: ${this.calculatePerimeter()}  `;
    }
    printAreaFormula() {
        return `Area of ${this.name} = side1 * side2`;
    }
    printTriangleType() {
        this.triangleType = (0, utils_1.getTriangleType)(this.sides);
        return this.triangleType;
    }
    calcHeight() {
        this.printTriangleType();
        const SQUARE_SIDE = this.sides[0];
        if (this.triangleType === utils_1.TriangleTypes.Isosceles) {
            const [a, b, c] = this.sides;
            let side1 = a;
            let side2 = b;
            let base = c;
            if (a === b) {
                side1 = a;
                side2 = b;
                base = c;
            }
            else if (b === c) {
                side1 = b;
                side2 = c;
                base = a;
            }
            else if (a === c) {
                side1 = a;
                side2 = c;
                base = b;
            }
            const height = Math.sqrt(side1 * side2 - (base / 2) * (base / 2));
            return height.toFixed(2);
        }
        if (this.triangleType === utils_1.TriangleTypes.Equilateral) {
            return ((Math.sqrt(3) * SQUARE_SIDE) / 2).toFixed(2);
        }
        if (this.triangleType === utils_1.TriangleTypes.Scalene) {
            return 'Height of scalene triangle should be calculated in a separate task';
        }
    }
}
const myTriangle = new Triangle('pink', [4, 5, 4]);
console.log('Triangle has', myTriangle.getNumberOfSides(), ' sides');
console.log('Triangle perimeter:', myTriangle.calculatePerimeter());
console.log(myTriangle.printPerimeterFormula());
console.log('Triangle info:', myTriangle.printInfo());
console.log(myTriangle.calcHeight());
class Polygon extends abstract_classes_1.AbstractPolygonFigureClass {
    constructor(color, sides) {
        super('Polygon', color);
        this.sides = sides;
    }
    printInfo() {
        return `${this.color} ${this.name} with sides ${this.sides} has perimeter: ${this.calculatePerimeter()}  `;
    }
    printAreaFormula() {
        return `Area of ${this.name} = side1 * side2`;
    }
}
const myPolygon = new Polygon('green', [2, 4, 2, 4, 4, 2]);
console.log('Polygons has', myPolygon.getNumberOfSides(), ' sides');
console.log('Polygon perimeter:', myPolygon.calculatePerimeter());
console.log(myPolygon.printPerimeterFormula());
console.log('Polygon info:', myPolygon.printInfo());
