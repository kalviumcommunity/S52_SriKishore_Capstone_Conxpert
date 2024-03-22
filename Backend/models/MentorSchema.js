import mongoose from 'mongoose';

const MentorSchema = new mongoose.Schema(
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
            type:Number
        },
        photo:{
            type:String
        },
        sessionCost:{
            type:Number
        },
        role:{
            type:String
        },

        //Fields for mentors

        specialization:{
            type:String
        },
        qualification:{
            type:Array
        },

        experience:{
            type:Array
        },
        bio:{
            type:String,
            maxLength:50
        },
        about:{
            type:String
        },
        timeSlots:{
            type:Array
        },
        reviews:{
            type:mongoose.Types.ObjectId, //for uniqueness
            ref:"Review"
        },
        averageRating:{
            types:Number,
            default:0
        },
        totalRating:{
            type:Number,
            default:0
        },
        isApproved:{
            type:String,
            enum:['pending','approved','cancelled'],
            default:'pending'
        },
        appointments:[
            {
                type:mongoose.Types.ObjectId,
                ref:"Appoinment"
            }
        ]
    }
);

export default mongoose.model("Mentor",MentorSchema)