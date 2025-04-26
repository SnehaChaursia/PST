const express = require('express');
const app=express();
const Users = require('./MOCK_DATA.json');
app.get("/api/Users",(req,res)=>{
   return res.json(Users);
})
app.get("/Users",(req,res)=>{
    const html=`<ul>${Users.map((User)=>`<li>${User.first_name}</li>`).join("")}</ul>`;
    return res.send(html);
})
app.route("/Users/:id")

.get((req,res)=>{
    const id=Number(req.params.id);
    const userid=Users.find((user)=>user.id===id);
    return res.json(userid);
})
const PORT=8000;
app.listen(PORT,()=>(console.log("Server is running")));