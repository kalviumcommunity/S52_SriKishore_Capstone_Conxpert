const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json())

app.get('/',(req,res)=>{    
    res.json({message:"Capstone Project"})
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server Listening to port",port)
})