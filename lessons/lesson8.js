console.log('Lesson 8: Classes');

class Task {
    constructor(title = Task.getDefaultTitle()) {
        this._title = title;
        this._done = false;
        Task.count += 1;
        console.log(`Task created with title:${this._title}`);
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

let task1 = new Task('Custom task');
let task2 = new Task();

console.log(task1._done, task1.done);

task1.complete();
console.log(task1._done, task1.done);
console.log(task1);
console.log(task2);
console.log(Task.count);