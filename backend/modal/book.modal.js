import mongoose from "mongoose";
const bookschema = mongoose.Schema({
  name:String,
  price:Number,
  cateogary:String,
  image:String,
  title:String

})
const Book = mongoose.model("Book",bookschema)

export default Book