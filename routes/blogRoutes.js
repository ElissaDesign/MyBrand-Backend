const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({message: 'Get Blogs'})
});

router.post('/', (req, res) => {
    res.status(200).json({message: 'Set Blogs'})
});

router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update Blogs ${req.params.id}`})
});

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete Blogs ${req.params.id}`})
});

module.exports = router;