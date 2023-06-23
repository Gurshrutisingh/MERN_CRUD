const mongoose =require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    email:{
       type: String,
       required:true,
       unique:true
    },
    age:{
        type:Number,
        required:true
    }
},
{timestamps: true})
const User = mongoose.model('User',userSchema);

module.exports=User;