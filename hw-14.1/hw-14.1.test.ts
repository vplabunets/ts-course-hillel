import { TodoList, Task, Sorting, ITask } from './hw-14.1';

describe('TodoList Class', () => {
  let todoList: TodoList<ITask>;
  let task1: Task;
  let task2: Task;
  let task3: Task;

  beforeEach(() => {
    todoList = new TodoList<Task>();
    task1 = new Task('1', 'Task 1', 'First task', true);
    task2 = new Task('2', 'Task 2', 'Second task', false);
    task3 = new Task('3', 'Task 3', 'Third task', true);

    todoList.addTask(task1);
    todoList.addTask(task2);
    todoList.addTask(task3);
  });

  test('should add tasks to the Todo list', () => {
    expect(todoList.getAllTasks()).toHaveLength(3);
  });

  test('should delete task from the Todo list', () => {
    todoList.deleteTask('1');
    expect(todoList.getAllTasks()).toHaveLength(2);
    expect(() => todoList.getTaskInfo('1')).toThrow('Task with 1 was not found in database');
  });

  test('should get task information by ID', () => {
    const taskInfo = todoList.getTaskInfo('2');
    expect(taskInfo.id).toBe('2');
    expect(taskInfo.title).toBe('Task 2');
  });

  test('should toggle the status of a task', () => {
    const taskBeforeToggle = todoList.getTaskInfo('1');
    expect(taskBeforeToggle.status).toBe(false);

    task1.toggleStatus();

    const taskAfterToggle = todoList.getTaskInfo('1');
    expect(taskAfterToggle.status).toBe(true);
  });

  test('should modify a task', () => {
    const updatedTask = { title: 'Updated Task 2', text: 'Updated text' };
    todoList.getTaskInfo('2').modifyTask(updatedTask);

    const taskAfterModification = todoList.getTaskInfo('2');
    expect(taskAfterModification.title).toBe('Updated Task 2');
    expect(taskAfterModification.text).toBe('Updated text');
  });

  test('should search tasks by title or content', () => {
    const searchResult = todoList.search('Second');
    expect(searchResult).toHaveLength(1);
    expect(searchResult[0].title).toBe('Task 2');
  });

  test('should sort tasks by creation date in ascending order', () => {
    todoList.sort('creationDate', Sorting.Ascending);
    const allTasks = todoList.getAllTasks();
    expect(allTasks[0].title).toBe('Task 1');
  });

  // test('should sort tasks by status in descending order', () => {
  //   todoList.sort('status', Sorting.Descending);
  //   const allTasks = todoList.getAllTasks();
  //   expect(allTasks[0].status).toBe(true);
  //   expect(allTasks[1].status).toBe(true);
  //   expect(allTasks[2].status).toBe(false);
  // });
});
