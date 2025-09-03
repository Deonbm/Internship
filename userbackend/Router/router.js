const express= require('express')
const usercontroller = require('../usercontroller')

const router =express.Router()

router.post('/register',usercontroller.registerContoller)
router.post('/login',usercontroller.loginContoller)

module.exports=router
