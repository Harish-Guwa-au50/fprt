const express=require('express');
const cors=require('cors');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


mongoose.connect( 'mongodb://0.0.0.0:27017/Medicine',
{useNewUrlParser: true, useUnifiedTopology: true}, 
(err) => {
    if(err){
        console.log("Connection Failed", err)
    }
    else{
        console.log("Connection Success");
    }
}
)

const BuyerSchema= new mongoose.Schema({
    fname: String,
    lname:String,
    email: String,
    password: String,
   
})

const SellerSchema = new mongoose.Schema({
    fname: String,
    lname:String,
    email: String,
    password: String,
   
})


const BuyerDetails = new mongoose.model("BuyerDetails", BuyerSchema);
const SellerDetails = new mongoose.model("SellerDetails", SellerSchema);

app.listen(5010, () => {
console.log("Listening to MongoDB on port 5010")
})

app.get('/',(req,res)=>{
    res.send("hi world")
})


app.post('/Buyerlogin',async(req,res)=>{
  
    const {email,password}=req.body;
 const result=await  BuyerDetails.findOne({email:email},(err,user)=>{
    if(user){
            if(password===user.password){
                res.send({message:"login success",user:user})
            }
            else{
                res.send({message:"Incorrect Password"})
            }
    }
    else{
        res.send({message:"user Not Registered"})
    }
 })


})
app.post('/Buyerregister',async(req,res)=>{
    const {name,email,password}=req.body;
   const result=await BuyerDetails.findOne({email:email},(err,user)=>{
    if(user){
        res.send({message:"user Already registered"})
    }
    else{
        const user=new BuyerDetails({
            name,email,password
        })
        user.save(err=>{
            if(err){
                res.send(err)
            }
            else{
                res.send({message:"SuccessFully Registered"})
            }

        })
    }
   })
})
app.post('/Sellerlogin',async(req,res)=>{
  
    const {email,password}=req.body;
 const result=await  SellerDetails.findOne({email:email},(err,user)=>{
    if(user){
            if(password===user.password){
                res.send({message:"login success",user:user})
            }
            else{
                res.send({message:"Incorrect Password"})
            }
    }
    else{
        res.send({message:"user Not Registered"})
    }
 })


})
app.post('/Sellerregister',async(req,res)=>{
    const {name,email,password}=req.body;
   const result=await SellerDetails.findOne({email:email},(err,user)=>{
    if(user){
        res.send({message:"user Already registered"})
    }
    else{
        const user=new SellerDetails({
            name,email,password
        })
        user.save(err=>{
            if(err){
                res.send(err)
            }
            else{
                res.send({message:"SuccessFully Registered"})
            }

        })
    }
   })
})
app.get('/landingpage',(req,res)=>{

})
app.listen("8000",(req,res)=>{
    console.log("port ")
})