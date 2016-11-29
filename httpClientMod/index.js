/**
 * Created by yshybeka on 11/29/2016.
 */

var http = require('http');

function httpGet(url) {
  http.get(url, (response) => {
      response.setEncoding('utf8');
      response.on('data', (data)=> {
          console.log(data);
      })
  })
}

module.exports = httpGet;
