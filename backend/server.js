import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import cors from 'cors'
import path from 'path'

import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

// Routes
import userRoutes from './routes/userRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'
import roomRoutes from './routes/roomsRoutes.js'

dotenv.config()

//connect database
connectDB()

const app = express()

// Use helmet middleware to set security headers
// Add CSP middleware
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"]
    },
  })
);

app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; frame-src 'self'"
  );
  // Anti clickjack error
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
  
  next();
});

// Use xss-clean middleware to sanitize user input
app.use(xss());

// Use express-mongo-sanitize middleware to sanitize user input for MongoDB
app.use(mongoSanitize());

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
