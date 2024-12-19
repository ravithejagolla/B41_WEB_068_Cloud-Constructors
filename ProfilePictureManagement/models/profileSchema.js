import {Schema,model} from 'mongoose'

const profileSchema=new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    filename:{
        type:String,
        required:true
    },
    visibility:{
        enum:["public", "private","connections"],
    },
    connections:[{
        type: Schema.Types.ObjectId,
        ref:'User'
    }]  
})

const ProfilePicture=model('ProfilePicture',profileSchema)



export {ProfilePicture}