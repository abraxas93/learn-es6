console.log('Lesson 7: Classes');

class Task {
    constructor(title = Task.getDefaultTitle()) {
        this._title = title;
        this._done = false;
        Task.count += 1;
        console.log(`Task created with title:${this._title}`);
    }

    get done() {
        return this._done === true ? 'Task is done' : 'Task is not done';
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.log('Incorrect value');
        }
    }

    complete() {
        this.done = true;
        console.log(`Task ${this._title} is done`);
    }

    static getDefaultTitle() {
        return 'Defatul title';
    }
}

Task.count = 0;

let task1 = new Task('Custom task');

console.log(task1._done, task1.done);

task1.complete();
console.log(task1._done, task1.done);