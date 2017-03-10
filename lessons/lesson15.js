console.log('Lesson 15: iterator');

let xmens = ['Wolverine', 'Cyclop', 'Rogue'];

for (let xmen of xmens) {
    console.log(xmen);
}
/*
console.log(typeof xmens[Symbol.iterator]);

let iterator = xmens[Symbol.iterator]();

console.log(iterator.next()); // { value: 'Wolverine', done: false }
console.log(iterator.next()); // { value: 'Cyclop', done: false }
console.log(iterator.next()); // { value: 'Rogue', done: false }
console.log(iterator.next()); // { value: undefined, done: true }
*/

let idGenerator = {
    [Symbol.iterator]() {
        let id = 1;
        return {
            next() {
                let value = id > 100 ? undefined : id++;
                let done = !value;
                return {
                    value,
                    done
                };
            }
        };
    }
};

/* for (let id of idGenerator) {
    console.log(id);
} 

let randomGenerator = {
    generate() {
        return this[Symbol.iterator]();
    },
    [Symbol.iterator]() {
        let count = 0;
        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 10;
                count++;
                return { value, done };
            }
        };
    }
};

let random = randomGenerator.generate();
console.log(random.next().value);
*/

class ArrayIterator {
    constructor(array) {
        // this.array = array;
        this.array = array.map(item => item).sort();
        this.index = 0;
    }

    next() {
        let result = {
            value: undefined,
            done: true
        };

        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index++;
        }
        return result;
    }
}

/*
class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        let tasks = this.tasks;
        let index = 0;

        return {
            next() {
                let result = {
                    value: undefined,
                    done: true
                };

                if (index < tasks.length) {
                    result.value = tasks[index];
                    result.done = false;
                    index++;
                }
                return result;
            }
        };
    }
}
*/

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.tasks);
    }
}

let tasklist = new TaskList();
tasklist.addTask('Learn JS');
tasklist.addTask('Learn ES6 syntax');
tasklist.addTask('Code everyday');

for (let task of tasklist) {
    console.log(task);
}

