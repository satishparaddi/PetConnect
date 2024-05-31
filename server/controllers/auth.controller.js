import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next) => {
    const {username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password)
    const newUser=new User({username,email,hashedPassword});
    await newUser.save();
    try{
    await res.status(201).json('User created successfully!');
    }
    catch(error){
        next(error);
    }
    

};


    