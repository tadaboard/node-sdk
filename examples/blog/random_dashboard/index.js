var http = require('http');
var TB = require('tadaboard');
var _ = require('lodash');

function handleRequest(request, response){
  var body = '';

  request.on('data', function(chunk) {
    body += chunk.toString();
  });

  request.on('end', function() {
    var tb = new TB.response({ requestBody: body, queryDefault: {metric: '1'}});
    tb.widget('1', {id: '1', title: 'Total users', value: _.random(300,1000), variation: _.random(-10, 10, true)});
    tb.widget('2', {id: '2', title: 'Signups', value: _.random(5,30), variation: _.random(-10, 10, true)});
    tb.widget('3', {id: '3', title: 'Active', value: _.random(40,300), variation: _.random(-10, 10, true)});
    tb.widget('4', {id: '4', title: 'Paying', value: _.random(0,300), variation: _.random(-10, 10, true)});
    tb.widget('5', {id: '5', title: 'Lost', value: _.random(10,40), variation: _.random(-10, 10, true)});
    tb.widget('6', _.map(
        _.range(Date.now() - 30 * 24 * 60 * 60 * 1000, Date.now(), 24 * 60 * 60 * 1000)
      , function(t) {
        return {
          x: t,
          y: _.random(10, 1000)
        }
      })
    );

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(tb.toString());
  });

}

var server = http.createServer(handleRequest);
server.listen(8080, '0.0.0.0', function(){
  console.log("Server listening on: http://0.0.0.0:%s", 8080);
});
