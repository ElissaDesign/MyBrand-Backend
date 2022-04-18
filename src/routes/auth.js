import express from "express";
const router = express.Router();
import users from "../models/userModel.js";
import bcrypt from "bcrypt";
import {registerValidation, loginValidation} from "../validator/userValidation.js"


//User Register
router.post("/register", async(req, res) =>{
    //LETS VALIDATE THE DATA BEFORE WE REGISTER A USER
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const login_email = await users.findOne({email: req.body.email});
    const login_name = await users.findOne({name: req.body.name});
    if(login_email && login_name){
        res.status(200).json("You already have an account, Please sign in")
    }else{
        if(login_email){
            res.status(200).json("This email is in use")
        }
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(req.body.password, salt);
            const newUser = new users({
                name: req.body.name,
                email: req.body.email,
                password: hashedPass,
                isAdmin: req.body.isAdmin,
            });
    
            const user = await newUser.save();
            res.status(200).json("You are now registered, You can LogIn");
        } catch (error) {
           res.status(500).json({ msg: error });
        }
    }
   
});



//User Login
router.post("/login", async (req, res) => {
     //LETS VALIDATE THE DATA BEFORE WE LOGIN A USER
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    try {
        const userlogin = await users.findOne({email: req.body.email});
        !userlogin && res.status(400).json("Wrong inputs!");

        const validated = await bcrypt.compare(req.body.password, userlogin.password)
        !validated && res.status(400).json("Wrong password!");

        const {password, ...others} = userlogin._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json({msg: error});
    }
}); 

export default router;