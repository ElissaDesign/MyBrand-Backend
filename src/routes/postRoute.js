import express from "express";
import {getAllPosts, createPost, updatePost, deletePost,getSinglePost} from "../controller/postController.js";

const postRouter = express.Router();


postRouter.route('/').get(getAllPosts).post(createPost);

postRouter.route('/:id').get(getSinglePost).patch(updatePost).delete(deletePost);



export {postRouter as default};