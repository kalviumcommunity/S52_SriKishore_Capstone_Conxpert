import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './Routes/auth.js'
import userRoute from './Routes/user.js'
import mentorRoute from './Routes/mentor.js'
import reviewRoute from './Routes/reviews.js'


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
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/users',userRoute);
app.use('/api/v1/mentors',mentorRoute)
app.use('/api/v1/reviews',reviewRoute)


app.get('/',(req,res)=>{
    res.send("Api is working")
})

mongoose.set('strictQuery',false)

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log('mongoDB database is connected')
    } catch (err) {
      console.log("mongoDB database is connection failed")
    }
  }


app.listen(port,()=>{
    connectDB();
    console.log(`server is running on the port ${port}`)
})