// Завдання #2: PickByValueType
// Створіть тип PickByValueType, який витягує ті властивості з T, тип значення яких сумісний із ValueType.

type PickByValueType<T, ValueType> = T extends ValueType ? T : never;

type Ranges = '1' | '2' | '3' | string;

type Result = PickByValueType<Ranges, '1'>;
