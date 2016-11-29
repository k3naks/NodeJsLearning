/**
 * Created by yshybeka on 11/29/2016.
 */
var htpp = require('http');
var dateFormat = require('dateformat');


function createServer(port) {
    var server = htpp.createServer((request, response) => {
        console.log(request.url);

        response.writeHead(200, {"Content-Type": "text/plain"});

        response.write(dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT"));
        response.end();
    });

    server.listen(port,  (err) => {
        if (err) {
            return console.log('something bad happened', err)
        }

        console.log(`server is listening on ${port}`)
    });
}


module.exports.createServer = createServer;