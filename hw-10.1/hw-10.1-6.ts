// Завдання #6: MutableByKeys

// Протилежність ReadonlyByKeys: робить конкретні ключі змінними, якщо вони були readonly.
interface IPlayerReadOnly {
  readonly name: string;
  readonly position: string;
}

type MutableByKeys<T, K extends keyof T = keyof T> = {
  -readonly [P in keyof T as P extends K ? P : never]?: T[P];
} & {
  -readonly [P in keyof T as P extends K ? never : P]: T[P];
} extends infer O
  ? { -readonly [P in keyof O]: O[P] }
  : never;

const playerMutableByKeys: MutableByKeys<IPlayerReadOnly> = {
  name: 'Bill',
  position: 'defender',
};

console.log((playerMutableByKeys.name = 'Bobby'));
