import express from 'express';
const app = express()

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({extended:true, limit:'imb'}));
app.use(bodyParser.json());

//mongo DB
import mongoose from 'mongoose';
const dbURL = 'mongodb+srv://pm:1234567890@projectmanagement.srxmxoq.mongodb.net/project_management?retryWrites=true&w=majority';
mongoose.connect(dbURL)//,{useNewUrlParser: true, useUnifiedTopology: true,})
.then((result)=>console.log('conected mongoose'))
.catch((error) =>  console.error(error));
// const db = mongoose.Connection
// db.on('error',error=>{console.error(error)})
// db.once('open',()=>{console.log('conect to mongo DB')})

import dotenv from 'dotenv';
dotenv.config()

import postRouter from './routs/postRouter';
import bookRouter from './routs/bookRouter';
app.use('/post', postRouter)
app.use('/book', bookRouter)

app.use('/public',express.static('public'))

app.get('/',(req,res)=>{
    res.send('Hello!');
})

export = app;