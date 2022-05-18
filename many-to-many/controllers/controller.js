import TagOther from "../models/TagOther.js";
import TutorialOther from "../models/TutorialOther.js";

export const createTutorialOther = async (req, res) => {
  try {
    const Tutorial = await TutorialOther.create({
      title: "Merebus Telur",
      author: "Oji",
    });

    res.status(201).json(Tutorial);
  } catch (error) {
    console.log(error);
  }
};

export const createTagOther = async (req, res) => {
  try {
    const Tag = await TagOther.create({
      name: "tagB",
      slug: "tag-b",
    });

    res.status(201).json(Tag);
  } catch (error) {
    console.log(error);
  }
};

export const addTagOtherToTutorialOther = async (req, res) => {
  const id = "6284668c68119c80b9a89208";
  try {
    const TagArrayPush = await TutorialOther.findByIdAndUpdate(
      id,
      {
        $push: { tags: "628468d9afa597047d70ff1d" },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json(TagArrayPush);
  } catch (error) {
    console.log(error);
  }
};

export const addTutorialOtherToTagOther = async (req, res) => {
  const id = "6284689d6264bb90fbd5c6b5";

  try {
    const TutorialArrayPush = await TagOther.findByIdAndUpdate(
      id,
      {
        $push: { tutorials: "6284668c68119c80b9a89208" },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );

    if (!TutorialArrayPush) {
      res.json({ status: "Ada yang salah" });
    }
    res.status(200).json(TutorialArrayPush);
  } catch (error) {
    console.log(error);
  }
};

export const getTutorialWithPopulate = async (req, res) => {
  const id = "6284668c68119c80b9a89208";
  try {
    const getData = await TutorialOther.findById(id).populate("tags");

    res.status(200).json(getData);
  } catch (error) {
    console.log(error);
  }
};

export const getTagWithPopulate = async (req, res) => {
  const id = "6284689d6264bb90fbd5c6b5";
  try {
    const getData = await TagOther.findById(id).populate("tutorials");

    res.status(200).json(getData);
  } catch (error) {
    console.log(error);
  }
};
