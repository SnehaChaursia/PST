//question 1
// create a function that takes stringNum as parameter and returns a number multiplied by 2:
function product(num){
    return console.log (num*2)
 }
// let result = product(2) 
// console.log(result)
product(2); // these are three ways of calling a function.

//question 2
// find a middle number from input string and print the output by multiplying by 2
// Math.floor(splitStr.length / 2); //math.floor will round of the values
function opr(a){
    let len= a.length;
    let mid=Math.floor(len/2);    //The Math.floor() method rounds a number DOWN to the nearest integer.
    let value= a[mid];
    return value *2;
}
console.log(opr("1234567"));