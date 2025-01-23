// Завдання #8: ObjectToPropertyDescriptor
// Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний об'єкт на об'єкт, де кожне value є дескриптором.

interface IPlayer8 {
  name: string;
  position: string;
}

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: {
    configurable?: boolean;
    enumerable?: boolean;
    writable?: boolean;
    value?: T[K];
    get?(): T[K];
    set?(value: T[K]): void;
  };
};

const playerObjectToPropertyDescriptor: ObjectToPropertyDescriptor<IPlayer8> = {
  name: {
    value: 'Bill',
    writable: false,
    enumerable: true,
    configurable: true,
  },
  position: {
    value: 'defender',
    writable: false,
    enumerable: true,
    configurable: false,
  },
};

console.log(playerObjectToPropertyDescriptor);
