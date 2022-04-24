
import express from "express";
import postRouter from "./routes/postRoute.js";
import messageRouter from "./routes/messageRoute.js";
import userRoute from "./routes/userRoute.js";
import router from "./routes/auth.js"
import "./dbConnect/monoConnect.js";
import swaggerUI from "swagger-ui-express";
import { readFile } from 'fs/promises';
import cors from "cors";

const swaggerDocs = JSON.parse(await readFile(new URL('./swagger.json', import.meta.url)));


const app = express();
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.use('/api/posts', postRouter );

app.use('/api/messages', messageRouter );

// app.use('/api/comments', postRouter );

app.use('/api/users', userRoute );

app.use('/api/auth', router );


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
// console.log(swaggerDocs)








app.get('/', (req, res) =>{
    res.send('Welcome to my Page');
})

app.listen(1000, () => {
    console.log("server at http://localhost:1000");
});

export default app;