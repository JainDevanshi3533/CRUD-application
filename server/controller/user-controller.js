import { response } from 'express';
import User from '../schema/user-schema.js';

export const addUser=async (req,res)=>{
    const user =req.body;
    console.log(user);
    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    }catch(error){
        response.status(409).json({message:error.message});

    }
}