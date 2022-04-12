import express from "express";
const router = express.Router();
import users from "../models/userModel.js";
import bcrypt from "bcrypt";


//User Register
router.post("/register", async(req, res) =>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new users({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json({user});
    } catch (error) {
       res.status(500).json({ msg: error });
    }
});



//User Login
router.post("/login", async (req, res) => {
    try {
        const userlogin = await users.findOne({name: req.body.name});
        !userlogin && res.status(400).json("Wrong inputs!");

        const validated = await bcrypt.compare(req.body.password, userlogin.password)
        !validated && res.status(400).json("Wrong inputs!");

        const {password, ...others} = userlogin._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json({msg: error});
    }
});

export default router;