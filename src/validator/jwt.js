import jwt from "jsonwebtoken";

const signToken =  async  (user)=>{
     return await jwt.sign({id: user._id}, process.env.TOKEN_SECRET)
};


const verifyToken =  async  (Token)=>{
     return await jwt.verify (Token, process.env.TOKEN_SECRET)
}

export default {signToken, verifyToken};