/**
 * Created by yshybeka on 11/29/2016.
 */

var http = require('http');

var fs = require('fs');

function createFileServer(port) {
    var server = http.createServer((request, response) => {
        console.log(request.url);
        var inStream = fs.createReadStream('./filesToRead/13-11-2016-basket.pdf');
        inStream.on('error', (error) => {
            inStream.close();
            response.writeHead(400, {"Content-Type": "text/plain"});
            response.write('Something went wrong');
            response.end();
            console.error(error);
        });
        response.writeHead(200, {"Content-Type": "application/pdf"});
        inStream.pipe(response);
    });

    server.listen(port,  (err) => {
        if (err) {
            return console.log('something bad happened', err)
        }

        console.log(`server is listening on ${port}`)
    });
}

module.exports.createFileServer = createFileServer;