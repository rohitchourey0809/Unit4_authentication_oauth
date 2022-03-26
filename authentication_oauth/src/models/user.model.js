const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const userschema = new mongoose.Schema(
    {
        
        name : {type:String, required: true},
        email : {type:String, required: true},
        password :{type:String, required: true},
        type : [{type:String, required: true}]


    },
    { 
        timestamps : true,
        versionKey : false
    })


    //===================before saving pasword convert is descrptinn form===>
    //bcrypt
    //pre

   userschema.pre("save",function(next){
      const hash = bcrypt.hashSync(this.password, 8);
      this.password = hash
         return next();

   })

//    <==================encrypt=============>
     const User = mongoose.model('user',userschema)

    module.exports = User;