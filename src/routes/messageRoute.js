import express from "express";
import { getAllMessages, getSingleMessage, createMessage, deleteMessage } from "../controller/messageController.js";


const messageRouter = express.Router();

messageRouter.route('/').get(getAllMessages).post(createMessage);

messageRouter.route('/:id').get(getSingleMessage).delete(deleteMessage);

export default messageRouter;
