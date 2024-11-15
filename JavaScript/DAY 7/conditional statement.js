// conditional flow

/*
control statements
-used to control the execution of a program baseed on some conditions

if statement:

if (condition) {
    if condition is true then this block of code will be executed otherwise the code will not be executed
} 
*/

let num = 4;
if(num>=4){
    console.log(`${num}`);
}

// if else if else
function check (age){
    if (age>=18&&age<=60){
        console.log("adult")
    }
    else if (age<18){
        console.log("minor")

    } else (console.log("old"))
}

check(18);
check(65);
check(16);


/*
switch statement:
-use when there is lots of conditions in the code

switch (expression) {
    case value1:
        code block
        break;
    case value2:
        code block
        break;
    default:
        default code block
}

*/ 

function Seasons(num){
    switch (num){
        case 1: console.log("winter");
        break;
        case 2: console.log("spring");
        break;
        case 3: console.log("summer");
        break;
        case 4: console.log("autumn");
        break;
        default: console.log("invalid number");
    }
}
Seasons(1);
Seasons(2);
Seasons(3);
Seasons(4);
Seasons(5);  // if there is no default condition there will be no outcome for 5