type UserData = { name: string; age: number };

class HistoricalUser {
  errorMessage: string = 'Invalid person data';

  fetchData(): unknown {
    return { name: 'Hannibal', age: 64 };
  }

  printPersonInfo(person: unknown): void {
    if (isUserData(person)) {
      console.log(`Name - ${person.name}, Age - ${person.age}`);
    } else {
      typeAssertionCheck(person, this.errorMessage);
      console.log(`Name - ${person.name}, Age - ${person.age}`);
    }
  }
}

const Hannibal = new HistoricalUser();
const result = Hannibal.fetchData();

Hannibal.printPersonInfo(result);

function isUserData(person: unknown): person is UserData {
  return (
    typeof person === 'object' &&
    person !== null &&
    'name' in person &&
    'age' in person &&
    typeof (person as UserData).name === 'string' &&
    typeof (person as UserData).age === 'number'
  );
}

function typeAssertionCheck(data: unknown, message: string): asserts data is UserData {
  if (
    typeof data !== 'object' ||
    data === null ||
    !('name' in data) ||
    !('age' in data) ||
    typeof (data as UserData).name !== 'string' ||
    typeof (data as UserData).age !== 'number'
  ) {
    throw new Error(message);
  }
}
