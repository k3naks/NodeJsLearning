/**
 * Created by yshybeka on 11/29/2016.
 */


var fs = require('fs');

fs.readFile('test.txt', 'utf8', (err, txt) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(txt.split('\n'));
    console.log(txt);
});