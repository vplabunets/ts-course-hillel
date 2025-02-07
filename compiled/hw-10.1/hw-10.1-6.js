"use strict";
// Завдання #6: MutableByKeys
const playerMutableByKeys = {
    name: 'Bill',
    position: 'defender',
};
console.log((playerMutableByKeys.position = 'Manager')); //NOK Cannot assign to 'position' because it is a read-only property.ts(2540)
console.log((playerMutableByKeys.name = 'Bobby')); //OK
