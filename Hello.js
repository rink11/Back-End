
var http = require(`http`)

http.createServer(function(req,res){

    console.log("opa!!")

    res.write("opa, passou pelo back end")
    res.end()

}).listen(3000);