"use strict";
// Завдання #1: Доповнити функцію sortArray з минулого завдання
// Створіть перевантаження для функції, щоб можна було вказати параметр, за яким відбуватиметься порівняння, якщо це об'єкт.
var SortDirection;
(function (SortDirection) {
    SortDirection["ASCENDING"] = "ascending";
    SortDirection["DESCENDING"] = "descending";
    SortDirection["NONE"] = "none";
})(SortDirection || (SortDirection = {}));
function sortArray(incomingArray, compareFn, sortDirection, sortBy) {
    const sortedArray = incomingArray;
    return compareFn(sortedArray, sortDirection, sortBy);
}
function compareFn(array, sortDirection, sortBy) {
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
        if (sortDirection === SortDirection.NONE) {
            return array;
        }
        return array.sort((a, b) => {
            if (a[sortBy] > b[sortBy])
                return sortDirection === SortDirection.ASCENDING ? 1 : -1;
            if (a[sortBy] < b[sortBy])
                return sortDirection === SortDirection.DESCENDING ? -1 : 1;
            return 0;
        });
    }
    else {
        throw new Error(`Sorting entered type of array is not available for the moment`);
    }
}
console.log(sortArray(['10', '2', '0', '1', '3'], compareFn, SortDirection.ASCENDING));
console.log(sortArray([
    { name: 'Mario', age: 22, credits: 1000 },
    { name: 'Dario', age: 33, credits: 10000 },
    { name: 'Domagoi', age: 30, credits: 10000 },
    { name: 'Domagoi', age: 30, credits: 10000 },
], compareFn, SortDirection.ASCENDING, 'name'));
