var express = require("express")
var app = express() 
var fs = require("fs")


app.use(express.urlencoded({ extended: true }))
app.use(express.json())   


app.get("/", function (req, res) {

    res.write("Hello world")
    res.end();
})


app.get("/calc", function (req, res) {
    // console.log("get calc");
    // console.log("******************************");
    // console.log(req.params);
    // console.log(req.body);
    // console.log(req.query);
    // console.log("******************************");

    fs.readFile("../views/calc.html", function (err, data) {
        console.log("reading done");
        console.log(data);
        res.write(data)
        res.end()
    })

}) 
app.post("/addition",function (req, res) {
    console.log("post calc ");

    // console.log("******************************");
    // console.log(req.params);    
    console.log(req.body);  
    // console.log(req.query);
    // console.log("******************************");
    let ans = parseInt(req.body.n1) +    parseInt(req.body.n2)
    res.send("Addition = "+ans)
    console.log(ans);
    
})


app.listen(3000, function () {
    console.log("server started on 3000.....");
})