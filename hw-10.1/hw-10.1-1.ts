// Завдання #1: Доповнити функцію sortArray з минулого завдання
// Створіть перевантаження для функції, щоб можна було вказати параметр, за яким відбуватиметься порівняння, якщо це об'єкт.

enum SortDirection {
  'ASCENDING' = 'ascending',
  'DESCENDING' = 'descending',
  'NONE' = 'none',
}

function sortArray<T>(
  incomingArray: T[],
  compareFn: (array: T[], sortDirection: SortDirection, sortBy?: keyof T) => T[] | never,
  sortDirection: SortDirection,
  sortBy?: keyof T
): T[] | never {
  const sortedArray: T[] = incomingArray;

  return compareFn(sortedArray, sortDirection, sortBy);
}

function compareFn<T>(array: T[], sortDirection: SortDirection, sortBy?: keyof T) {
  if (typeof array[0] === 'string') {
    return sortDirection === SortDirection.ASCENDING
      ? array.sort((a: T, b: T) => (a as string).localeCompare(b as string))
      : array.sort((a: T, b: T) => (b as string).localeCompare(a as string));
  } else if (typeof array[0] === 'number') {
    return sortDirection === SortDirection.ASCENDING
      ? array.sort((a: T, b: T) => (a as number) - (b as number))
      : array.sort((a: T, b: T) => (b as number) - (a as number));
  } else if (typeof array[0] === 'object' && sortBy) {
    if (sortDirection === SortDirection.NONE) {
      return array;
    }
    return array.sort((a: T, b: T) => {
      if (a[sortBy] > b[sortBy]) return sortDirection === SortDirection.ASCENDING ? 1 : -1;
      if (a[sortBy] < b[sortBy]) return sortDirection === SortDirection.DESCENDING ? -1 : 1;

      return 0;
    });
  } else {
    throw new Error(`Sorting entered type of array is not available for the moment`);
  }
}
console.log(sortArray(['10', '2', '0', '1', '3'], compareFn, SortDirection.ASCENDING));

console.log(
  sortArray(
    [
      { name: 'Mario', age: 22, credits: 1000 },
      { name: 'Dario', age: 33, credits: 10000 },
      { name: 'Domagoi', age: 30, credits: 10000 },
      { name: 'Domagoi', age: 30, credits: 10000 },
    ],
    compareFn,
    SortDirection.ASCENDING,
    'name'
  )
);
