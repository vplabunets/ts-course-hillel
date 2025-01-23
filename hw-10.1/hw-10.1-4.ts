// Завдання #4: PartialByKeys
// Створіть тип, який робить властивості K в об'єкті T необов'язковими (аналог Partial, але лише для зазначених ключів).
interface IPlayer4 {
  name: string;
  position: string;
}

type PartialByKeys<T> = {
  [K in keyof T]?: T[K];
};

const playerPartialByKeys: PartialByKeys<IPlayer4> = {
  name: 'Bill',
  //   position: 'defender',
};

console.log(playerPartialByKeys);
