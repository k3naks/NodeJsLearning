/**
 * Created by yshybeka on 11/29/2016.
 */
var fs = require('fs');
var path = require('path');

function readFiles(dir, ext, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) return callback(err);
        var files = [];
        for (var i in list) {
            if (path.extname(list[i]) === ext) {
                files.push(list[i]);
            }
        }
        callback(null, files);
    });
}

var exportObj = { readFiles : readFiles};

module.exports = exportObj;