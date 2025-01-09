"use strict";
class HistoricalUser {
    fetchData() {
        return { name: 'Hannibal', age: 64 };
    }
    printPersonInfo(person) {
        console.log(`Name - ${person.name}, Age - ${person.age}`);
    }
    typeAssertionCheck(fetchedData) {
        const person = fetchedData;
        if (person) {
            this.printPersonInfo(person);
        }
        else {
            throw new Error('Invalid response');
        }
    }
    propertyCheck(fetchedData) {
        if (fetchedData &&
            typeof fetchedData.name === 'string' &&
            typeof fetchedData.age === 'number') {
            const person = fetchedData;
            this.printPersonInfo(person);
        }
        else {
            throw new Error('Invalid response');
        }
    }
    typeGuardCheck(fetchedData) {
        if (fetchedData === null || typeof fetchedData !== 'object') {
            throw new Error('Invalid response');
        }
        if ('name' in fetchedData && 'age' in fetchedData) {
            const name = fetchedData['name'];
            const age = fetchedData['age'];
            if (typeof name === 'string' && typeof age === 'number') {
                this.printPersonInfo({ name, age });
            }
            else {
                throw new Error('Invalid property types');
            }
        }
        else {
            throw new Error('Missing properties');
        }
    }
}
const Hannibal = new HistoricalUser();
Hannibal.typeAssertionCheck(Hannibal.fetchData());
Hannibal.propertyCheck(Hannibal.fetchData());
Hannibal.typeGuardCheck(Hannibal.fetchData());
