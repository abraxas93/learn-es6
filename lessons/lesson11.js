console.log('Lesson 11: destruction asign objects');

let person = {
    firstname: 'Jhon',
    lastname: 'Doe'
};

/* let firstname = person.firstname;
let lastname = person.lasnname; */

let { firstname, lastname, age = 25 } = person; // vars should be same as properties

let { ['first' + 'name']: first, lastname: last } = { firstname: 'Edward', lastname: 'Doe' }; // when we use another vars name not same like props or {

console.log(first, last);
console.log(firstname, lastname, age);

let user = {
    firstname: 'Alex',
    lastname: 'Savchuk',
    social: {
        facebook: 'alexIoKa',
        twitter: 'ioka'
    }
};

let { firstname: name, lastname: surname, social: {facebook: fb}, old = 31 } = user; // or we can use just facebook
console.log(name, surname, fb, old);

/*
function post(url, config) {
    config.data,
    config.cache
} */

function post(url, { data: {firstname, lastname, social: {twitter}}, cache }) {
    console.log(firstname, lastname, twitter, cache);
}

post('api/users', { data: user, cache: false });

function getUserInfo() {
    return {
        firstname: 'Alex',
        lastname: 'Savchuk',
        social: {
            facebook: 'alexIoKa',
            twitter: 'ioka'
        }
    };
}

let { firstname: fName, lastname: lName, social: {facebook: FB} } = getUserInfo();
console.log(fName, lName, FB);