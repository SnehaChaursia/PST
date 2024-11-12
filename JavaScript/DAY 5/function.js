// function : function are reusable piece of code that perform some specific task.
// Inside a function if we call "let x = 44" then then the value x will be assigned through out the function and if we call "var x = 44" then the value of x will be assigned through out the code.
// need of funtions :
// -code reusability
// -organized code
// -redability
// 
// how to declare a function:

// -general syntax to define function
// function functionName(Parameter1, Parameter2,...) {
//    code to be executed
// }
// function name();


function greetings() {
    console.log("Hello Yug Ramoliya");
    console.log("before calling greetings");
}

greetings();
console.log("after calling greetings");

/*
control flow of a function :
-for ex that before greet and after greet thing
*/

/*
function argumaents:
-arguments are the values to be passed to the function when we call it


*/
/*
function argumaents:
-arguments are the values to be passed to the function when we call it


*/
function greet(name){
    console.log("Hello " + name);
}
greet("sneha");
greet ("mummy");
greet ("papa"); 

function multiply(a,b,c){
    return a*b*c

}
 console.log(multiply(3,4,5))

 function avgFinder(a,b,c){
    return (a+b+c)/3
 }
 console.log(avgFinder(3,4,5))