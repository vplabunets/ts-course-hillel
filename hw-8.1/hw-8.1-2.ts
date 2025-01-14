// Завдання #2: Узагальнена черга

// Створіть узагальнений клас Queue, який реалізує структуру даних «черга» та має методи:

// enqueue — додає елемент у кінець черги.
// dequeue — видаляє та повертає елемент з початку черги.
// peek — повертає елемент з початку черги без видалення.
// size — повертає кількість елементів у черзі.

class Queue<T> {
  queue: T[] = [];
  constructor(queue: T[]) {
    this.queue = queue;
  }
  enqueue(element: T): void {
    this.queue.push(element);
  }

  dequeue(): T | undefined {
    return this.queue.shift();
  }
  peek() {
    return this.queue[0];
  }
  size() {
    return this.queue.length;
  }
}
const qqq = new Queue<string>(['sss', '2', '222']);
console.log(qqq.peek());
