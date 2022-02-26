const express = require("express")
const usercontroller = require("./controller/user-controller")
const apiRoutes = require("./api-routes")
var fs = require("fs")
var ejs = require("ejs")

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs');

app.use("/", apiRoutes)

app.get("/",function(req,res){
    res.write("Welcome");
    res.end();
})

app.get("/newuser", usercontroller.newuser);

app.get("/signup",function(req,res){
    fs.readFile("./views/signup.ejs", function (err, data) {
        res.write(data);
        res.end();
    })
})

app.get("/lottery", function (req, res) {

    fs.readFile("./views/lottery.ejs", function (err, data) {

        res.write(data);
        res.end();
    })

})
app.get("/spin",usercontroller.spin)

// app.get("/dash",function(req,res){
//     fs.readFile("./views/userresult.ejs", function (err, data) {

//         res.write(data);
//         res.end();
//     })
// })

app.listen(3001, function () {
    console.log("server started on 3000");
})