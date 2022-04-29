
//permitted roles = ["selller","admin"]
const authorise = function (permittedroles) {
          return (req,res,next) =>{
            //   console.log(permittedroles)
            //getting tghe user
            console.log("data",req.userdata.role)
            const userdata = req.userdata

            //checking ther permissin data
            permittedroles.map(role=>{
                if(userdata.role.includes(role))
                { 
                    isPermitted = true;
                }
            })

            if(isPermitted){
                  return next()
            }
            else{
                return res.status(401).send({message:"you are not authorised "})
            }
            
          }


}

module.exports = authorise;