const fs =require('fs');  // fs is builtin module to intract with files or create file
// fs.mkdirSync('./fsModule')
 //Synchronous:
fs.writeFileSync('./test.txt',"Hey there");  // content part if i change content it will overwrite previous one 

// Asynchronous
fs.writeFile('./test1.txt',"Hey there Sneha",(err)=>{})

// to read file
const result=fs.readFileSync('./contact.txt',"utf-8")  //
console.log(result);

//Asynchronous : it always need a callback to handel error and it also not return that why we console it using error n
// fs.readFile('./contact.txt',"utf-8",(err,result1)=>{
//     if(err){
//         console.log("Error",err)
//     }else{
//         console.log(result1);
//     }
// })  

//AppendFile:
fs.appendFileSync('./contact.txt',new Date().getDate().toLocaleString())
fs.cpSync("./contact.txt","./contactCopy.txt")
fs.unlinkSync("./contactCopy.txt")
console.log(fs.statSync("./contact.txt"))
fs.mkdirSync("./newFolder")