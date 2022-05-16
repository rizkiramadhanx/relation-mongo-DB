import mongoose from "mongoose";

const TutorialSchema = mongoose.Schema({
  title: String,
  author: String,
  images: [],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Tutorial = mongoose.model("Tutorial", TutorialSchema);

export default Tutorial;
