const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

const postRouter = require('./routs/postRouter.js')
app.use('/post',postRouter)

app.get('/',(req,res)=>{
    res.send('Hello!');
})

app.listen(process.env.PORT,()=>{
    console.log('Server started');
})