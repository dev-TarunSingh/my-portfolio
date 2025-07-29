import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
  ip: String,
  path: String,
  browser: String,
  os: String,
  time: Date,
});

const Visitor = mongoose.model(" Visitor", VisitorSchema);
export default Visitor;
