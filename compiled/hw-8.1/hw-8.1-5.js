'use strict';
// Завдання #5: Узагальнені типи та користувацькі колекції
class Repository {
  constructor() {
    this.items = [];
  }
  add(item) {
    if (this.items.find((existingItem) => existingItem.id === item.id)) {
      throw new Error(`Item with id ${item.id} already exists.`);
    }
    this.items.push(item);
  }

  getById(id) {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      return item;
    } else {
      throw new Error(`The item with id ${id} was not found in the repository`);
    }
  }

  removeById(id) {
    const itemToBeRemoved = this.items.find((item) => item.id === id);
    if (itemToBeRemoved) {
      this.items = this.items.filter((item) => item.id !== itemToBeRemoved.id);
      console.log(`The item with id ${id} was removed from the repository`);
    } else {
      console.log(`The item with id ${id} was not found in the repository`);
    }
  }
  getAll() {
    return [...this.items];
  }
}

const userRepo = new Repository();

userRepo.add({ id: '1', name: 'Mikhnovskyy', email: 'mikhnovskyy@unr.com' });
userRepo.add({ id: '2', name: 'Bolbochan', email: 'bolbochan@unr.com' });

console.log('All users :', userRepo.getAll());
console.log('User with id 1: ', userRepo.getById('1'));
userRepo.removeById('2');
console.log('All users after removing:', userRepo.getAll());

const productRepo = new Repository();

productRepo.add({ id: '101', title: 'Laptop', class: 'premium', price: 1200 });
productRepo.add({ id: '102', title: 'Phone', class: 'medium', price: 800 });

console.log('All products :', productRepo.getAll());
console.log('Product with id 1: ', productRepo.getById('102'));
productRepo.removeById('101');
console.log('All products after removing:', productRepo.getAll());
