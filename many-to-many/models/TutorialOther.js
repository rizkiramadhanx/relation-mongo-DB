import mongoose from "mongoose";

const TutorialOtherSchema = mongoose.Schema({
  title: String,
  author: String,
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TagOther",
    },
  ],
});

const TutorialOther = mongoose.model("TutorialOther", TutorialOtherSchema);

export default TutorialOther;
