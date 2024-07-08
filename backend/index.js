import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose';
import bookRoute from "../backend/route/book.route.js"
import cors from "cors"
import userRoute from "../backend/route/user.route.js"
const app = express()
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT||4000;
const mongodburi = process.env.MONGODBURI

// connection to database

try {
  mongoose.connect(mongodburi);
  console.log("connected to database")
} catch (error) {
  console.log("Error in connecting to DB",error)
}


app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})