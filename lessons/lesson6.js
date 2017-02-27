console.log('Lesson №5: For of cycle');

let browsers = ['opera','safari','chrome','IE'];

for(let browser in browsers) {
    console.log(browser);
}

for(let browser of browsers) {
    console.log(browser);
}