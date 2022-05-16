import Image from "../models/Image.js";
import Tutorial from "../models/Tutorial.js";
import mongoose from "mongoose";
import Comment from "../models/Comment.js";

// Tutorial-Images: One-to-Few || Embeded

export const addImageEmbeded = async (req, res) => {
  try {
    await Tutorial.findByIdAndUpdate(
      { _id: "62826109dd2695ff77def286" },
      {
        $push: {
          images: {
            url: "/upload.jgp",
            caption: "Mantap gaming",
          },
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );

    res.status(201).json({
      message: "Image berhasil ditambahkan",
    });
  } catch (error) {
    console.log(error);
  }
};

export const addTutorialEmbeded = async (req, res) => {
  try {
    await Tutorial.create({
      title: "Tutorial #1",
      author: "Rizki",
    });

    res.status(201).json({
      message: "tutorial berhasil ditambahkan",
    });
  } catch (error) {
    console.log(error);
  }
};

// 2
export const createImageWithId = async (req, res) => {
  const tutorialId = "62826109dd2695ff77def286";

  try {
    await Tutorial.findByIdAndUpdate(
      tutorialId,
      {
        $push: {
          images: {
            _id: mongoose.Types.ObjectId(),
            url: "/uploads/image.jpg",
            caption: "god is good",
          },
        },
      },
      { new: true, useFindAndModify: false }
    );

    res.status(201).json({
      message: "tutorial berhasil ditambahkan",
    });
  } catch (error) {
    console.log(error);
  }
};

// Normalization one to many

export const addComment = async (req, res) => {
  const tutorialId = "62826109dd2695ff77def286";
  const _id = mongoose.Types.ObjectId();

  try {
    await Tutorial.findByIdAndUpdate(
      tutorialId,
      {
        $push: {
          comments: _id,
        },
      },
      { new: true, useFindAndModify: false }
    );

    await Comment.create({
      _id: _id,
      username: "Oji",
      text: "dancok",
    });

    res.send("ok");
  } catch (error) {
    console.log(error);
  }
};

export const getTutorialWithComment = async (req, res) => {
  try {
    const id = "62826109dd2695ff77def286";
    const tutorial = await Tutorial.findById(id).populate("comments");

    res.send(tutorial);
  } catch (error) {
    console.log(error);
  }
};
