"use strict";
// Завдання #5: ReadonlyByKeys
// Створіть тип, який робить зазначені ключі K в об'єкті T доступними лише для читання.
const playerReadonlyByKeys = {
    name: 'Bill',
    position: 'defender',
};
console.log((playerReadonlyByKeys.name = 'Bobby')); //Cannot assign to 'name' because it is a read-only property.ts(2540)
