"use strict";
// Завдання #8: ObjectToPropertyDescriptor
// Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний об'єкт на об'єкт, де кожне value є дескриптором.
const playerObjectToPropertyDescriptor = {
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
