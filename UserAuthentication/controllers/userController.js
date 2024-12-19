import env from 'dotenv';
env.config();
import { User } from "../models/schema.js";
import argon2 from 'argon2'
import jwt from "jsonwebtoken"



// Register
export const register=async (req,res) => {
    const {username,age,gender,email,password,location,hobbies,education,profession}=req.body;
    const hash= await argon2.hash(password);
    const user=new User({
        username:username,
        age:age,
        gender:gender,
        email:email,
        password:hash,
        location:location,
        hobbies:hobbies,
        education:education,
        profession:profession});

    await user.save();
    res.status(201).json({
        message:"User registered successfully",user
    });
}

//Login 

const jwt_password=process.env.JWT_PASSWORD

export const login = async (req, res) => {
    const { username,email, password } = req.body;
  
    const dbUser = await User.findOne({
        username,
        email
    });
    if(!dbUser) {
        return res.status(404).json({ msg: "User not found" });
    }
    const isCorrectUser = await argon2.verify(dbUser.password, password);
  
    if (isCorrectUser) {
      const token = jwt.sign(
        {
          id: dbUser._id,
          username: dbUser.username,
        },
        jwt_password,
    {
        expiresIn: "1d",

    });

      return res.status(200).json({
        token: token,
      });
    } else {
      res.status(401).json({
        msg: "Invalid credentials",
      });
    }
  };
  
  