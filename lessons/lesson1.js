console.log('Lesson №1: Arrow fuctions');

var a = () => {};
var c = (b) => b + 1;

const double = [1, 2, 3].map((num) => num * 2);
console.log(double);

let add = (x, y) => x + y;
let square = x => x * x;
let procedure = () => console.log('Im procedure');
console.log(add(3, 5));
console.log(square(4));
procedure();

let complex = (x, y) => {
    let result = x * y;
    result++;
    return result;
};

let factory = () => ({ name: 'Jhon' });
(() => console.log('Self invoking arrow function'))();

console.log(complex(2, 2));
console.log(factory());

let person = {
    name: 'Jhon',
    greet() {
        console.log(`Hello my name is ${this.name}`);
    },
    sayHi: () => console.log(this), /* context is window or global */
    wait: function() {
        setTimeout(() => {
            console.log(this.name); /* context is object person */
        }, 2000);
    }
};

person.greet();
person.sayHi();
person.wait();

/* arrow function can't be used with bind(), call(), apply() */