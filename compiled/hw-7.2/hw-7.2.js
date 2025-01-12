"use strict";
class HistoricalUser {
    fetchData() {
        return { name: 'Hannibal', age: 64 };
    }
    printPersonInfo(person) {
        if (isUserData(person)) {
            console.log(`Name - ${person.name}, Age - ${person.age}`);
        }
        else {
            throw new Error('Invalid person data');
        }
    }
}
const Hannibal = new HistoricalUser();
const result = Hannibal.fetchData();
Hannibal.printPersonInfo(result);
// Hannibal.propertyCheck(Hannibal.fetchData());
// Hannibal.typeGuardCheck(Hannibal.fetchData());
function isUserData(person) {
    return (typeof person === 'object' &&
        person !== null &&
        'name' in person &&
        'age' in person &&
        typeof person.name === 'string' &&
        typeof person.age === 'number');
}
// function typeAssertionCheck(data: UserData): void | never {
//   if (data) {
//     Hannibal.printPersonInfo(data);
//   } else {
//     throw new Error('Invalid response');
//   }
// }
// function propertyCheck(data: UserData): void | never {
//   if (
//     data &&
//     typeof (data as UserData).name === 'string' &&
//     typeof (data as UserData).age === 'number'
//   ) {
//     const person = data as UserData;
//     Hannibal.printPersonInfo(person);
//   } else {
//     throw new Error('Invalid response');
//   }
// }
// function typeGuardCheck(fetchedData: unknown): void | never {
//   if (fetchedData === null || typeof fetchedData !== 'object') {
//     throw new Error('Invalid response');
//   }
//   if ('name' in fetchedData && 'age' in fetchedData) {
//     const name = fetchedData['name'];
//     const age = fetchedData['age'];
//     if (typeof name === 'string' && typeof age === 'number') {
//       this.printPersonInfo({ name, age });
//     } else {
//       throw new Error('Invalid property types');
//     }
//   } else {
//     throw new Error('Missing properties');
//   }
// }
