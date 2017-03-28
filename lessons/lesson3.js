console.log('Lesson №3: Spread operator');

let fruits = ['apples', 'grapes', 'mango'];

let vegs = ['tomatos', 'onion', 'mushrooms'];

let products = [...fruits, 'milk', 'bread', ...vegs];

function concatAll(str1, str2, str3) {
    return str1 + str2 + str3;
}

console.log(products);
console.log(concatAll(...fruits));
console.log(concatAll(products)); // it will not work
