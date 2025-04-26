
const http=require ("http");
const fs=require("fs");
const url =require("url");

const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}${req.url}:New Req Received\n`;
    const myUrl=url.parse(req.url,true);
    console.log(myUrl)
    fs.appendFile("log.txt",log,(err,data)=>{
    switch(myUrl.pathname){
        case"/":
        res.end("HomePage");
        break;
        case "/about":
            const about=myUrl.query.id
            res.end(`${about}`);
    } 
    })
    
});
myServer.listen(8000,()=>console.log("Server is running"));