console.log('Lesson 10: destruction asign array');

/* let languages = ['JavaScript', 'PHP', 'Python', 'Ruby']; */

/* let js, php, python, ruby; */

/* let [js, php, python, ruby] = languages; */

let [js, php, python, ruby] = ['JavaScript', 'PHP', 'Python', 'Ruby'];

console.log(js, php, python, ruby);

let numbers = [1, 2, 3];

let [one, two, three, four, five = 5] = numbers;

console.log(one, two, three, four, five);

/* let [One, , Two] = numbers; */

let [on, ...rest] = numbers;

console.log(on, rest);

let nums = [1, 2, 3, [4, 5]];

let [v1, v2, v3, v4] = nums; // let [v1, v2, v3, [v4, v5]] = nums;
console.log(v1, v2, v3, v4);

function computeScore([low, mid]) {
    console.log(low, mid);
}

computeScore([3, 5]);

function initNums() {
    return [7, 8, 9];
}

let [foo, foo1, foo2] = initNums();

console.log(foo, foo1, foo2);