import mongoose from "mongoose";

const CustomerSchema = mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
});

const Customer = mongoose.model("Customer", CustomerSchema);

export default Customer;
