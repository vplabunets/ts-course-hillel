// Завдання #2: DeepReadonly
// Створіть тип DeepReadonly, який робитиме доступними тільки для читання навіть властивості вкладених об'єктів.

interface IDeepPlayer {
  name: { firstName: string; secondName: string };
  position?: string;
}

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

const playerDeepReadonly: DeepReadonly<IDeepPlayer> = {
  name: { firstName: 'Bill', secondName: 'Gates' },
  position: 'Defender',
};
playerDeepReadonly.name.firstName = 'Marco'; //Cannot assign to 'firstName' because it is a read-only property.ts(2540)
