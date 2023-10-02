import express from 'express'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

import { getAllRooms, getRoomsById, roomById, createRooms, deleteRoom, updateRoom } from '../controllers/roomsController.js'

router.post('/createrooms', protect, createRooms)
router.post('/roomsbyId', roomById)
router.get('/allrooms', getAllRooms)
router.route('/:id')
      .get(getRoomsById)
      .delete(deleteRoom)
      .put(updateRoom)


export default router