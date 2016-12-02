/**
 * Created by yshybeka on 12/2/2016.
 */


var express = require('express');
var path = require('path');

var app = express();
var port = 8081;


app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/hello' , (request, response) => {
    response.status(200).send("good job");
});

app.get('/hi*bye', function (req, res) {
    res.send('hi*bye it can be anything between hi and bye');
});

app.get('/good(normal)?bad', function (req, res) {
    res.send('/good(normal)?bad normal may or may not be beetween good and bad');
});

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(`User id is ${req.params.userId} and book for this user with ${req.params.bookId}`);
});

app.get('/flights/:from-:to', function (req, res) {
    res.send('Flights from ' + req.params.from + ' and to ' +req.params.to);
})

app.use(function nothingFind(req, res, next) {
    res.status(404).send('Sorry cant find that!')
});

app.use(function errorHandler(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});