
import express from 'express';
import { router } from './routers/userRouter.js';
import {connect} from 'mongoose'

const app = express();

app.use(express.json());

app.use('/user',router)



app.listen(3000, ()=>{
    try{
        connect('mongodb://localhost:27017/matchme')
        console.log("connected to MongoDB")
        console.log("Server runnning in http://localhost:3000")
    }catch(e) {
        console.error(e)
        process.exit(1)
    }
})