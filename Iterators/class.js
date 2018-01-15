'use strict';

class TaskList {
    constructor() {
      this.tasks = [];
    }

    addTasks(...task) {
      this.tasks = this.tasks.concat(task);
    }
    [Symbol.iterator]() {
        return new ArrayIterator(this.tasks);
    }

  }
class ArrayIterator {
    constructor(array) {
      this.array = array.map(array => array).sort();
      this.index = 0;
    }
    next() {
      let result = { value: undefined, done: true };
      if ( this.index < this.array.length ) {
          result.value = this.array[this.index];
          result.done = false;
          this.index +=1;
      }
      return result;    
    }
}

let taskList = new TaskList();
taskList.addTasks("Изучить JavaScript","Изучить ES6");

for (let task of taskList) {
  console.log(task);
}