// Завдання #3: OmitByValueType
// Зворотний тип до PickByValueType. Видаляє всі властивості, значення яких сумісні із ValueType.

type OmitByValueType<T, ValueType> = T extends ValueType ? never : T;

type RangesOmitByValueType = '1' | '2' | '3' | string;

type ResultOmitByValueType = OmitByValueType<RangesOmitByValueType, '2'>;
