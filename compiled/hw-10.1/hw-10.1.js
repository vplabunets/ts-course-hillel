"use strict";
// Завдання #1: Доповнити функцію sortArray з минулого завдання
// Створіть перевантаження для функції, щоб можна було вказати параметр, за яким відбуватиметься порівняння, якщо це об'єкт.
function sortArray(incomingArray, compareFn) {
    const sortedArray = incomingArray;
    return compareFn(sortedArray);
}
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
var SortDirection;
(function (SortDirection) {
    SortDirection["ASCENDING"] = "ascending";
    SortDirection["DESCENDING"] = "descending";
    SortDirection["NONE"] = "none";
})(SortDirection || (SortDirection = {}));
function compareFn(array, sortBy, sortDirection) {
    if (typeof array[0] === 'string') {
        return sortDirection === SortDirection.ASCENDING
            ? array.sort((a, b) => a.localeCompare(b))
            : array.sort((a, b) => b.localeCompare(a));
    }
    else if (typeof array[0] === 'number') {
        return sortDirection === SortDirection.ASCENDING
            ? array.sort((a, b) => a - b)
            : array.sort((a, b) => b - a);
    }
    else if (typeof array[0] === 'object' && sortBy) {
        if (sortDirection === 'none') {
            return array;
        }
        return array.sort((a, b) => {
            if (a[sortBy] > b[sortBy])
                return sortDirection === 'ascending' ? 1 : -1;
            if (a[sortBy] < b[sortBy])
                return sortDirection === 'ascending' ? -1 : 1;
            return 0;
        });
    }
    else {
        throw new Error(`Sorting entered type of array is not available for the moment`);
    }
}
console.log(sortArray(['10', '2', '0', '1', '3'], compareFn));
console.log(sortArray([
    { name: 'Volodymyr', age: 22 },
    { name: 'Vova', age: 33 },
], compareFn));
