/**
 * Created by yshybeka on 12/1/2016.
 */


var http = require('http');
var url= require('url');

function createApiServer(port) {

    function HttpDateApi(request, resp) {

        this.response = resp;
        this.request = request;
        this.urlObject = url.parse(this.request.url, true);

        this.handleRequest = function () {
            var handler = routesHandler[this.urlObject.pathname];
            if (handler) {
                handler();
            } else {
                this.response.writeHead(400, "text/plain");
                this.response.write("Can't find API method");
                this.response.end();
            }
        };

        var routesHandler = {
            '/api/parsetime': function () {
                var parameters = this.urlObject.query;
                var dateInIso = parameters['iso'];
                if (dateInIso) {
                    var date = new Date(dateInIso);
                    var hours = date.getHours();
                    var seconds = date.getSeconds();
                    var minutes = date.getMinutes();
                    var result = {
                        hours: hours || "invalid",
                        minutes: minutes || "invalid",
                        seconds: seconds || "invalid"
                    };

                    this.response.writeHead(200, {"Content-Type": "application/json"});
                    this.response.write(JSON.stringify(result));
                    this.response.end();
                }
            }.bind(this),
            '/api/unixtime': function () {
                var result = {unixtime: Date.now()};
                this.response.writeHead(200, {"Content-Type": "application/json"});
                this.response.write(JSON.stringify(result));
                this.response.end();
            }.bind(this)
        };


    }

    var requestHandler = (request, response) => {
        console.log(request.url);
        var api = new HttpDateApi(request, response);
        api.handleRequest();
    };

    var server = http.createServer(requestHandler);

    server.listen(port,  (err) => {
        if (err) {
            return console.log('something bad happened', err)
        }

        console.log(`server is listening on ${port}`)
    });
}

module.exports = createApiServer;

