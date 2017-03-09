console.log('Lesson 9: Inheritance');

class Task {
    constructor(title = Task.getDefaultTitle()) {
        this._title = title;
        this._done = false;
        Task.count += 1;
        console.log(`Task created with title:${this._title}`);
        console.log(`Task number ${Task.count}`);
    }

    /* Property getter */
    get done() {
        return this._done === true ? 'Task is done' : 'Task is not done';
    }

    /* Property setter */
    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.log('Incorrect value');
        }
    }

    /* Class method */
    complete() {
        this.done = true;
        console.log(`Task ${this._title} is done`);
    }
    /* Static class method */
    static getDefaultTitle() {
        return 'Defatul title';
    }
}
/* Static class property */
Task.count = 0;

class SubTask extends Task {
    constructor(title = 'Default subtask', parent) {
        super(title); /* parent constructor should be always first if child class have it's own ctr */
        this._parent = parent;
    }
    /* Method override from parent class */
    complete() {
        super.complete(); /* Invoking method from parent class */
        console.log(`Subtask "${this._title}" done`);
    }
}

let task = new Task('Task1 title');
let subtask = new SubTask('Subtask1 title', task);

console.log(task instanceof Task);
console.log(subtask instanceof Task);
console.log(subtask);
subtask.complete();
console.log(subtask.done);
console.log(SubTask.getDefaultTitle()); /* static method from base class */

let List = class List {
    constructor() {
        console.log('List created');
    }
};

let list = new List();