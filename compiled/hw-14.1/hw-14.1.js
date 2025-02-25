"use strict";
// Вам необхідно написати додаток Todo list. У додатку повинна бути наступна функціональність:
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = exports.Sorting = exports.Task = void 0;
class Task {
    constructor(id, title, text, confirmationRequired) {
        this.modificationDate = new Date();
        this.status = false;
        this.id = id;
        this.title = title;
        this.text = text;
        this.creationDate = new Date();
        this.status = false;
        this.confirmationRequired = confirmationRequired;
    }
    modifyTask(updatedTask) {
        var _a;
        if (this.confirmationRequired) {
            const isConfirmed = true;
            if (!isConfirmed) {
                console.log('Modification not confirmed');
                return;
            }
        }
        this.title = updatedTask.title || this.title;
        this.text = updatedTask.text || this.text;
        this.modificationDate = new Date();
        this.status = (_a = updatedTask.status) !== null && _a !== void 0 ? _a : this.status;
    }
    toggleStatus() {
        this.status = !this.status;
        this.modificationDate = new Date();
    }
}
exports.Task = Task;
var Sorting;
(function (Sorting) {
    Sorting["Ascending"] = "ASCENDING";
    Sorting["Descending"] = "DESCENDING";
})(Sorting || (exports.Sorting = Sorting = {}));
class TodoList {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    deleteTask(id) {
        var _a;
        if ((_a = this.tasks.find((task) => task.id === id)) === null || _a === void 0 ? void 0 : _a.confirmationRequired) {
            console.log('Please, confirm task removal');
        }
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }
    getTaskInfo(id) {
        const task = this.tasks.find((task) => task.id === id);
        if (!task) {
            throw new Error(`Task with ${id} was not found in database`);
        }
        return task;
    }
    getTasksStatus() {
        const tasksQuantity = this.tasks.length;
        const completedTasksQuantity = this.tasks.filter((task) => task.status);
        return {
            tasksQuantity,
            completedTasksQuantity,
        };
    }
    getAllTasks() {
        return this.tasks;
    }
    search(query) {
        const tasks = this.getAllTasks();
        return tasks.filter((task) => (task.title && task.title.toLowerCase().includes(query.toLowerCase())) ||
            (task.text && task.text.toLowerCase().includes(query.toLowerCase())));
    }
    sort(by, sortDirection) {
        this.tasks.sort((a, b) => {
            let compareValue = 0;
            if (by === 'status') {
                compareValue = Number(a.status) - Number(b.status);
            }
            else if (by === 'creationDate') {
                compareValue = a.modificationDate.getTime() - b.modificationDate.getTime();
            }
            return sortDirection === Sorting.Ascending ? compareValue : -compareValue;
        });
    }
}
exports.TodoList = TodoList;
const todoList = new TodoList();
const task1 = new Task('1', 'Generic', 'Read docs', true);
const task2 = new Task('2', 'Conditional Types', 'Test Conditional Types', true);
const task3 = new Task('3', 'Mapped Types', 'Complete home task', false);
todoList.addTask(task1);
todoList.addTask(task2);
todoList.addTask(task3);
console.log('All tasks list:', todoList.getAllTasks());
console.log('Task #1 info:', todoList.getTaskInfo('1'));
todoList.getTaskInfo('1').modifyTask({ title: 'Complete additional tasks', status: false });
console.log(todoList.getTaskInfo('1'));
console.log('All tasks list after modification:', todoList.getAllTasks());
todoList.deleteTask('1');
console.log('All tasks list after removing:', todoList.getAllTasks());
console.log('Statistics:', todoList.getTasksStatus());
console.log("Search results 'co':", todoList.search('co'));
todoList.sort('creationDate', Sorting.Ascending);
console.log('All tasks list:', todoList.getAllTasks());
