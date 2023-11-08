
import Uzer from '../models/user_model';
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

function sendError(res:Response,error:string){
    res.status(400).send({
        'err':error
    })
}

const register = async (req:Request , res:Response) => {
    const email= req.body.email;
    const password= req.body.password;
    console.log(email)
    if(email==null||password==null){
        return sendError(res,"Please enter a valid email and password");
    }
    try{
        const user=await Uzer.findOne({'email':email})
        if(user!=null){
            return sendError(res,"user allredy in data base")
        }
    }catch(error){
        console.log(error)
        sendError(res,"faild1");
    }
    try{
        const salt = await bcrypt.genSalt(10);
        const encryptedPass= await bcrypt.hash(password,salt)
        const newUser = new Uzer({
            'email': email,
            'password': encryptedPass
        })
        const newUser_ = await newUser.save();
        res.status(200).send(newUser_);
    }catch(err){
        console.log(err)
        sendError(res,"faild2");
    }
}

const login = async (req:Request , res:Response) => {

    const email= req.body.email;
    const password= req.body.password;
    console.log(email)
    console.log(password)
    if(email==null||password==null){
        return sendError(res,"Please enter a valid email and password");
    }
    try{
        const user=await Uzer.findOne({'email':email})
        console.log(user)
        if(user==null){
            return sendError(res,"imcorrect email")
        }
        console.log(password);
        console.log(user.password);
        const mach= bcrypt.compare(password,user.password);
        if(!mach) return sendError(res,"imcorrect password");
        const accessToken = jwt.sign(
            { id: user._id },
            process.env.ACCESS_TOKEN_SECRET,
            { 'expiresIn': process.env.JWT_TOKEN_EXPIRATION }
        )
        return res.status(200).send({'accessToken': accessToken})
    }catch(error){
        console.log(error)
        return sendError(res,"faild login");
    }
    
}

const logout = (req:Request , res:Response) => {
    res.status(400).send({'error': "failed"});
}

const authenticateMiddleware= async (req:Request,res:Response,next: NextFunction)=>{
    const authHeader= req.headers['authorization'];
    if(authHeader==null)return sendError(res,"auth missing")
    const token= authHeader.split(' ')[1];
    if(token==null) return sendError(res,"auth missing")
    try{
        const user= await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        //TODO fix ts
        //req.userId=user._id;
        console.log(user)
        next()
    }catch(err){
        return sendError(res,"fail")
    }
}

export = {register, login, logout,authenticateMiddleware};