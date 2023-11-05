
import Uzer from '../models/user_model';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt'

function sendError(res:Response,error:string){
    res.status(400).send({
        'err':error
    })
}

const register = async (req:Request , res:Response) => {
    const email= req.body.email;
    const password= req.body.password;
    console.log(email)
//     if(email==null||password==null){
//         return sendError(res,"Please enter a valid email and password");
//     }
//     try{
//         const user=await Uzer.findOne({'email':email})
//         if(user!=null){
//             sendError(res,"user allredy in data base")
//         }
//     }catch(error){
//         console.log(error)
//         sendError(res,"faild1");
//     }

//     try{
//         const salt = await bcrypt.genSalt(10);
//         const encryptedPass= await bcrypt.hash(password,salt)
//         const newUser = new Uzer({
//             'email': email,
//             'password': encryptedPass
//         })
//         const newUser_ = await newUser.save();
//         res.status(200).send(newUser_.email);
//     }catch(err){
//         console.log(err)
//         sendError(res,"faild2");
//     }
    sendError(res,"faild2");
}

const login = async (req:Request , res:Response) => {

    // console.log(req.body.message);
    // const word = req.body.message;
    // const book= new Book({
    //     title: req.body.message,
    //     author: word,
    //     publishing_year: 2023,
    //     Published_by: word,
    //     Summary: word,
    //     state_of_book: word
    // })
    // console.log(book);
    // try{
    //     await book.save();
    //     console.log("saved in DB");
    //     res.status(200).send(book);
    // }   
    // catch(err){
    //     console.log(err);
    //     res.status(400).send({'error': "failed"});
    // }
    res.status(400).send({'error': "failed login"});
}

const logout = (req:Request , res:Response) => {
    res.status(400).send({'error': "failed"});
}

export = {register, login, logout};