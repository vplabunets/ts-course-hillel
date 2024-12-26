"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractPolygonFigureClass = exports.AbstractEllipticalFigureClass = exports.AbstractFigureClass = void 0;
class AbstractFigureClass {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
exports.AbstractFigureClass = AbstractFigureClass;
class AbstractEllipticalFigureClass extends AbstractFigureClass {
}
exports.AbstractEllipticalFigureClass = AbstractEllipticalFigureClass;
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
