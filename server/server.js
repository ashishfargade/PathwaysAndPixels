import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import { port } from "./config.js"
import { connectDB } from "./db.js"
import postRoutes from "./routes/posts.js"

const app = express();

app.use(express.json( { limit: "30mb", extended: true} ));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

connectDB();

app.get('/', (req, res) => {
    res.send("API RUNNING");
})

app.use('/posts', postRoutes);


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})