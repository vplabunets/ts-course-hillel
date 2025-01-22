"use strict";
// Створіть дискримінантне об'єднання Result для представлення результату асинхронної операції:
function handleResult(result) {
    if (result.status === 'success') {
        return result.data;
    }
    else {
        throw new Error(result.error);
    }
}
console.log(handleResult({ status: 'success', data: 'Async operation was successful' }));
console.log(handleResult({ status: 'error', error: 'Async operation was handled with error' }));
