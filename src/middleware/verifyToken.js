import jwt from "../validator/jwt.js"

const tokenVerify = async (req, res, next) =>{
    try {
        const verify = req.header.Authorization;
        const verified = await jwt.verifyToken(verify);
        req.user_id = verified.id;
        next()
    } catch (error) {
        res.status(401).json(`You're not allowed to continue`);
    }
}
export default tokenVerify;