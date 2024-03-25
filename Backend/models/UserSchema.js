import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        phone:{
            type:String
        },
        photo:{
            type:String
        },
        role:{
            type:String,
            enum:['mentee','admin'],
            default:"Mentee"
        },
        gender:{
            type:String,
            enum:['male','female','others']
        },
        interest:{
            type:String
        },
        appointment:[
            {
                type:mongoose.Types.ObjectId,
                ref:"Appointment"
            }
        ]
    }
)


export default mongoose.model("User",UserSchema)
