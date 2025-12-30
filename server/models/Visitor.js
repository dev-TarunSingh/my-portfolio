import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
  ip: String,
  path: String,
  browser: String,
  os: String,
  time: { type: Date, default: Date.now },
});

const Visitor = mongoose.model("Visitor", VisitorSchema);
export default Visitor;
