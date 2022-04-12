import posts from "../models/postModel.js";

const  getAllPosts = async (req, res) => {
    try {
        const post = await posts.find( {} )
        res.status(200).json({ post })
    } catch (error) {
        res.status(500).json( {msg: error} )
    }
}

const createPost = async (req,  res) => {
    const post = await posts.create({
        image:req.body.image, 
        title:req.body.title, 
        body:req.body.body
    })
    res.status(201).json({ post })
}




const getSinglePost = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const post = await posts.findOne({_id: taskID})
        if(!post){
            return res.status(404).json( { msg: `No Blog with id : ${taskID}` } )
        }
        res.status(200).json({ post })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}




const updatePost = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const post = await posts.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
        })
        
        if(!post){
            return res.status(404).json( { msg: `No Blog with id : ${taskID}` } )
        }
        res.status(200).json({ post })
    } catch (error) {
        res.status(500).json({ msg: error})
    }
}




const deletePost = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const post = await posts.findOneAndDelete({_id: taskID})
        if(!post){
            return res.status(404).json( { msg: `No Blog with id : ${taskID}` } )
        }
        res.status(200).json({ post })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


export { getAllPosts, createPost, getSinglePost,updatePost,deletePost };