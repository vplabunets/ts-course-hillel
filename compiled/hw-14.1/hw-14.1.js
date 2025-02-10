"use strict";
// Вам необхідно написати додаток Todo list. У додатку повинна бути наступна функціональність:
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
}
var Sorting;
(function (Sorting) {
    Sorting["Ascending"] = "ASCENDING";
    Sorting["Descending"] = "DESCENDING";
})(Sorting || (Sorting = {}));
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
    modifyTask(updatedTask) {
        const taskIndex = this.tasks.findIndex((task) => task.id === updatedTask.id);
        if (taskIndex === -1) {
            throw new Error(`Task with id ${updatedTask.id} not found.`);
        }
        else if (this.tasks[taskIndex].confirmationRequired) {
            console.log('Please, confirm modification');
        }
        this.tasks[taskIndex] = Object.assign(Object.assign(Object.assign({}, this.tasks[taskIndex]), updatedTask), { modificationDate: new Date() });
    }
    statusHandler(id) {
        const task = this.getTaskInfo(id);
        if (task) {
            task.status = !task.status;
            task.modificationDate = new Date();
        }
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
