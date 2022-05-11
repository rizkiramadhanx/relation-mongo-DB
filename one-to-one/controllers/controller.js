import Customer from "../models/Customer.js";
import Identifier from "../models/Identifier.js";

export const createCustomer = async (req, res) => {
  try {
    const user = await Customer.create({
      name: "Rizki",
      age: 20,
      gender: "man",
    });
    user.save();
    res.status(201).json({
      message: "Data customer berhasil ditambahkan",
    });
  } catch (error) {
    console.log(error);
  }
};

export const createIdentifier = async (req, res) => {
  try {
    const identifier = await Identifier.create({
      cardCode: "1998",
      customer: "627b6537513e9b426b2d5bb3",
    });
    identifier.save();
    res.status(201).json({
      message: "Data identifier berhasil ditambahkan",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCustomerWithIdentifier = async (req, res) => {
  try {
    const getData = await Identifier.find()
      .populate("customer", "-_id -__v")
      .select("-__v");

    res.status(201).json(getData[0]);
  } catch (error) {
    console.log(error);
  }
};
