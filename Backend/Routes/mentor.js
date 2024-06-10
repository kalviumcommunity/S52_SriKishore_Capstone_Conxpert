import express from 'express'

import {
    updatedMentor,
    deleteMentor,
    getAllMentor,
    getSingleMentor
} from '../Controllers/mentorController.js';

import { authenticate,restrict } from '../auth/verifyToken.js';

import reviewRouter from './reviews.js';

const router = express.Router();

router.use('/:mentorId/reviews',reviewRouter); //nested route

router.get('/:id',getSingleMentor);
router.get('/',getAllMentor);
router.put('/:id',authenticate,restrict(["mentor"]),updatedMentor);
router.delete('/:id',authenticate,restrict(["mentor"]),deleteMentor);

export default router;