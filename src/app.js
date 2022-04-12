
import express from "express";
import postRouter from "./routes/postRoute.js";
import messageRouter from "./routes/messageRoute.js";
import userRoute from "./routes/userRoute.js";
import router from "./routes/auth.js"
import "./dbConnect/monoConnect.js";
import multer from "multer";
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "images");
    }, 
    filename: (req, file, cb) =>{
        cb(null, "test.png");
    },
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) =>{
    res.status(200).json('File has been uploaded');
});

app.use('/api/posts', postRouter );

app.use('/api/messages', messageRouter );

app.use('/api/users', userRoute );

app.use('/api/auth', router );


app.get('/', (req, res) =>{
    res.send('Welcome to my Page');
})

app.listen(1000, () => {
    console.log("server at http://localhost:1000");
});