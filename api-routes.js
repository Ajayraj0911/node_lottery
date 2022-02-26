// var express = require("express")
// var router = express.Router()

var router = require("express").Router()
var usercontroller = require("./controller/user-controller")

router.post("/newuser",usercontroller.newuser)
router.post("/spin",usercontroller.spin)
router.get("/dash",usercontroller.dash)
router.post("/login", usercontroller.login)
router.delete("/user/:userId", usercontroller.deleteUser)
router.delete("/user2/:userId", usercontroller.deleteUser2)
router.put("/user", usercontroller.updateUser)

module.exports = router