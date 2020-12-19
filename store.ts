interface Istore {
  todoApp: {
    // Indexable Types
    todoTasks: Array<ITask>,
    created: Date,
    count: number
  }
}

interface ITask {
  created: Date;
  title: string;
  description: string;
  completed: boolean;
  categories: Array<string>;
}

export const store: Istore = {
  todoApp: {
    todoTasks: [],
    created: null,
    count: null
  }
}

// CRUD operations on Task store
// Use Pure Function
function addTask(storeObj:Istore, taskObj:ITask) {
  storeObj.todoApp.todoTasks.push(taskObj)
  storeObj.todoApp.count = store.todoApp.todoTasks.length
}

// MAIN
const task1: ITask = {
  title: 'task 1',
  completed: false,
  description: 'some description',
  categories: ['Personal'],
  created: new Date()
};
const task2: ITask = {
  title: 'task 2',
  completed: false,
  description: 'some second description',
  categories: ['Personal'],
  created: new Date()
};

addTask(store, task1)
addTask(store, task2)
console.log(JSON.stringify(store, null, 2))