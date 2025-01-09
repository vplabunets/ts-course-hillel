type UserData = { name: string; age: number };

class HistoricalUser {
  fetchData(): unknown {
    return { name: 'Hannibal', age: 64 };
  }

  printPersonInfo(person: { name: string; age: number }): void {
    console.log(`Name - ${person.name}, Age - ${person.age}`);
  }

  typeAssertionCheck(fetchedData: unknown): void | never {
    const person = fetchedData as UserData;

    if (person) {
      this.printPersonInfo(person);
    } else {
      throw new Error('Invalid response');
    }
  }

  propertyCheck(fetchedData: unknown): void | never {
    if (
      fetchedData &&
      typeof (fetchedData as UserData).name === 'string' &&
      typeof (fetchedData as UserData).age === 'number'
    ) {
      const person = fetchedData as UserData;
      this.printPersonInfo(person);
    } else {
      throw new Error('Invalid response');
    }
  }

  typeGuardCheck(fetchedData: unknown): void | never {
    if (fetchedData === null || typeof fetchedData !== 'object') {
      throw new Error('Invalid response');
    }

    if ('name' in fetchedData && 'age' in fetchedData) {
      const name = fetchedData['name'];
      const age = fetchedData['age'];

      if (typeof name === 'string' && typeof age === 'number') {
        this.printPersonInfo({ name, age });
      } else {
        throw new Error('Invalid property types');
      }
    } else {
      throw new Error('Missing properties');
    }
  }
}

const Hannibal = new HistoricalUser();

Hannibal.typeAssertionCheck(Hannibal.fetchData());
Hannibal.propertyCheck(Hannibal.fetchData());
Hannibal.typeGuardCheck(Hannibal.fetchData());
