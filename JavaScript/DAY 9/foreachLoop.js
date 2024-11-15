let num = [1,2,3,4,5]
num.forEach((element)=>{
    console.log(element**2)
})

for (i=1;i<10;i++){
    console.log(i**2)
}
let name = "sneha"
let arr = Array.from(name)
console.log(arr)

for (let i of num){
    console.log(i)
}

for (let item in num){
    console.log(item)      // it return key values
}