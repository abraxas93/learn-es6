console.log('Lesson №4: Template strings');


function doGreetings (name) {
    console.log(`Hello my friend ${name}`);
}

doGreetings('Alex');


function addNums (x, y) {
    console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}`);
}
/* Creating a tag function */

function upperName (literals, value) {
    return literals[0] + value.toUpperCase();
}
let name = 'Andrew';

console.log(upperName`Hello ${name}`);

addNums(3, 4);
addNums('5', '7');
