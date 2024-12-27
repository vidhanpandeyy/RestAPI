const express =require("express");
const fs= require('fs');
const users= require("./MOCK_DATA.json");
const { stringify } = require("querystring");
const app=express();
const PORT= 8000;

//middleware plugin
app.use(express.urlencoded({extended: false}));
//routes
app.get("/users",(req,res)=>{
    const html=`
    <ul>
    ${users.map((user)=> `<li>${user.first_name}</li>`).join("")};

    </ul>`;
    res.send(html);
});

app.get("/api/users",(req,res)=>{
    return res.json(users);
})
app.route('/api/users/:id').get((req,res) => {
    const id=Number(req.paramsid);
    const user= user.find((user)=>user.id===id);
    return res.json(user);
})
.patch((req,res)=> {
    //EDIT user
    return res.json({status: "pending"});
})
.delete((req,res)=> {
    //Delete user
    return res.json({status: "pending"});
})

app.post("/api/users",(req,res)=> {
    
    const body= req.body;
    users.push({...body,id: users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON>stringify(users),(err,data)=>{
        return res.json({status: "success",id:users.length});

    });
   


    
});




app.listen(PORT,()=> console.log(`Server started at PORT:${PORT}`))