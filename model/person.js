const mongoose=require('mongoose');
var personSchema=new mongoose.Schema({
    email:{
        type:String,
        require: true,
        unique: true
    },
   /* name:{
        type: String,
        require: true
    },
    */
    
    created_total:{
        type: [String],
     

    },
    approved_total:{
        type:[String],
       
    },
    rejected_total:{
        type:[String],
        
    },
    pending_total:{
        type:[String],
       
    },

    password:{
        type: String,
        require:true
    },
    resetPasswordToken:{
        type : String
    },
    resetPasswordExpires:{
        type:Date
    }

});
module.exports=mongoose.model("person",personSchema);