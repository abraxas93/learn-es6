console.log('Lesson 12: Promises');

function applyForVisa(documents, resolve, reject) {
    console.log('Запрос обрабатывается');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            Math.random() > 0 ? resolve({}) : reject('Нехватка документов');
        }, 2000);
    });
    return promise;
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch((error) => console.error(error))
    .then(() => console.log('Final promise'));

function getVisa(visa) {
    console.log('Виза получена');
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(visa);
        }, 2000);
    });
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Hotel is booked');
    return Promise.resolve(visa);
}

function buyTickets(booking) {
    console.log(booking);
    console.log('Билеты куплены');
}