'use strict';
class Task {
    constructor(title = Task.getDefault_Title()) {
        this._title = title;
        this._done = false;
    }

    get done() {
        return this._done ? 'Complited' : 'It`ll be complited as soon as it can be'
    }
    
    set done(value) {
        if(typeof value === 'boolean') 
        this._done = value;
        else 
        console.error('Дэбилы, тут нужен булеан')
    }

    complite() {
        this.done = true;
    }
    
    static getDefault_Title() {
        return 'My upcomming task';
    }
}
let task = new Task('Learn class in ES6');
console.log(task._done,task.done);
task.complite();
console.log(task._done,task.done);


// let task2 = new Task();
// console.log(task._title);
// console.log(task2._title);
// task.complite(); 