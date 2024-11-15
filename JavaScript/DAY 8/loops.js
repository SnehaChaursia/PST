/*
loops:
- used when we need to do repeated increament or decreament

types of loops:
1. for loop
2. while loop
3. do-while loop

for loop:
    for (initialization; condition; increment/decrement) {
        code block
    }
        
while loop:
    while (condition) {
        code block
    }
        
do-while loop:
    do {
        code block
    } while (condition);
*/

//print first 20 natural numbers:

 function printnaturalNum()
 {
    for (i=1;i<=20;i++)
    {
        console.log(i)
    }
 }
 printnaturalNum()

 //while
 function printnaturalNum(){
    let i =1
while(i<=20){
    console.log(i)
    i++
}
 

 }
 printnaturalNum()

 let i=6;
 do {
    console.log(i)
 }while (i<5) // whether condition work or not it run atleast once

 function printOddNum(num){
    for ( i=0;i<=num;i++){
        if(i%2!==0)
        console.log(i)
    }

 }
 printOddNum(20);

 let num =6
 switch(num){
case 1:
case 2:      
case 3:
console.log("hi")
break;
case 5:
case 6: 
case 7:
console.log("bye")
 }
