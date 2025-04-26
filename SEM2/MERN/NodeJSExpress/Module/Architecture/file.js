//Blocking code : synchronous

const fs=require("fs");
console.log("hello")
fs.writeFileSync("./file2.txt","Sneha");
const result=fs.readFileSync("./file2.txt","utf-8");
console.log(result);
console.log("how are you");

//Non blocking code : Asynchronous

const fs=require("fs");
console.log("hello")
fs.writeFile("./file2.txt","Sneha",(err)=>{
    if(err){
        console.log("Error",err)
    }else{
        console.log("File created")
    }
})
console.log("how are you");