import express from "express";
import upload from "../imageconfig/multer.js";
import {getAllPosts, createPost, updatePost, deletePost,getSinglePost,createComment} from "../controller/postController.js";

const postRouter = express.Router();

postRouter.get('/', getAllPosts);
postRouter.post('/', upload.single('image'), createPost);
postRouter.route('/:id').get(getSinglePost).patch(updatePost).delete(deletePost);
postRouter.patch('/:id/comment', createComment);





export {postRouter as default};