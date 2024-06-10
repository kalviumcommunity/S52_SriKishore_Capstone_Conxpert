import Mentor from '../models/MentorSchema.js'
import Review from '../models/ReviewSchema.js'
import jwt from 'jsonwebtoken'

export const getAllReview = async (req, res) => {
    try {
        const reviews = await Review.find({});
        res.status(200).json({ success: true, data: reviews })
    } catch (err) {
        res.status(404).json({suceess:false, message: "Not found" })
    }
};

// create review section


export const createReview = async (req, res) => {

    if (!req.body.mentor) req.body.mentor = req.params.mentorId;
    if (!req.body.user) req.body.user = req.userId;

    const newReview = new Review(req.body)

    try {
        const savedReview = await newReview.save();

        await Mentor.findByIdAndUpdate(req.body.mentor, {
            $push: { reviews: savedReview._id }
        });



        res.status(200).json({ success: true, message: 'Review submitted', data:savedReview })
    }
    catch(err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

