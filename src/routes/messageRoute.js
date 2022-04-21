import express from "express";
import { getAllMessages, getSingleMessage, createMessage, deleteMessage } from "../controller/messageController.js";


const messageRouter = express.Router();



/**
 * @swagger
 * /:
 *  post:
 *      description: Send a message
 *      parameters:
 *      - name: elissa
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *      responses:
 *          201:
 *           Description: send message
 */


messageRouter.get('/', getAllMessages);
/**
 * @swagger
 * /:
 *  get:
 *      description: "Get all Messages"
 *      responses:
 *          200:
 *      Description: "Success"
 */

messageRouter.post('/', createMessage);

messageRouter.route('/:id').get(getSingleMessage).delete(deleteMessage);

export default messageRouter;
