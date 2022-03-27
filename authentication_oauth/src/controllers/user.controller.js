const User = require('../models/user.model')
const express = require('express')

const router = express.Router()


router.get("/",async function (req, res) {
    try{
     const userdata = await User.find()
     console.log(userdata)
     return res.status(200).send({userdata})
    }catch(err){
        return res.status(400).send({message:err.message});
    }
})


module.exports = router