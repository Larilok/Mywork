'use strict';

class Task {
    constructor(title) {
        this._title = title;
        this._done = false;
        Task.count += 1;
        console.log(`The task is initialized : "${this._title}"`);
    }

    complite() {
        this.done = false ;
        console.log(`${this._title} complited.`);
    }

    get done() {
        return this._done ? `The ${this._title} is complited` : 'Wasted'
    }

    set done(v) {
        if (typeof this._done === 'boolean') this._done = v;
        else console.log('type true or false')
    }

    get title() {
        return this._title
    }

    set title(v) {
        if(typeof v === 'String')this._title = v
    }

    static getDefaultTitle() {
        return 'The task'
    }
}
Task.count = 0;

class SubTask extends Task {
    constructor(title,parent) {
        super(title);
        this.parent = parent;   
    }

    complite() {
        super.complite();
        console.log(`Subtask '${this._title}' is complited`);
    }   
}
         // Usage

const task = new Task('Learn inheritance in JS');
const subtask = new SubTask('Learn inheritance in ES6',Task);

// console.log(task.title);
// console.log(subtask.title);

// subtask.title = 'New title';
// console.log(subtask.title);

console.log(`Tasks count = ${SubTask.count}`);
console.log(`The DefaultTitle is '${SubTask.getDefaultTitle()}'`);

subtask.complite();
console.log(`Status : ${subtask.done}`);