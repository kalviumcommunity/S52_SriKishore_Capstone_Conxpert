import express from 'express';

import {
    updatedUser,
    deleteUser,
    getAllUser,
    getSingleUser
} from '../Controllers/userController.js';


const router = express.Router();

router.get('/:id',getSingleUser);
router.get('/',getAllUser);
router.put('/:id',updatedUser);
router.delete('/:id',deleteUser);

export default router;