import express from "express";
import {
  createCustomer,
  createIdentifier,
  getCustomerWithIdentifier,
} from "../controllers/controller.js";

const router = express.Router();

router.route("/customer").post(createCustomer);
router.route("/identifier").post(createIdentifier);
router.route("/identifier").get(getCustomerWithIdentifier);

export default router;
