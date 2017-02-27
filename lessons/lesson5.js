console.log('Lesson №5: Function params');

function greet (greeting = 'Hello', name = 'Friend!') {
    console.log(`${greeting} ${name}`);
}

greet('Hello', 'Bill');
greet();

function sum (...values) {
    console.log(values instanceof Array);

    let sum = 0;

    values.forEach((val) => sum += val);
    console.log(sum);
}

sum(3, 4, 6, 9);

