const User = require('../models/user.model')
var jwt = require('jsonwebtoken');
require('dotenv').config()


const register = async(req,res) => {
  try{
        const userdata = await User.findOne({email:req.body.email})

    if(userdata) {
        return res.status(500).send({message:"Email exist "})
    }
    const userRegister = await User.create(req.body)
   
    console.log(process.env.jwt_registerkey)
  // <===============token=========>

  // var token = jwt.sign({userRegistrt}, process.env.register_key)

    var token = jwt.sign({userRegister}, process.env.jwt_registerkey);

    
    return res.status(400).send({userRegister,token})
 }
  catch (err) {
      return res.status(500).send({message:err.message})
  }
}

module.exports =  register