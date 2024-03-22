import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


dotenv.config();

const app  = express();

const port = process.env.PORT || 8000;

const corsOptions={
    origin:true
}

//middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors(corsOptions));


app.get('/',(req,res)=>{
    res.send("Api is working")
})

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})