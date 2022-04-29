require("dotenv").config();
const jwt = require("jsonwebtoken")

const verifyToken = (token) => {
    return new Promise((resolve,reject) => {
        console.log(process.env.registerkey)
        jwt.verify(token, process.env.registerkey, (err,decoded) => {
            if(err) return reject(err)
    
            return resolve(decoded)
        });
    })
    
}

const authenticate = async (req,res,next) => {
    
    if(!req.headers.authorization)
    return res.status(400).send({message : "A  Authorization token not found or incorrect"})

    if(!req.headers.authorization.startsWith("Bearer "))
    return res.status(400).send({message : "B  Authorization token not found or incorrect"})

    const token = req.headers.authorization.trim().split(" ")[1]

    let decoded;
    try{
        decoded = await verifyToken(token)
        console.log(decoded,"decoded")
    }
    catch(err){
        console.log(err)
        return res.status(400).send({message : "C  Authorization token not found or incorrect"})
    }

    console.log("decodeddata",decoded)

    req.userdata = decoded.userdata

    return next();

}

module.exports = authenticate;