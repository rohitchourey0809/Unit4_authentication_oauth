const mongoose = require('mongoose')


const productschema = new mongoose.Schema({
    title : {type:String, required: true},
    body : {type:String, required: true},
    // user_id :{type:mongoose.Schema.Types.ObjectId, required: true}

},
{
    timeStamps : true,
    versionKey : false
})



const Product  =  mongoose.model('product',productschema)

module.exports = Product
