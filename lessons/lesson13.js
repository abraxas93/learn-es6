console.log('Lesson 13: more Promises');

function go(num) {
    return new Promise(function(resolve, reject) {
        let delay = Math.ceil(Math.random() * 3000);
        console.log(num, delay);
        setTimeout(() => {
            if (delay > 2000) {
                reject(num);
            } else {
                resolve(num);
            }
        }, delay);
    });
}
/*
let p1 = go(1);
let p2 = go(2);
let p3 = go(3);
*/

/* Promise.all([p3, p2, p1]) // waiting for all
    .then(value => console.log(`Promise вернул значение: ${value}`))
    .catch((error) => console.error('ERROR: ' + error)); */

/* Promise.race([p3, p2, p1]) // first result will be sent
    .then(value => console.log(`Promise вернул значение: ${value}`))
    .catch((error) => console.error('ERROR: ' + error)); */