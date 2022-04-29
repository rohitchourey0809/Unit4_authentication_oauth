const User = require('../models/user.model')
var jwt = require('jsonwebtoken');
require('dotenv').config()


const generateToken = (userdata) => {
    console.log(process.env.registerkey)
    return jwt.sign({userdata}, process.env.registerkey)
}

const register = async(req,res) => {
  try{
        const userdata = await User.findOne({email:req.body.email})
        console.log(userdata)

    if(userdata) {
        return res.status(500).send({message:"Email exist "})
    }
    const userRegister = await User.create(req.body)
    console.log(userRegister)
   
    console.log("password",process.env.registerkey)
  // <===============token=========>

  // var token = jwt.sign({userRegistrt}, process.env.register_key)

    var token = jwt.sign({userRegister}, process.env.registerkey);

    
    return res.status(400).send({userRegister,token})
 }
  catch (err) {
      return res.status(500).send({message:err.message})
            }
}



const login = async(req,res) =>
{
    try {
        
    const userdata = await User.findOne({email:req.body.email})
    console.log(userdata)

    if(!userdata)
    {
        return res.status(500).send({message:"Email and passowrd not match!"})
    }  
    console.log(req.body.password,"poww")
    const match =  userdata.checkPassword(req.body.password);

    if(!match)
    {
        return res.status(500).send({message:"Email and passowrd not match!"})

    }

      // if it matches
        const token = generateToken(userdata)
        return res.status(200).send({userdata, token})
    // console.log("token chal ra h login me")
    // var token = jwt.sign(userdata, process.env.register_key);
    // return res.status(200).send({userdata,token});
    } catch (error) {
        console.log(error)
        return res.status(400).send({message:error.message})
    }
}




module.exports =  {register,login}