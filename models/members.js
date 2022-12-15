import mongoose from "mongoose";

const { Schema, model } = mongoose;
const { ObjectId } = Schema;

const membersSchema = new Schema({
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  coverImageUrl: {
    type: String,
  },
  about: {
    type: String,
  },
  fields: {
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    title: {
      type: String,
    },
    location: {
      type: String,
    },
    sits: {
      type: String,
    },
    team: {
      type: String,
    },
    salary: {
      type: String,
    },
    birthday: {
      type: String,
    },
  },
});
export const Members = model("Members", membersSchema);
