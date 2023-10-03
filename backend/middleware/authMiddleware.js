import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import admin from "firebase-admin"
import serviceAccount from "../config/carlton-firebase-configs.js";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const protect = asyncHandler(async(req, res, next) => {
    let token;

    if(
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ) {
        try{
            token = req.headers.authorization.split(' ')[1]

            let decodedToken = await admin.auth().verifyIdToken(token);

            const userFromDb = await User.findOne({
                email: decodedToken.email
            }).select('-password')

            req.user = {
                ...decodedToken,
                _id: userFromDb._id
            }
            next();

            //const decode = jwt.verify(token, process.env.JWT_SECRET)
            //req.user = await User.findById(decode.id).select('-password')
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }

    if(!token){
        res.status(401)
        throw new Error ('Not authorized, no token')
    }

})

/*
const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next()
    }else {
        res.status(401)
        throw new Error('Not authorized as an admin')
    }
}
*/


export{ protect }