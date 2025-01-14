// Створіть дискримінантне об'єднання Result для представлення результату асинхронної операції:

// Поле status — "success" або "error".
// Поле data для "success".
// Поле error для "error".
// Створіть функцію handleResult, яка:

// Якщо status === 'success', повертає data.
// Якщо status === 'error', кидає помилку з error.

type TResult<T> = { status: 'success'; data: T } | { status: 'error'; error: string };

function handleResult<T>(result: TResult<T>): T | never {
  if (result.status === 'success') {
    return result.data;
  } else {
    throw new Error(result.error);
  }
}

console.log(handleResult({ status: 'success', data: 'Async operation was successful' }));
console.log(handleResult({ status: 'error', error: 'Async operation was handled with error' }));
