var users = []


exports.newuser = function (req,res){

    let userId = Math.random().toString().slice(2)
    let lotterynumber = Math.floor(100000 + Math.random() * 900000)
    let user = { "firstName": req.body.name, "email": req.body.email, "password": req.body.password, "userId": userId,"lotterynumber": lotterynumber }
    users.push(user);
    // res.redirect("./views/lotte  ry.ejs");
    res.json({ data: user, status: 1, msg: "user added" });
    // res.end();
    // console.log(user.firstName);
    console.log(users)

}

exports.spin  = function(req,res){

    let val = Math.floor(100000 + Math.random() * 900000)
    res.json({ data: val, status: 1, msg: "lottery number added" });
}

exports.dash = function(req,res){
    
    // var user = users;
    console.log(users)
    res.render('userresult.ejs', {
        users: users
    })
    // res.send("Users"+users);
    // res.json({data:users,status:1,msg:"data is showing"});
    
}
// exports.listUsers = function (req,res){
//     res.json({data:users,status:1,msg:"user reterived"});
// }

exports.login = function (req, res) {
    let email = req.body.email
    let password = req.body.password
    isValid = false
    let user

    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
            isValid = true
            user = users[i]
            break;
        }
    }

    if (isValid == true) {
        //success
        res.json({ data: user, staus: 1, msg: "authentication done..." })
    } else {
        res.json({ data: { email: email, password: password }, msg: "Invalid Credentilas", staus: -1 })
    }
}

exports.deleteUser = function (req, res) {
    let userId = req.params.userId
    let index = -1
    for (let i = 0; i < users.length; i++) {
        if (users[i].userId == userId) {
            index = i
            break
        }
    }
    if (index == -1) {
        res.json({ data: req.params, status: -1, msg: "Invalid userId" })
    } else {
        users.splice(index, 1);
        res.json({ data: users, status: 200, msg: "user removed..." })
    }

}

exports.deleteUser2 = function (req, res) {
    let userId = req.params.userId
    let oldLength = users.length // 5 

    users = users.filter(user => user.userId != userId)
    let newLength = users.length

    if (oldLength == newLength) {
        res.json({ data: req.params, status: -1, msg: "Invalid userId" })
    } else {
        res.json({ data: users, status: 200, msg: "user removed..." })
    }

}
//body 
exports.updateUser = function (req, res) {
    res.json({ data: req.body })
}

