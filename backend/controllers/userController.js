import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateTokens.js'
import User from '../models/userModel.js'



//User Login
const authUser = asyncHandler(async(req, res) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    const { email, password } = req.body

   const user = await User.findOne({ email })

   if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            nic: user.nic,
            gender: user.gender,
            contactNo: user.contactNo,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
   } else {
       res.status(401)
       throw new Error('Invalid email or password')
   }

})

//User Registration 
const registerUser = asyncHandler(async(req, res) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    const { name, nic, gender, contactNo, email, password } = req.body

   const userExists = await User.findOne({ email })

   if(userExists) {
       res.status(400)
       throw new Error('User already exists')
   }

   const user = await User.create({
       name,
       nic,
       gender,
       contactNo,
       email,
       password
   })

   if(user) {
       res.status(201).json({
        _id: user._id,
        name: user.name,
        nic: user.nic,
        gender: user.gender,
        contactNo: user.contactNo,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
       })
   } else {
       res.status(400)
       throw new Error('Invalid user data')
   }

})


// get user profile
const getUserProfile = asyncHandler(async(req, res) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'");
   const user = await User.findById(req.user._id)

   if(user){
       res.json({
        _id: user._id,
        name: user.name,
        nic: user.nic,
        gender: user.gender,
        contactNo: user.contactNo,
        email: user.email,
        isAdmin: user.isAdmin,
       })
        
   }else {
       res.status(404)
       throw new Error('USer not found')
   }

})

export { authUser, getUserProfile, registerUser }