import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    image: { 
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
}
);


const posts = mongoose.model("posts", postSchema);

export default posts;