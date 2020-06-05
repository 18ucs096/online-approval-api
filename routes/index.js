var express = require('express');
var router = express.Router();
var path = require('path');
const bodyParser=require("body-parser");
const application=require('../model/application');
const person=require('../model/person');


router.get('/',(req,res)=>{
   
    res.sendFile(`index.html`);
});
router.post('/',(req,res)=>{
   
    const form=new application();
    form.creator=req.body.creator;
    form.pending=req.body.pending;
    form.text=req.body.text;
    form.save((err,docs)=>{
        if(!err){
            person.findOne({email :req.body.creator})
            .then(docs=>{
                console.log(docs);
                if(docs ==null|| docs==undefined){
                    res.send("You need to Rigestered first..");
            }
                else{
                     if(!err){
                        var added=docs.created_total.addToSet(form._id)
                        docs.save();
                        console.log("updated"+docs);
                       // res.send(docs);
                        
                        person.findOne({email :req.body.pending},function (err, docs){
                            if(!err){
                                    if(docs ==null|| docs==undefined){
                                     res.send("You need to Rigestered first..");
                                }
                                else{
                                    var added=docs.pending_total.addToSet(form._id)
                                     docs.save();
                                    //console.log("updated"+docs);
                                    res.send(docs);
                                }
                            }
                            else{
                                res.send("<h1>An error Occured while pushing </h1>");
                            }
                        });
                        
                    }
                    else{
                        res.send("<h1>An error Occured while pushing </h1>");
                    }
                }
            })
            .catch(err=>{
                console.log(err);
                res.send("<h1>An error Occured while search for a entry</h1>");
            });
        }
        else{
            console.log(err)
            res.send("Unable to create application");
        }
    })
});
module.exports=router;