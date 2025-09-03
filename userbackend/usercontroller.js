const users = require('./Model/user_model')
const jwt = require('jsonwebtoken')

exports.registerContoller=async(req,res)=>{
   const{username,email,password}=req.body

   console.log(username,email,password);

   try {
    const existingUser= await users.findOne({email})
    
    if (existingUser) {
        res.status(406).send('User already exists ..Please Login')
    }
    else{
        const newUser = new users({username,email,password})

        await newUser.save()
        res.status(201).json(newUser)
    }

   } catch (error) {
      res.status(400).json(error)
   }
   
}


exports.loginContoller=async(req,res)=>{
  
    const{email,password}=req.body
    try {
        const existingUser = await users.findOne({email})

        if (existingUser) {
            const token= jwt.sign({userId:existingUser._id},process.env.jwt_password)
            res.status(200).json({user:existingUser,token})
        } else {
            res.status(404).send('invalid username/password')
        }
    } catch (error) {
        res.status(400).json(error)
    }
    
}