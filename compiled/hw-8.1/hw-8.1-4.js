"use strict";
// Завдання #4: Узагальнені обмеження
// Створіть функцію extractProperty, яка повертає значення властивості об'єкта.
// Використовуйте constraint, щоб гарантувати, що ключ дійсно належить об'єкту.
function extractProperty(obj, key) {
    return obj[key];
}
const dummyObj = { el1: 'value1', el2: 'value1', el3: 'value1', el4: 'value1' };
console.log(extractProperty(dummyObj, 'el1'));
