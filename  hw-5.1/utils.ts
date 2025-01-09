export function isTriangle(sides: number[]): boolean {
  const [a, b, c] = sides;
  return a + b > c && a + c > b && b + c > a;
}

export enum TriangleTypes {
  Equilateral = 'Equilateral',
  Isosceles = 'Isosceles',
  Scalene = 'Scalene',
}
export function getTriangleType(sides: number[]): string {
  const [a, b, c] = sides;

  if (a === b && b === c) {
    return TriangleTypes.Equilateral;
  } else if (a === b || b === c || a === c) {
    return TriangleTypes.Isosceles;
  } else {
    return TriangleTypes.Scalene;
  }
}
