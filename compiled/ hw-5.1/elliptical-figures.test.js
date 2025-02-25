"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elliptical_figures_1 = require("./elliptical-figures");
describe('Circle Class', () => {
    const circle = new elliptical_figures_1.Circle('red', 2);
    test('should calculate correct area', () => {
        expect(circle.calculateArea()).toBeCloseTo(12.57, 2);
    });
    test('should calculate correct perimeter', () => {
        expect(circle.calculatePerimeter()).toBeCloseTo(12.57, 2);
    });
    test('should return correct info string', () => {
        expect(circle.printInfo()).toBe('red Circle with radius 2 has area: 12.57  ');
    });
});
describe('Ellipse Class', () => {
    const ellipse = new elliptical_figures_1.Ellipse('blue', [2, 2]);
    test('should calculate correct area', () => {
        expect(ellipse.calculateArea()).toBeCloseTo(12.57, 2);
    });
    test('should calculate correct perimeter', () => {
        expect(ellipse.calculatePerimeter()).toBeGreaterThan(ellipse.calculateArea());
    });
    test('should return correct info string', () => {
        expect(ellipse.printInfo()).toBe('blue Ellipse with radius 2,2 has area: 12.57  ');
    });
});
describe('EllipticalFigure Class', () => {
    const circle = new elliptical_figures_1.EllipticalFigure('Circle', 'blue', 2);
    const ellipse = new elliptical_figures_1.EllipticalFigure('Ellipse', 'green', [2, 2]);
    test('should calculate correct area for a circle', () => {
        expect(circle.calculateArea()).toBeCloseTo(12.57, 2);
    });
    test('should calculate correct area for an ellipse', () => {
        expect(ellipse.calculateArea()).toBeCloseTo(12.57, 2);
    });
    test('should calculate correct perimeter for a circle', () => {
        expect(circle.calculatePerimeter()).toBeCloseTo(12.57, 2);
    });
    test('should return correct info string for a circle', () => {
        expect(circle.printInfo()).toBe('blue Circle with radius 2 has area: 12.57  ');
    });
    test('should return correct info string for an ellipse', () => {
        expect(ellipse.printInfo()).toBe('green Ellipse with radius 2,2 has area: 12.57  ');
    });
});
