function add(a,b){
    console.log(a)
}

function sub(a,b){
    console.log(a-b);
}

function mul(a,b){
    console.log(a*b);
}

exports.a = add;
exports.b = sub;
exports.c = mul;
