// Завдання #5: ReadonlyByKeys
// Створіть тип, який робить зазначені ключі K в об'єкті T доступними лише для читання.

interface IPlayer5 {
  name: string;
  position: string;
}

// type ReadonlyByKeys<T, K extends keyof T = keyof T> = {
//   readonly [P in keyof T as P extends K ? P : never]: T[P];
// } & {
//   readonly [P in keyof T as P extends K ? never : P]: T[P];
// } extends infer O
//   ? { readonly [P in keyof O]: O[P] }
//   : never;

type ReadonlyByKeys<T, K extends keyof T> = Omit<T, K> & Readonly<Pick<T, K>>;

const playerReadonlyByKeys: ReadonlyByKeys<IPlayer5, 'name'> = {
  name: 'Bill',
  position: 'defender',
};

console.log((playerReadonlyByKeys.name = 'Bobby')); //Cannot assign to 'name' because it is a read-only property.ts(2540)
