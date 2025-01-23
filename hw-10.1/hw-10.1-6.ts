// Завдання #6: MutableByKeys

// Протилежність ReadonlyByKeys: робить конкретні ключі змінними, якщо вони були readonly.
interface IPlayerReadOnly {
  readonly name: string;
  readonly position: string;
}
type MutableByKeys<T> = {
  -readonly [K in keyof T]: T[K];
};

const playerMutableByKeys: MutableByKeys<IPlayerReadOnly> = {
  name: 'Bill',
  position: 'defender',
};

console.log((playerMutableByKeys.name = 'Bobby'));
