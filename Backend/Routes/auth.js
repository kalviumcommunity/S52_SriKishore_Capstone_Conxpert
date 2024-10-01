import express from "express";
import { register,login } from "../Controllers/authController.js";
import apiLimiter from '../Controllers/rateLimiter.js';


const router = express.Router();

//post api method

router.post('/register',apiLimiter, register);
router.post('/login',apiLimiter, login);

export default router;