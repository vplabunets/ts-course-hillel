// Завдання #4: CustomReturnType

// Створіть умовний тип, який визначає тип, що повертається з функції.
// Як параметр типу обов'язково має бути функціональний тип.

type CustomReturnType<T> = T extends (...args: unknown[]) => infer R ? R : unknown;

type ExampleFunction = () => never;

type Result2 = CustomReturnType<ExampleFunction>; //type Result2 = never
