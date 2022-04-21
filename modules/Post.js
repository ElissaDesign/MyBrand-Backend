const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    image: String,

    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
} );

module.exports = mongoose.model('posts', PostSchema)