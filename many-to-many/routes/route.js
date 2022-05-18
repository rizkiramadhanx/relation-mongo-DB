import {
  addTagOtherToTutorialOther,
  addTutorialOtherToTagOther,
  createTagOther,
  createTutorialOther,
  getTagWithPopulate,
  getTutorialWithPopulate,
} from "../controllers/controller.js";
import express from "express";

const router = express.Router();

router.route("/createTutorialOther").post(createTutorialOther);
router.route("/createTagOther").post(createTagOther);
router.route("/addTagOtherToTutorialOther").post(addTagOtherToTutorialOther);
router.route("/addTutorialOtherToTagOther").post(addTutorialOtherToTagOther);
router.route("/getTutorialWithPopulate").get(getTutorialWithPopulate);
router.route("/getTagWithPopulate").get(getTagWithPopulate);

export default router;
