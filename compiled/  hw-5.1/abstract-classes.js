"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractPolygonFigureClass = exports.PolygonType = exports.AbstractEllipticalFigureClass = exports.AbstractFigureClass = void 0;
class AbstractFigureClass {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
exports.AbstractFigureClass = AbstractFigureClass;
class AbstractEllipticalFigureClass extends AbstractFigureClass {
    constructor(name, color) {
        super(name, color);
    }
}
exports.AbstractEllipticalFigureClass = AbstractEllipticalFigureClass;
var PolygonType;
(function (PolygonType) {
    PolygonType[PolygonType["Triangle"] = 3] = "Triangle";
    PolygonType[PolygonType["Quadrilateral"] = 4] = "Quadrilateral";
    PolygonType[PolygonType["Pentagon"] = 5] = "Pentagon";
    PolygonType[PolygonType["Hexagon"] = 6] = "Hexagon";
    PolygonType[PolygonType["Heptagon"] = 7] = "Heptagon";
    PolygonType[PolygonType["Octagon"] = 8] = "Octagon";
    PolygonType[PolygonType["Nonagon"] = 9] = "Nonagon";
    PolygonType[PolygonType["Decagon"] = 10] = "Decagon";
})(PolygonType || (exports.PolygonType = PolygonType = {}));
class AbstractPolygonFigureClass extends AbstractFigureClass {
    constructor(name, color) {
        super(name, color);
    }
    getNumberOfSides() {
        return this.sides.length;
    }
    calculatePerimeter() {
        return this.sides.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
    printPerimeterFormula() {
        return ('Perimeter formula: ' +
            this.sides.reduce((accumulator, _, index) => {
                if (index === this.sides.length - 1) {
                    return accumulator + `side${index + 1}.`;
                }
                return accumulator + `side${index + 1} + `;
            }, ''));
    }
}
exports.AbstractPolygonFigureClass = AbstractPolygonFigureClass;
