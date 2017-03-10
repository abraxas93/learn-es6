console.log('Lesson 14: Symbol');

let symbol = Symbol('name');
let sym = Symbol.for('name'); // also can create symbol 
let sym1 = Symbol.for('name'); // searches for already existing symbol
console.log(symbol);
console.log(sym);
console.log(symbol === sym); // false
console.log(sym === sym1); // true
console.log(typeof symbol); // symbol

let custom = Symbol.for('custom');
let key = Symbol.keyFor(custom);
console.log(key);

let role = Symbol.for('role');

let user = {
    username: 'r2d2',
    [Symbol('password')]: '11235',
    [Symbol.for('age')]: 42,
    [role]: 'Admin'
};

console.log(user.password);
console.log(user[Symbol.for('password')]); // без for не попадет в глобальное пространство имен
console.log(user[Symbol.for('age')]);
console.log(Object.getOwnPropertySymbols(user));

console.log(user[Symbol.for('role')]);