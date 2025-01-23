"use strict";
// Завдання #2: DeepReadonly
// Створіть тип DeepReadonly, який робитиме доступними тільки для читання навіть властивості вкладених об'єктів.
const playerDeepReadonly = {
    name: { firstName: 'Bill', secondName: 'Gates' },
    position: 'Defender',
};
playerDeepReadonly.name.firstName = 'Marco'; //Cannot assign to 'firstName' because it is a read-only property.ts(2540)
