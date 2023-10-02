import express from 'express'
const  router = express.Router()
import { authUser, getUserProfile, registerUser } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
import { body } from 'express-validator';

router.post('/login', authUser)
router.post(
    '/',
    [
      body('name').notEmpty().isString(),
      body('nic').notEmpty().isString(),
      body('gender').notEmpty().isString(),
      body('contactNo').notEmpty().isString(),
      body('email').notEmpty().isEmail(),
      body('password').notEmpty().isString().isLength({ min: 6 }),
    ],
    registerUser
  );
router.get('/profile', protect, getUserProfile)

export default router