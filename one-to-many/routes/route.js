import express from "express";
import {
  addComment,
  addImageEmbeded,
  addTutorialEmbeded,
  createImageWithId,
  getTutorialWithComment,
} from "../controllers/controller.js";

const router = express.Router();

// Tutorial-Images: One-to-Few
// embeded
router.route("/tutorial/addTutorialEmbeded").post(addTutorialEmbeded);
router.route("/tutorial/addImageEmbeded").post(addImageEmbeded);

//
router.route("/tutorial/createImageWithId").post(createImageWithId);

// Add comment normalization
router.route("/tutorial/addComment").post(addComment);
router.route("/tutorial/getTutorialWithComment").get(getTutorialWithComment);
export default router;
