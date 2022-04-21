import users from "../models/userModel.js"
import bcrypt from "bcrypt";

const  getAllUsers = async (req, res) => {
    try {
        const Users = await users.find( {} )
        res.status(200).json({ Users })
    } catch (error) {
        res.status(500).json( {msg: error} )
    }
}


//Update User
const updateUser = async (req, res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await users.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new: true});
            res.status(200).json({updatedUser})
        } catch (error) {
           res.status(500).json({msg: error}); 
        } 
    } else {
        res.status(401).json('You can update only your account!');
    }
}



//Delete User
const deleteUser = async (req, res) => {
    if(req.body.userId === req.params.id){
        try {
            const user = await users.findById(req.params.id);
            try {
                await users.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...");
            } catch (error) {
                res.status(500).json(error)
            }
        } catch (error) {
            res.status(404).json("User not found")
        } 
    } else {
        res.status(401).json('You can delete only your account!');
    }
}



export {getAllUsers,updateUser, deleteUser};