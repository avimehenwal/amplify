"use strict";
exports.__esModule = true;
exports.store = void 0;
exports.store = {
    todoApp: {
        todoTasks: [],
        created: null,
        count: null
    }
};
// CRUD operations on Task store
// Use Pure Function
function addTask(storeObj, taskObj) {
    storeObj.todoApp.todoTasks.push(taskObj);
    storeObj.todoApp.count = exports.store.todoApp.todoTasks.length;
}
// MAIN
var task1 = {
    title: 'task 1',
    completed: false,
    description: 'some description',
    categories: ['Personal'],
    created: new Date()
};
var task2 = {
    title: 'task 2',
    completed: false,
    description: 'some second description',
    categories: ['Personal'],
    created: new Date()
};
addTask(exports.store, task1);
addTask(exports.store, task2);
console.log(JSON.stringify(exports.store, null, 2));
