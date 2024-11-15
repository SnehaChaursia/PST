console.log(NaN==NaN); //false
console.log(NaN===NaN); //false
console.log(undefined==null); //true
console.log(undefined===null); //false
console.log(5==="5");//false === is strict and doesn’t convert types: 
console.log("5"==="5");//true === is strict and doesn’t convert types: 
console.log("5"==="6"); //false === is strict and doesn’t convert types:
console.log(typeof(+[])); //number


//falsy values : undefined, null, NaN, "", 0, -0, false
//all others are truthy values

console.log("hello" && 0 && 5 && 9); //0 //after false value code stops executing 
console.log((5 || false || "hello") && true);  //true //after true value code stops executing


