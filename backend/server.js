import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import cors from 'cors'
import path from 'path'

// Routes
import userRoutes from './routes/userRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import roomRoutes from './routes/roomsRoutes.js'

dotenv.config()

//connect database
connectDB()

const app = express()

app.use(cors())
app.use(express.json())

// Calling Routes
app.use('/api/users', userRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/rooms', roomRoutes)



if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//create port
const PORT = process.env.PORT || 6500

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} port ${PORT}`
  )
)
