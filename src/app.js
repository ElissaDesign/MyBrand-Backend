
import express from "express";
import postRouter from "./routes/postRoute.js";
import messageRouter from "./routes/messageRoute.js";
import commentRoute from "./routes/commentRoute.js";
import userRoute from "./routes/userRoute.js";
import router from "./routes/auth.js"
import "./dbConnect/monoConnect.js";
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.use('/api/posts', postRouter );

app.use('/api/messages', messageRouter );

app.use('/api/comments', commentRoute );

app.use('/api/users', userRoute );

app.use('/api/auth', router );


app.get('/', (req, res) =>{
    res.send('Welcome to my Page');
})

app.listen(1000, () => {
    console.log("server at http://localhost:1000");
});