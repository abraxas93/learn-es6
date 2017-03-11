console.log('Lesson 16: generators');

// function * generate() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let iterator = generate();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// custom generator function
function generator() {
    let current = 1;
    console.log('Start');
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = { value: undefined, done: true };

                    if (current <= 3) {
                        result.value = current;
                        result.done = false;
                        current++;
                    } else {
                        result.value = undefined;
                        result.done = true;
                        console.log('Finish');
                    }
                    return result;
                }
            };
        }
    };
}

// let iterator = generator()[Symbol.iterator]();
// console.log(iterator);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

function * range(start, end) {
    let current = start;
    while (current <= end) {
        yield current++;
    }
}
// objects can have generator method
let numbers = {
    * range(start, end) {
        let current = start;
        while (current <= end) {
            yield current++;
        }
    }
};

for (let num of numbers.range(1, 10)) {
    console.log(num);
}

function rangeGenerator(start, end) {
    console.log('RangeGenerator');
    let current = start;
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = { value: undefined, done: true };
                    if (current <= end) {
                        result = { value: current++, done: false };
                    }
                    return result;
                }
            };
        }
    };
}

// for (let num of rangeGenerator(1, 10)) {
//     console.log(num);
// }