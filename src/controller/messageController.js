import message from "../models/messageModel.js";

const  getAllMessages = async (req, res) => {
    try {
        const messages = await message.find( {} )
        res.status(200).json({ messages })
    } catch (error) {
        res.status(500).json( {msg: error} )
    }
}

const createMessage = async (req,  res) => {
    const Newmessage = await message.create({
        name:req.body.name, 
        option:req.body.option, 
        email:req.body.email,
        message:req.body.message
    });
    res.status(201).json({ Newmessage })
}




const getSingleMessage = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const singleMessage = await message.findOne({_id: taskID})
        if(!singleMessage){
            return res.status(404).json( { msg: `No Message with id : ${taskID}` } )
        }
        res.status(200).json({ singleMessage })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}



const deleteMessage = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const DltMessage = await message.findOneAndDelete({_id: taskID})
        if(!DltMessage){
            return res.status(404).json( { msg: `No Messsage with id : ${taskID}` } )
        }
        res.status(200).json({ DltMessage })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export {getAllMessages, getSingleMessage, createMessage, deleteMessage};