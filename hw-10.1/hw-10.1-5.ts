// Завдання #5: ReadonlyByKeys
// Створіть тип, який робить зазначені ключі K в об'єкті T доступними лише для читання.

interface IPlayer5 {
  name: string;
  position: string;
}

type ReadonlyByKeys<T> = {
  readonly [K in keyof T]: T[K];
};

const playerReadonlyByKeys: ReadonlyByKeys<IPlayer5> = {
  name: 'Bill',
  position: 'defender',
};

console.log((playerReadonlyByKeys.name = 'Bobby')); //Cannot assign to 'name' because it is a read-only property.ts(2540)
