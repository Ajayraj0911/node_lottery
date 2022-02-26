const { fstat } = require("fs");
var http = require("http")
var fs = require("fs")

http.createServer(function(req,res){

    console.log(req.url);
    if(req.url == "/"){
        res.write("server started...")
        res.end()
    }
    else if(req.url == "/calc"){
       fs.readFile("calc.html",function(err,fileData){
            res.write(fileData)
            res.end()
       })
    }
    else if (req.url == "/addition") {
        let result = parseInt(req.body.n1) + parseInt(req.body.n2)
        res.json({ msg: "success", data: result })
        console.log(ans);
    }
    
    else if (req.url == "/signup") {
        res.write("signup...")
        res.end()
    }
    else if (req.url == "/login") {
        res.write("login...")
        res.end()
    }
    else if (req.url == "/logout") {
        res.write("logout...")
        res.end()
    }
    else{
        res.write("404")
        res.end()
    }

}).listen(3000)