const mongoose = require("mongoose");
// import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {type: String,required: true},
  email: {type: String,required: true},
  phone: {type: Number,required: true},
  message: {type: String,required: true},
  date: {type: Date,default: Date.now},
});
const Messages = mongoose.model("Contact", ContactSchema)
 module.exports=  Messages


