// Завдання #4: PartialByKeys
// Створіть тип, який робить властивості K в об'єкті T необов'язковими (аналог Partial, але лише для зазначених ключів).
interface IPlayer4 {
  name?: string;
  position: string;
  age?: number;
}

type PartialByKeys<T, K extends keyof T = keyof T> = {
  [P in keyof T as P extends K ? P : never]?: T[P];
} & {
  [P in keyof T as P extends K ? never : P]: T[P];
} extends infer O
  ? { [P in keyof O]: O[P] }
  : never;

const playerPartialByKeys: PartialByKeys<IPlayer4, 'position'> = {
  // name: 'Bill',
  position: 'defender',
};

console.log(playerPartialByKeys);
