/**
 * Created by yshybeka on 11/29/2016.
 */
var pathToDir = './filesToRead';

var fs = require('fs');
var path = require('path');

fs.readdir(pathToDir, function (err, list) {
   if (err) return console.error(err);
    for (var i in list) {
        if (path.extname(list[i]) === '.txt') {
            console.log(list[i]);
        }
    }
});