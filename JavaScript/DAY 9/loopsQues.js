function printTable(num){
    let value =""
    let y=0
for ( i=1;i<=10;i++){
    y=num*i
     value=console.log(`${num}*${i}=${y}`)
}return value
}
printTable(5)
printTable(6)

function printNatural(num){
    let sum=0;
    for (i=1;i<=num;i++){
        sum+=i}
    return sum
}
console.log(printNatural(10))

// //printing multiplication tables till 10 using nested loop  
// for  ( let i = 1 ; i <= 10 ; i++){
//     for(let j = 1 ; j <= 10 ; j++){
//         console.log(i + " x " + j + " = " + i*j);
//     };
// };
function fact(num){
    let res = 1;
    for(i=1 ; i<=num; i++){
        res *= i;
    };
    return res;
}
console.log(fact(5));