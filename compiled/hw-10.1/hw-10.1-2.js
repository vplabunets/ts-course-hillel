"use strict";
const playerPartialByKeys = {
    name: 'Bill',
    position: 'defender',
};
console.log(playerPartialByKeys);
const playerReadonlyByKeys = {
    name: 'Bill',
    position: 'defender',
};
console.log((playerReadonlyByKeys.name = 'Bobby')); //Cannot assign to 'name' because it is a read-only property.ts(2540)
const playerMutableByKeys = {
    name: 'Bill',
    position: 'defender',
};
console.log((playerMutableByKeys.name = 'Bobby')); //Cannot assign to 'name' because it is a read-only property.ts(2540)
const playerUpperCaseKeys = {
    NAME: 'Bill',
    position: 'defender', //Object literal may only specify known properties, but 'position' does not exist in type 'UpperCaseKeys<IPlayer>'. Did you mean to write 'POSITION'?ts(2561)
};
console.log(playerUpperCaseKeys);
// Завдання #8: ObjectToPropertyDescriptor
// Створіть тип ObjectToPropertyDescriptor, який перетворює звичайний об'єкт на об'єкт, де кожне value є дескриптором.
// type DeepRequireReadonly<T>{
// }
