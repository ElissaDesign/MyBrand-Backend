import express from "express";
import {getAllUsers, updateUser, deleteUser} from "../controller/userController.js";

const postRouter = express.Router();


postRouter.route('/').get(getAllUsers);

postRouter.route('/:id').put(updateUser).delete(deleteUser);



export {postRouter as default};