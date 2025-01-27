// Завдання #5: ExtendedCustomReturnType

// Створіть умовний тип, який приймає функціональний тип із будь - якою кількістю параметрів та повертає кортеж,
//     де перше значення — це тип, що функція повертає, а друге — тип її параметра.

type ExtendedCustomReturnType<T> = T extends (...args: infer RA) => infer R ? [RA, R] : unknown;

type ExampleFunction3 = (param1: number) => string;

type Result3 = ExtendedCustomReturnType<ExampleFunction3>; //type Result2 = never
