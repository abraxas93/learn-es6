const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'lessons'), (err, files) => {
    if (err) console.log(err);
    files.forEach((file) => {        
        require('./lessons/' + file);
    });
});
