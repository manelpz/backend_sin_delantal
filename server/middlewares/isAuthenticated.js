

const verifyToken = require("../resolvers/verifyToken");

module.exports =  async(req,res,next) => {
    try{

        let {authorization} =  req.headers
        let user =  await verifyToken(authorization)
        if(!user) return res.status(400).json({"message":"Token is invalid"})

        req.user =  user
        next();

    }catch(e){

    let message =  e.message
    res.status(400).json({message})

    }
 }
