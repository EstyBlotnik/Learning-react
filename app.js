const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true, limit:'imb'}));
app.use(bodyParser.json());

//mongo DB
const mongoose = require('mongoose');
const dbURL = 'mongodb+srv://pm:1234567890@projectmanagement.srxmxoq.mongodb.net/project_management?retryWrites=true&w=majority';
mongoose.connect(dbURL,{useNewUrlParser: true, useUnifiedTopology: true,})
.then((result)=>console.log('conected mongoose'))
.catch((error) =>  console.error(error));
// const db = mongoose.Connection
// db.on('error',error=>{console.error(error)})
// db.once('open',()=>{console.log('conect to mongo DB')})

const dotenv = require('dotenv').config()

const postRouter = require('./routs/postRouter.js')
const bookRouter = require('./routs/bookRouter.js')
app.use('/post', postRouter)
app.use('/book', bookRouter)

app.get('/',(req,res)=>{
    res.send('Hello!');
})

app.listen(process.env.PORT,()=>{
    console.log('Server started');
})