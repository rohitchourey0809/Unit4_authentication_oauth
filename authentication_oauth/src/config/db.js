const mongoose = require('mongoose')

const connect = ()=>{
   return mongoose.connect("mongodb+srv://rohit:12345@cluster0.03mwk.mongodb.net/Authoauth?retryWrites=true&w=majority")
}

module.exports = connect
