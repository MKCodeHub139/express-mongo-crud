import express from "express";
import connectToMongoDB from "./connection.js";
import logReqres from "./middleware/index.js";
import router from "./routes/user.js";

const app = express();
const port = 8000;

// connection 
connectToMongoDB("mongodb://127.0.0.1:27017/youtube-app-1",()=>console.log("connected to mongodb"));

app.use(express.urlencoded({ extended: false }));
app.use(logReqres("log.txt"));

// router
app.use('/api/users',router);



app.listen(port, () => console.log("server started at port", port));
