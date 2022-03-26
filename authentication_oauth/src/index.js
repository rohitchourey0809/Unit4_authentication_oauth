const express = require("express");
const connect = require("./config/db");
const Usercontroller = require("./controllers/user.controller")
const {register,login} = require("./controllers/registerlogin")

const app = express();
app.use(express.json())

// <----------Register------->
app.post("/register",register)
app.post("/login",login)

app.use("/user",Usercontroller)






app.listen(5000,async function(){
    try{

        console.log("server start 5000 port")
        await connect()
    }
    catch(err){
        console.error(err);
    }
})