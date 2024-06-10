import express from 'express';

import {
    updatedUser,
    deleteUser,
    getAllUser,
    getSingleUser
} from '../Controllers/userController.js';

import { authenticate,restrict } from '../auth/verifyToken.js';


const router = express.Router();

router.get('/:id',authenticate,restrict(['mentee']),getSingleUser);
router.get('/',authenticate,restrict(['admin']),getAllUser);
router.put('/:id',authenticate,restrict(['mentee']),updatedUser);
router.delete('/:id',authenticate,restrict(['mentee']),deleteUser);

export default router;