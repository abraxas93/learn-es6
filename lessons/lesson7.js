console.log('Lesson 7: ES6 Objects');

let firstName = 'Alex',
    surName = 'Savchuk',
    age = 31;

/* same as firstName : firstName */
let obj = {
    firstName,
    surName,
    age,
    sayHello () {
        console.log(`Hello my name is ${this.firstName}`);
    }
};

console.log(obj);
obj.sayHello();

function createCar (property,value) {
    return {       
        [ property.toUpperCase() ]: value,
        [ 'get' + property ] () {
            console.log('New method ');
        },
        get custom () {
            return 'im custom propery';
        }
    };
}

console.log(createCar('someProp', 2342));
let car = createCar('prop', 'newProp');

console.log(car.SOMEPROP); //not working
console.log(car.custom); 
console.log(car.getsomeProp); //not working now!!!