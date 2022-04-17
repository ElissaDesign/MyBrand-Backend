import express from "express";
import {createComment} from "../controller/postController.js";

const postRouter = express.Router();


postRouter.route('/').post(createComment);



export {postRouter as default};