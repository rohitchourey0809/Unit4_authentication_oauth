const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const userschema = new mongoose.Schema(
    {
        
        name : {type:String, required: true},
        email : {type:String, required: true},
        password :{type:String, required: true},
        role : [{type:String}]


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


//    <-------------------encrypt----------->
userschema.methods.checkPassword = function(password)
{ 
     return bcrypt.compareSync(password,this.password)
}

//    <==================encrypt=============>
     const User = mongoose.model('user',userschema)

    module.exports = User;