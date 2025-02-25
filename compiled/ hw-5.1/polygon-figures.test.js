"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polygon_figures_1 = require("./polygon-figures");
const utils_1 = require("./utils");
describe('Rectangle Class', () => {
    const rectangle = new polygon_figures_1.Rectangle('yellow', [2, 4, 2, 4]);
    test('should return correct number of sides', () => {
        expect(rectangle.getNumberOfSides()).toBe(4);
    });
    test('should calculate correct perimeter', () => {
        expect(rectangle.calculatePerimeter()).toBe(12);
    });
    test('should return correct area formula', () => {
        expect(rectangle.printAreaFormula()).toBe('Area of Rectangle = side1 * side2');
    });
    test('should return correct info string', () => {
        expect(rectangle.printInfo()).toBe('yellow Rectangle with sides 2,4,2,4 has perimeter: 12  ');
    });
});
describe('Square Class', () => {
    const square = new polygon_figures_1.Square('blue', [3, 3, 3, 3]);
    test('should return correct number of sides', () => {
        expect(square.getNumberOfSides()).toBe(4);
    });
    test('should calculate correct perimeter', () => {
        expect(square.calculatePerimeter()).toBe(12);
    });
    test('should return correct area formula', () => {
        expect(square.printAreaFormula()).toBe('Area of Square = side1 * side2');
    });
    test('should return correct info string', () => {
        expect(square.printInfo()).toBe('blue Square with sides 3,3,3,3 has perimeter: 12  ');
    });
});
describe('Triangle Class', () => {
    test('should throw error if sides do not form a triangle', () => {
        expect(() => new polygon_figures_1.Triangle('red', [1, 2, 10])).toThrow('Triangle with such side do not exist.');
    });
    const triangle = new polygon_figures_1.Triangle('pink', [4, 5, 4]);
    test('should return correct number of sides', () => {
        expect(triangle.getNumberOfSides()).toBe(3);
    });
    test('should calculate correct perimeter', () => {
        expect(triangle.calculatePerimeter()).toBe(13);
    });
    test('should return correct area formula', () => {
        expect(triangle.printAreaFormula()).toBe('Area of Triangle = side1 * side2');
    });
    test('should return correct triangle type', () => {
        expect(triangle.printTriangleType()).toBe(utils_1.TriangleTypes.Isosceles);
    });
});
describe('Polygon Class', () => {
    const polygon = new polygon_figures_1.Polygon('green', [2, 4, 2, 4, 4, 2]);
    test('should return correct number of sides', () => {
        expect(polygon.getNumberOfSides()).toBe(6);
    });
    test('should calculate correct perimeter', () => {
        expect(polygon.calculatePerimeter()).toBe(18);
    });
    test('should return correct area formula', () => {
        expect(polygon.printAreaFormula()).toBe('Area of Polygon = side1 * side2');
    });
    test('should return correct info string', () => {
        expect(polygon.printInfo()).toBe('green Polygon with sides 2,4,2,4,4,2 has perimeter: 18  ');
    });
});
