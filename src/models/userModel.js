import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        unique: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true,
    },
    profilePic: {
        type: String, 
        default: '',
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
{
    timestamps: true,
}
);


const users = mongoose.model("users", userSchema);

export default users;