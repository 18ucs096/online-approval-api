const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const signup=require('./model/person');
const path = require("path");
const bodyParser=require("body-parser");






router.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/views/signup.html`);   
});

router.post('/',(req,res)=>{
    
    const person=new signup();
    person.email=req.body.email;
    
    person.password=req.body.password;
   
    signup.findOne({email :person.email})
            .then(signup=>{
                console.log(signup);
                if(signup ==null|| signup==undefined){
                    person.save((err,docs)=>{
                    if(!err){
                        res.send("<h1 >Your have successfully signed up.<br>Please login to continue..</h1>");
                        console.log("Signup successfull")
                        console.log(docs);
                    }
                    else{
                        res.send("<h1>An error Occured while Signup</h1>");
                    }
                })
            }
            
                else{
                    res.send("<h1>This email is already registered</h1>");
                    console.log("alearedy registered");
                }
            })
            .catch(err=>{
                res.send("<h1>An error Occured while search for a entry</h1>");
            });

})

module.exports=router;








