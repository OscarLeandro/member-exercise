import mongoose from "mongoose";

const { Schema, model } = mongoose;
const { ObjectId } = Schema;

const usersSchema = new Schema({
  name: {
    type: String,
  },
  displayName:{
    type: String,
    unique:true,
    trim: true,
    require:true,
  },
  imageUrl: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
    unique:true,
    trim: true,
    require:true,
  },
  uid: {
    type: String,
    unique:true,
  },
  // role:{
  //   type:String,
  //   enum:['BASIC','ADMIN'],
  //   default:'BASIC'
  // },

});
export const Users = model("Users", usersSchema);
