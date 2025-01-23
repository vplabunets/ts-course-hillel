// Завдання #7: UpperCaseKeys

// Створіть тип UpperCaseKeys, який буде переводити всі ключі у верхній регістр.
interface IPlayer7 {
  name: string;
  position: string;
}

type UpperCaseKeys<T> = {
  readonly [K in keyof T as `${Uppercase<K & string>}`]: T[K];
};

const playerUpperCaseKeys: UpperCaseKeys<IPlayer7> = {
  NAME: 'Bill',
  position: 'defender', //Object literal may only specify known properties, but 'position' does not exist in type 'UpperCaseKeys<IPlayer>'.
  //  Did you mean to write 'POSITION'?ts(2561)
};

console.log(playerUpperCaseKeys);
