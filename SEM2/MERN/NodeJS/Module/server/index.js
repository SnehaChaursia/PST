// this is where  my execution will start

const http=require ("http");
const fs=require("fs");

const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}${req.url}:New Req Received\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        res.end("Hello from Server") 
    })
    // console.log(req.headers);
    // console.log(req);
    // console.log("new req recived");
    // res.end("Hello from Server")
});
myServer.listen(8000,()=>console.log("Server is running"));