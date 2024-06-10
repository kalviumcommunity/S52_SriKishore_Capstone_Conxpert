import Mentor from '../models/MentorSchema.js'

export const updatedMentor = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedMentor = await Mentor.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, message: 'Successfully updated', data: updatedMentor })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update' })
    }
};

export const deleteMentor = async (req, res) => {
    const id = req.params.id;

    try {
        await Mentor.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Successfully deleted' })
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete' })
    }
};

// export const getSingleMentor = async (req, res) => {
//     const id = req.params.id;

//     try {
//         const mentor = await Mentor.findById(id)
//             .populate('reviews')
//             .select('-password')
            
//         res.status(200).json({ success: true, message: 'Mentor found', data: mentor })
//     } catch (err) {
//         res.status(404).json({ success: false, message: 'No Mentor found' })
//     }
// };

export const getSingleMentor = async (req, res) => {
    const id = req.params.id;

    try {
        const mentor = await Mentor.findById(id)
            .populate({
                path: 'reviews',
            })
            .select('-password');

        res.status(200).json({ success: true, message: 'Mentor found', data: mentor });
    } catch (err) {
        res.status(404).json({ success: false, message: 'No Mentor found' });
    }
};

export const getAllMentor = async (req, res) => {

    try {

        const { query } = req.query;
        let mentors;

        if (query) {
            mentors = await Mentor.find({ isApproved: 'approved', $or: [{ name: { $regex: query, $options: 'i' } }, { specialization: { $regex: query, $options: "i" } }] }).select("-password");
        } else{
            mentors = await Mentor.find({isApproved:'approved'}).select("-password")
        }

        // const mentors = await Mentor.find({}).select('-password');
        res.status(200).json({ success: true, message: 'Mentors found', data: mentors })
    } catch (err) {
        res.status(404).json({ success: false, message: 'Not found' })
    }
};



