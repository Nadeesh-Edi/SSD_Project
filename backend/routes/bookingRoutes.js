import express from 'express'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

import { bookRoom, cancelBookings, getallbookings, getUserBookings } from '../controllers/bookingContoller.js'

router.post('/bookroom', protect, bookRoom)
router.get('/allBookings', protect, getallbookings)
router.post('/userBookings', protect, getUserBookings)
router.post('/cancelbookings', protect, cancelBookings)


export default router