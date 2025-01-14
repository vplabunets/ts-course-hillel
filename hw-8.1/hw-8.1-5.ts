// Завдання #5: Узагальнені типи та користувацькі колекції

// Створіть інтерфейс Identifiable з полем id.
// Створіть клас Repository для зберігання об'єктів, які реалізують Identifiable.
// Методи:

// add — додає об'єкт з унікальним id.
// getById — повертає об'єкт за його id.
// removeById — видаляє об'єкт і повертає true, якщо знайдений та видалений, інакше false.
// getAll — повертає всі об'єкти.
// Створіть кілька типів даних, таких як User, Product, які реалізують Identifiable, та продемонструйте роботу Repository<User> і Repository<Product>.

interface Identifiable<T> {
  id: T;
}

class Repository<TItem extends Identifiable<TId>, TId> {
  private items: TItem[] = [];

  add(item: TItem): void {
    if (this.items.find((existingItem) => existingItem.id === item.id)) {
      throw new Error(`Item with id ${item.id} already exists.`);
    }
    this.items.push(item);
  }

  getById(id: TId): TItem | never {
    const item: TItem | undefined = this.items.find((item) => item.id === id);
    if (item) {
      return item;
    } else {
      throw new Error(`The item with id ${id} was not found in the repository`);
    }
  }

  removeById(id: TId): void {
    const itemToBeRemoved: TItem | undefined = this.items.find((item) => item.id === id);
    if (itemToBeRemoved) {
      this.items = this.items.filter((item) => item.id !== itemToBeRemoved.id);
      console.log(`The item with id ${id} was removed from the repository`);
    } else {
      console.log(`The item with id ${id} was not found in the repository`);
    }
  }

  getAll(): TItem[] {
    return [...this.items];
  }
}

interface RepositoryUser<T> extends Identifiable<string> {
  name: T;
  email: T;
}

interface RepositoryProduct<T, U> extends Identifiable<string> {
  title: T;
  class: T;
  price: U;
}

const userRepo = new Repository<RepositoryUser<string>, string>();

userRepo.add({ id: '1', name: 'Mikhnovskyy', email: 'mikhnovskyy@unr.com' });
userRepo.add({ id: '2', name: 'Bolbochan', email: 'bolbochan@unr.com' });

console.log('All users :', userRepo.getAll());
console.log('User with id 1: ', userRepo.getById('1'));
userRepo.removeById('2');
console.log('All users after removing:', userRepo.getAll());

const productRepo = new Repository<RepositoryProduct<string, number>, string>();

productRepo.add({ id: '101', title: 'Laptop', class: 'premium', price: 1200 });
productRepo.add({ id: '102', title: 'Phone', class: 'medium', price: 800 });

console.log('All products :', productRepo.getAll());
console.log('Product with id 1: ', productRepo.getById('102'));
productRepo.removeById('101');
console.log('All products after removing:', productRepo.getAll());
