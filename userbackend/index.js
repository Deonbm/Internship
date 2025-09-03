const express = require('express')
const cors =require('cors')
require('dotenv').config()
require('./DB_connection/db_connection')
const router= require('./Router/router')

const appserver =express()
appserver.use(cors())
appserver.use(express.json())
appserver.use(router)
const port = 3000 || process.env.port

appserver.listen(port,()=>{
    console.log('appserver is running successfully');
    
})

appserver.get('/',(req,res)=>{
    res.status(200).send(`<h1>Appserver is successfully at port ${port}</h1>`)
})   