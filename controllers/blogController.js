//Get  /api/goals
const getBlogs = (req, res) =>{
    res.status(200).json({ message: 'Get Blogs' })
}


//Set  /api/goals
const setBlogs = (req, res) =>{
    res.status(200).json({ message: 'Set Blogs' })
}


//Update  /api/goals
const updateBlogs = (req, res) =>{
    res.status(200).json({ message: 'Update Blogs' })
}


//Delete  /api/goals
const deleteBlogs = (req, res) =>{
    res.status(200).json({ message: 'Delete Blogs' })
}

module.exports = {
    getBlogs,
    setBlogs,
    updateBlogs,
    deleteBlogs,
}