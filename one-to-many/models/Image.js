import express from "express";
import mongoose from "mongoose";

const ImageSchema = mongoose.Schema({
  path: String,
  url: String,
  caption: String,
  createdAt: Date,
});

const Image = mongoose.model("Image", ImageSchema);

export default Image;
