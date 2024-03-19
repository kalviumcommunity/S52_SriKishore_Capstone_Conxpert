const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json())

app.get('/',(req,res)=>{    
    res.json({message:"Capstone Project"})
})

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server Listening to port",process.env.PORT)
})