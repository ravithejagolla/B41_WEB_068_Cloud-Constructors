import express from 'express'
import {connect} from 'mongoose'
import profileRouter from './routers/profileRouter.js';
const app=express()

app.use(express.json())
app.use('/profilepicture', profileRouter)



app.listen(3000,async()=>{
    try{
        await connect("mongodb://localhost:27017/ProfilePicture")
        console.log("Connected to MongoDB")
        console.log("server Runnign http://localhost:3000")
    }catch(e) {
        console.error(e)
        process.exit(1)
    }
})