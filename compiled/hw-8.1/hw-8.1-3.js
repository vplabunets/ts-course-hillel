"use strict";
// Завдання #3: Узагальнена функція сортування
// Створіть функцію sortArray, яка:
// Приймає масив arr довільного типу.
// Приймає функцію compareFn, яка порівнює два елементи.
// Повертає відсортований масив без зміни вихідного.
// function sortArray<T>(incomingArray: T[], compareFn: (array: T[]) => T[] | never): T[] | never {
//   const sortedArray: T[] = incomingArray;
//   return compareFn(sortedArray);
// }
// function compareFn<T>(array: T[]) {
//   if (typeof array[0] === 'string') {
//     return array.sort((a: T, b: T) => (a as string).localeCompare(b as string));
//   } else if (typeof array[0] === 'number') {
//     return array.sort((a: T, b: T) => (a as number) - (b as number));
//   } else {
//     throw new Error(`Sorting entered type of array is not available for the moment`);
//   }
// }
// console.log(sortArray(['10', '2', '0', '1', '3'], compareFn));
