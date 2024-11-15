// for loop -> for(initialization;condition;increment/decrement)
// ex:
function printEven(num) {
    for (i=0;i<=20;i++)
    {
        if (i%2==0){
            console.log(i)
        }
    }
}
printEven();

function sumEven(){
    let sum=0;
    for (i=0;i<=20;i++){
        if (i%2==0){
            sum+=i
    }

  }  
  return sum;
}
console.log(sumEven());

function average(a,b,c){
    // let avg=a+b+c/3
    return avg = a+b+c/3;  // both ways work but comment out way is good
}
console.log(average(10,10,20));
let a=30;
let b=40;
let print = (a>b)? console.log(`${a}`):console.log(`${b}`)

// global and function scope 
{let a=8;
    console.log (a)  // block scope [let,const]
}
console.log(a)

// In JavaScript, functional scope means that variables defined inside a function are only accessible within that function. 
// This scope is sometimes also called local scope