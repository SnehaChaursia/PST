
// module: is a reusable code which perform some specific function .
// Two type of Module : 
// Built in module: which come in the node js installation , 
// user defined module: which we built.
//  using module we can divide code in small files which make easy to maintain code

// Example of user defined module:
function sub(a,b){
    return  a-b;
}
function divide(a,b){
  return   a/b
}

// console.log(add(2,5))  // noramly we call function here in same file but using module we are doing it in moduleLink.js
module.exports={
sub,
divide
}

// also written as arrow function:

// exports.multiply=(a,b)=>a*b;
// exports.add=(a,b)=>a+b;

