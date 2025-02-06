// Завдання #6: MutableByKeys

// Протилежність ReadonlyByKeys: робить конкретні ключі змінними, якщо вони були readonly.
interface IPlayerReadOnly {
  readonly name: string;
  readonly position: string;
}

// type MutableByKeys<T, K extends keyof T = keyof T> = {
//   -readonly [P in keyof T as P extends K ? P : never]?: T[P];
// } & {
//   -readonly [P in keyof T as P extends K ? never : P]: T[P];
// } extends infer O
//   ? { -readonly [P in keyof O]: O[P] }
//   : never;

type MutableByKeys<T, K extends keyof T> = Omit<T, K> & { -readonly [P in K]: T[P] };

const playerMutableByKeys: MutableByKeys<IPlayerReadOnly, 'name'> = {
  name: 'Bill',
  position: 'defender',
};

console.log((playerMutableByKeys.position = 'Manager')); //NOK Cannot assign to 'position' because it is a read-only property.ts(2540)

console.log((playerMutableByKeys.name = 'Bobby')); //OK
