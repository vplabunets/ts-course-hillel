"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTriangleType = exports.TriangleTypes = exports.isTriangle = void 0;
function isTriangle(sides) {
    const [a, b, c] = sides;
    return a + b > c && a + c > b && b + c > a;
}
exports.isTriangle = isTriangle;
var TriangleTypes;
(function (TriangleTypes) {
    TriangleTypes["Equilateral"] = "Equilateral";
    TriangleTypes["Isosceles"] = "Isosceles";
    TriangleTypes["Scalene"] = "Scalene";
})(TriangleTypes || (exports.TriangleTypes = TriangleTypes = {}));
function getTriangleType(sides) {
    const [a, b, c] = sides;
    if (a === b && b === c) {
        return TriangleTypes.Equilateral;
    }
    else if (a === b || b === c || a === c) {
        return TriangleTypes.Isosceles;
    }
    else {
        return TriangleTypes.Scalene;
    }
}
exports.getTriangleType = getTriangleType;
