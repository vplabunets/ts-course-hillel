'use strict';
// Завдання #3: Узагальнена функція сортування
// Створіть функцію sortArray, яка:
// Приймає масив arr довільного типу.
// Приймає функцію compareFn, яка порівнює два елементи.
// Повертає відсортований масив без зміни вихідного.

function sortArray(incomingArray, compareFn) {
  const sortedArray = incomingArray;
  return compareFn(sortedArray);
}

function compareFn(array) {
  if (typeof array[0] === 'string') {
    return array.sort((a, b) => a.localeCompare(b));
  } else if (typeof array[0] === 'number') {
    return array.sort((a, b) => a - b);
  } else {
    throw new Error(`Sorting entered type of array is not available for the moment`);
  }
}

console.log(sortArray(['10', '2', '0', '1', '3'], compareFn));
