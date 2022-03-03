const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const UserModel = require('./models/Customers.js');
const mongoose  = require("mongoose");


// data base connexion

mongoose.connect("mongodb+srv://user123:foufou123@custemers.higwr.mongodb.net/mern?retryWrites=true&w=majority")



app.get("/api/read",(req, res)=>{ 
    UserModel.find({},(err,resultat)=>{
    if (err){
    console.log(err)
    }else {
    res.send(resultat);
    }})})


app.post("/api/add" ,async  (req , res)=>{
    const  cust= new UserModel({
        name : req.body.name,
        age  : req.body.age,
        username :req.body.username,})

try {
    
    await cust.save();
    res.send ("insert data ") 
} catch (error) {
    res.status(400).json(err)
}
})


   






app.delete("/api/:id", async (req , res) =>{
 const custemers =  await UserModel.findById(req.params.id);
try{await custemers.delete();
res.status(200).json("Post has been deleted")
}catch(err){
res.status(400).json(err)}})
        
app.put("/api/:id", async (req , res) =>{
try{
const updated= await UserModel.findByIdAndUpdate(
req.params.id,{$set : req.body, }, {new : true });
res.status(200).json(updated);
}catch(err){res.status(400).json(err)}})

app.get("/api/:id", async  (req , res)=>{
    const custemer = await UserModel.findById(req.params.id);
    try {res.status(200).json(custemer)
    }catch (err){
     res.status(500).json(err) }} )
    

app.listen(3001, ()=>{
    console.log("You are connected")
})