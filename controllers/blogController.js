const Post = require('../modules/Post')


// GET ALL THE POSTS
const getBlogs = async (req, res) =>{
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message: error});
    }
};

// GET SINGLE POST
const getBlog = async (req, res) =>{
    try {
        const post = await Post.findById(req.params.postId);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({message: error});
    }
}


// SUBMITS  ONE POST
const setBlogs = async  (req, res) =>{
    const post = new Post({
        image:req.body.image,
        title:req.body.title,
        body:req.body.body

    });
    try {
        savedPost = await post.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(404).json({message: err });
    }
};


//UPDATE THE POST
const updateBlogs = async (req, res) =>{
    try {
        const updatePost = await Post.updateOne(
            {_id: req.params.postId}, 
            { $set: {
                image:req.body.image,
                title:req.body.title,
                body:req.body.body
                }
            }
        );
        res.status(200).json(updatePost);

    } catch (error) {
        res.status(404).json({message: err });
    }
}


//DELETE THE POST
const deleteBlogs = async (req, res) =>{
    try {
        const deletePost = await Post.remove({_id: req.params.postId})
        res.status(200).json(deletePost);
    } catch (error) {
        res.status(404).json({message: error});
    };
};

module.exports = {
    getBlogs,
    getBlog,
    setBlogs,
    updateBlogs,
    deleteBlogs,
}