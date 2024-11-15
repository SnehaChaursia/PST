/*
operators:
operators are the symbols which are use to perform operations

- Arithmetic operators (+, -, *, /, %)
- Assignment operators (=, +=, -=, *=, /=)
- Comparison operators (==,!=, >, <, >=, <=)
- Logical operators (&&, ||,!)
- Ternary operator (? :)
- Bitwise operators (&, |, ^, ~, <<, >>)
- Unary operators (+, -,!, ~, typeof, delete)
- Equality operators (===,!==)
- Conditional operators (if, else, switch)
- Looping operators (for, while, do-while)
- Function operators (function, return, arguments, this, call, apply)
- Miscellaneous operators (new, in, instanceof, throw, try, catch, finally)
*/


/*
operator precedence:
" ** has higher precedence than * and / has higher precedence than + and -"
*/ 


let resultt = (5 + 3) / 2 + 6;
console.log(resultt); // 10
/*
arithmetic operators:
addition:
- it adds two operands and give arithmetic sum and also concate the string or numbers
*/
let x = 5 + "hello";

console.log(x); // output: "5hello"
/*
subtraction:
- it subtracts second operand from first and give arithmetic difference
*/
let y = "hello" - 1;

console.log(y); // output: NaN (Not a Number)
/*
multiplication:
- it multiply two operands and give arithmetic product
*/
let z = Infinity*0;
let w = Infinity*Infinity
let r = "hii"*3

console.log(z); // output: NaN
console.log(w); // output: Infinity
console.log(r); // output: NaN
/*
division:
- it divide first operand by second and give arithmetic quotient
*/

/*
remainder:
- it gives the remainder of the division of two operands
*/

/*
exponentiation:
- it raises the first operand to the power of second and give arithmetic result
- use this **
*/
let e = 2**5; // 2^5

console.log(e);

//assignment operators:
let n=7 
n+=6 //13 // n = n + 6
n-=4 //9
n*=6 //54
n/=3 //18
n%=4 //2
n**=2 //4
console.log(n); //4

//comparison operators:

let a = 5
let b = 10
console.log(a == b) // false
console.log(a != b) // true
console.log(a > b) // false
console.log(a < b) // true
console.log(a >= b) // false
console.log(a <= b) // true
console.log(3 === "3") // false //this will also check data type for comparision

//bitwise operator :
let c = 12;
let d = 25;

console.log(c & d); // 8 // AND operation :
console.log(c | d); // 29 // OR operation :

//logical operators:

const m = 5;
const o = 10;

console.log((m<6) && (o<5)); //logical AND //false

console.log((m<6) || (o<5)); //logical OR //true

console.log(!(m<6)); // logical NOT //false

/*
ternary operator:
-it evaluate the code based on conditions 
-grneral syntax:
condition? Expression 1(true value) :Expression 2 (false value);
*/

// Question:
let AGE=65;
let adultAge =18;
let oldAge=60;
let result=(adultAge>=AGE)?"you are an adult":(AGE>=oldAge)?"you are a senior citizen":"you are a child";

console.log(result);