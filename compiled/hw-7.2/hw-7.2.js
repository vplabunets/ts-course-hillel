"use strict";
class HistoricalUser {
    constructor() {
        this.errorMessage = 'Invalid person data';
    }
    fetchData() {
        return { name: 'Hannibal', age: 64 };
    }
    printPersonInfo(person) {
        if (isUserData(person)) {
            console.log(`Name - ${person.name}, Age - ${person.age}`);
        }
        else {
            typeAssertionCheck(person, this.errorMessage);
            console.log(`Name - ${person.name}, Age - ${person.age}`);
        }
    }
}
const Hannibal = new HistoricalUser();
const result = Hannibal.fetchData();
Hannibal.printPersonInfo(result);
function isUserData(person) {
    return (typeof person === 'object' &&
        person !== null &&
        'name' in person &&
        'age' in person &&
        typeof person.name === 'string' &&
        typeof person.age === 'number');
}
function typeAssertionCheck(data, message) {
    if (typeof data !== 'object' ||
        data === null ||
        !('name' in data) ||
        !('age' in data) ||
        typeof data.name !== 'string' ||
        typeof data.age !== 'number') {
        throw new Error(message);
    }
}
