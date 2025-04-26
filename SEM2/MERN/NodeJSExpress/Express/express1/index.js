const express = require('express');
const app=express();
const fs = require('fs');
const Users = require('./MOCK_DATA.json');
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
    console.log("hello from midlleware 2")
    return res.json({status:"success"})
    next();

})
app.get("/api/Users",(req,res)=>{
   return res.json(Users);
})
app.get("/Users",(req,res)=>{
    const html=`<ul>${Users.map((User)=>`<li>${User.first_name}</li>`).join("")}</ul>`;
    return res.send(html);
})
app.route("/Users/:id")

.get((req,res)=>{
    const id=Number(req.params.id);  // params  is used for getting the id from the url
    const userid=Users.find((user)=>user.id===id);
    return res.json(userid);
})

// to create new user
app.post("/api/Users/",(req,res)=>{
    const body=req.body;
    // console.log("body",body);
    Users.push({id:Users.length+1,...body});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(Users),(err)=>{
        if(err){
            console.log("Error",err)
        }else{
            console.log("File created")
        }
    })
 return  res.json({status:"success",id:Users.length+1})
});
// to update user with  id
app.patch("/api/Users/:id",(req,res)=>{
    return  res.json({status:"Pending"})
   });
//    to delete the user with id    
   app.delete("/api/Users/:id",(req,res)=>{
    return  res.json({status:"Pending"})
   });


const PORT=8000;
app.listen(PORT,()=>(console.log("Server is running")));