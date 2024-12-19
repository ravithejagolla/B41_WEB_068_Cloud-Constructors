import mongoose from 'mongoose';
const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
    },
   location:{
        type:String,
        required:true
    },
    hobbies:[String],
    religion:{
        type:String,
    },
    education:[
        {
            degree:String,
            institution:String,
            year:Number
        }],
    profession:{
        type:String,
        required:true
    }
})


const User=mongoose.model("user",userschema)




export {User}