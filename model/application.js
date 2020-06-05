const mongoose=require('mongoose');
var applicationSchema=new mongoose.Schema({
    creator:{
        type:String,
        require: true,
        
    },
    text:{
        type:String,
        require: true,
    },
    pending:{
        type: [String],
        default: undefined
    },
    approved_by:{
        type: [String],
        default: undefined
    },
    rejected_by:{
        type: [String],
        default: undefined
    }

});
module.exports=mongoose.model("application",applicationSchema);