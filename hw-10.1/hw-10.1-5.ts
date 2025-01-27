// Завдання #5: ReadonlyByKeys
// Створіть тип, який робить зазначені ключі K в об'єкті T доступними лише для читання.

interface IPlayer5 {
  name: string;
  position: string;
}

type ReadonlyByKeys<T, K extends keyof T = keyof T> = {
  readonly [P in keyof T as P extends K ? P : never]: T[P];
} & {
  readonly [P in keyof T as P extends K ? never : P]: T[P];
} extends infer O
  ? { readonly [P in keyof O]: O[P] }
  : never;

const playerReadonlyByKeys: ReadonlyByKeys<IPlayer5> = {
  name: 'Bill',
  position: 'defender',
};

console.log((playerReadonlyByKeys.name = 'Bobby')); //Cannot assign to 'name' because it is a read-only property.ts(2540)
