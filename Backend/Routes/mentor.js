import express from 'express'

import {
    updatedMentor,
    deleteMentor,
    getAllMentor,
    getSingleMentor
} from '../Controllers/mentorController.js';

const router = express.Router();

router.get('/:id',getSingleMentor);
router.get('/',getAllMentor);
router.put('/:id',updatedMentor);
router.delete('/:id',deleteMentor);

export default router;