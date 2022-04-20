import express from "express";
import {getAllUsers, updateUser, deleteUser} from "../controller/userController.js";
import tokenVerify from "../middleware/verifyToken.js";

const postRouter = express.Router();


postRouter.route('/').get(getAllUsers);

postRouter.route('/:id', tokenVerify ).put(updateUser).delete(deleteUser);



export {postRouter as default};