const express = require('express');
const router = express.Router();
const {getBlogs,getBlog, setBlogs, updateBlogs, deleteBlogs} = require('../controllers/blogController')

// GET ALL THE POSTS
router.get('/', getBlogs);

//GET SINGLE POST
router.get('/:postId', getBlog);

//SUBMITS A POST
router.post('/', setBlogs);

//UPDATES A POST
router.patch('/:postId', updateBlogs);

//DELETES A POST
router.delete('/:postId', deleteBlogs);

module.exports = router;