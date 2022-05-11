import mongoose from "mongoose";

const IdentifierSchema = mongoose.Schema({
  cardCode: String,
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
});

const Identifier = mongoose.model("Identifier", IdentifierSchema);

export default Identifier;
