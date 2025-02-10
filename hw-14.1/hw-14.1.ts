// Вам необхідно написати додаток Todo list. У додатку повинна бути наступна функціональність:

// Можливість додавання нового запису
// Видалення існуючого, якщо він є
// Редагування запису
// Можливість позначити нотаток, як виконаний
// Отримання повної інформації про запис
// Отримання списку всіх нотатків
// Отримання інформації про те, скільки всього нотаток у списку і скільки залишилося невиконаними
// Пошук нотатку за ім'ям або змістом
// Окремо необхідно розширити список можливістю сортування нотаток за статусом або часом створення.
// Вимоги до запису:

// Кожний нотаток має назву, зміст, дату створення і редагування та статус
// Нотатки не повинні бути порожніми
// Нотатки бувають двох типів:
// Звичайні (дефолтні)
// Які вимагають підтвердження при видаленні та редагуванні

interface ITask {
  readonly id: string;
  title: string;
  text: string;
  readonly creationDate: Date;
  modificationDate: Date;
  status: boolean;
  confirmationRequired: boolean;
}

class Task implements ITask {
  readonly id: string;
  title: string;
  text: string;
  readonly creationDate: Date;
  modificationDate: Date = new Date();
  status: boolean = false;
  confirmationRequired: boolean;

  constructor(id: string, title: string, text: string, confirmationRequired: boolean) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.creationDate = new Date();
    this.status = false;
    this.confirmationRequired = confirmationRequired;
  }
}
enum Sorting {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING',
}

class TodoList<T extends ITask> {
  private tasks: T[] = [];

  addTask(task: T): void {
    this.tasks.push(task);
  }

  deleteTask(id: string): void {
    if (this.tasks.find((task) => task.id === id)?.confirmationRequired) {
      console.log('Please, confirm task removal');
    }
    this.tasks = this.tasks.filter((task: T) => task.id !== id);
  }

  modifyTask(updatedTask: Partial<T> & { id: string }): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (taskIndex === -1) {
      throw new Error(`Task with id ${updatedTask.id} not found.`);
    } else if (this.tasks[taskIndex].confirmationRequired) {
      console.log('Please, confirm modification');
    }
    this.tasks[taskIndex] = {
      ...this.tasks[taskIndex],
      ...updatedTask,
      modificationDate: new Date(),
    };
  }

  statusHandler(id: string): void | never {
    const task = this.getTaskInfo(id);
    if (task) {
      task.status = !task.status;
      task.modificationDate = new Date();
    }
  }

  getTaskInfo(id: string): T | never {
    const task = this.tasks.find((task: T) => task.id === id);
    if (!task) {
      throw new Error(`Task with ${id} was not found in database`);
    }
    return task;
  }

  getTasksStatus(): object {
    const tasksQuantity = this.tasks.length;
    const completedTasksQuantity = this.tasks.filter((task) => task.status);
    return {
      tasksQuantity,
      completedTasksQuantity,
    };
  }

  getAllTasks(): T[] | [] {
    return this.tasks;
  }

  search(query: string): T[] {
    const tasks = this.getAllTasks();
    return tasks.filter(
      (task) =>
        (task.title && task.title.toLowerCase().includes(query.toLowerCase())) ||
        (task.text && task.text.toLowerCase().includes(query.toLowerCase()))
    );
  }

  sort(by: 'creationDate' | 'status', sortDirection: Sorting): void {
    this.tasks.sort((a, b) => {
      let compareValue = 0;

      if (by === 'status') {
        compareValue = Number(a.status) - Number(b.status);
      } else if (by === 'creationDate') {
        compareValue = a.modificationDate.getTime() - b.modificationDate.getTime();
      }

      return sortDirection === Sorting.Ascending ? compareValue : -compareValue;
    });
  }
}

const todoList = new TodoList();

const task1 = new Task('1', 'Generic', 'Read docs', true);
const task2 = new Task('2', 'Conditional Types', 'Test Conditional Types', true);
const task3 = new Task('3', 'Mapped Types', 'Complete home task', false);

todoList.addTask(task1);
todoList.addTask(task2);
todoList.addTask(task3);

console.log('All tasks list:', todoList.getAllTasks());

console.log('Task #1 info:', todoList.getTaskInfo('1'));

todoList.statusHandler('2');
console.log('Task #2 info after modification:', todoList.getAllTasks());

todoList.modifyTask({ id: '3', title: 'Complete additional tasks', status: false });
console.log('All tasks list after modification:', todoList.getAllTasks());

todoList.deleteTask('1');
console.log('All tasks list after removing:', todoList.getAllTasks());

console.log('Statistics:', todoList.getTasksStatus());

console.log("Search results 'co':", todoList.search('co'));

todoList.sort('creationDate', Sorting.Ascending);

console.log('All tasks list:', todoList.getAllTasks());
