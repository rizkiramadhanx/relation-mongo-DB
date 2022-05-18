import mongoose from "mongoose";

const TagOtherSchema = mongoose.Schema({
  name: String,
  slug: String,
  tutorials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TutorialOther",
    },
  ],
});

const TagOther = mongoose.model("TagOther", TagOtherSchema);

export default TagOther;
