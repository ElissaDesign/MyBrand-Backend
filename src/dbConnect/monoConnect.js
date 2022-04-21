import mongoose from "mongoose";
import { MONGO_URL } from "../url/mongodburl.js";

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("error", (error) => {
    console.log("Error", error);
});

mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected");
})