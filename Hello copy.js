
console.log("opa!!")

var http = require('http');

http.createServer(function(res,req) {
    res.write('opa')
    res.end()
}).listen(8080);