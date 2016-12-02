/**
 * Created by yshybeka on 11/29/2016.
 */
var pathToDir = './filesToRead';

var mod = require('./../readFiles/index');
mod.readFiles(pathToDir, '.txt', function (err, files) {
    if(err) return console.log(err);
    for (var i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
});