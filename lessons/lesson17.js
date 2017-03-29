console.log('Lesson 17: generators 2');

// function * generator() {
//     let result = 1 + (yield);
//     console.log(`Result is: ${result}`);
// }

// function * generator() {
//     let array = [yield, yield, yield];
//     console.log(`Result is: ${array}`);
//     console.log(typeof array);
// }

// function * generator() {
//     yield 42;
//     yield * generateArr(); // delegating generator
//     yield 55;
// }

// function * generateArr() {
//     yield * [1, 2, 3];
// }

function * generator() {
    try {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    } catch (e) {
        console.log(e);
    }
}

let iterator = generator();

console.log(iterator.next());
// console.log(iterator.return()); // stop generator
console.log(iterator.throw(new Error('generator error')));
console.log(iterator.next());
// console.log(iterator.next().value);
// console.log(iterator.next().value); // value can be passed into generator func
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());
